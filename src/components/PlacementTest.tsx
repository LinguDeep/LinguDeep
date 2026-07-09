import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getTranslation, localizePrompt } from '../services/i18n';
import { ArrowLeft, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { audioEffects } from '../services/audio';

interface Question {
  id: number;
  prompt: string;
  options: string[];
  correctAnswer: string;
}

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
  ]
};

interface PlacementTestProps {
  languageCode: string;
  onBack: () => void;
  onComplete: (tier: number) => void;
}

const PlacementTest: React.FC<PlacementTestProps> = ({
  languageCode,
  onBack,
  onComplete,
}) => {
  const { interfaceLang, theme } = useAuth();
  const questions = PLACEMENT_QUESTIONS[languageCode] || PLACEMENT_QUESTIONS.es;

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

        {/* Progress bar */}
        <div className={`flex-1 h-3 rounded-full overflow-hidden border ${
          theme === 'dark' ? 'bg-slate-800 border-slate-700/50' : 'bg-slate-200 border-slate-300'
        }`}>
          <div
            className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <span className={`font-outfit font-black text-sm ${
          theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {currentIdx + 1} / {questions.length}
        </span>
      </div>

      {/* Main Container */}
      <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col justify-center my-4 overflow-y-auto">
        {step === 'playing' && (
          <div className="space-y-6">
            <div>
              <span className={`text-xs font-bold uppercase tracking-widest mb-1.5 block ${
                theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Placement Challenge
              </span>
              <h3 className={`text-xl md:text-2xl font-outfit font-extrabold leading-snug ${
                theme === 'dark' ? 'text-white' : 'text-slate-950'
              }`}>
                {localizePrompt(currentQuestion.prompt, interfaceLang)}
              </h3>
            </div>

            {/* Answer Options Grid */}
            <div className="grid grid-cols-1 gap-3.5">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOption === option;
                
                let optionClass = theme === 'dark' 
                  ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300' 
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm';
                  
                if (isSelected) {
                  optionClass = 'border-indigo-500 bg-indigo-500/10 text-indigo-400 border-b-4';
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    disabled={isAnswered}
                    className={`w-full text-left font-outfit font-extrabold p-4 rounded-2xl shadow-playful-inner transition-all flex items-center justify-between border-2 ${optionClass}`}
                  >
                    <span>{option}</span>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-glow shadow-indigo-500/50"></div>}
                  </button>
                );
              })}
            </div>

            {/* Bottom Panel (Feedback Drawer) */}
            <div className={`mt-8 border-t pt-6 ${
              theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
            }`}>
              {!isAnswered ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={!selectedOption}
                  className={`w-full py-4 text-base rounded-2xl font-bold font-outfit transition-all ${
                    !selectedOption 
                      ? theme === 'dark' 
                        ? 'bg-slate-850 border-b-4 border-slate-950 text-slate-600 cursor-not-allowed' 
                        : 'bg-slate-200 border-b-4 border-slate-300 text-slate-400 cursor-not-allowed'
                      : 'btn-3d-green bg-emerald-600 border-emerald-800 text-white'
                  }`}
                >
                  Check Answer
                </button>
              ) : (
                <div className={`p-4 rounded-2xl mb-4 border flex flex-col md:flex-row md:items-center justify-between gap-4 animate-float-subtle ${
                  selectedOption === currentQuestion.correctAnswer 
                    ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500 text-rose-400'
                }`}>
                  <div className="flex items-center gap-3">
                    {selectedOption === currentQuestion.correctAnswer ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-450 flex-shrink-0" />
                    ) : (
                      <AlertTriangle className="w-8 h-8 text-rose-450 flex-shrink-0" />
                    )}
                    <div>
                      <h4 className="font-outfit font-black text-lg">
                        {selectedOption === currentQuestion.correctAnswer ? 'Excellent Job!' : 'Incorrect Answer'}
                      </h4>
                      <p className={`text-sm font-semibold ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {selectedOption === currentQuestion.correctAnswer 
                          ? 'You got it right! Keep rolling.' 
                          : `Correct answer: ${currentQuestion.correctAnswer}`}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleNextQuestion}
                    className={`px-6 py-3 font-outfit font-black text-sm rounded-xl text-white border-b-4 ${
                      selectedOption === currentQuestion.correctAnswer 
                        ? 'bg-emerald-600 hover:bg-emerald-500 border-emerald-800' 
                        : 'bg-rose-600 hover:bg-rose-500 border-rose-800'
                    }`}
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="text-center space-y-8 max-w-md mx-auto w-full">
            <div className="w-24 h-24 bg-amber-500/15 text-amber-400 rounded-full flex items-center justify-center mx-auto relative animate-float shadow-lg shadow-amber-500/10 border border-amber-500/30">
              <span className="text-5xl">🏆</span>
            </div>

            <div>
              <h2 className={`text-3xl font-extrabold font-outfit mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-950'
              }`}>{getTranslation('testCompleted', interfaceLang)}</h2>
              <p className={`font-bold text-base ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                You got <span className="text-indigo-500 font-extrabold">{score} / {questions.length}</span> correct answers.
              </p>
            </div>

            <div className={`border p-6 rounded-2xl text-left ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`font-outfit font-black text-lg mb-1 flex items-center gap-2 ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>{title}</span>
              </h3>
              <p className={`text-sm leading-relaxed font-semibold ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {description}
              </p>
            </div>

            <button
              onClick={() => onComplete(tier)}
              className="w-full btn-3d-green py-4 flex items-center justify-center gap-2 bg-emerald-600 border-emerald-800 text-white"
            >
              <span>{getTranslation('saveLevelBtn', interfaceLang)}</span>
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Spacer Footer */}
      <div className="w-full h-8"></div>
    </div>
  );
};

export default PlacementTest;
