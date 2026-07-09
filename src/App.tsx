import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './components/LandingPage';
import PlacementTest from './components/PlacementTest';
import AuthPortal from './components/AuthPortal';
import Dashboard from './components/Dashboard';
import LessonPlayer from './components/LessonPlayer';
import FirebaseConfigModal from './components/FirebaseConfigModal';

type AppView = 'landing' | 'placement' | 'auth' | 'dashboard' | 'lesson';
type DashboardTab = 'learn' | 'leaderboard' | 'shop' | 'profile';

const AppContent: React.FC = () => {
  const { user, userProfile, isConfigured, theme } = useAuth();
  
  // Navigation states
  const [view, setView] = useState<AppView>('landing');
  const [dashboardTab, setDashboardTab] = useState<DashboardTab>('learn');
  
  // Temporary storage during user flow
  const guessInitialLanguage = () => {
    const locale = (navigator.language || 'en').toLowerCase().split('-')[0];
    if (locale === 'tr') return 'en';
    if (locale === 'es') return 'en';
    return 'es';
  };
  const [selectedLanguage, setSelectedLanguage] = useState<string>(guessInitialLanguage);
  const [placementTier, setPlacementTier] = useState<number>(1);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // If Firebase is not configured, force configuration screen
  if (!isConfigured) {
    return (
      <div className={`theme-${theme}`}>
        <FirebaseConfigModal />
      </div>
    );
  }

  // Redirect to dashboard if logged in and on pre-auth screens
  if (user && userProfile && (view === 'landing' || view === 'placement' || view === 'auth')) {
    setView('dashboard');
  }

  // Wrap everything in a theme class container for CSS selectors
  const renderView = () => {
    switch (view) {
      case 'landing':
        return (
          <LandingPage
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            onStart={() => setView('placement')}
            onSignIn={() => setView('auth')}
          />
        );
        
      case 'placement':
        return (
          <PlacementTest
            languageCode={selectedLanguage}
            onComplete={(tier) => {
              setPlacementTier(tier);
              setView('auth');
            }}
            onBack={() => setView('landing')}
          />
        );
        
      case 'auth':
        return (
          <AuthPortal
            selectedLanguage={selectedLanguage}
            placementTier={placementTier}
            onBack={() => setView('placement')}
            onSuccess={() => setView('dashboard')}
          />
        );
        
      case 'dashboard':
        if (!user) {
          setView('landing');
          return null;
        }
        return (
          <Dashboard
            activeTab={dashboardTab}
            setActiveTab={setDashboardTab}
            onStartLesson={(lessonId) => {
              setActiveLessonId(lessonId);
              setView('lesson');
            }}
            onLogOut={() => setView('landing')}
          />
        );
        
      case 'lesson':
        if (!user || !activeLessonId) {
          setView('landing');
          return null;
        }
        return (
          <LessonPlayer
            lessonId={activeLessonId}
            onComplete={() => {
              setView('dashboard');
              setActiveLessonId(null);
              setDashboardTab('learn');
            }}
            onClose={() => {
              setView('dashboard');
              setActiveLessonId(null);
            }}
          />
        );
        
      default:
        return (
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-xl font-bold font-outfit">Loading...</p>
          </div>
        );
    }
  };

  return (
    <div className={`theme-${theme}`}>
      {renderView()}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
