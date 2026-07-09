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

const getDynamicQuestions = (langCode: string, nativeLang: string): Question[] => {
  const nativeVocab = LANGUAGE_VOCABULARY[nativeLang] || LANGUAGE_VOCABULARY.en;
  const targetVocab = LANGUAGE_VOCABULARY[langCode] || LANGUAGE_VOCABULARY.en;
  const targetName = getLanguageName(langCode);
  
  return [
    { id: 1, prompt: `How do you say "${nativeVocab.hello}" in ${targetName}?`, options: [targetVocab.hello, targetVocab.goodbye, targetVocab.please, targetVocab.thankYou], correctAnswer: targetVocab.hello },
    { id: 2, prompt: `How do you say "${nativeVocab.goodbye}" in ${targetName}?`, options: [targetVocab.goodbye, targetVocab.hello, targetVocab.please, targetVocab.thankYou], correctAnswer: targetVocab.goodbye },
    { id: 3, prompt: `How do you say "${nativeVocab.please}" in ${targetName}?`, options: [targetVocab.please, targetVocab.hello, targetVocab.goodbye, targetVocab.thankYou], correctAnswer: targetVocab.please },
    { id: 4, prompt: `How do you say "${nativeVocab.thankYou}" in ${targetName}?`, options: [targetVocab.thankYou, targetVocab.please, targetVocab.goodbye, targetVocab.hello], correctAnswer: targetVocab.thankYou },
    { id: 5, prompt: `How do you say "${nativeVocab.mother}" in ${targetName}?`, options: [targetVocab.mother, targetVocab.father, targetVocab.friend, targetVocab.one], correctAnswer: targetVocab.mother },
    { id: 6, prompt: `How do you say "${nativeVocab.father}" in ${targetName}?`, options: [targetVocab.father, targetVocab.mother, targetVocab.friend, targetVocab.two], correctAnswer: targetVocab.father },
    { id: 7, prompt: `How do you say "${nativeVocab.water}" in ${targetName}?`, options: [targetVocab.water, targetVocab.bread, targetVocab.book, targetVocab.three], correctAnswer: targetVocab.water },
    { id: 8, prompt: `How do you say "${nativeVocab.bread}" in ${targetName}?`, options: [targetVocab.bread, targetVocab.water, targetVocab.book, targetVocab.one], correctAnswer: targetVocab.bread },
    { id: 9, prompt: `How do you say "${nativeVocab.book}" in ${targetName}?`, options: [targetVocab.book, targetVocab.water, targetVocab.bread, targetVocab.two], correctAnswer: targetVocab.book },
    { id: 10, prompt: `How do you say "${nativeVocab.one}" in ${targetName}?`, options: [targetVocab.one, targetVocab.two, targetVocab.three, targetVocab.water], correctAnswer: targetVocab.one }
  ];
};

const PlacementTest: React.FC<PlacementTestProps> = ({
  languageCode,
  onBack,
  onComplete,
}) => {
  const { interfaceLang, theme } = useAuth();
  const questions = getDynamicQuestions(languageCode, interfaceLang);

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
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-455 flex items-center justify-center">
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
