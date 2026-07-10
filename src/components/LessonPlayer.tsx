import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lesson, Question } from '../services/db';
import { LANGUAGE_VOCABULARY, generateQuestionsForLesson, INTERMEDIATE_VOCAB, ADVANCED_VOCAB } from '../services/dbInitializer';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { X, Heart, ShieldAlert, CheckCircle2, Award, Coins, Flame } from 'lucide-react';
import { localizePrompt, getTranslation } from '../services/i18n';
import { audioEffects } from '../services/audio';

const buildVocabMap = (): Record<string, Record<string, string>> => {
  const map: Record<string, Record<string, string>> = {};
  const languages = Object.keys(LANGUAGE_VOCABULARY);
  const enBase = LANGUAGE_VOCABULARY.en || {};
  
  for (const lang of languages) {
    const vocab = LANGUAGE_VOCABULARY[lang];
    if (vocab) {
      for (const key of Object.keys(vocab) as (keyof typeof vocab)[]) {
        const enVal = enBase[key];
        const langVal = vocab[key];
        if (enVal && langVal) {
          const cleanEn = enVal.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
          if (!map[cleanEn]) {
            map[cleanEn] = {};
          }
          map[cleanEn][lang] = langVal;
        }
      }
    }
  }
  
  for (const langMap of Object.values(INTERMEDIATE_VOCAB)) {
    const enVal = langMap.en;
    if (enVal) {
      const cleanEn = enVal.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
      if (!map[cleanEn]) {
        map[cleanEn] = {};
      }
      for (const lang of languages) {
        const langVal = langMap[lang] || langMap.en;
        if (langVal) {
          map[cleanEn][lang] = langVal;
        }
      }
    }
  }
  
  for (const langMap of Object.values(ADVANCED_VOCAB)) {
    const enVal = langMap.en;
    if (enVal) {
      const cleanEn = enVal.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
      if (!map[cleanEn]) {
        map[cleanEn] = {};
      }
      for (const lang of languages) {
        const langVal = langMap[lang] || langMap.en;
        if (langVal) {
          map[cleanEn][lang] = langVal;
        }
      }
    }
  }
  
  return map;
};

const VOCAB_MAP = buildVocabMap();

const englishLowerCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i');
};

