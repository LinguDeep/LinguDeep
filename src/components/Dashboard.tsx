import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getCourses, Course, Lesson, getLanguages, Language } from '../services/db';
import { getTranslation } from '../services/i18n';
import {
  Trophy, ShoppingBag, User as UserIcon, LogOut,
  Flame, Coins, Award, Compass, Lock, Check, Globe,
  BookOpen, Users, GraduationCap, MessageSquare, Heart as HeartIcon,
  Coffee, Hash, Palette, Sun, Moon
} from 'lucide-react';
import LinguDeepLogo from './LinguDeepLogo';
import Leaderboard from './Leaderboard';
import Shop from './Shop';
import Profile from './Profile';

const translateTierLabel = (tier: number, interfaceLang: string): string => {
  const keyMap: Record<number, string> = {
    1: 'basics',
    2: 'intermediate',
    3: 'advanced'
  };
  const key = keyMap[tier];
  return key ? getTranslation(key as any, interfaceLang) : String(tier);
};

const translateCategoryName = (categoryName: string, interfaceLang: string): string => {
  const keyMap: Record<string, string> = {
    'Greetings': 'greetings',
    'Polite Words': 'politeWords',
    'Daily Talk': 'dailyTalk',
    'Food & Drink': 'foodDrink',
    'Study': 'study',
    'Numbers': 'numbers',
    'Colors': 'colors',
    'Family': 'family',
    'Relatives': 'relatives',
    'Social': 'social',
    'Dining': 'dining',
    'Media': 'media',
    'Quantities': 'quantities',
    'Environment': 'environment',
    'Professional': 'professional',
    'Dialogues': 'dialogues',
    'Translation': 'translation',
    'Cuisine': 'cuisine',
    'Literature': 'literature',
    'Review A': 'reviewA',
    'Review B': 'reviewB'
  };
  const key = keyMap[categoryName];
  return key ? getTranslation(key as any, interfaceLang) : categoryName;
};

const translateLessonTitle = (title: string, interfaceLang: string): string => {
  const parts = title.split(' #');
  if (parts.length === 2) {
    const categoryName = parts[0];
    const num = parts[1];
    return `${translateCategoryName(categoryName, interfaceLang)} #${num}`;
  }
  return title;
};

/* ═══════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════ */
type DashboardTab = 'learn' | 'leaderboard' | 'shop' | 'profile';

interface DashboardProps {
  activeTab: DashboardTab;
  setActiveTab: (tab: DashboardTab) => void;
  onStartLesson: (lessonId: string) => void;
  onLogOut: () => void;
}

/* ═══════════════════════════════════════════════
   HELPERS — short names, icons, titles
   ═══════════════════════════════════════════════ */



/** Section topic titles PER TIER — short enough to fit with truncate */
const SECTION_TITLES: Record<number, string[]> = {
  1: ['Greetings', 'Polite Words', 'Daily Talk', 'Food & Drink', 'Study', 'Numbers', 'Colors'],
  2: ['Family', 'Relatives', 'Social', 'Dining', 'Media', 'Quantities', 'Environment'],
  3: ['Professional', 'Dialogues', 'Translation', 'Cuisine', 'Literature', 'Review A', 'Review B'],
};

/** Icon per section category index */
const SECTION_ICONS: React.ReactNode[] = [
  <MessageSquare key="s0" className="w-5 h-5" />,
  <HeartIcon key="s1" className="w-5 h-5" />,
  <Users key="s2" className="w-5 h-5" />,
  <Coffee key="s3" className="w-5 h-5" />,
  <BookOpen key="s4" className="w-5 h-5" />,
  <Hash key="s5" className="w-5 h-5" />,
  <Palette key="s6" className="w-5 h-5" />,
];

/** Icon colors per section category */
const SECTION_ICON_COLORS = [
  'text-indigo-400',
  'text-rose-400',
  'text-emerald-400',
  'text-amber-400',
  'text-cyan-400',
  'text-violet-400',
  'text-fuchsia-400',
];

const LESSON_ICONS_LARGE: React.ReactNode[] = [
  <MessageSquare key="l0" className="w-7 h-7" />,
  <HeartIcon key="l1" className="w-7 h-7 fill-current" />,
  <Users key="l2" className="w-7 h-7" />,
  <Coffee key="l3" className="w-7 h-7" />,
  <BookOpen key="l4" className="w-7 h-7" />,
  <Hash key="l5" className="w-7 h-7" />,
  <Palette key="l6" className="w-7 h-7" />,
];

