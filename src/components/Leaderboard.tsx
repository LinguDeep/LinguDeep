import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getLeaderboard, UserProfile } from '../services/db';
import { getTranslation } from '../services/i18n';
import { Trophy, Zap, ShieldAlert } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const { user, interfaceLang, theme } = useAuth();
  const [leaders, setLeaders] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const data = await getLeaderboard();
        setLeaders(data);
      } catch (e) {
        console.error('Error fetching leaderboard', e);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getRankBadge = (index: number) => {
    switch (index) {
      case 0:
        return <span className="text-2xl" title="First Place">🥇</span>;
      case 1:
        return <span className="text-2xl" title="Second Place">🥈</span>;
      case 2:
        return <span className="text-2xl" title="Third Place">🥉</span>;
      default:
        return <span className={`font-outfit font-black text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>#{index + 1}</span>;
    }
  };

  const getLanguageFlag = (code: string) => {
    const flags: Record<string, string> = {
      es: '🇪🇸',
      fr: '🇫🇷',
      de: '🇩🇪',
      ja: '🇯🇵',
      it: '🇮🇹',
      zh: '🇨🇳',
      ru: '🇷🇺',
      tr: '🇹🇷',
      pt: '🇵🇹',
      ko: '🇰🇷',
      en: '🇺🇸'
    };
    return flags[code] || '🌌';
  };

  return (
    <div className={`max-w-xl mx-auto py-8 px-4 pb-24 md:pb-8 ${
      theme === 'dark' ? 'text-white' : 'text-slate-800'
    }`}>
      {/* Header Banner - Solid flat colors (No gradients) */}
      <div className={`text-white rounded-3xl p-6 shadow-md border flex items-center justify-between gap-6 mb-8 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-indigo-950/70 border-indigo-900' 
          : 'bg-indigo-600 border-indigo-700'
      }`}>
        <div className="absolute right-4 bottom-0 opacity-10">
          <Trophy size={120} />
        </div>
        <div className="space-y-2 relative z-10">
          <h2 className="text-2xl font-outfit font-black tracking-wide">{getTranslation('weeklyLeague', interfaceLang)}</h2>
          <p className="text-xs text-indigo-150 font-medium">{getTranslation('weeklyLeagueDesc', interfaceLang)}</p>
        </div>
        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 border border-white/20">
          <Trophy className="w-6 h-6 text-amber-300" />
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-16 animate-pulse rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-900/60 border-slate-850' : 'bg-slate-200 border-slate-300'
            }`}></div>
          ))}
        </div>
      ) : leaders.length === 0 ? (
        <div className={`text-center py-16 border border-dashed rounded-3xl ${
          theme === 'dark' ? 'border-slate-700 bg-slate-900/40 text-slate-350' : 'border-slate-300 bg-white text-slate-650 shadow-sm'
        }`}>
          <ShieldAlert className="w-12 h-12 text-slate-500 mx-auto mb-2" />
          <h3 className="font-outfit font-bold text-lg">{getTranslation('noRankings', interfaceLang)}</h3>
          <p className="text-sm text-slate-500 mt-1">{getTranslation('noRankingsDesc', interfaceLang)}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {leaders.map((leader, index) => {
            const isSelf = leader.uid === user?.uid;
            
            return (
              <div
                key={leader.uid}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  isSelf
                    ? theme === 'dark'
                      ? 'border-indigo-500 bg-indigo-500/15 shadow-md'
                      : 'border-indigo-400 bg-indigo-50/50 shadow-md text-slate-900'
                    : theme === 'dark'
                      ? 'border-slate-80 border-slate-800 bg-slate-900/60 hover:bg-slate-800/40 text-slate-200'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-750 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8">
                    {getRankBadge(index)}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-outfit font-black text-sm uppercase ${
                      isSelf 
                        ? 'bg-indigo-650 text-white' 
                        : theme === 'dark' 
                          ? 'bg-slate-800 text-slate-350' 
                          : 'bg-slate-100 text-slate-650'
                    }`}>
                      {leader.displayName?.substring(0, 2) || 'U'}
                    </div>
                    <div>
                      <div className="font-outfit font-black text-sm flex items-center gap-1.5">
                        <span>{leader.displayName || 'Learner'}</span>
                        <span className="text-xs" title="Target Language">
                          {getLanguageFlag(leader.currentLanguage)}
                        </span>
                      </div>
                      <div className={`text-[10px] font-bold ${
                        theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        Streak: {leader.streak || 0} days
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-outfit font-black text-sm text-indigo-500">
                  <Zap className="w-4 h-4 fill-current" />
                  <span>{leader.totalXP} <span className={`text-[9px] font-normal uppercase ${
                    theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                  }`}>XP</span></span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
