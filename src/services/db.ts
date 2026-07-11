import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp,
  increment,
  arrayUnion,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  streak: number;
  lastActiveTimestamp: any;
  totalXP: number;
  gems: number;
  currentLanguage: string;
  unlockedTier: number;
  completedLessons?: Record<string, boolean>;
  purchasedItems?: string[];
  isAdmin?: boolean;
}

export interface Language {
  id: string;
  name: string;
  flag: string;
  code: string;
}

export interface Course {
  id: string;
  languageId: string;
  tier: number;
  title: string;
  description: string;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'translate' | 'tap-pairs' | 'fill-blank' | 'sentence-builder';
  prompt: string;
  options?: string[];
  correctAnswer: string; // for tap-pairs or translations, can be comma separated or single string. We'll verify string match.
}

export interface Lesson {
  id: string;
  courseId: string;
  order: number;
  title: string;
  xpReward: number;
  questions: Question[];
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  icon: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  requirementXP: number;
  requirementStreak: number;
  icon: string;
}

// Ensure db exists
const getDatabase = () => {
  if (!db) {
    throw new Error('Firebase Firestore database is not initialized. Please configure Firebase first.');
  }
  return db;
};

// --- USER PROFILE SERVICES ---

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const firestore = getDatabase();
  const userRef = doc(firestore, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data() as UserProfile;
  }
  return null;
}

export async function createUserProfile(profile: Omit<UserProfile, 'lastActiveTimestamp'>): Promise<UserProfile> {
  const firestore = getDatabase();
  const userRef = doc(firestore, 'users', profile.uid);
  const newProfile = {
    ...profile,
    lastActiveTimestamp: serverTimestamp(),
    completedLessons: {},
    purchasedItems: [],
  };
  await setDoc(userRef, newProfile);
  return newProfile as UserProfile;
}

export async function updateUserProfile(uid: string, data: Partial<UserProfile>): Promise<void> {
  const firestore = getDatabase();
  const userRef = doc(firestore, 'users', uid);
  await updateDoc(userRef, {
    ...data,
    lastActiveTimestamp: serverTimestamp()
  });
}

export async function completeLessonInCloud(uid: string, lessonId: string, xpGained: number, gemsGained: number): Promise<void> {
  const firestore = getDatabase();
  const userRef = doc(firestore, 'users', uid);
  
  // Fetch user to check last active date and update streak
  const userSnap = await getDoc(userRef);
  let streakIncrement = 0;
  
  if (userSnap.exists()) {
    const userData = userSnap.data() as UserProfile;
    const now = new Date();
    
    if (userData.lastActiveTimestamp) {
      // Check if last active was yesterday or today
      const lastActiveDate = userData.lastActiveTimestamp.toDate 
        ? userData.lastActiveTimestamp.toDate() 
        : new Date(userData.lastActiveTimestamp);
      
      const diffTime = Math.abs(now.getTime() - lastActiveDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 1) {
        // Active today or yesterday - keep or increment streak
        // If it was yesterday, increment streak
        const isSameDay = now.toDateString() === lastActiveDate.toDateString();
        if (!isSameDay) {
          streakIncrement = 1;
        }
      } else {
        // Broke the streak, reset to 1
        await updateDoc(userRef, { streak: 1 });
      }
    } else {
      // First active, start streak at 1
      await updateDoc(userRef, { streak: 1 });
    }
  }

  // Update lesson completion status, XP, gems, and last active timestamp
  const updatePayload: any = {
    totalXP: increment(xpGained),
    gems: increment(gemsGained),
    [`completedLessons.${lessonId}`]: true,
    lastActiveTimestamp: serverTimestamp()
  };

  if (streakIncrement > 0) {
    updatePayload.streak = increment(streakIncrement);
  }

  await updateDoc(userRef, updatePayload);
}

export async function purchaseShopItemInCloud(uid: string, itemId: string, cost: number): Promise<void> {
  const firestore = getDatabase();
  const userRef = doc(firestore, 'users', uid);
  await updateDoc(userRef, {
    gems: increment(-cost),
    purchasedItems: arrayUnion(itemId),
    lastActiveTimestamp: serverTimestamp()
  });
}

// --- DATA QUERY SERVICES ---

export async function getLanguages(): Promise<Language[]> {
  const firestore = getDatabase();
  const languagesCol = collection(firestore, 'languages');
  const languagesSnap = await getDocs(languagesCol);
  
  const langs: Language[] = [];
  languagesSnap.forEach((doc) => {
    langs.push({ id: doc.id, ...doc.data() } as Language);
  });
  return langs;
}

export async function getCourses(languageId: string): Promise<Course[]> {
  const firestore = getDatabase();
  const coursesCol = collection(firestore, 'courses');
  const q = query(coursesCol, where('languageId', '==', languageId));
  const coursesSnap = await getDocs(q);
  
  const courses: Course[] = [];
  coursesSnap.forEach((doc) => {
    courses.push({ id: doc.id, ...doc.data() } as Course);
  });
  return courses;
}

export async function getLessons(courseId: string): Promise<Lesson[]> {
  const firestore = getDatabase();
  const lessonsCol = collection(firestore, 'lessons');
  const q = query(lessonsCol, where('courseId', '==', courseId));
  const lessonsSnap = await getDocs(q);
  
  const lessons: Lesson[] = [];
  lessonsSnap.forEach((doc) => {
    lessons.push({ id: doc.id, ...doc.data() } as Lesson);
  });
  return lessons.sort((a, b) => a.order - b.order);
}

export async function getLeaderboard(): Promise<UserProfile[]> {
  const firestore = getDatabase();
  const usersCol = collection(firestore, 'users');
  const q = query(usersCol, orderBy('totalXP', 'desc'), limit(10));
  const usersSnap = await getDocs(q);
  
  const leaders: UserProfile[] = [];
  usersSnap.forEach((doc) => {
    leaders.push({ uid: doc.id, ...doc.data() } as UserProfile);
  });
  return leaders;
}

export async function getShopItems(): Promise<ShopItem[]> {
  const firestore = getDatabase();
  const itemsCol = collection(firestore, 'shop_items');
  const itemsSnap = await getDocs(itemsCol);
  
  const items: ShopItem[] = [];
  itemsSnap.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() } as ShopItem);
  });
  return items;
}

export async function getBadges(): Promise<Badge[]> {
  const firestore = getDatabase();
  const badgesCol = collection(firestore, 'badges');
  const badgesSnap = await getDocs(badgesCol);
  
  const badges: Badge[] = [];
  badgesSnap.forEach((doc) => {
    badges.push({ id: doc.id, ...doc.data() } as Badge);
  });
  return badges;
}

export async function deleteUserProfile(uid: string): Promise<void> {
  const firestore = getDatabase();
  const userRef = doc(firestore, 'users', uid);
  await deleteDoc(userRef);
}