const translatePhrase = (phrase: string, toLang: string): string => {
  if (phrase.includes(', ')) {
    return phrase.split(', ').map(p => translatePhrase(p, toLang)).join(', ');
  }
  if (phrase.includes(' & ')) {
    return phrase.split(' & ').map(p => translatePhrase(p, toLang)).join(' & ');
  }
  if (phrase.includes(' and ')) {
    return phrase.split(' and ').map(p => translatePhrase(p, toLang)).join(' and ');
  }

  const clean = englishLowerCase(phrase).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
  
  if (VOCAB_MAP[clean]?.[toLang]) {
    return VOCAB_MAP[clean][toLang];
  }
  
  return phrase;
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const prepareQuestionsForPlay = (questions: Question[]): Question[] => {
  return questions.map(q => {
    if (q.type === 'multiple-choice' || q.type === 'fill-blank') {
      return { ...q, options: shuffleArray(q.options || []) };
    }
    return q;
  });
};

const localizeQuestionsForUser = (questions: Question[], targetLang: string, nativeLang: string): Question[] => {
  if (nativeLang === 'en') return questions;
  
  return questions.map(q => {
    // For ALL learning (including English learning), translate the English word in the prompt to native language
    // The prompt always has English word + target language name, so we translate the English word
    const mcMatch = q.prompt.match(/How do you say "([^"]+)" in (.+)\?/);
    if (mcMatch) {
      const englishWord = mcMatch[1];
      const langName = mcMatch[2];
      const nativeWord = translatePhrase(englishWord, nativeLang);
      const localizedLangName = localizePrompt(langName, nativeLang);
      return {
        ...q,
        prompt: `How do you say "${nativeWord}" in ${localizedLangName}?`
      };
    }
    
    // For translate questions
    const transMatch = q.prompt.match(/Translate: "([^"]+)"/);
    if (transMatch) {
      const promptWord = transMatch[1];
      if (q.type === 'translate') {
        if (targetLang === 'en') {
          // If learning English: translate nativePromptWord -> English
          const nativeWord = translatePhrase(promptWord, nativeLang);
          return {
            ...q,
            prompt: `Translate: "${nativeWord}"`
          };
        } else {
          // If learning another language (e.g. Spanish): translate SpanishPromptWord -> nativeLang
          // So correctAnswer is translated to nativeLang
          const nativeAnswer = translatePhrase(q.correctAnswer, nativeLang);
          return {
            ...q,
            correctAnswer: nativeAnswer
          };
        }
      } else if (q.type === 'multiple-choice') {
        // Translate the prompt from English to native language
        const nativePromptWord = translatePhrase(promptWord, nativeLang);
        return {
          ...q,
          prompt: `Translate: "${nativePromptWord}"`
        };
      }
    }
    
    // For fill-blank questions, translate the hint in parentheses
    if (q.type === 'fill-blank') {
      if (q.prompt.includes('(')) {
        const hint = q.prompt.match(/\(([^)]+)\)/)?.[1] || '';
        const nativeHint = translatePhrase(hint, nativeLang);
        const mainPart = q.prompt.split('(')[0];
        return {
          ...q,
          prompt: `${mainPart}(${nativeHint})`
        };
      }
    }
    
    // For tap-pairs, translate the English side of the pairs to native language
    if (q.type === 'tap-pairs') {
      const localizedOptions = (q.options || []).map((opt, idx) => {
        // For even indices (0, 2, 4, 6), keep as target language (no translation)
        if (idx % 2 === 0) {
          return opt;
        }
        // For odd indices (1, 3, 5, 7), translate to native language
        const clean = englishLowerCase(opt).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
        if (VOCAB_MAP[clean]) {
          return translatePhrase(opt, nativeLang);
        }
        return opt;
      });
      
      const localizedPairs = q.correctAnswer.split(',').map(pair => {
        const parts = pair.split(':');
        if (parts.length === 2) {
          const [left, right] = parts;
          return `${left}:${translatePhrase(right, nativeLang)}`;
        }
        return pair;
      });
      
      return {
        ...q,
        options: localizedOptions,
        correctAnswer: localizedPairs.join(',')
      };
    }
    
    return q;
  });
};

interface LessonPlayerProps {
  lessonId: string;
  onComplete: () => void;
  onClose: () => void;
}

