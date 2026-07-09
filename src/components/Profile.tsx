import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getBadges, Badge } from '../services/db';
import { seedDatabase } from '../services/dbInitializer';
import { clearFirebaseConfig } from '../firebase';
import { getTranslation } from '../services/i18n';
import { 
  Award, Flame, Coins, CheckCircle2, Trophy, Compass, 
  ShieldAlert, Settings, RefreshCw, Loader, Check 
} from 'lucide-react';

const Profile: React.FC = () => {
  const { userProfile, logout, interfaceLang, theme } = useAuth();
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loadingBadges, setLoadingBadges] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState('');

  useEffect(() => {
    const fetchBadges = async () => {
      setLoadingBadges(true);
      try {
        const badgeData = await getBadges();
        setBadges(badgeData);
      } catch (e) {
        console.error('Error fetching badges', e);
      } finally {
        setLoadingBadges(false);
      }
    };

    fetchBadges();
  }, []);

  const handleResetConfig = () => {
    if (window.confirm('Are you sure you want to disconnect Firebase? This will clear stored credentials and reload the application.')) {
      clearFirebaseConfig();
      logout().then(() => {
        window.location.reload();
      });
    }
  };

  const handleForceSeed = async () => {
    setSeeding(true);
    setSeedMsg('');
    try {
      const res = await seedDatabase(true); // force = true
      setSeedMsg(res.message);
    } catch (e: any) {
      setSeedMsg(`Error: ${e?.message || e}`);
    } finally {
      setSeeding(false);
    }
  };

  const getBadgeIcon = (iconName: string, isUnlocked: boolean) => {
    const colorClass = isUnlocked ? '' : 'grayscale opacity-30';
    switch (iconName) {
      case 'Compass':
        return <Compass className={`w-8 h-8 text-indigo-400 ${colorClass}`} />;
      case 'ShieldAlert':
        return <ShieldAlert className={`w-8 h-8 text-orange-400 fill-orange-400/20 ${colorClass}`} />;
      case 'Flame':
        return <Flame className={`w-8 h-8 text-rose-400 fill-rose-400/20 ${colorClass}`} />;
      case 'Trophy':
        return <Trophy className={`w-8 h-8 text-amber-400 fill-amber-400/20 ${colorClass}`} />;
      default:
        return <Award className={`w-8 h-8 text-violet-400 ${colorClass}`} />;
    }
  };

  const completedLessonsCount = userProfile?.completedLessons 
    ? Object.keys(userProfile.completedLessons).length 
    : 0;

  return (
    <div className={`max-w-2xl mx-auto py-8 px-4 pb-24 ${
      theme === 'dark' ? 'text-white' : 'text-slate-800'
    }`}>
      {/* User Info Card */}
      <div className={`flex items-center gap-5 p-6 border rounded-3xl ${
        theme === 'dark' ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-white shadow-sm'
      }`}>
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center font-outfit font-black text-2xl border border-emerald-500/40">
          {userProfile?.displayName?.substring(0, 2).toUpperCase() || 'U'}
        </div>
        <div className="flex-1">
          <h2 className={`text-2xl font-outfit font-black leading-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            {userProfile?.displayName || 'User Profile'}
          </h2>
          <p className={`text-xs font-semibold mt-1 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {userProfile?.email}
          </p>
          <span className={`inline-block border text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg mt-2 ${
            theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-150 border-slate-250 text-slate-600'
          }`}>
            Tier {userProfile?.unlockedTier} Student
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <h3 className={`font-outfit font-black text-base uppercase tracking-wider mb-3 mt-8 ${
        theme === 'dark' ? 'text-slate-350' : 'text-slate-600'
      }`}>Your Progress</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className={`border rounded-2xl p-4 text-center ${
          theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="text-orange-500 flex justify-center mb-1"><Flame size={24} className="fill-current" /></div>
          <div className="text-xl font-outfit font-black">{userProfile?.streak || 0}</div>
          <div className={`text-[10px] font-bold uppercase ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Streak Days</div>
        </div>

        <div className={`border rounded-2xl p-4 text-center ${
          theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="text-indigo-400 flex justify-center mb-1"><Award size={24} /></div>
          <div className="text-xl font-outfit font-black">{userProfile?.totalXP || 0}</div>
          <div className={`text-[10px] font-bold uppercase ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Total XP</div>
        </div>

        <div className={`border rounded-2xl p-4 text-center ${
          theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="text-amber-500 flex justify-center mb-1"><Coins size={24} className="fill-current" /></div>
          <div className="text-xl font-outfit font-black">{userProfile?.gems || 0}</div>
          <div className={`text-[10px] font-bold uppercase ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Gems Balance</div>
        </div>

        <div className={`border rounded-2xl p-4 text-center ${
          theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="text-emerald-400 flex justify-center mb-1"><CheckCircle2 size={24} /></div>
          <div className="text-xl font-outfit font-black">{completedLessonsCount}</div>
          <div className={`text-[10px] font-bold uppercase ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Lessons Done</div>
        </div>
      </div>

      {/* Badges Section */}
      <h3 className={`font-outfit font-black text-base uppercase tracking-wider mb-3 ${
        theme === 'dark' ? 'text-slate-350' : 'text-slate-600'
      }`}>Badges & Achievements</h3>

      {loadingBadges ? (
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-24 animate-pulse rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-900/60 border-slate-850' : 'bg-slate-200 border-slate-300'
            }`}></div>
          ))}
        </div>
      ) : badges.length === 0 ? (
        <p className="text-sm text-slate-500">No badges configured in target database.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {badges.map((badge) => {
            const isUnlocked = (userProfile?.totalXP || 0) >= badge.requirementXP 
              && (userProfile?.streak || 0) >= badge.requirementStreak;
            
            return (
              <div
                key={badge.id}
                className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                  isUnlocked
                    ? theme === 'dark'
                      ? 'border-slate-800 bg-slate-900/60'
                      : 'border-slate-200 bg-white shadow-sm'
                    : theme === 'dark'
                      ? 'border-slate-900 bg-slate-950/45 text-slate-500 opacity-60'
                      : 'border-slate-150 bg-slate-100 text-slate-400 opacity-60'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border ${
                  isUnlocked
                    ? theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    : theme === 'dark' ? 'bg-slate-950/20 border-slate-900/30' : 'bg-slate-150 border-slate-200/50'
                }`}>
                  {getBadgeIcon(badge.icon, isUnlocked)}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-outfit font-black text-sm">{badge.name}</h4>
                  <p className={`text-[10px] leading-relaxed font-semibold ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                  }`}>{badge.description}</p>
                  {isUnlocked ? (
                    <div className="text-[10px] text-emerald-400 font-extrabold flex items-center gap-1 mt-1">
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Unlocked</span>
                    </div>
                  ) : (
                    <div className={`text-[10px] font-extrabold mt-1 ${
                      theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      Requires: {badge.requirementXP > 0 ? `${badge.requirementXP} XP` : ''} 
                      {badge.requirementXP > 0 && badge.requirementStreak > 0 ? ' & ' : ''}
                      {badge.requirementStreak > 0 ? `${badge.requirementStreak} Streak` : ''}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Settings / Developer Panel */}
      <h3 className={`font-outfit font-black text-base uppercase tracking-wider mb-3 ${
        theme === 'dark' ? 'text-slate-350' : 'text-slate-600'
      }`}>{getTranslation('devTools', interfaceLang)}</h3>
      
      <div className={`border rounded-3xl p-5 space-y-5 ${
        theme === 'dark' ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-white shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-outfit font-black text-sm flex items-center gap-2">
              <Settings className="w-4 h-4 text-indigo-400" />
              <span>{getTranslation('clearConfig', interfaceLang)}</span>
            </h4>
            <p className={`text-xs font-semibold leading-relaxed max-w-sm ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {getTranslation('clearConfigDesc', interfaceLang)}
            </p>
          </div>
          <button
            onClick={handleResetConfig}
            className="px-4 py-2.5 bg-rose-600 border-b-4 border-rose-800 hover:bg-rose-500 active:border-b-0 active:translate-y-[2px] rounded-xl text-xs font-outfit font-black text-white shrink-0"
          >
            Reset Connection
          </button>
        </div>

        <div className={`border-t pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
          theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="space-y-1">
            <h4 className="font-outfit font-black text-sm flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-emerald-400" />
              <span>{getTranslation('forceSeed', interfaceLang)}</span>
            </h4>
            <p className={`text-xs font-semibold leading-relaxed max-w-sm ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {getTranslation('forceSeedDesc', interfaceLang)}
            </p>
          </div>
          <button
            onClick={handleForceSeed}
            disabled={seeding}
            className="px-4 py-2.5 bg-emerald-600 border-b-4 border-emerald-800 hover:bg-emerald-500 active:border-b-0 active:translate-y-[2px] rounded-xl text-xs font-outfit font-black text-white shrink-0 flex items-center gap-2"
          >
            {seeding ? <Loader className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
            <span>Sync Seed</span>
          </button>
        </div>

        {seedMsg && (
          <div className={`p-3 rounded-xl border text-xs font-bold text-center ${
            seedMsg.includes('Error') 
              ? 'bg-rose-500/10 border-rose-500 text-rose-400' 
              : 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
          }`}>
            {seedMsg}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
