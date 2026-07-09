import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getLanguages, Language } from '../services/db';
import { seedDatabase } from '../services/dbInitializer';
import { getTranslation } from '../services/i18n';
import { Globe, Sparkles, BookOpen, Trophy, ShieldAlert, CheckCircle2, Sun, Moon } from 'lucide-react';
import LinguDeepLogo from './LinguDeepLogo';

interface LandingPageProps {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  onStart: () => void;
  onSignIn: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  selectedLanguage,
  setSelectedLanguage,
  onStart,
  onSignIn,
}) => {
  const { interfaceLang, setInterfaceLang, theme, toggleTheme } = useAuth();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<{ success: boolean; message: string } | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const isDark = theme === 'dark';
  const pageBg = isDark ? 'bg-[#0B0F19]' : 'bg-gray-50';
  const pageText = isDark ? 'text-gray-100' : 'text-gray-900';
  const cardBg = isDark ? 'bg-gray-900' : 'bg-white';
  const cardBorder = isDark ? 'border-gray-800' : 'border-gray-200';
  const muted = isDark ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200';

  const fetchLangs = async () => {
    setLoading(true);
    setFetchError(null);
    try {
      const data = await getLanguages();
      setLanguages(data);
      if (data.length > 0) {
        const guessTarget = () => {
          if (interfaceLang === 'tr') {
            const enLang = data.find(l => l.id === 'en');
            if (enLang) return enLang.id;
          }
          if (interfaceLang === 'en') {
            const esLang = data.find(l => l.id === 'es');
            if (esLang) return esLang.id;
          }
          const fallback = data.find(l => l.id !== interfaceLang);
          return fallback ? fallback.id : data[0].id;
        };
        setSelectedLanguage(guessTarget());
      }
    } catch (e: any) {
      console.error('Error fetching languages', e);
      setFetchError(e.message || String(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLangs(); }, []);

  const handleSeed = async () => {
    setSeeding(true);
    setSeedResult(null);
    try {
      const res = await seedDatabase(true);
      setSeedResult(res);
      if (res.success) await fetchLangs();
    } catch (e: any) {
      setSeedResult({ success: false, message: e.message || String(e) });
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-between ${pageBg} ${pageText} overflow-x-hidden`}>
      {/* Header */}
      <header className={`w-full max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b ${cardBorder}`}>
          <div className="flex items-center gap-2">
            <LinguDeepLogo size={32} className="text-indigo-600" />
            <span className={`font-outfit text-xl font-black ${pageText}`}>LinguDeep</span>
          </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className={`p-2 rounded-lg border ${inputBg} ${isDark ? 'text-amber-400' : 'text-indigo-600'}`}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <div className={`flex items-center gap-1 border px-2 py-1.5 rounded-lg ${inputBg}`}>
            <Globe className={`w-3.5 h-3.5 ${muted}`} />
            <select value={interfaceLang} onChange={(e) => setInterfaceLang(e.target.value as any)} className={`text-xs font-bold bg-transparent focus:outline-none cursor-pointer ${pageText}`}>
              {[{v:'en',l:'English'},{v:'tr',l:'Türkçe'},{v:'es',l:'Español'},{v:'fr',l:'Français'},{v:'de',l:'Deutsch'},{v:'pt',l:'Português'},{v:'it',l:'Italiano'},{v:'ru',l:'Русский'},{v:'zh',l:'中文'},{v:'ja',l:'日本語'},{v:'ko',l:'한국어'}].map(o => (
                <option key={o.v} value={o.v} className={isDark ? 'bg-gray-900' : 'bg-white'}>{o.l}</option>
              ))}
            </select>
          </div>
          <button onClick={onSignIn} className={`px-4 py-1.5 text-xs font-bold rounded-lg border ${inputBg} ${pageText} ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>Sign In</button>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Mascot */}
        <div className="flex-1 flex flex-col items-center justify-center relative select-none">
          <div className={`w-44 h-44 md:w-56 md:h-56 rounded-full flex items-center justify-center animate-float relative shadow-xl ${cardBg} border ${cardBorder}`}>
            <span className="text-[90px] md:text-[120px]">🦉</span>
            <div className={`absolute -top-14 left-1/2 -translate-x-1/2 border shadow-lg rounded-2xl p-3 w-52 text-center font-outfit text-sm font-bold z-10 ${cardBg} ${cardBorder} ${pageText}`}>
              <span>Ready to master a new language? 🚀</span>
              <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r border-b ${cardBg} ${cardBorder}`} />
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="flex-1 flex flex-col text-center md:text-left max-w-md w-full">
          <h1 className={`text-3xl md:text-4xl font-extrabold font-outfit leading-tight mb-4 ${pageText}`}>
            {getTranslation('heroTitle', interfaceLang)}
          </h1>
          <p className={`text-base md:text-lg mb-8 leading-relaxed ${muted}`}>
            {getTranslation('heroSub', interfaceLang)}
          </p>

          {/* Seed block */}
          {languages.length === 0 && !loading && (
            <div className={`mb-6 border border-dashed rounded-2xl p-4 ${isDark ? 'border-amber-500/30 bg-amber-500/5' : 'border-amber-400 bg-amber-50'}`}>
              <div className="flex items-start gap-3 text-sm">
                <ShieldAlert className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-bold text-amber-600">Database is Empty</p>
                  <p className={`text-xs mt-1 mb-3 ${muted}`}>Initialize sample data:</p>
                  <button onClick={handleSeed} disabled={seeding} className="btn-3d-yellow text-xs px-4 py-2 w-full">
                    {seeding ? 'Initializing…' : 'Seed Database'}
                  </button>
                  {seedResult && (
                    <div className={`mt-3 text-xs p-2 rounded-lg flex items-center gap-1.5 font-bold ${seedResult.success ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                      {seedResult.success ? <CheckCircle2 className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                      <span>{seedResult.message}</span>
                    </div>
                  )}
                  {fetchError && (
                    <div className="mt-3 text-xs p-2 rounded-lg flex items-center gap-1.5 font-bold bg-rose-500/10 text-rose-500">
                      <ShieldAlert className="w-4 h-4" /><span>{fetchError}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Language select */}
          <div className="mb-6">
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 text-left ${muted}`}>
              {getTranslation('chooseLanguage', interfaceLang)}
            </label>
            {loading ? (
              <div className={`h-14 animate-pulse rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-300'}`} />
            ) : (
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className={`w-full text-base font-outfit font-bold rounded-xl px-4 py-3 focus:outline-none appearance-none cursor-pointer border ${inputBg} ${pageText}`}
              >
                {languages.filter(l => l.id !== interfaceLang).map(lang => (
                  <option key={lang.id} value={lang.id} className={isDark ? 'bg-gray-900' : 'bg-white'}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <button onClick={onStart} disabled={languages.length === 0} className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 text-base font-bold ${
            languages.length === 0
              ? isDark ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'btn-3d-green'
          }`}>
            <Sparkles className="w-5 h-5" />
            <span>{getTranslation('getStarted', interfaceLang)}</span>
          </button>
        </div>
      </main>

      {/* Features */}
      <section className={`w-full border-t py-12 ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <BookOpen className="w-6 h-6" />, color: isDark ? 'bg-emerald-900/40 text-emerald-400' : 'bg-emerald-50 text-emerald-600', title: 'Bite-Sized Lessons', desc: 'Interactive exercises that feel like a game.' },
            { icon: <Sparkles className="w-6 h-6" />, color: isDark ? 'bg-indigo-900/40 text-indigo-400' : 'bg-indigo-50 text-indigo-600', title: 'Instant Placement', desc: 'Take a quick test and jump to your level.' },
            { icon: <Trophy className="w-6 h-6" />, color: isDark ? 'bg-amber-900/40 text-amber-400' : 'bg-amber-50 text-amber-600', title: 'Rewards & Streaks', desc: 'Earn XP, gems, and climb leaderboards.' },
          ].map((f, i) => (
            <div key={i} className={`border p-6 rounded-2xl text-center flex flex-col items-center shadow-sm ${cardBg} ${cardBorder}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>{f.icon}</div>
              <h3 className={`font-outfit font-bold text-lg mb-2 ${pageText}`}>{f.title}</h3>
              <p className={`text-sm leading-relaxed ${muted}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={`w-full max-w-5xl mx-auto px-6 py-6 text-center text-xs border-t ${cardBorder} ${muted}`}>
        <p>© 2026 LinguDeep Inc.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