const LessonPlayer: React.FC<LessonPlayerProps> = ({
  lessonId,
  onComplete,
  onClose,
}) => {
  const { completeLesson, interfaceLang, theme } = useAuth();

  const getLanguageName = (id: string) => {
    const parts = id.split('_');
    const code = parts[1] || 'es';
    const names: Record<string, string> = {
      es: 'Spanish', fr: 'French', de: 'German', ja: 'Japanese', it: 'Italian',
      zh: 'Chinese', ru: 'Russian', pt: 'Portuguese', ko: 'Korean', tr: 'Turkish',
      ar: 'Arabic', nl: 'Dutch', sv: 'Swedish', hi: 'Hindi', en: 'English'
    };
    return names[code] || 'Target Language';
  };
  
  // Lesson state
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [lives, setLives] = useState(5);
  
  // Interaction states
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [translateInput, setTranslateInput] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameState, setGameState] = useState<'playing' | 'failed' | 'completed'>('playing');

  // Tap pairs state
  const [tapLeftSelected, setTapLeftSelected] = useState<string | null>(null);
  const [tapRightSelected, setTapRightSelected] = useState<string | null>(null);
  const [tapMatches, setTapMatches] = useState<Record<string, string>>({}); // matched pairs
  const [tapLeftWords, setTapLeftWords] = useState<string[]>([]);
  const [tapRightWords, setTapRightWords] = useState<string[]>([]);
  const [tapFeedbackMessage, setTapFeedbackMessage] = useState<string | null>(null);

  // Fetch lesson data
  useEffect(() => {
    const fetchLesson = async () => {
      setLoading(true);
      try {
        if (db) {
          const lessonRef = doc(db, 'lessons', lessonId);
          const lessonSnap = await getDoc(lessonRef);
          if (lessonSnap.exists()) {
            const lessonData = { id: lessonSnap.id, ...lessonSnap.data() } as Lesson;
            const parts = lessonId.split('_');
            const langCode = parts[1] || 'es';
            const localizedQuestions = localizeQuestionsForUser(lessonData.questions, langCode, interfaceLang);
            setLesson({
              ...lessonData,
              questions: prepareQuestionsForPlay(localizedQuestions)
            });
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        console.warn('Error fetching lesson from database, falling back to local generation', e);
      }

      // Dynamic local fallback!
      try {
        const parts = lessonId.split('_');
        const langCode = parts[1] || 'es';
        const tierNum = parseInt(parts[2] || '1', 10);
        const lessonIdx = parseInt(parts[3] || '1', 10);

        const names: Record<string, string> = {
          es: 'Spanish', fr: 'French', de: 'German', ja: 'Japanese', it: 'Italian',
          zh: 'Chinese', ru: 'Russian', pt: 'Portuguese', ko: 'Korean', tr: 'Turkish',
          ar: 'Arabic', nl: 'Dutch', sv: 'Swedish', hi: 'Hindi', en: 'English'
        };
        const langName = names[langCode] || 'Spanish';
        const vocab = LANGUAGE_VOCABULARY[langCode] || LANGUAGE_VOCABULARY.en;

        const rawQuestions = generateQuestionsForLesson({ id: langCode, name: langName } as any, tierNum, lessonIdx, vocab);
        const localizedQuestions = localizeQuestionsForUser(rawQuestions, langCode, interfaceLang);

        setLesson({
          id: lessonId,
          courseId: `${langCode}_${tierNum}`,
          order: lessonIdx,
          title: `Lesson #${lessonIdx}`,
          xpReward: tierNum * 10 + 10,
          questions: prepareQuestionsForPlay(localizedQuestions)
        });
      } catch (e) {
        console.error('Error generating dynamic fallback lesson', e);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [lessonId]);

  const currentQuestion = lesson?.questions?.[currentIdx];

  // Initialize Tap Pairs options lists
  useEffect(() => {
    if (currentQuestion && currentQuestion.type === 'tap-pairs' && currentQuestion.options) {
      const mappingStr = currentQuestion.correctAnswer;
      const pairs = mappingStr.split(',').map(p => p.split(':'));
      
      const lefts = pairs.map(p => p[0]);
      const rights = pairs.map(p => p[1]);

      const shuffle = (arr: string[]) => [...arr].sort(() => Math.random() - 0.5);
      
      setTapLeftWords(shuffle(lefts));
      setTapRightWords(shuffle(rights));
      setTapMatches({});
      setTapLeftSelected(null);
      setTapRightSelected(null);
      setTapFeedbackMessage(null);
    }
  }, [currentIdx, currentQuestion]);

  // Handle checking match in tap-pairs
  useEffect(() => {
    if (tapLeftSelected && tapRightSelected && currentQuestion && currentQuestion.type === 'tap-pairs') {
      const mappingStr = currentQuestion.correctAnswer;
      const pairs = mappingStr.split(',').map(p => p.split(':'));
      
      const isMatch = pairs.some(p => p[0] === tapLeftSelected && p[1] === tapRightSelected);

      if (isMatch) {
        audioEffects.playCorrect();
        setTapMatches((prev) => ({
          ...prev,
          [tapLeftSelected]: tapRightSelected
        }));
        setTapLeftSelected(null);
        setTapRightSelected(null);
        setTapFeedbackMessage(null);

        // Check if all matched
        const totalPairsToMatch = pairs.length;
        const currentMatchedCount = Object.keys(tapMatches).length + 1; // plus this one
        if (currentMatchedCount === totalPairsToMatch) {
          setIsCorrect(true);
          setIsAnswered(true);
        }
      } else {
        audioEffects.playIncorrect();
        setTapFeedbackMessage('Incorrect match. Try again.');
        setTapLeftSelected(null);
        setTapRightSelected(null);
        
        setLives((prev) => {
          const next = prev - 0.5; // lose half life for minor matching mistakes
          if (next <= 0) {
            setGameState('failed');
          }
          return next;
        });
      }
    }
  }, [tapLeftSelected, tapRightSelected]);

  if (loading || !lesson || !currentQuestion) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors ${
        theme === 'dark' ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-800'
      }`}>
        <div className={`w-12 h-12 border-4 border-t-transparent rounded-full animate-spin ${
          theme === 'dark' ? 'border-indigo-500' : 'border-indigo-650'
        }`}></div>
        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">{getTranslation('loadingPlayer', interfaceLang)}</p>
      </div>
    );
  }

  // Normalization logic for Turkish İ combiners
  const cleanStringForCompare = (str: string) => {
    return englishLowerCase(str.trim())
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
      .replace(/\s+/g, " ");
  };

  const handleCheckAnswer = () => {
    if (isAnswered) return;

    let correct = false;

    if (currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'fill-blank') {
      if (!selectedOption) return;
      correct = selectedOption === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'translate') {
      if (!translateInput.trim()) return;
      const userAns = cleanStringForCompare(translateInput);
      const correctAns = cleanStringForCompare(currentQuestion.correctAnswer);
      correct = userAns === correctAns;
    }

    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      audioEffects.playCorrect();
    } else {
      audioEffects.playIncorrect();
      setLives((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          setGameState('failed');
        }
        return next;
      });
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setTranslateInput('');
    setIsAnswered(false);
    
    if (currentIdx < lesson.questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      handleLessonCompletion();
    }
  };

  const handleLessonCompletion = async () => {
    setGameState('completed');
    try {
      await completeLesson(lesson.id, lesson.xpReward);
    } catch (e) {
      console.error('Failed to update progress in Firestore', e);
    }
  };

  const progressPercent = ((currentIdx) / lesson.questions.length) * 100;

  if (gameState === 'failed') {
    return (
      <div className={`min-h-screen flex flex-col justify-between p-6 transition-colors ${
        theme === 'dark' ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-800'
      }`}>
        <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto text-center space-y-6">
          <div className="w-24 h-24 bg-rose-500/15 rounded-full flex items-center justify-center text-rose-500 animate-bounce">
            <ShieldAlert size={48} />
          </div>
          <div>
            <h2 className={`text-3xl font-extrabold font-outfit mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{getTranslation('noLivesLeft', interfaceLang)}</h2>
            <p className={`text-sm font-semibold leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {getTranslation('noLivesLeftDesc', interfaceLang)}
            </p>
          </div>
          <button onClick={onClose} className="w-full btn-3d-red py-4 bg-rose-600 border-rose-800">
            {getTranslation('backToDashboard', interfaceLang)}
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'completed') {
    return (
      <div className={`min-h-screen flex flex-col justify-between p-6 transition-colors ${
        theme === 'dark' ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-800'
      }`}>
        <div className="w-full max-w-2xl mx-auto flex items-center justify-end">
          <button onClick={onClose} className={`p-2 rounded-full transition-colors ${
            theme === 'dark' ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-600'
          }`}>
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto text-center space-y-6">
          <div className="w-28 h-28 bg-emerald-500/15 rounded-3xl flex items-center justify-center text-emerald-450 animate-float border border-emerald-500/30">
            <Award size={64} />
          </div>
          
          <div className="space-y-2">
            <h2 className={`text-3xl font-black font-outfit ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{getTranslation('lessonComplete', interfaceLang)}</h2>
            <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {getTranslation('lessonCompleteDesc', interfaceLang)}
            </p>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            <div className={`border p-4 rounded-2xl flex items-center gap-3 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="p-2 bg-emerald-500/15 text-emerald-450 rounded-xl">
                <Flame size={20} className="fill-current" />
              </div>
              <div className="text-left">
                <div className={`text-[10px] uppercase font-bold tracking-wider ${
                  theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                }`}>Experience</div>
                <div className="text-base font-black">+{lesson.xpReward} XP</div>
              </div>
            </div>

            <div className={`border p-4 rounded-2xl flex items-center gap-3 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="p-2 bg-amber-500/15 text-amber-500 rounded-xl">
                <Coins size={20} className="fill-current" />
              </div>
              <div className="text-left">
                <div className={`text-[10px] uppercase font-bold tracking-wider ${
                  theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                }`}>Gems Bonus</div>
                <div className="text-base font-black">+10 Gems</div>
              </div>
            </div>
          </div>

          <button onClick={onComplete} className="w-full btn-3d-green py-4 bg-emerald-600 border-emerald-800 text-white font-extrabold">
            {getTranslation('continue', interfaceLang)}
          </button>
        </div>
        <div className="h-6"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col justify-between p-4 md:p-6 transition-colors ${
      theme === 'dark' ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header Bar */}
      <div className="w-full max-w-2xl mx-auto flex items-center gap-4 mb-4">
        <button onClick={onClose} className={`p-2 rounded-full transition-colors ${
          theme === 'dark' ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-600'
        }`}>
          <X size={24} />
        </button>

        {/* Progress bar */}
        <div className={`flex-1 h-3 rounded-full overflow-hidden border ${
          theme === 'dark' ? 'bg-slate-800 border-slate-700/50' : 'bg-slate-200 border-slate-300'
        }`}>
          <div
            className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Lives Counter */}
        <div className="flex items-center gap-1.5 text-rose-500 font-outfit font-black text-lg">
          <Heart className="w-6 h-6 fill-current animate-pulse text-rose-500" />
          <span>{lives}</span>
        </div>
      </div>

      {/* Question Main Panel */}
      <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col justify-center my-2 overflow-y-auto">
        <span className={`text-xs font-bold tracking-widest mb-1 block ${
          theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
        }`}>
          {currentQuestion.type === 'tap-pairs' ? 'MATCHING PAIRS' : 'QUESTION PROMPT'}
        </span>
        <h3 className={`text-xl md:text-2xl font-outfit font-extrabold mb-6 leading-snug ${
          theme === 'dark' ? 'text-white' : 'text-slate-950'
        }`}>
          {localizePrompt(currentQuestion.prompt, interfaceLang)}
        </h3>

        {/* Render question inputs depending on type */}
        {currentQuestion.type === 'multiple-choice' && (
          <div className="grid grid-cols-1 gap-3.5">
            {currentQuestion.options?.map((option) => {
              const isSelected = selectedOption === option;
              
              let btnClass = theme === 'dark' 
                ? isSelected
                  ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                  : "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300"
                : isSelected
                  ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                  : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm";

              return (
                <button
                  key={option}
                  onClick={() => !isAnswered && setSelectedOption(option)}
                  disabled={isAnswered}
                  className={`w-full text-left font-outfit font-extrabold p-4 rounded-2xl shadow-playful-inner transition-all flex items-center justify-between border-2 border-b-4 ${btnClass}`}
                >
                  <span>{option}</span>
                  {isSelected && <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-glow shadow-indigo-500/50"></div>}
                </button>
              );
            })}
          </div>
        )}

        {currentQuestion.type === 'fill-blank' && (
          <div className="grid grid-cols-1 gap-3.5">
            {currentQuestion.options?.map((option) => {
              const isSelected = selectedOption === option;
              
              let btnClass = theme === 'dark' 
                ? isSelected
                  ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                  : "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300"
                : isSelected
                  ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                  : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm";

              return (
                <button
                  key={option}
                  onClick={() => !isAnswered && setSelectedOption(option)}
                  disabled={isAnswered}
                  className={`w-full text-left font-outfit font-extrabold p-4 rounded-2xl shadow-playful-inner transition-all flex items-center justify-between border-2 border-b-4 ${btnClass}`}
                >
                  <span>{option}</span>
                  {isSelected && <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-glow shadow-indigo-500/50"></div>}
                </button>
              );
            })}
          </div>
        )}

        {currentQuestion.type === 'translate' && (
          <textarea
            placeholder="Type translation..."
            value={translateInput}
            onChange={(e) => setTranslateInput(e.target.value)}
            disabled={isAnswered}
            className={`w-full border-2 rounded-2xl p-4 min-h-[120px] focus:border-indigo-500 focus:outline-none text-base font-semibold leading-relaxed shadow-playful-inner transition-all ${
              theme === 'dark' 
                ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' 
                : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'
            }`}
          ></textarea>
        )}

        {currentQuestion.type === 'tap-pairs' && (
          <div className="space-y-4">
            {tapFeedbackMessage && (
              <div className="bg-rose-500/15 border border-rose-500 text-rose-450 text-center py-2 rounded-xl text-xs font-bold">
                {tapFeedbackMessage}
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4">
              {/* Column A (Left language words) */}
              <div className="space-y-3">
                <h4 className={`text-xs font-bold uppercase text-center ${
                  theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                }`}>{getLanguageName(lessonId)}</h4>
                {tapLeftWords.map((word) => {
                  const isMatched = !!tapMatches[word];
                  const isSelected = tapLeftSelected === word;
                  
                  let btnClass = theme === 'dark' 
                    ? isMatched
                      ? "border-emerald-500 bg-emerald-500/15 text-emerald-450 opacity-40 cursor-not-allowed"
                      : isSelected
                        ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                        : "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-350"
                    : isMatched
                      ? "border-emerald-500 bg-emerald-500/15 text-emerald-450 opacity-40 cursor-not-allowed"
                      : isSelected
                        ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm";

                  return (
                    <button
                      key={word}
                      disabled={isMatched || isAnswered}
                      onClick={() => setTapLeftSelected(word)}
                      className={`w-full font-outfit font-bold p-3.5 rounded-xl text-center shadow-playful-inner text-sm md:text-base border-2 border-b-4 transition-all ${btnClass}`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>

              {/* Column B (Right translation words) */}
              <div className="space-y-3">
                <h4 className={`text-xs font-bold uppercase text-center ${
                  theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                }`}>Translation</h4>
                {tapRightWords.map((word) => {
                  const isMatched = Object.values(tapMatches).includes(word);
                  const isSelected = tapRightSelected === word;
                  
                  let btnClass = theme === 'dark' 
                    ? isMatched
                      ? "border-emerald-500 bg-emerald-500/15 text-emerald-450 opacity-40 cursor-not-allowed"
                      : isSelected
                        ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                        : "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-355"
                    : isMatched
                      ? "border-emerald-500 bg-emerald-500/15 text-emerald-450 opacity-40 cursor-not-allowed"
                      : isSelected
                        ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm";

                  return (
                    <button
                      key={word}
                      disabled={isMatched || isAnswered}
                      onClick={() => setTapRightSelected(word)}
                      className={`w-full font-outfit font-bold p-3.5 rounded-xl text-center shadow-playful-inner text-sm md:text-base border-2 border-b-4 transition-all ${btnClass}`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Answer Verification Check Bar */}
      <div className={`w-full border-t pt-4 mt-4 ${
        theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          {!isAnswered ? (
            <>
              <div className={`hidden sm:block text-xs font-semibold ${
                theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Choose the correct answer card to check
              </div>
              <button
                onClick={handleCheckAnswer}
                disabled={(!selectedOption && !translateInput && currentQuestion.type !== 'tap-pairs')}
                className={`w-full sm:w-auto px-10 py-4 rounded-2xl disabled:opacity-40 font-extrabold transition-all ${
                  (!selectedOption && !translateInput && currentQuestion.type !== 'tap-pairs')
                    ? theme === 'dark' 
                      ? 'bg-slate-850 border-b-4 border-slate-950 text-slate-600 cursor-not-allowed' 
                      : 'bg-slate-200 border-b-4 border-slate-300 text-slate-450 cursor-not-allowed'
                    : 'btn-3d-blue bg-indigo-650 border-indigo-850 text-white'
                }`}
              >
                {getTranslation('checkAnswer', interfaceLang)}
              </button>
            </>
          ) : (
            <div className={`w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-slate-900 border-slate-800' 
                : 'bg-white border-slate-200 shadow-lg text-slate-800'
            }`}>
              <div className="flex items-center gap-3">
                {isCorrect ? (
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-450 flex items-center justify-center">
                    <CheckCircle2 size={28} />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-455 flex items-center justify-center animate-bounce">
                    <ShieldAlert size={28} />
                  </div>
                )}
                <div className="text-left">
                  <div className={`text-sm font-black ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                    {isCorrect ? getTranslation('excellentJob', interfaceLang) : getTranslation('incorrectAnswer', interfaceLang)}
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    {isCorrect ? getTranslation('correctAnswerMsg', interfaceLang) : `${getTranslation('correctAnswerMsg', interfaceLang)}: ${currentQuestion.correctAnswer}`}
                  </div>
                </div>
              </div>
              <button onClick={handleNext} className="w-full sm:w-auto px-10 py-4 btn-3d-green bg-emerald-600 border-emerald-800 text-white font-extrabold">
                {getTranslation('continue', interfaceLang)}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonPlayer;
