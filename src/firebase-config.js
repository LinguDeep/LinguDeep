// ============================================================
// FIREBASE CONFIGURATION
// ============================================================
const firebaseConfig = {
    apiKey:            process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:         process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:     process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:             process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:     process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth instance used throughout the app
const fbAuth = firebase.auth();

// Firestore instance for cloud sync
const fbDb = firebase.firestore();

// Google OAuth provider
const fbGoogleProvider = new firebase.auth.GoogleAuthProvider();
fbGoogleProvider.setCustomParameters({ prompt: 'select_account' });

/**
 * Friendly error messages — locale-aware
 * @param {string} code - Firebase Auth error code
 * @param {object} locale - Localization object
 */
function fbErrorMessage(code, locale) {
    const L = locale || {};
    const map = {
        'auth/user-not-found':           L.loginError,
        'auth/wrong-password':           L.loginError,
        'auth/invalid-credential':       L.loginError,
        'auth/email-already-in-use':     L.registerUsernameTaken,
        'auth/invalid-email':            L.loginError,
        'auth/weak-password':            L.passShort,
        'auth/too-many-requests':        L.genericError,
        'auth/network-request-failed':   L.preparingLangsError,
        'auth/requires-recent-login':    L.genericError,
        'auth/popup-closed-by-user':     L.googlePopupClosed,
        'auth/popup-blocked':            L.googlePopupClosed,
        'auth/cancelled-popup-request':  L.googlePopupClosed,
        'auth/account-exists-with-different-credential': L.googleAccountConflict,
        'auth/email-not-verified':       L.emailNotVerified,
    };
    return map[code] || L.genericError || ('Error: ' + code);
}
