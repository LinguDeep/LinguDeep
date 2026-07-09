import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { localizePrompt } from '../services/i18n';
import { ArrowLeft, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { audioEffects } from '../services/audio';

interface Question {
  id: number;
  prompt: string;
  options: string[];
  correctAnswer: string;
}

interface LangVocab {
  hello: string; goodbye: string; please: string; thankYou: string;
  mother: string; father: string; friend: string; brother: string; sister: string;
  water: string; bread: string; book: string; one: string; two: string; three: string;
  red: string; blue: string; green: string; sun: string; rain: string; wind: string;
}

const LANGUAGE_VOCABULARY: Record<string, LangVocab> = {
  es: { hello: 'Hola', goodbye: 'Adiós', please: 'Por favor', thankYou: 'Gracias', mother: 'La madre', father: 'El padre', friend: 'El amigo', brother: 'El hermano', sister: 'La hermana', water: 'El agua', bread: 'El pan', book: 'El libro', one: 'Uno', two: 'Dos', three: 'Tres', red: 'Rojo', blue: 'Azul', green: 'Verde', sun: 'El sol', rain: 'La lluvia', wind: 'El viento' },
  fr: { hello: 'Bonjour', goodbye: 'Au revoir', please: 'S\'il vous plaît', thankYou: 'Merci', mother: 'La mère', father: 'Le père', friend: 'L\'ami', brother: 'Le frère', sister: 'La sœur', water: 'L\'eau', bread: 'Le pain', book: 'Le livre', one: 'Un', two: 'Deux', three: 'Trois', red: 'Rouge', blue: 'Bleu', green: 'Vert', sun: 'Le soleil', rain: 'La pluie', wind: 'Le vent' },
  de: { hello: 'Hallo', goodbye: 'Tschüss', please: 'Bitte', thankYou: 'Danke', mother: 'Die Mutter', father: 'Der Vater', friend: 'Der Freund', brother: 'Der Bruder', sister: 'Die Schwester', water: 'Das Wasser', bread: 'Das Brot', book: 'Das Buch', one: 'Eins', two: 'Zwei', three: 'Drei', red: 'Rot', blue: 'Blau', green: 'Grün', sun: 'Die Sonne', rain: 'Der Regen', wind: 'Der Wind' },
  ja: { hello: 'こんにちは', goodbye: 'さようなら', please: 'お願いします', thankYou: 'ありがとう', mother: '母', father: '父', friend: '友達', brother: '兄', sister: '姉', water: '水', bread: 'パン', book: '本', one: '一', two: '二', three: '三', red: '赤', blue: '青', green: '緑', sun: '太陽', rain: '雨', wind: '風' },
  it: { hello: 'Ciao', goodbye: 'Arrivederci', please: 'Per favore', thankYou: 'Grazie', mother: 'La madre', father: 'Il padre', friend: 'L\'amico', brother: 'Il fratello', sister: 'La sorella', water: 'L\'acqua', bread: 'Il pane', book: 'Il libro', one: 'Uno', two: 'Due', three: 'Tre', red: 'Rosso', blue: 'Blu', green: 'Verde', sun: 'Il sol', rain: 'La pioggia', wind: 'Il vento' },
  zh: { hello: '你好', goodbye: '再见', please: '请', thankYou: '谢谢', mother: '母亲', father: '父亲', friend: '朋友', brother: '哥哥', sister: '姐姐', water: '水', bread: '面包', book: '书', one: '一', two: '二', three: '三', red: '红', blue: '蓝', green: '绿', sun: '太阳', rain: '雨', wind: '风' },
  ru: { hello: 'Привет', goodbye: 'Пока', please: 'Пожалуйста', thankYou: 'Спасибо', mother: 'Мать', father: 'Отец', friend: 'Друг', brother: 'Брат', sister: 'Сестра', water: 'Вода', bread: 'Хлеб', book: 'Книга', one: 'Один', two: 'Два', three: 'Три', red: 'Красный', blue: 'Синий', green: 'Зеленый', sun: 'Солнце', rain: 'Дождь', wind: 'Ветер' },
  pt: { hello: 'Olá', goodbye: 'Adeus', please: 'Por favor', thankYou: 'Obrigado', mother: 'A mãe', father: 'O pai', friend: 'O amigo', brother: 'O irmão', sister: 'A irmã', water: 'A água', bread: 'O pão', book: 'O libro', one: 'Um', two: 'Dois', three: 'Três', red: 'Vermelho', blue: 'Azul', green: 'Verde', sun: 'O sol', rain: 'A chuva', wind: 'O vento' },
  ko: { hello: '안녕하세요', goodbye: '안녕히 가세요', please: '부탁합니다', thankYou: '감사합니다', mother: '어머니', father: '아버지', friend: '친구', brother: '형', sister: '누나', water: '물', bread: '빵', book: '책', one: '일', two: '이', three: '삼', red: '빨간색', blue: '파란색', green: '초록색', sun: '태양', rain: '비', wind: '바람' },
  tr: { hello: 'Merhaba', goodbye: 'Hoşça kal', please: 'Lütfen', thankYou: 'Teşekkürler', mother: 'Anne', father: 'Baba', friend: 'Arkadaş', brother: 'Erkek kardeş', sister: 'Kız kardeş', water: 'Su', bread: 'Ekmek', book: 'Kitap', one: 'Bir', two: 'İki', three: 'Üç', red: 'Kırmızı', blue: 'Mavi', green: 'Yeşil', sun: 'Güneş', rain: 'Yağmur', wind: 'Rüzgar' },
  ar: { hello: 'مرحبا', goodbye: 'وداعا', please: 'من فضلك', thankYou: 'شكرا', mother: 'الأم', father: 'الأب', friend: 'الصديق', brother: 'أخ', sister: 'أخت', water: 'الماء', bread: 'الخبz', book: 'الكتاب', one: 'واحد', two: 'اثنين', three: 'ثلاثة', red: 'أحمر', blue: 'أزرق', green: 'أخضر', sun: 'شمس', rain: 'مطر', wind: 'ريح' },
  nl: { hello: 'Hallo', goodbye: 'Tot ziens', please: 'Alsjeblieft', thankYou: 'Bedankt', mother: 'De moeder', father: 'De vader', friend: 'De vriend', brother: 'De broer', sister: 'De zus', water: 'Het water', bread: 'Het brood', book: 'Het boek', one: 'Een', two: 'Twee', three: 'Drie', red: 'Rood', blue: 'Blauw', green: 'Groen', sun: 'De zon', rain: 'De regen', wind: 'De wind' },
  sv: { hello: 'Hallå', goodbye: 'Hejdå', please: 'Snälla', thankYou: 'Tack', mother: 'Mamman', father: 'Pappan', friend: 'Vännen', brother: 'Brodern', sister: 'Systern', water: 'Vatten', bread: 'Bröd', book: 'Boken', one: 'En', two: 'Två', three: 'Tre', red: 'Röd', blue: 'Blå', green: 'Grön', sun: 'Solen', rain: 'Regn', wind: 'Vind' },
  hi: { hello: 'नमस्ते', goodbye: 'अलविदा', please: 'कृपया', thankYou: 'धन्यवाद', mother: 'माता', father: 'पिता', friend: 'मित्र', brother: 'भाई', sister: 'बहन', water: 'पानी', bread: 'रोटी', book: 'पुस्तक', one: 'एक', two: 'दो', three: 'तीन', red: 'लाल', blue: 'नीला', green: 'हरा', sun: 'सूर्य', rain: 'वर्षा', wind: 'हवा' },
  en: { hello: 'Hello', goodbye: 'Goodbye', please: 'Please', thankYou: 'Thank you', mother: 'Mother', father: 'Father', friend: 'Friend', brother: 'Brother', sister: 'Sister', water: 'Water', bread: 'Bread', book: 'Book', one: 'One', two: 'Two', three: 'Three', red: 'Red', blue: 'Blue', green: 'Green', sun: 'Sun', rain: 'Rain', wind: 'Wind' }
};

const PLACEMENT_QUESTIONS: Record<string, Question[]> = {
  es: [
    { id: 1, prompt: 'How do you say "Good morning" in Spanish?', options: ['Buenos días', 'Buenas noches', 'Hola', 'Gracias'], correctAnswer: 'Buenos días' },
    { id: 2, prompt: 'What does "El gato come pescado" mean?', options: ['The dog eats fish', 'The cat eats fish', 'The cat drinks milk', 'The bird eats seeds'], correctAnswer: 'The cat eats fish' },
    { id: 3, prompt: 'Choose the correct plural form of "el libro":', options: ['los libros', 'las libros', 'el libros', 'un libros'], correctAnswer: 'los libros' },
    { id: 4, prompt: 'Which word completes the sentence: "Yo ______ español" (I speak Spanish)?', options: ['hablo', 'habla', 'hablan', 'hablas'], correctAnswer: 'hablo' },
    { id: 5, prompt: 'Translate: "The train station is near the park."', options: ['La estación de tren está cerca del parque.', 'El aeropuerto está lejos del parque.', 'La estación de tren está detrás de la casa.', 'El hotel está cerca de la estación.'], correctAnswer: 'La estación de tren está cerca del parque.' },
    { id: 6, prompt: 'Which verb form goes in: "Ayer nosotros ______ football" (Yesterday we played soccer)?', options: ['jugamos', 'jugaron', 'juegan', 'jugaban'], correctAnswer: 'jugamos' },
    { id: 7, prompt: 'What is the opposite of "rápido" (fast)?', options: ['lento', 'fácil', 'alto', 'triste'], correctAnswer: 'lento' },
    { id: 8, prompt: 'Complete: "Si tuviera más dinero, ______ un coche nuevo."', options: ['compraría', 'compraré', 'compraba', 'compro'], correctAnswer: 'compraría' },
    { id: 9, prompt: 'Identify the correct subjunctive form: "Espero que tú ______ al examen."', options: ['vengas', 'vienes', 'viniste', 'venir'], correctAnswer: 'vengas' },
    { id: 10, prompt: 'What does the idiom "Estar en las nubes" mean?', options: ['To be day-dreaming / distracted', 'To be flying high', 'To be angry', 'To be raining heavily'], correctAnswer: 'To be day-dreaming / distracted' }
  ],
  fr: [
    { id: 1, prompt: 'How do you say "Thank you very much" in French?', options: ['Merci beaucoup', 'S\'il vous plaît', 'Bonjour', 'De rien'], correctAnswer: 'Merci beaucoup' },
    { id: 2, prompt: 'What does "Le chien mange du pain" mean?', options: ['The dog eats bread', 'The cat drinks milk', 'The bird eats seeds', 'The dog eats meat'], correctAnswer: 'The dog eats bread' },
    { id: 3, prompt: 'Which article goes with "voiture" (car)?', options: ['la', 'le', 'un', 'les'], correctAnswer: 'la' },
    { id: 4, prompt: 'Complete: "J\'______ un stylo" (I have a pen).', options: ['ai', 'es', 'a', 'avez'], correctAnswer: 'ai' },
    { id: 5, prompt: 'Translate: "Where is the bakery?"', options: ['Où est la boulangerie ?', 'Où est l\'hôtel ?', 'Quand part le train ?', 'Combien ça coûte ?'], correctAnswer: 'Où est la boulangerie ?' },
    { id: 6, prompt: 'What is the past participle of the verb "prendre" (to take)?', options: ['pris', 'prendre', 'prendu', 'prené'], correctAnswer: 'pris' },
    { id: 7, prompt: 'What is the opposite of "petit" (small)?', options: ['grand', 'froid', 'rapide', 'jeune'], correctAnswer: 'grand' },
    { id: 8, prompt: 'Complete: "Si j\'avais le temps, je ______ avec toi."', options: ['partirais', 'partirai', 'pars', 'partais'], correctAnswer: 'partirais' },
    { id: 9, prompt: 'Select the correct subjunctive form: "Il faut que tu ______ tes devoirs."', options: ['fasses', 'fais', 'fait', 'faire'], correctAnswer: 'fasses' },
    { id: 10, prompt: 'What does the idiom "Avoir le cafard" mean?', options: ['To feel depressed / blue', 'To have a cockroach', 'To be energetic', 'To be hungry'], correctAnswer: 'To feel depressed / blue' }
  ],
  de: [
    { id: 1, prompt: 'How do you say "Welcome" in German?', options: ['Willkommen', 'Guten Morgen', 'Auf Wiedersehen', 'Danke schön'], correctAnswer: 'Willkommen' },
    { id: 2, prompt: 'What is the gender of "Mädchen" (girl)?', options: ['Neutrum (das)', 'Femininum (die)', 'Maskulinum (der)', 'Plural (die)'], correctAnswer: 'Neutrum (das)' },
    { id: 3, prompt: 'What does "Ich trinke Wasser" mean?', options: ['I drink water', 'I eat bread', 'I like juice', 'He drinks water'], correctAnswer: 'Ich trinke Wasser' },
    { id: 4, prompt: 'Complete the sentence: "Wir ______ Deutsch lernen."', options: ['wollen', 'will', 'wollt', 'willst'], correctAnswer: 'wollen' },
    { id: 5, prompt: 'Translate: "Where is the train station?"', options: ['Wo ist der Bahnhof?', 'Wo ist der Flughafen?', 'Wie viel kostet das?', 'Wann kommt der Zug?'], correctAnswer: 'Wo ist der Bahnhof?' },
    { id: 6, prompt: 'What is the past tense of "gehen" (to go)?', options: ['ging', 'gegangen', 'geht', 'gingen'], correctAnswer: 'ging' },
    { id: 7, prompt: 'Choose the correct preposition: "Ich fahre ______ Berlin."', options: ['nach', 'zu', 'in', 'bei'], correctAnswer: 'nach' },
    { id: 8, prompt: 'Complete: "Wenn ich Zeit hätte, ______ ich kommen."', options: ['würde', 'werde', 'wollte', 'hätte'], correctAnswer: 'würde' },
    { id: 9, prompt: 'Which case is triggered by the preposition "mit" (with)?', options: ['Dativ', 'Akkusativ', 'Genitiv', 'Nominativ'], correctAnswer: 'Dativ' },
    { id: 10, prompt: 'What does "Kulleraugen" refer to?', options: ['Big round eyes', 'Rolling dice', 'Round glasses', 'Sweet candies'], correctAnswer: 'Big round eyes' }
  ],
  en: [
    { id: 1, prompt: 'How do you say "Hello" in English?', options: ['Hello', 'Goodbye', 'Please', 'Thank you'], correctAnswer: 'Hello' },
    { id: 2, prompt: 'What does "The cat drinks milk" mean?', options: ['The cat drinks milk', 'The dog plays', 'The cat sleeps', 'The bird sings'], correctAnswer: 'The cat drinks milk' },
    { id: 3, prompt: 'Choose the correct plural form of "child":', options: ['children', 'childs', 'childrens', 'childes'], correctAnswer: 'children' },
    { id: 4, prompt: 'Which word completes the sentence: "She ______ to school every day"?', options: ['goes', 'go', 'going', 'went'], correctAnswer: 'goes' },
    { id: 5, prompt: 'Translate: "The library is near the park."', options: ['The library is near the park.', 'The store is far away.', 'The train is fast.', 'The hotel is close.'], correctAnswer: 'The library is near the park.' },
    { id: 6, prompt: 'Which verb form goes in: "Yesterday they ______ a movie"?', options: ['watched', 'watch', 'watching', 'watches'], correctAnswer: 'watched' },
    { id: 7, prompt: 'What is the opposite of "heavy" (heavy)?', options: ['light', 'dark', 'small', 'soft'], correctAnswer: 'light' },
    { id: 8, prompt: 'Complete: "If I had more time, I ______ learn another language."', options: ['would', 'will', 'am', 'did'], correctAnswer: 'would' },
    { id: 9, prompt: 'Identify the correct passive voice: "The book ______ by John."', options: ['was written', 'wrote', 'was writing', 'written'], correctAnswer: 'was written' },
    { id: 10, prompt: 'What does the idiom "Break a leg" mean?', options: ['Good luck', 'To get injured', 'To start running', 'To be angry'], correctAnswer: 'Good luck' }
  ],
  tr: [
    { id: 1, prompt: 'How do you say "Merhaba" in Turkish?', options: ['Merhaba', 'Hoşça kal', 'Lütfen', 'Teşekkürler'], correctAnswer: 'Merhaba' },
    { id: 2, prompt: 'What does "Kedi süt içer" mean?', options: ['The cat drinks milk', 'The dog eats meat', 'The bird flies', 'The horse runs'], correctAnswer: 'The cat drinks milk' },
    { id: 3, prompt: 'Choose the correct plural form of "ev" (house):', options: ['evler', 'evlar', 'evlerler', 'evlerimiz'], correctAnswer: 'evler' },
    { id: 4, prompt: 'Which word completes the sentence: "Bugün hava çok ______"?', options: ['güzel', 'güzeller', 'güzelce', 'güzelleş'], correctAnswer: 'güzel' },
    { id: 5, prompt: 'Translate: "The weather is very hot."', options: ['Hava çok sıcak.', 'Hava çok soğuk.', 'Yağmur yağıyor.', 'Rüzgar esiyor.'], correctAnswer: 'Hava çok sıcak.' },
    { id: 6, prompt: 'Which verb form goes in: "Dün sinemaya ______" (Yesterday we went to the cinema)?', options: ['gittik', 'gidiyoruz', 'gideceğiz', 'gitmek'], correctAnswer: 'gittik' },
    { id: 7, prompt: 'What is the opposite of "büyük" (big)?', options: ['küçük', 'uzun', 'geniş', 'temiz'], correctAnswer: 'küçük' },
    { id: 8, prompt: 'Complete: "Eğer vaktim olsaydı, seninle ______."', options: ['gelirdim', 'gelirim', 'geleceğim', 'gelmek'], correctAnswer: 'gelirdim' },
    { id: 9, prompt: 'Identify the correct form: "Kitap onun tarafından ______" (The book was read by him).', options: ['okundu', 'okudu', 'okuyor', 'okumak'], correctAnswer: 'okundu' },
    { id: 10, prompt: 'What does the idiom "Kulak misafiri olmak" mean?', options: ['To eavesdrop / overhear', 'To be a guest', 'To have big ears', 'To listen carefully'], correctAnswer: 'To eavesdrop / overhear' }
  ]
};

interface PlacementTestProps {
  languageCode: string;
  onBack: () => void;
  onComplete: (tier: number) => void;
}

const getLanguageName = (id: string) => {
  const names: Record<string, string> = {
    es: 'Spanish', fr: 'French', de: 'German', ja: 'Japanese', it: 'Italian',
    zh: 'Chinese', ru: 'Russian', pt: 'Portuguese', ko: 'Korean', tr: 'Turkish',
    ar: 'Arabic', nl: 'Dutch', sv: 'Swedish', hi: 'Hindi', en: 'English'
  };
  return names[id] || 'Target Language';
};

const getDynamicQuestions = (langCode: string): Question[] => {
  if (PLACEMENT_QUESTIONS[langCode]) {
    return PLACEMENT_QUESTIONS[langCode];
  }
  
  // Dynamic generation from vocabulary
  const vocab = LANGUAGE_VOCABULARY[langCode] || LANGUAGE_VOCABULARY.en;
  const langName = getLanguageName(langCode);
  
  return [
    { id: 1, prompt: `How do you say "Hello" in ${langName}?`, options: [vocab.hello, vocab.goodbye, vocab.please, vocab.thankYou], correctAnswer: vocab.hello },
    { id: 2, prompt: `How do you say "Goodbye" in ${langName}?`, options: [vocab.goodbye, vocab.hello, vocab.please, vocab.thankYou], correctAnswer: vocab.goodbye },
    { id: 3, prompt: `How do you say "Please" in ${langName}?`, options: [vocab.please, vocab.hello, vocab.goodbye, vocab.thankYou], correctAnswer: vocab.please },
    { id: 4, prompt: `How do you say "Thank you" in ${langName}?`, options: [vocab.thankYou, vocab.please, vocab.goodbye, vocab.hello], correctAnswer: vocab.thankYou },
    { id: 5, prompt: `How do you say "Mother" in ${langName}?`, options: [vocab.mother, vocab.father, vocab.friend, vocab.one], correctAnswer: vocab.mother },
    { id: 6, prompt: `How do you say "Father" in ${langName}?`, options: [vocab.father, vocab.mother, vocab.friend, vocab.two], correctAnswer: vocab.father },
    { id: 7, prompt: `How do you say "Water" in ${langName}?`, options: [vocab.water, vocab.bread, vocab.book, vocab.three], correctAnswer: vocab.water },
    { id: 8, prompt: `How do you say "Bread" in ${langName}?`, options: [vocab.bread, vocab.water, vocab.book, vocab.one], correctAnswer: vocab.bread },
    { id: 9, prompt: `How do you say "Book" in ${langName}?`, options: [vocab.book, vocab.water, vocab.bread, vocab.two], correctAnswer: vocab.book },
    { id: 10, prompt: `How do you say "One" in ${langName}?`, options: [vocab.one, vocab.two, vocab.three, vocab.water], correctAnswer: vocab.one }
  ];
};

const PlacementTest: React.FC<PlacementTestProps> = ({
  languageCode,
  onBack,
  onComplete,
}) => {
  const { interfaceLang, theme } = useAuth();
  const questions = getDynamicQuestions(languageCode);

  // Placement States
  const [step, setStep] = useState<'playing' | 'result'>('playing');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIdx];

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswered) return;
    setIsAnswered(true);
    
    if (selectedOption === currentQuestion.correctAnswer) {
      audioEffects.playCorrect();
      setScore((prev) => prev + 1);
    } else {
      audioEffects.playIncorrect();
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setStep('result');
    }
  };

  // Logic to determine placement tier based on score
  const getTierResult = (finalScore: number) => {
    if (finalScore >= 8) {
      return {
        tier: 3,
        title: 'Tier 3: Expert Advanced Level',
        description: 'Spectacular score! You have strong grasp of grammar, idioms, and vocabulary. Skip the basics and dive straight into advanced conversation courses.'
      };
    } else if (finalScore >= 4) {
      return {
        tier: 2,
        title: 'Tier 2: Intermediate Level',
        description: 'Good job! You know the base expressions and conjugations. We recommend starting at Tier 2 to polish up intermediate family, communication, and work units.'
      };
    } else {
      return {
        tier: 1,
        title: 'Tier 1: Beginner Level',
        description: 'Welcome to your language learning adventure! We recommend starting at Tier 1 to master the basics of greetings, polite expressions, and everyday items.'
      };
    }
  };

  const { tier, title, description } = getTierResult(score);
  const progressPercent = ((currentIdx) / questions.length) * 100;

  return (
    <div className={`min-h-screen flex flex-col justify-between p-4 md:p-6 transition-colors ${
      theme === 'dark' ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header bar */}
      <div className="w-full max-w-2xl mx-auto flex items-center gap-4 mb-6">
        <button 
          onClick={onBack} 
          className={`p-2 rounded-full transition-colors ${
            theme === 'dark' ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-600'
          }`}
        >
          <ArrowLeft size={24} />
        </button>
        <div className={`flex-1 h-3 rounded-full overflow-hidden border ${
          theme === 'dark' ? 'bg-slate-850 border-slate-800' : 'bg-slate-200 border-slate-350'
        }`}>
          <div 
            className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <span className="text-sm font-black font-outfit text-indigo-500">{currentIdx + 1}/{questions.length}</span>
      </div>

      {step === 'playing' ? (
        <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col justify-center my-4">
          <span className={`text-xs font-bold uppercase tracking-widest mb-1.5 block ${
            theme === 'dark' ? 'text-slate-500' : 'text-slate-450'
          }`}>Placement Test</span>
          
          <h3 className={`text-xl md:text-2xl font-outfit font-extrabold mb-6 leading-snug ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}>
            {localizePrompt(currentQuestion.prompt, interfaceLang)}
          </h3>

          <div className="grid grid-cols-1 gap-3.5">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOption === option;
              
              let btnClass = theme === 'dark'
                ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-850 text-slate-300'
                : 'border-slate-250 bg-white hover:bg-slate-50 text-slate-750 shadow-sm';
                
              if (isSelected) {
                btnClass = 'border-indigo-500 bg-indigo-500/10 text-indigo-400 border-b-4';
              }

              return (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isAnswered}
                  className={`w-full text-left font-outfit font-extrabold p-4 rounded-2xl transition-all flex items-center justify-between border-2 ${btnClass}`}
                >
                  <span>{option}</span>
                  {isSelected && <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-glow shadow-indigo-500/50"></div>}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex-1 w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-24 h-24 bg-indigo-500/10 text-indigo-400 rounded-3xl flex items-center justify-center animate-bounce">
            <Sparkles size={48} />
          </div>
          
          <div>
            <h2 className={`text-3xl font-black font-outfit mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
              Placement Successful!
            </h2>
            <div className="inline-block bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
              {title}
            </div>
            <p className={`text-sm leading-relaxed font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {description}
            </p>
          </div>

          <button 
            onClick={() => onComplete(tier)} 
            className="w-full btn-3d-green bg-emerald-600 border-emerald-800 text-white font-extrabold py-4 rounded-2xl"
          >
            Claim Level & Save Progress
          </button>
        </div>
      )}

      {/* Action Check Footer */}
      {step === 'playing' && (
        <div className={`w-full border-t pt-4 mt-4 ${
          theme === 'dark' ? 'border-slate-850' : 'border-slate-200'
        }`}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
            {!isAnswered ? (
              <>
                <div className={`hidden sm:block text-xs font-semibold ${
                  theme === 'dark' ? 'text-slate-500' : 'text-slate-450'
                }`}>
                  Select an answer and check
                </div>
                <button
                  onClick={handleCheckAnswer}
                  disabled={!selectedOption}
                  className={`w-full sm:w-auto px-10 py-4 rounded-2xl disabled:opacity-40 font-extrabold transition-all ${
                    !selectedOption
                      ? theme === 'dark'
                        ? 'bg-slate-850 border-b-4 border-slate-950 text-slate-600 cursor-not-allowed'
                        : 'bg-slate-200 border-b-4 border-slate-300 text-slate-400 cursor-not-allowed'
                      : 'btn-3d-blue bg-indigo-650 border-indigo-850 text-white'
                  }`}
                >
                  Check Answer
                </button>
              </>
            ) : (
              <div className={`w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl border ${
                theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md text-slate-800'
              }`}>
                <div className="flex items-center gap-3">
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-450 flex items-center justify-center">
                      <CheckCircle2 size={28} />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-455 flex items-center justify-center animate-bounce">
                      <AlertTriangle size={28} />
                    </div>
                  )}
                  <div className="text-left">
                    <div className={`text-sm font-black ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                      {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                    </div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-slate-450' : 'text-slate-500'}`}>
                      {selectedOption === currentQuestion.correctAnswer 
                        ? 'Superb! Keep it going.' 
                        : `Correct Answer: ${currentQuestion.correctAnswer}`
                      }
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleNextQuestion} 
                  className="w-full sm:w-auto px-10 py-4 btn-3d-green bg-emerald-600 border-emerald-800 text-white font-extrabold"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacementTest;
