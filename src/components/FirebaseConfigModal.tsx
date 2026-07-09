import React, { useState } from 'react';
import { saveFirebaseConfig, FirebaseConfig } from '../firebase';
import { Settings, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

const FirebaseConfigModal: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [projectId, setProjectId] = useState('');
  const [authDomain, setAuthDomain] = useState('');
  const [appId, setAppId] = useState('');
  const [messagingSenderId, setMessagingSenderId] = useState('');
  const [storageBucket, setStorageBucket] = useState('');
  const [error, setError] = useState('');

  const theme = localStorage.getItem('lingudeep_theme') || 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim() || !projectId.trim()) {
      setError('API Key and Project ID are required.');
      return;
    }

    const config: FirebaseConfig = {
      apiKey: apiKey.trim(),
      projectId: projectId.trim(),
      authDomain: authDomain.trim(),
      appId: appId.trim(),
      messagingSenderId: messagingSenderId.trim(),
      storageBucket: storageBucket.trim(),
    };

    const saved = saveFirebaseConfig(config);
    if (saved) {
      setError('');
      // Reload page to re-initialize firebase with new config
      window.location.reload();
    } else {
      setError('Failed to save config to local storage.');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors ${
      theme === 'dark' ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className={`rounded-3xl shadow-2xl border max-w-lg w-full overflow-hidden transition-all ${
        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 text-slate-850'
      }`}>
        {/* Header Banner - Solid Flat Colors (No gradients) */}
        <div className={`p-6 text-white text-center relative border-b ${
          theme === 'dark' 
            ? 'bg-indigo-950/70 border-indigo-900' 
            : 'bg-indigo-600 border-indigo-700'
        }`}>
          <div className="absolute right-4 top-4 opacity-10">
            <Settings size={96} />
          </div>
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20">
            <Settings className="w-7 h-7 text-white animate-spin-slow" />
          </div>
          <h2 className="text-xl font-outfit font-black tracking-wide">Connect Firebase</h2>
          <p className="text-xs text-indigo-150 font-semibold mt-1">Populate credentials to launch your gamified dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className={`text-xs leading-relaxed font-semibold ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Enter your Firebase project web app configuration. These credentials are saved strictly in your local sandbox browser storage (`localStorage`) and used for direct Firestore connection.
          </p>

          {error && (
            <div className="bg-rose-500/10 border border-rose-500 text-rose-455 p-3 rounded-xl text-xs font-bold">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className={`text-[10px] font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                API Key <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="AIzaSyA1..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className={`w-full border-2 rounded-xl px-4 py-2.5 focus:border-indigo-500 focus:outline-none text-xs font-semibold ${
                  theme === 'dark' 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' 
                    : 'bg-slate-50 border-slate-200 text-slate-855 placeholder-slate-400'
                }`}
              />
            </div>

            <div className="space-y-1">
              <label className={`text-[10px] font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Project ID <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="lingudeep-app..."
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                className={`w-full border-2 rounded-xl px-4 py-2.5 focus:border-indigo-500 focus:outline-none text-xs font-semibold ${
                  theme === 'dark' 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' 
                    : 'bg-slate-50 border-slate-200 text-slate-855 placeholder-slate-400'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className={`text-[10px] font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Auth Domain (Optional)
              </label>
              <input
                type="text"
                placeholder="projectId.firebaseapp.com"
                value={authDomain}
                onChange={(e) => setAuthDomain(e.target.value)}
                className={`w-full border-2 rounded-xl px-4 py-2.5 focus:border-indigo-500 focus:outline-none text-xs font-semibold ${
                  theme === 'dark' 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' 
                    : 'bg-slate-50 border-slate-200 text-slate-855 placeholder-slate-400'
                }`}
              />
            </div>

            <div className="space-y-1">
              <label className={`text-[10px] font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                App ID (Optional)
              </label>
              <input
                type="text"
                placeholder="1:123456:web:abcd..."
                value={appId}
                onChange={(e) => setAppId(e.target.value)}
                className={`w-full border-2 rounded-xl px-4 py-2.5 focus:border-indigo-500 focus:outline-none text-xs font-semibold ${
                  theme === 'dark' 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' 
                    : 'bg-slate-50 border-slate-200 text-slate-855 placeholder-slate-400'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className={`text-[10px] font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Messaging Sender ID
              </label>
              <input
                type="text"
                placeholder="123456789..."
                value={messagingSenderId}
                onChange={(e) => setMessagingSenderId(e.target.value)}
                className={`w-full border-2 rounded-xl px-4 py-2.5 focus:border-indigo-500 focus:outline-none text-xs font-semibold ${
                  theme === 'dark' 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' 
                    : 'bg-slate-50 border-slate-200 text-slate-855 placeholder-slate-400'
                }`}
              />
            </div>

            <div className="space-y-1">
              <label className={`text-[10px] font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Storage Bucket
              </label>
              <input
                type="text"
                placeholder="projectId.appspot.com"
                value={storageBucket}
                onChange={(e) => setStorageBucket(e.target.value)}
                className={`w-full border-2 rounded-xl px-4 py-2.5 focus:border-indigo-500 focus:outline-none text-xs font-semibold ${
                  theme === 'dark' 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' 
                    : 'bg-slate-50 border-slate-200 text-slate-855 placeholder-slate-400'
                }`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-3d-green bg-emerald-600 border-emerald-800 hover:bg-emerald-500 text-white font-extrabold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 mt-4"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Connect & Launch app</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className={`p-5 text-center text-[10px] border-t flex items-center justify-center gap-1 font-semibold ${
          theme === 'dark' ? 'border-slate-80 border-slate-800 text-slate-500 bg-slate-950/20' : 'border-slate-100 text-slate-400 bg-slate-50'
        }`}>
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Need help? Check your dashboard parameters in the Firebase Console settings.</span>
        </div>
      </div>
    </div>
  );
};

export default FirebaseConfigModal;