const TIER_ICONS: Record<number, React.ReactNode> = {
  1: <BookOpen className="w-4 h-4 flex-shrink-0" />,
  2: <Users className="w-4 h-4 flex-shrink-0" />,
  3: <GraduationCap className="w-4 h-4 flex-shrink-0" />,
};

/* ═══════════════════════════════════════════════
   THEME HELPERS — consistent dark/light tokens
   ═══════════════════════════════════════════════ */
const t = (theme: string) => ({
  // Page
  pageBg: theme === 'dark' ? 'bg-[#0B0F19]' : 'bg-gray-50',
  pageText: theme === 'dark' ? 'text-gray-100' : 'text-gray-900',
  // Sidebar / header
  sidebarBg: theme === 'dark' ? 'bg-[#0D1224]' : 'bg-white',
  sidebarBorder: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
  headerBg: theme === 'dark' ? 'bg-[#0D1224]/90 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md shadow-sm',
  // Cards
  cardBg: theme === 'dark' ? 'bg-gray-900' : 'bg-white',
  cardBorder: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
  // Muted text
  muted: theme === 'dark' ? 'text-gray-400' : 'text-gray-500',
  mutedBg: theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100',
  // Inputs / selectors
  inputBg: theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200',
  optionBg: theme === 'dark' ? 'bg-gray-900' : 'bg-white',
  // Hover
  hoverBg: theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
  // Lesson label
  labelBg: theme === 'dark' ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-600 shadow-sm',
  // Path line
  pathLine: theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200',
  // Popup
  popupBg: theme === 'dark' ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-white border-gray-200 text-gray-900 shadow-xl',
  popupArrow: theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200',
  // Section banner icon bg
  iconBoxBg: theme === 'dark' ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200',
});

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
const Dashboard: React.FC<DashboardProps> = ({ activeTab, setActiveTab, onStartLesson, onLogOut }) => {
  const { userProfile, logout, changeLanguage, interfaceLang, setInterfaceLang, theme, toggleTheme } = useAuth();
  const c = t(theme);

  const [languages, setLanguages] = useState<Language[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(false);
  const [showLangDrop, setShowLangDrop] = useState(false);
  const [popup, setPopup] = useState<Lesson | null>(null);

  const activeLanguage = languages.find(l => l.id === userProfile?.currentLanguage);

  /* Generate 100 local lessons for a course */
  const makeLessons = (courseId: string, tier: number): Lesson[] => {
    const titles = SECTION_TITLES[tier] || SECTION_TITLES[1];
    return Array.from({ length: 100 }, (_, i) => {
      const cat = i % 7;
      return {
        id: `lesson_${courseId}_${i + 1}`,
        courseId,
        order: i + 1,
        title: `${titles[cat]} #${Math.ceil((i + 1) / 7)}`,
        xpReward: tier * 10 + 10,
        questions: [],
      };
    });
  };

  /* Fetch languages + courses */
  useEffect(() => {
    if (!userProfile) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const langs = await getLanguages();
        if (cancelled) return;
        setLanguages(langs);
        const allCourses = await getCourses(userProfile.currentLanguage);
        if (cancelled) return;
        const sorted = allCourses.sort((a, b) => a.tier - b.tier);
        setCourses(sorted);
        const initial = sorted.find(c => c.tier === userProfile.unlockedTier) || sorted[0] || null;
        setSelectedCourse(initial);
        if (initial) setLessons(makeLessons(initial.id, initial.tier));
        else setLessons([]);
      } catch (e) { console.error(e); }
      finally { if (!cancelled) setLoading(false); }
    })();
    return () => { cancelled = true; };
  }, [userProfile?.currentLanguage, userProfile?.unlockedTier]);

  const switchCourse = (course: Course) => {
    setSelectedCourse(course);
    setPopup(null);
    setLessons(makeLessons(course.id, course.tier));
  };

  const switchLang = async (code: string) => {
    try { await changeLanguage(code); setShowLangDrop(false); } catch (e) { console.error(e); }
  };

  const doLogout = async () => {
    try { await logout(); onLogOut(); } catch (e) { console.error(e); }
  };

  /* ─── LEARN TAB ─── */
  const renderLearn = () => (
    <div className="w-full max-w-xl mx-auto py-6 px-4 pb-28 md:pb-12">
      {/* ── Tier Selector ── */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {courses.map(course => {
          const active = selectedCourse?.id === course.id;
          return (
            <button
              key={course.id}
              onClick={() => switchCourse(course)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-outfit font-bold border transition-colors ${
                active
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                  : `${c.cardBg} ${c.cardBorder} ${c.pageText} ${c.hoverBg}`
              }`}
            >
              {TIER_ICONS[course.tier]}
              <span>{translateTierLabel(course.tier, interfaceLang)}</span>
              {TIER_ICONS[course.tier]}
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="flex flex-col items-center py-16">
          <div className={`w-10 h-10 border-4 border-t-transparent rounded-full animate-spin ${
            theme === 'dark' ? 'border-indigo-500' : 'border-indigo-600'
          }`} />
          <p className={`mt-3 text-sm font-semibold ${c.muted}`}>{getTranslation('loading', interfaceLang)}</p>
        </div>
      ) : lessons.length === 0 ? (
        <div className={`text-center py-16 border border-dashed rounded-2xl ${c.cardBorder} ${c.cardBg}`}>
          <span className="text-3xl block mb-2">📭</span>
          <p className={`font-outfit font-bold ${c.pageText}`}>{getTranslation('noLessons', interfaceLang)}</p>
          <p className={`text-sm ${c.muted}`}>{getTranslation('noLessonsDesc', interfaceLang)}</p>
        </div>
      ) : (
        <div className="relative flex flex-col items-center">
          {/* Path line */}
          <div className={`absolute w-0.5 top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 ${c.pathLine}`} />

          <div className="w-full flex flex-col items-center gap-10 py-2">
            {lessons.map((lesson, idx) => {
              const done = !!userProfile?.completedLessons?.[lesson.id];
              const next = !done && (idx === 0 || !!userProfile?.completedLessons?.[lessons[idx - 1].id]);
              const locked = !done && !next;
              const cat = Math.floor(idx / 7) % 7;
              const tier = selectedCourse?.tier || 1;

              // Zigzag offset
              const off = idx % 4;
              const shift = off === 1 ? 'translate-x-8 md:translate-x-14' : off === 3 ? '-translate-x-8 md:-translate-x-14' : '';

              return (
                <React.Fragment key={lesson.id}>
                  {/* ── Section Banner (every 7 lessons) ── */}
                  {idx % 7 === 0 && (
                    <div className={`w-full max-w-sm rounded-2xl border p-3 flex items-center gap-3 shadow-sm ${c.cardBg} ${c.cardBorder}`}>
                      {/* Left icon */}
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0 ${c.iconBoxBg} ${SECTION_ICON_COLORS[Math.floor(idx / 7) % 7]}`}>
                        {SECTION_ICONS[Math.floor(idx / 7) % 7]}
                      </div>
                      {/* Title — truncated to never overflow */}
                      <div className="flex-1 min-w-0 text-center">
                        <p className="text-[9px] font-bold text-indigo-500 uppercase tracking-widest">{getTranslation('section', interfaceLang)} {Math.floor(idx / 7) + 1}</p>
                        <p className={`font-outfit font-black text-xs truncate ${c.pageText}`}>
                          {translateCategoryName((SECTION_TITLES[tier] || SECTION_TITLES[1])[Math.floor(idx / 7) % 7], interfaceLang)}
                        </p>
                      </div>
                      {/* Right icon */}
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0 ${c.iconBoxBg} ${SECTION_ICON_COLORS[Math.floor(idx / 7) % 7]}`}>
                        {SECTION_ICONS[Math.floor(idx / 7) % 7]}
                      </div>
                    </div>
                  )}

                  {/* ── Lesson Node ── */}
                  <div className={`relative flex flex-col items-center ${shift}`}>
                    <div className="relative">
                      <button
                        onClick={() => !locked && setPopup(lesson)}
                        disabled={locked}
                        className={`w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center text-white transition-all select-none ${
                          done ? 'node-completed' : next ? 'node-active animate-pulse-ring' : 'node-locked'
                        }`}
                      >
                        {locked ? <Lock className="w-6 h-6 text-gray-400 opacity-70" /> : LESSON_ICONS_LARGE[cat]}
                      </button>
                      {done && (
                        <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow ${
                          theme === 'dark' ? 'border border-gray-900' : 'border border-white'
                        }`}>
                          <Check className="w-3 h-3 text-white stroke-[3]" />
                        </div>
                      )}
                    </div>
                    {!locked && (
                      <span className={`mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold truncate max-w-[130px] border ${c.labelBg}`}>
                        {translateLessonTitle(lesson.title, interfaceLang)}
                      </span>
                    )}

                    {/* Popup */}
                    {popup?.id === lesson.id && (
                      <div className={`absolute z-30 bottom-20 sm:bottom-24 border rounded-2xl p-4 w-56 text-center ${c.popupBg}`}>
                        <h4 className="font-outfit font-black text-sm mb-1">{translateLessonTitle(lesson.title, interfaceLang)}</h4>
                        <p className={`text-xs mb-3 ${c.muted}`}>+{lesson.xpReward} XP</p>
                        <div className="flex gap-2">
                          <button onClick={() => setPopup(null)} className={`flex-1 text-xs font-bold py-2 rounded-lg border ${c.cardBorder} ${c.hoverBg}`}>
                            {getTranslation('cancel', interfaceLang)}
                          </button>
                          <button onClick={() => onStartLesson(lesson.id)} className="flex-1 bg-emerald-600 border-b-2 border-emerald-800 text-white text-xs font-bold py-2 rounded-lg hover:bg-emerald-500 active:border-b-0 active:translate-y-px">
                            {getTranslation('start', interfaceLang)}
                          </button>
                        </div>
                        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 border-r border-b ${c.popupArrow}`} />
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  /* ─── TAB ROUTER ─── */
  const renderTab = () => {
    switch (activeTab) {
      case 'learn': return renderLearn();
      case 'leaderboard': return <Leaderboard />;
      case 'shop': return <Shop />;
      case 'profile': return <Profile />;
      default: return null;
    }
  };

  /* ─── Sidebar nav item ─── */
  const SideItem = ({ tab, icon, label }: { tab: DashboardTab; icon: React.ReactNode; label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-outfit font-bold text-sm transition-colors ${
        activeTab === tab
          ? 'bg-indigo-600 text-white'
          : `${c.pageText} ${c.hoverBg}`
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  /* ─── Mobile nav item ─── */
  const MobItem = ({ tab, icon, label }: { tab: DashboardTab; icon: React.ReactNode; label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex flex-col items-center gap-0.5 font-outfit font-bold text-[10px] transition-colors ${
        activeTab === tab
          ? 'text-indigo-500'
          : c.muted
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  /* ═══════════════ RENDER ═══════════════ */
  return (
    <div className={`min-h-screen flex flex-col md:flex-row ${c.pageBg} ${c.pageText} overflow-x-hidden`}>
      {/* ── Desktop Sidebar ── */}
      <aside className={`hidden md:flex flex-col justify-between w-60 border-r px-4 py-5 h-screen sticky top-0 ${c.sidebarBg} ${c.sidebarBorder}`}>
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-2">
            <LinguDeepLogo size={32} className="text-indigo-600" />
            <span className={`font-outfit font-black text-lg ${c.pageText}`}>LinguDeep</span>
          </div>
          <nav className="space-y-1.5">
            <SideItem tab="learn" icon={<Compass className="w-5 h-5" />} label={getTranslation('learn', interfaceLang)} />
            <SideItem tab="leaderboard" icon={<Trophy className="w-5 h-5" />} label={getTranslation('leaderboard', interfaceLang)} />
            <SideItem tab="shop" icon={<ShoppingBag className="w-5 h-5" />} label={getTranslation('shop', interfaceLang)} />
            <SideItem tab="profile" icon={<UserIcon className="w-5 h-5" />} label={getTranslation('profile', interfaceLang)} />
          </nav>
        </div>
        <button onClick={doLogout} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-outfit font-bold text-sm text-rose-500 ${theme === 'dark' ? 'hover:bg-rose-500/10' : 'hover:bg-rose-50'}`}>
          <LogOut className="w-5 h-5" />
          <span>{getTranslation('signOut', interfaceLang)}</span>
        </button>
      </aside>

      {/* ── Main content column ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ── Top bar ── */}
        <header className={`sticky top-0 z-20 border-b px-4 py-3 flex items-center justify-between gap-2 ${c.headerBg} ${c.sidebarBorder}`}>
          {/* Left: Language selector */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div className="relative">
              <button onClick={() => setShowLangDrop(!showLangDrop)} className={`flex items-center gap-1.5 border px-2.5 py-1.5 rounded-lg text-xs font-outfit font-bold ${c.inputBg} ${c.pageText}`}>
                <span>{activeLanguage?.flag || '🌍'}</span>
                <span className="hidden sm:inline">{activeLanguage?.name || '…'}</span>
                <span className={`text-[9px] px-1 rounded ${c.mutedBg} ${c.muted}`}>T{userProfile?.unlockedTier}</span>
              </button>
              {showLangDrop && (
                <div className={`absolute left-0 mt-1.5 border rounded-xl w-44 overflow-hidden z-30 shadow-lg ${c.cardBg} ${c.cardBorder}`}>
                  {languages.filter(l => l.id !== interfaceLang).map(lang => (
                    <button key={lang.id} onClick={() => switchLang(lang.id)} className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-outfit font-semibold border-b last:border-0 ${c.cardBorder} ${c.hoverBg}`}>
                      <span>{lang.flag} {lang.name}</span>
                      {lang.id === userProfile?.currentLanguage && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className={`flex items-center gap-1 border px-2 py-1.5 rounded-lg ${c.inputBg}`}>
              <Globe className={`w-3.5 h-3.5 ${c.muted}`} />
              <select value={interfaceLang} onChange={e => setInterfaceLang(e.target.value as any)} className={`text-[10px] font-bold bg-transparent focus:outline-none cursor-pointer font-outfit uppercase ${c.pageText}`}>
                {['en','tr','es','fr','de','pt','it','ru','zh','ja','ko'].map(code => (
                  <option key={code} value={code} className={c.optionBg}>{code.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Right: Stats + theme toggle */}
          <div className="flex items-center gap-2.5 font-outfit font-bold text-xs">
            <button onClick={toggleTheme} className={`p-1.5 rounded-lg border transition-colors ${c.inputBg} ${theme === 'dark' ? 'text-amber-400' : 'text-indigo-600'}`} title="Toggle Theme">
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <div className="flex items-center gap-1 text-orange-500"><Flame className="w-4 h-4 fill-current" />{userProfile?.streak || 0}</div>
            <div className="flex items-center gap-1 text-amber-500"><Coins className="w-4 h-4 fill-current" />{userProfile?.gems || 0}</div>
            <div className="flex items-center gap-1 text-indigo-500"><Award className="w-4 h-4" />{userProfile?.totalXP || 0}</div>
            <div className={`hidden sm:flex w-7 h-7 rounded-full items-center justify-center text-[10px] font-black ${
              theme === 'dark' ? 'bg-emerald-900/40 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
            }`}>
              {userProfile?.displayName?.substring(0, 2).toUpperCase() || 'U'}
            </div>
          </div>
        </header>

        {/* ── Tab content ── */}
        <main className="flex-1 overflow-y-auto">{renderTab()}</main>
      </div>

      {/* ── Mobile bottom nav ── */}
      <nav className={`md:hidden fixed bottom-0 inset-x-0 border-t flex justify-around py-2.5 z-20 ${c.sidebarBg} ${c.sidebarBorder} shadow-lg`}>
        <MobItem tab="learn" icon={<Compass className="w-5 h-5" />} label={getTranslation('learn', interfaceLang)} />
        <MobItem tab="leaderboard" icon={<Trophy className="w-5 h-5" />} label={getTranslation('leaderboard', interfaceLang)} />
        <MobItem tab="shop" icon={<ShoppingBag className="w-5 h-5" />} label={getTranslation('shop', interfaceLang)} />
        <MobItem tab="profile" icon={<UserIcon className="w-5 h-5" />} label={getTranslation('profile', interfaceLang)} />
        <button onClick={doLogout} className="flex flex-col items-center gap-0.5 font-outfit font-bold text-[10px] text-rose-500">
          <LogOut className="w-5 h-5" />
          <span>{getTranslation('exit', interfaceLang)}</span>
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
