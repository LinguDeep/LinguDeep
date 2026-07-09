import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../firebase';
import { 
  getUserProfile, 
  createUserProfile, 
  updateUserProfile,
  completeLessonInCloud,
  purchaseShopItemInCloud,
  UserProfile 
} from '../services/db';

export interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  isConfigured: boolean;
  interfaceLang: 'en' | 'tr' | 'es';
  setInterfaceLang: (lang: 'en' | 'tr' | 'es') => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string, selectedLanguage: string, placementTier: number) => Promise<void>;
  loginWithGoogle: (selectedLanguage: string, placementTier: number) => Promise<void>;
  logout: () => Promise<void>;
  completeLesson: (lessonId: string, xpReward: number) => Promise<void>;
  purchaseItem: (itemId: string, cost: number) => Promise<void>;
  changeLanguage: (langCode: string) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [interfaceLang, setInterfaceLangState] = useState<'en' | 'tr' | 'es'>(() => {
    const saved = localStorage.getItem('lingudeep_interface_lang');
    const val = (saved as 'en' | 'tr' | 'es') || 'en';
    document.documentElement.lang = val;
    return val;
  });

  const setInterfaceLang = (lang: 'en' | 'tr' | 'es') => {
    setInterfaceLangState(lang);
    localStorage.setItem('lingudeep_interface_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = interfaceLang;
  }, [interfaceLang]);

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('lingudeep_theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('lingudeep_theme', next);
      return next;
    });
  };

  const [loading, setLoading] = useState(true);

  // Synchronize Auth State
  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          const profile = await getUserProfile(firebaseUser.uid);
          setUserProfile(profile);
        } catch (e) {
          console.error('Error fetching user profile', e);
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    if (!auth) throw new Error('Firebase Auth is not initialized.');
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const profile = await getUserProfile(userCredential.user.uid);
    setUserProfile(profile);
  };

  const signup = async (
    email: string, 
    password: string, 
    displayName: string, 
    selectedLanguage: string, 
    placementTier: number
  ) => {
    if (!auth) throw new Error('Firebase Auth is not initialized.');
    
    // 1. Create standard auth credentials
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // 2. Create profile document in Firestore
    const profileData: Omit<UserProfile, 'lastActiveTimestamp'> = {
      uid: userCredential.user.uid,
      email,
      displayName,
      streak: 0,
      totalXP: 50, // XP bonus
      gems: 100, // starting gems
      currentLanguage: selectedLanguage,
      unlockedTier: placementTier,
    };
    
    const profile = await createUserProfile(profileData);
    setUserProfile(profile);
  };

  const loginWithGoogle = async (selectedLanguage: string, placementTier: number) => {
    if (!auth) throw new Error('Firebase Auth is not initialized.');
    
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const uid = userCredential.user.uid;
    
    // Check if user profile already exists in Firestore
    const existingProfile = await getUserProfile(uid);
    if (existingProfile) {
      setUserProfile(existingProfile);
    } else {
      // New profile sync
      const profileData: Omit<UserProfile, 'lastActiveTimestamp'> = {
        uid,
        email: userCredential.user.email || '',
        displayName: userCredential.user.displayName || 'Google Learner',
        streak: 0,
        totalXP: 50, // XP bonus
        gems: 100, // starting gems
        currentLanguage: selectedLanguage,
        unlockedTier: placementTier,
      };
      
      const profile = await createUserProfile(profileData);
      setUserProfile(profile);
    }
  };

  const logout = async () => {
    if (!auth) throw new Error('Firebase Auth is not initialized.');
    await signOut(auth);
    setUser(null);
    setUserProfile(null);
  };

  const completeLesson = async (lessonId: string, xpReward: number) => {
    if (!user || !userProfile) throw new Error('User must be logged in to complete a lesson.');
    
    const gemsGained = 15; // standard gems reward
    
    // 1. Write update to Firestore (handles streak verification too)
    await completeLessonInCloud(user.uid, lessonId, xpReward, gemsGained);
    
    // 2. Optimistic local state update
    setUserProfile((prev) => {
      if (!prev) return null;
      const completed = { ...(prev.completedLessons || {}), [lessonId]: true };
      return {
        ...prev,
        totalXP: prev.totalXP + xpReward,
        gems: prev.gems + gemsGained,
        completedLessons: completed,
      };
    });
  };

  const purchaseItem = async (itemId: string, cost: number) => {
    if (!user || !userProfile) throw new Error('User must be logged in to purchase items.');
    if (userProfile.gems < cost) throw new Error('Insufficient gems.');

    // 1. Write purchase to Firestore
    await purchaseShopItemInCloud(user.uid, itemId, cost);

    // 2. Optimistic local state update
    setUserProfile((prev) => {
      if (!prev) return null;
      const purchases = [...(prev.purchasedItems || []), itemId];
      return {
        ...prev,
        gems: prev.gems - cost,
        purchasedItems: purchases,
      };
    });
  };

  const changeLanguage = async (langCode: string) => {
    if (!user || !userProfile) throw new Error('User must be logged in.');
    
    // 1. Update in Firestore
    await updateUserProfile(user.uid, { currentLanguage: langCode });

    // 2. Update local state
    setUserProfile((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentLanguage: langCode
      };
    });
  };

  const refreshProfile = async () => {
    if (!user) return;
    const profile = await getUserProfile(user.uid);
    setUserProfile(profile);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        isConfigured: isFirebaseConfigured,
        interfaceLang,
        setInterfaceLang,
        theme,
        toggleTheme,
        login,
        signup,
        loginWithGoogle,
        logout,
        completeLesson,
        purchaseItem,
        changeLanguage,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
