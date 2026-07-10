import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// 1. Try to load from Vite environment variables first
const envConfig: Partial<FirebaseConfig> = typeof import.meta !== 'undefined' && import.meta.env ? {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
} : {};

const hasEnvConfig = !!envConfig.apiKey && !!envConfig.projectId;

// 2. Try to load from localStorage
const getSavedConfig = (): FirebaseConfig | null => {
  try {
    const saved = localStorage.getItem('lingudeep_firebase_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.apiKey && parsed.projectId) {
        return parsed as FirebaseConfig;
      }
    }
  } catch (e) {
    console.error('Error reading firebase config from localStorage', e);
  }
  return null;
};

const adminConfig: FirebaseConfig = {
  apiKey: "AIzaSyC47J-dUc69HlW_bBZTPgBDM71AqvoDlzU",
  authDomain: "lingudeep-196e6.firebaseapp.com",
  projectId: "lingudeep-196e6",
  storageBucket: "lingudeep-196e6.firebasestorage.app",
  messagingSenderId: "627615970279",
  appId: "1:627615970279:web:406b065e6111881ad70342",
};

const savedConfig = getSavedConfig();

// Determine configuration to use
const finalConfig: FirebaseConfig | null = hasEnvConfig
  ? (envConfig as FirebaseConfig)
  : (savedConfig || adminConfig);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let isFirebaseConfigured = false;

if (finalConfig) {
  try {
    if (getApps().length === 0) {
      app = initializeApp(finalConfig);
    } else {
      app = getApps()[0];
    }
    auth = getAuth(app);
    db = getFirestore(app);
    isFirebaseConfigured = true;
    console.log('Firebase initialized successfully with config:', finalConfig.projectId);
  } catch (error) {
    console.error('Failed to initialize Firebase', error);
  }
}

export { app, auth, db, isFirebaseConfigured };
export type { FirebaseConfig };

// Helper to save config to localStorage
export function saveFirebaseConfig(config: FirebaseConfig): boolean {
  try {
    localStorage.setItem('lingudeep_firebase_config', JSON.stringify(config));
    return true;
  } catch (e) {
    console.error('Failed to save config', e);
    return false;
  }
}

// Helper to clear config
export function clearFirebaseConfig(): void {
  localStorage.removeItem('lingudeep_firebase_config');
}
