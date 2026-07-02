// ============================================================
// FIREBASE CONFIGURATION
// ============================================================
// This is a vanilla (non-React) build, so build-time `process.env` vars are
// NOT available in the browser. We instead look for a runtime config object
// exposed on `window.__FIREBASE_CONFIG__` (e.g. via a small inline <script>
// or a separate config.js). When no real credentials are present, Firebase
// is left uninitialized and the app runs in local/guest mode — app.js
// already handles `typeof fbAuth === 'undefined'` gracefully.
const __fbRuntimeCfg = (typeof window !== 'undefined' && window.__FIREBASE_CONFIG__) || null;
const firebaseConfig = __fbRuntimeCfg || {
    apiKey:            undefined,
    authDomain:        undefined,
    projectId:         undefined,
    storageBucket:     undefined,
    messagingSenderId: undefined,
    appId:             undefined,
    measurementId:     undefined
};

// Auth / Firestore instances used throughout the app (undefined in guest mode)
let fbAuth = undefined;
let fbDb = undefined;
let fbGoogleProvider = undefined;

if (typeof firebase !== 'undefined' && __fbRuntimeCfg && __fbRuntimeCfg.apiKey) {
    try {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        // Auth instance used throughout the app
        fbAuth = firebase.auth();
        // Firestore instance for cloud sync
        fbDb = firebase.firestore();
        // Google OAuth provider
        fbGoogleProvider = new firebase.auth.GoogleAuthProvider();
        fbGoogleProvider.setCustomParameters({ prompt: 'select_account' });
    } catch (e) {
        console.warn('LinguDeep: Firebase initialization skipped — running in guest mode:', e.message);
        fbAuth = undefined; fbDb = undefined; fbGoogleProvider = undefined;
    }
} else {
    console.info('LinguDeep: Firebase not configured — running in local/guest mode.');
}

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
