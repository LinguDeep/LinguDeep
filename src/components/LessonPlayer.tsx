import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lesson, Question } from '../services/db';
import { LANGUAGE_VOCABULARY, generateQuestionsForLesson } from '../services/dbInitializer';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { X, Heart, ShieldAlert, CheckCircle2, Award, Coins, Flame } from 'lucide-react';
import { localizePrompt, getTranslation } from '../services/i18n';
import { audioEffects } from '../services/audio';

const VOCAB_MAP: Record<string, Record<string, string>> = {
  'hello': { en: 'Hello', tr: 'Merhaba', es: 'Hola', fr: 'Bonjour', de: 'Hallo', ja: 'こんにちは', it: 'Ciao', zh: '你好', pt: 'Olá', ru: 'Привет', ko: '안녕하세요' },
  'goodbye': { en: 'Goodbye', tr: 'Hoşça kal', es: 'Adiós', fr: 'Au revoir', de: 'Tschüss', ja: 'さようなら', it: 'Arrivederci', zh: '再见', pt: 'Adeus', ru: 'До свидания', ko: '안녕' },
  'please': { en: 'Please', tr: 'Lütfen', es: 'Por favor', fr: 'S\'il vous plaît', de: 'Bitte', ja: 'お願いします', it: 'Per favor', zh: '请', pt: 'Por favor', ru: 'Пожалуйста', ko: '부탁합니다' },
  'thank you': { en: 'Thank you', tr: 'Teşekkürler', es: 'Gracias', fr: 'Merci', de: 'Danke', ja: 'ありがとう', it: 'Grazie', zh: '谢谢', pt: 'Obrigado', ru: 'Спасибо', ko: '감사합니다' },
  'friend': { en: 'Friend', tr: 'Arkadaş', es: 'El amigo', fr: 'L\'ami', de: 'Der Freund', ja: '友達', it: 'L\'amico', zh: '朋友', pt: 'O amigo', ru: 'Друг', ko: '친구' },
  'mother': { en: 'Mother', tr: 'Anne', es: 'La madre', fr: 'La mère', de: 'Die Mutter', ja: '母', it: 'La madre', zh: '母亲', pt: 'A mãe', ru: 'Мать', ko: '어머니' },
  'father': { en: 'Father', tr: 'Baba', es: 'El padre', fr: 'Le père', de: 'Der Vater', ja: '父', it: 'Il padre', zh: '父亲', pt: 'O pai', ru: 'Отец', ko: '아버지' },
  'brother': { en: 'Brother', tr: 'Erkek kardeş', es: 'El hermano', fr: 'Le frère', de: 'Der Bruder', ja: '兄', it: 'Il fratello', zh: '兄弟', pt: 'O irmão', ru: 'Брат', ko: '형제' },
  'sister': { en: 'Sister', tr: 'Kız kardeş', es: 'La hermana', fr: 'La sœur', de: 'Die Schwester', ja: '姉', it: 'La sorella', zh: '자매', pt: 'A irmã', ru: 'Сестра', ko: '자매' },
  'water': { en: 'Water', tr: 'Su', es: 'El agua', fr: 'L\'eau', de: 'Das Wasser', ja: '水', it: 'L\'acqua', zh: '水', pt: 'A água', ru: 'Вода', ko: '물' },
  'bread': { en: 'Bread', tr: 'Ekmek', es: 'El pan', fr: 'Le pain', de: 'Das Brot', ja: 'パン', it: 'Il pane', zh: '面包', pt: 'O pão', ru: 'Хлеб', ko: '빵' },
  'book': { en: 'Book', tr: 'Kitap', es: 'El libro', fr: 'Le livre', de: 'Das Buch', ja: '本', it: 'Il libro', zh: '书', pt: 'O livro', ru: 'Книга', ko: '책' },
  'one': { en: 'One', tr: 'Bir', es: 'Uno', fr: 'Un', de: 'Eins', ja: '一', it: 'Uno', zh: '一', pt: 'Um', ru: 'Один', ko: '일' },
  'two': { en: 'Two', tr: 'İki', es: 'Dos', fr: 'Deux', de: 'Zwei', ja: '二', it: 'Due', zh: '二', pt: 'Dois', ru: 'Два', ko: '이' },
  'three': { en: 'Three', tr: 'Üç', es: 'Tres', fr: 'Trois', de: 'Drei', ja: '三', it: 'Tre', zh: '三', pt: 'Três', ru: 'Tri', ko: '삼' },
  'red': { en: 'Red', tr: 'Kırmızı', es: 'Rojo', fr: 'Rouge', de: 'Rot', ja: '赤', it: 'Rosso', zh: '红', pt: 'Vermelho', ru: 'Красный', ko: '빨간색' },
  'blue': { en: 'Blue', tr: 'Mavi', es: 'Azul', fr: 'Bleu', de: 'Blau', ja: '青', it: 'Blu', zh: '蓝', pt: 'Azul', ru: 'Синий', ko: '파aran색' },
  'green': { en: 'Green', tr: 'Yeşil', es: 'Verde', fr: 'Vert', de: 'Grün', ja: '緑', it: 'Verde', zh: '绿', pt: 'Verde', ru: 'Зеленый', ko: '초록색' },
  'sun': { en: 'Sun', tr: 'Güneş', es: 'El sol', fill: 'sol', fr: 'Le soleil', de: 'Die Sonne', ja: '太陽', it: 'Il sole', zh: '太阳', pt: 'O sol', ru: 'Солнце', ko: '태양' },
  'rain': { en: 'Rain', tr: 'Yağmur', es: 'La lluvia', fr: 'La pluie', de: 'Der Regen', ja: '雨', it: 'La pioggia', zh: '雨', pt: 'A chuva', ru: 'Дождь', ko: '비' },
  'wind': { en: 'Wind', tr: 'Rüzgar', es: 'El viento', fr: 'Le vent', de: 'Der Wind', ja: '風', it: 'Il vento', zh: '风', pt: 'O vento', ru: 'Ветер', ko: '바람' },
  'where is the station': { en: "Where is the station?", tr: "İstasyon nerede?", es: "¿Dónde está la estación?", fr: "Où est la gare ?", de: "Wo ist der Bahnhof?", it: "Dov'è la stazione?", pt: "Onde fica a estação?", ru: "Где находится станция?", zh: "车站在哪里？", ja: "駅はどこですか？", ko: "역이 어디인가요?", ar: "أين المحطة؟", nl: "Waar is het station?", sv: "Var ligger stationen?", hi: "स्टेशन कहाँ है?" },
  'how much is this': { en: "How much is this?", tr: "Bu ne kadar?", es: "¿Cuánto cuesta esto?", fr: "Combien ça coûte ?", de: "Wie viel kostet das?", it: "Quanto costa questo?", pt: "Quanto custa isto?", ru: "Сколько это стоит?", zh: "这个多少钱？", ja: "これはいくらですか？", ko: "이것은 얼마인가요?", ar: "بكم هذا؟", nl: "Hoeveel kost dit?", sv: "Hur mycket kostar den här?", hi: "यह कितने का है?" },
  'i love my family': { en: "I love my family.", tr: "Ailemi seviyorum.", es: "Amo a mi familia.", fr: "J'aime ma famille.", de: "Ich liebe meine Familie.", it: "Amo la mia famiglia.", pt: "Eu amo a minha família.", ru: "Я люблю свою семью.", zh: "我爱我的家庭。", ja: "家族を愛しています。", ko: "가족을 사랑합니다.", ar: "أنا أحب عائلتي.", nl: "Ik hou van mijn familie.", sv: "Jag älskar min familj.", hi: "मैं अपने परिवार से प्यार करता हूँ।" },
  'what is your name': { en: "What is your name?", tr: "Adınız nedir?", es: "¿Cómo te llamas?", fr: "Comment vous appelez-vous ?", de: "Wie heißen Sie?", it: "Come ti chiami?", pt: "Qual é o seu nome?", ru: "Как вас зовут?", zh: "你叫什么名字？", ja: "お名前は何ですか？", ko: "이름이 무엇인가요?", ar: "ما اسمك؟", nl: "Wat is je naam?", sv: "Vad heter du?", hi: "आपका नाम क्या है?" },
  'i speak some english': { en: "I speak some English.", tr: "Biraz İngilizce konuşuyorum.", es: "Hablo un poco de inglés.", fr: "Je parle un peu anglais.", de: "Ich spreche ein wenig Englisch.", it: "Parlo un po' di inglese.", pt: "Eu falo um pouco de inglês.", ru: "Я немного говорю по-английски.", zh: "我会说一点英语。", ja: "英語が少し話せます。", ko: "영어를 조금 할 줄 압니다.", ar: "أتحدث القليل من الإنجليزية.", nl: "Ik spreek een beetje Engels.", sv: "Jag talar lite engelska.", hi: "मैं थोड़ी अंग्रेजी बोलता हूँ।" },
  'if i had money, i would travel': { en: "If I had money, I would travel.", tr: "Param olsaydı seyahat ederdim.", es: "Si tuviera dinero, viajaría.", fr: "Si j'avais de l'argent, je voyagerais.", de: "Wenn ich Geld hätte, würde ich reisen.", it: "Se avessi soldi, viaggerei.", pt: "Se eu tivesse dinheiro, viajaria.", ru: "Если бы у меня были деньги, я бы путешествовал.", zh: "如果我有钱，我就会去旅行。", ja: "お金があれば旅行するのに。", ko: "돈이 있다면 여행을 갈 텐데요.", ar: "لو كان لدي مال لسافرت.", nl: "Als ik geld had, zou ik reizen.", sv: "Om jag hade pengar skulle jag resa.", hi: "अगर मेरे पास पैसे होते, तो я यात्रा करता।" },
  'please explain this to me': { en: "Please explain this to me.", tr: "Lütfen bunu bana açıklayın.", es: "Por favor explécame esto.", fr: "S'il vous plaît expliquez-moi cela.", de: "Bitte erklären Sie mir das.", it: "Per favore spiegami questo.", pt: "Por favor, explique-me isto.", ru: "Пожалуйста, объясните мне это.", zh: "请向我解释一下这个。", ja: "これを説明してください。", ko: "이것을 설명해 주세요.", ar: "يرجى شرح هذا لي.", nl: "Leg dit me alstublieft uit.", sv: "Förklara detta för mig, tack.", hi: "कृपया मुझे यह समझाएं।" },
  'actions speak louder than words': { en: "Actions speak louder than words.", tr: "Lafla peynir gemisi yürümez.", es: "Las palabras se las lleva el viento.", fr: "Les actes parlent plus que les mots.", de: "Taten sagen mehr als Worte.", it: "Le azioni contano più delle parole.", pt: "Ações valem mais que palavras.", ru: "Дела говорят громче слов.", zh: "事实胜于雄辩。", ja: "論より証拠。", ko: "말보다 행동이 중요하다.", ar: "الأفعال أبلغ من الأقوال.", nl: "Geen woorden maar daden.", sv: "Handlingar talar högre än ord.", hi: "कथनी से करनी भली।" },
  'it is raining heavily today': { en: "It is raining heavily today.", tr: "Bugün çok şiddetli yağmur yağıyor.", es: "Hoy está lloviendo fuertemente.", fr: "Il pleut à verse aujourd'hui.", de: "Heute regnet es in Strömen.", it: "Oggi sta piovendo forte.", pt: "Hoje está chovendo muito.", ru: "Сегодня идет сильный дождь.", zh: "今天雨下得很大。", ja: "今日は大雨 gが降っています。", ko: "오늘 비가 많이 내립니다.", ar: "إنها تمطر بغزارة اليوم.", nl: "Het regent hard vandaag.", sv: "Det regnar kraftigt idag.", hi: "आज बहुत तेज बारिश ho रही है।" },
  'i look forward to meeting you': { en: "I look forward to meeting you.", tr: "Sizinle tanışmayı dört gözle bekliyorum.", es: "Espero conocerte pronto.", fr: "J'ai hâte de vous rencontrer.", de: "Ich freue mich darauf, Sie kennenzulernen.", it: "Non vedo l'ora di conoscerti.", pt: "Estou ansioso para conhecer você.", ru: "Я с нетерпением жду встречи с вами.", zh: "我期待与您见面。", ja: "お会いできるのを楽しみにしています。", ko: "만나 뵙기를 기대합니다.", ar: "أتطلع للقائك.", nl: "Ik verheug me erop u te ontmoeten.", sv: "Jag ser fram emot att träffa dig.", hi: "मुझे आपसे मिलने का इंतजार है।" },
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

  const clean = phrase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
  
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
        const clean = opt.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
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
        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">Loading Lesson Player...</p>
      </div>
    );
  }

  // Normalization logic for Turkish İ combiners
  const cleanStringForCompare = (str: string) => {
    return str
      .trim()
      .toLowerCase()
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
            <h2 className={`text-3xl font-extrabold font-outfit mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>No Lives Left</h2>
            <p className={`text-sm font-semibold leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              Don't worry! Review your vocab, recharge your hearts, and try again. Practice makes perfect!
            </p>
          </div>
          <button onClick={onClose} className="w-full btn-3d-red py-4 bg-rose-600 border-rose-800">
            Back to Dashboard
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
            <h2 className={`text-3xl font-black font-outfit ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Lesson Complete!</h2>
            <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              You are becoming a master speaker! Keep up the daily streak.
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
        <span className={`text-xs font-bold uppercase tracking-widest mb-1 block ${
          theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
        }`}>
          {currentQuestion.type === 'tap-pairs' ? 'Matching Pairs' : 'Question Prompt'}
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
