import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getTranslation } from '../services/i18n';
import { ShieldCheck, Mail, Lock, User, ArrowLeft, Loader } from 'lucide-react';
import LinguDeepLogo from './LinguDeepLogo';

interface AuthPortalProps {
  selectedLanguage: string;
  placementTier: number;
  onBack: () => void;
  onSuccess: () => void;
}

const AppLogo: React.FC<{ theme: string; className?: string }> = ({ theme, className }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <LinguDeepLogo size={32} className="text-indigo-600" />
    <span className={`font-outfit text-xl font-black ${
      theme === 'dark' ? 'text-white' : 'text-gray-900'
    }`}>LinguDeep</span>
  </div>
);

const AuthPortal: React.FC<AuthPortalProps> = ({
  selectedLanguage,
  placementTier,
  onBack,
  onSuccess,
}) => {
  const { login, signup, loginWithGoogle, interfaceLang, theme } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle(selectedLanguage, placementTier);
      onSuccess();
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Google Authentication failed. Make sure Google Sign-in is enabled in your Firebase Console.');
    } finally {
      setLoading(false);
    }
  };

  const getLanguageName = (code: string) => {
    const names: Record<string, string> = {
      es: 'Spanish',
      fr: 'French',
      de: 'German',
      ja: 'Japanese',
      it: 'Italian',
      tr: 'Turkish',
      en: 'English'
    };
    return names[code] || code.toUpperCase();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLoginMode) {
        // Sign in
        await login(email.trim(), password, selectedLanguage, placementTier);
      } else {
        // Sign up
        if (!displayName.trim()) {
          setError('Please enter a username');
          setLoading(false);
          return;
        }
        await signup(
          email.trim(),
          password,
          displayName.trim(),
          selectedLanguage,
          placementTier
        );
      }
      onSuccess();
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between p-6 transition-colors ${
      theme === 'dark' ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header */}
      <div className="w-full max-w-md mx-auto flex items-center justify-between">
        <button
          onClick={onBack}
          className={`p-2 rounded-xl transition-colors ${
            theme === 'dark' ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-600'
          }`}
        >
          <ArrowLeft size={24} />
        </button>
        <span className={`font-outfit font-extrabold text-sm uppercase tracking-widest ${
          theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
        }`}>
          {isLoginMode ? 'Sign In' : getTranslation('saveLevel', interfaceLang)}
        </span>
        <div className="w-8"></div>
      </div>

      {/* Auth Card */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className={`w-full max-w-md p-6 sm:p-8 rounded-3xl border transition-all ${
          theme === 'dark' 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-slate-200 shadow-xl text-slate-800'
        }`}>
          {/* Logo container */}
          <div className="flex flex-col items-center justify-center mb-6">
            <AppLogo theme={theme} className="mb-2" />
            <p className={`text-xs font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              Placement Tier Result: <span className="text-emerald-500 font-extrabold">Tier {placementTier} ({getLanguageName(selectedLanguage)})</span>
            </p>
          </div>

          <h3 className={`text-xl font-outfit font-black mb-1.5 text-center ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-950'
          }`}>
            {isLoginMode ? 'Welcome Back!' : 'Save Your Progress'}
          </h3>
          
          <p className={`text-xs text-center leading-relaxed font-semibold mb-6 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {isLoginMode 
              ? 'Sign in to access your course path, leaderboard ranks, and gems.' 
              : getTranslation('createAccountMsg', interfaceLang)
            }
          </p>

          {error && (
            <div className="mb-4 bg-rose-500/10 border border-rose-500 text-rose-450 p-3.5 rounded-2xl text-xs font-bold leading-relaxed">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginMode && (
              <div className="space-y-1">
                <label className={`text-xs font-bold uppercase tracking-wider block ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {getTranslation('username', interfaceLang)}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="Username"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className={`w-full border-2 rounded-2xl pl-11 pr-4 py-3.5 focus:border-indigo-500 focus:outline-none text-sm font-semibold transition-all ${
                      theme === 'dark' 
                        ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className={`text-xs font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {getTranslation('email', interfaceLang)}
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border-2 rounded-2xl pl-11 pr-4 py-3.5 focus:border-indigo-500 focus:outline-none text-sm font-semibold transition-all ${
                    theme === 'dark' 
                      ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600' 
                      : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className={`text-xs font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {getTranslation('password', interfaceLang)}
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border-2 rounded-2xl pl-11 pr-4 py-3.5 focus:border-indigo-500 focus:outline-none text-sm font-semibold transition-all ${
                    theme === 'dark' 
                      ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600' 
                      : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-3d-green bg-emerald-600 border-emerald-800 hover:bg-emerald-500 text-white font-extrabold text-sm py-4 rounded-2xl transition-all flex items-center justify-center gap-2 mt-2"
            >
              {loading ? <Loader className="w-5 h-5 animate-spin" /> : <ShieldCheck className="w-5 h-5" />}
              <span>{isLoginMode ? 'Sign In to Account' : 'Claim Progress & XP'}</span>
            </button>
          </form>

          {/* Social Google Sign-in */}
          <div className="relative flex py-4 items-center">
            <div className={`flex-grow border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}></div>
            <span className={`flex-shrink mx-4 text-xs font-bold uppercase ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>or</span>
            <div className={`flex-grow border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className={`w-full py-3.5 border-2 rounded-2xl text-xs font-outfit font-black transition-all flex items-center justify-center gap-2.5 ${
              theme === 'dark' 
                ? 'bg-slate-950 border-slate-800 hover:bg-slate-850 text-slate-200' 
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm'
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" strokeWidth="0" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Toggle Login Mode link */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLoginMode(!isLoginMode)}
              className={`text-xs font-bold underline transition-colors ${
                theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-650 hover:text-indigo-500'
              }`}
            >
              {isLoginMode ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
            </button>
          </div>
        </div>
      </div>

      {/* Spacer Footer */}
      <div className="w-full h-6"></div>
    </div>
  );
};

export default AuthPortal;
