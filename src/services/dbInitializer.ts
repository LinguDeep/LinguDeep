import { doc, getDoc, getDocs, collection, writeBatch } from 'firebase/firestore';
import { db } from '../firebase';
import { Language, Question, Lesson, ShopItem, Badge } from './db';

// 15 Common Languages
const SAMPLE_LANGUAGES: Language[] = [
  { id: 'es', name: 'Spanish', flag: '🇪🇸', code: 'es' },
  { id: 'fr', name: 'French', flag: '🇫🇷', code: 'fr' },
  { id: 'de', name: 'German', flag: '🇩🇪', code: 'de' },
  { id: 'ja', name: 'Japanese', flag: '🇯🇵', code: 'ja' },
  { id: 'it', name: 'Italian', flag: '🇮🇹', code: 'it' },
  { id: 'zh', name: 'Chinese', flag: '🇨🇳', code: 'zh' },
  { id: 'ru', name: 'Russian', flag: '🇷🇺', code: 'ru' },
  { id: 'pt', name: 'Portuguese', flag: '🇵🇹', code: 'pt' },
  { id: 'ko', name: 'Korean', flag: '🇰🇷', code: 'ko' },
  { id: 'tr', name: 'Turkish', flag: '🇹🇷', code: 'tr' },
  { id: 'ar', name: 'Arabic', flag: '🇸🇦', code: 'ar' },
  { id: 'nl', name: 'Dutch', flag: '🇳🇱', code: 'nl' },
  { id: 'sv', name: 'Swedish', flag: '🇸🇪', code: 'sv' },
  { id: 'hi', name: 'Hindi', flag: '🇮🇳', code: 'hi' },
  { id: 'en', name: 'English', flag: '🇺🇸', code: 'en' },
];

export interface LangVocab {
  hello: string;
  goodbye: string;
  please: string;
  thankYou: string;
  mother: string;
  father: string;
  friend: string;
  brother: string;
  sister: string;
  water: string;
  bread: string;
  book: string;
  one: string;
  two: string;
  three: string;
  red: string;
  blue: string;
  green: string;
  sun: string;
  rain: string;
  wind: string;
}

export const LANGUAGE_VOCABULARY: Record<string, LangVocab> = {
  es: { hello: 'Hola', goodbye: 'Adiós', please: 'Por favor', thankYou: 'Gracias', mother: 'La madre', father: 'El padre', friend: 'El amigo', brother: 'El hermano', sister: 'La hermana', water: 'El agua', bread: 'El pan', book: 'El libro', one: 'Uno', two: 'Dos', three: 'Tres', red: 'Rojo', blue: 'Azul', green: 'Verde', sun: 'El sol', rain: 'La lluvia', wind: 'El viento' },
  fr: { hello: 'Bonjour', goodbye: 'Au revoir', please: 'S\'il vous plaît', thankYou: 'Merci', mother: 'La mère', father: 'Le père', friend: 'L\'ami', brother: 'Le frère', sister: 'La sœur', water: 'L\'eau', bread: 'Le pain', book: 'Le livre', one: 'Un', two: 'Deux', three: 'Trois', red: 'Rouge', blue: 'Bleu', green: 'Vert', sun: 'Le soleil', rain: 'La pluie', wind: 'Le vent' },
  de: { hello: 'Hallo', goodbye: 'Tschüss', please: 'Bitte', thankYou: 'Danke', mother: 'Die Mutter', father: 'Der Vater', friend: 'Der Freund', brother: 'Der Bruder', sister: 'Die Schwester', water: 'Das Wasser', bread: 'Das Brot', book: 'Das Buch', one: 'Eins', two: 'Zwei', three: 'Drei', red: 'Rot', blue: 'Blau', green: 'Grün', sun: 'Die Sonne', rain: 'Der Regen', wind: 'Der Wind' },
  ja: { hello: 'こんにちは', goodbye: 'さようなら', please: 'お願いします', thankYou: 'ありがとう', mother: '母', father: '父', friend: '友達', brother: '兄', sister: '姉', water: '水', bread: 'パン', book: '本', one: '一', two: '二', three: '三', red: '赤', blue: '青', green: '緑', sun: '太陽', rain: '雨', wind: '風' },
  it: { hello: 'Ciao', goodbye: 'Arrivederci', please: 'Per favore', thankYou: 'Grazie', mother: 'La madre', father: 'Il padre', friend: 'L\'amico', brother: 'Il fratello', sister: 'La sorella', water: 'L\'acqua', bread: 'Il pane', book: 'Il libro', one: 'Uno', two: 'Due', three: 'Tre', red: 'Rosso', blue: 'Blu', green: 'Verde', sun: 'Il sole', rain: 'La pioggia', wind: 'Il vento' },
  zh: { hello: '你好', goodbye: '再见', please: '请', thankYou: '谢谢', mother: '母亲', father: '父亲', friend: '朋友', brother: '哥哥', sister: '姐姐', water: '水', bread: '面包', book: '书', one: '一', two: '二', three: '三', red: '红', blue: '蓝', green: '绿', sun: '太阳', rain: '雨', wind: '风' },
  ru: { hello: 'Привет', goodbye: 'Пока', please: 'Пожалуйста', thankYou: 'Спасибо', mother: 'Мать', father: 'Отец', friend: 'Друг', brother: 'Брат', sister: 'Сестра', water: 'Вода', bread: 'Хлеб', book: 'Книга', one: 'Один', two: 'Два', three: 'Три', red: 'Красный', blue: 'Синий', green: 'Зеленый', sun: 'Солнце', rain: 'Дождь', wind: 'Ветер' },
  pt: { hello: 'Olá', goodbye: 'Adeus', please: 'Por favor', thankYou: 'Obrigado', mother: 'A mãe', father: 'O pai', friend: 'O amigo', brother: 'O irmão', sister: 'A irmã', water: 'A água', bread: 'O pão', book: 'O livro', one: 'Um', two: 'Dois', three: 'Três', red: 'Vermelho', blue: 'Azul', green: 'Verde', sun: 'O sol', rain: 'A chuva', wind: 'O vento' },
  ko: { hello: '안녕하세요', goodbye: '안녕히 가세요', please: '부탁합니다', thankYou: '감사합니다', mother: '어머니', father: '아버지', friend: '친구', brother: '형', sister: '누나', water: '물', bread: '빵', book: '책', one: '일', two: '이', three: '삼', red: '빨간색', blue: '파란색', green: '초록색', sun: '태양', rain: '비', wind: '바람' },
  tr: { hello: 'Merhaba', goodbye: 'Hoşça kal', please: 'Lütfen', thankYou: 'Teşekkürler', mother: 'Anne', father: 'Baba', friend: 'Arkadaş', brother: 'Erkek kardeş', sister: 'Kız kardeş', water: 'Su', bread: 'Ekmek', book: 'Kitap', one: 'Bir', two: 'İki', three: 'Üç', red: 'Kırmızı', blue: 'Mavi', green: 'Yeşil', sun: 'Güneş', rain: 'Yağmur', wind: 'Rüzgar' },
  ar: { hello: 'مرحبا', goodbye: 'وداعا', please: 'من فضلك', thankYou: 'شكرا', mother: 'الأم', father: 'الأب', friend: 'الصديق', brother: 'أخ', sister: 'أخت', water: 'الماء', bread: 'الخبز', book: 'الكتاب', one: 'واحد', two: 'اثنين', three: 'ثلاثة', red: 'أحمر', blue: 'أزرق', green: 'أخضر', sun: 'شمس', rain: 'مطر', wind: 'ريح' },
  nl: { hello: 'Hallo', goodbye: 'Tot ziens', please: 'Alsjeblieft', thankYou: 'Bedankt', mother: 'De moeder', father: 'De vader', friend: 'De vriend', brother: 'De broer', sister: 'De zus', water: 'Het water', bread: 'Het brood', book: 'Het boek', one: 'Een', two: 'Twee', three: 'Drie', red: 'Rood', blue: 'Blauw', green: 'Groen', sun: 'De zon', rain: 'De regen', wind: 'De wind' },
  sv: { hello: 'Hallå', goodbye: 'Hejdå', please: 'Snälla', thankYou: 'Tack', mother: 'Mamman', father: 'Pappan', friend: 'Vännen', brother: 'Brodern', sister: 'Systern', water: 'Vatten', bread: 'Bröd', book: 'Boken', one: 'En', two: 'Två', three: 'Tre', red: 'Röd', blue: 'Blå', green: 'Grön', sun: 'Solen', rain: 'Regn', wind: 'Vind' },
  hi: { hello: 'नमस्ते', goodbye: 'अलविदा', please: 'कृपया', thankYou: 'धन्यवाद', mother: 'माता', father: 'पिता', friend: 'मित्र', brother: 'भाई', sister: 'बहन', water: 'पानी', bread: 'रोटी', book: 'पुस्तक', one: 'एक', two: 'दो', three: 'तीन', red: 'लाल', blue: 'नीला', green: 'हरा', sun: 'सूर्य', rain: 'वर्षा', wind: 'हवा' },
  en: { hello: 'Hello', goodbye: 'Goodbye', please: 'Please', thankYou: 'Thank you', mother: 'Mother', father: 'Father', friend: 'Friend', brother: 'Brother', sister: 'Sister', water: 'Water', bread: 'Bread', book: 'Book', one: 'One', two: 'Two', three: 'Three', red: 'Red', blue: 'Blue', green: 'Green', sun: 'Sun', rain: 'Rain', wind: 'Wind' }
};

// Sample Shop Items
const SAMPLE_SHOP_ITEMS: ShopItem[] = [
  {
    id: 'streak_freeze',
    name: 'Streak Freeze',
    description: 'Allows your streak to remain active even if you do not complete a lesson for a day.',
    cost: 150,
    icon: 'Snowflake'
  },
  {
    id: 'double_or_nothing',
    name: 'Double or Nothing',
    description: 'Wager 50 gems to earn 100 gems back if you complete a 7-day streak.',
    cost: 50,
    icon: 'Coins'
  },
  {
    id: 'xp_boost',
    name: 'XP Supercharger',
    description: 'Double all experience (XP) gained for lessons completed in the next 30 minutes.',
    cost: 100,
    icon: 'Zap'
  }
];

// Sample Badges
const SAMPLE_BADGES: Badge[] = [
  {
    id: 'first_steps',
    name: 'First Steps',
    description: 'Begin your language adventure by completing the placement test or first lesson.',
    requirementXP: 10,
    requirementStreak: 0,
    icon: 'Compass'
  },
  {
    id: 'xp_warrior',
    name: 'XP Warrior',
    description: 'Gain a total of 150 Experience Points (XP) across your learning journey.',
    requirementXP: 150,
    requirementStreak: 0,
    icon: 'ShieldAlert'
  },
  {
    id: 'streak_novice',
    name: 'Streak Novice',
    description: 'Keep your brain active and maintain a 3-day learning streak.',
    requirementXP: 0,
    requirementStreak: 3,
    icon: 'Flame'
  },
  {
    id: 'linguist',
    name: 'Master Linguist',
    description: 'Gain a total of 500 Experience Points (XP) to reach language mastery.',
    requirementXP: 500,
    requirementStreak: 0,
    icon: 'Trophy'
  }
];

const INTERMEDIATE_VOCAB: Record<string, Record<string, string>> = {
  station: { en: "Where is the station?", tr: "İstasyon nerede?", es: "¿Dónde está la estación?", fr: "Où est la gare ?", de: "Wo ist der Bahnhof?", it: "Dov'è la stazione?", pt: "Onde fica a estação?", ru: "Где находится станция?", zh: "车站在哪里？", ja: "駅はどこですか？", ko: "역이 어디인가요?", ar: "أين المحطة؟", nl: "Waar is het station?", sv: "Var ligger stationen?", hi: "स्टेशन कहाँ है?" },
  cost: { en: "How much is this?", tr: "Bu ne kadar?", es: "¿Cuánto cuesta esto?", fr: "Combien ça coûte ?", de: "Wie viel kostet das?", it: "Quanto costa questo?", pt: "Quanto custa isto?", ru: "Сколько это стоит?", zh: "这个多少钱？", ja: "これはいくらですか？", ko: "이것은 얼마인가요?", ar: "بكم هذا؟", nl: "Hoeveel kost dit?", sv: "Hur mycket kostar den här?", hi: "यह कितने का है?" },
  family: { en: "I love my family.", tr: "Ailemi seviyorum.", es: "Amo a mi familia.", fr: "J'aime ma famille.", de: "Ich liebe meine Familie.", it: "Amo la mia famiglia.", pt: "Eu amo a minha família.", ru: "Я люблю свою семью.", zh: "我爱我的家庭。", ja: "家族を愛しています。", ko: "가족을 사랑합니다.", ar: "أنا أحب عائلتي.", nl: "Ik hou van mijn familie.", sv: "Jag älskar min familj.", hi: "मैं अपने pfरिवार से प्यार करता हूँ।" }, // tr: Ailemi seviyorum.
  name: { en: "What is your name?", tr: "Adınız nedir?", es: "¿Cómo te llamas?", fr: "Comment vous appelez-vous ?", de: "Wie heißen Sie?", it: "Come ti chiami?", pt: "Qual é o seu nome?", ru: "Как вас зовут?", zh: "你叫什么名字？", ja: "お名前は何ですか？", ko: "이름이 무엇인가요?", ar: "ما اسمك؟", nl: "Wat is je naam?", sv: "Vad heter du?", hi: "आपका नाम क्या है?" },
  speak: { en: "I speak some English.", tr: "Biraz İngilizce konuşuyorum.", es: "Hablo un poco de inglés.", fr: "Je parle un peu anglais.", de: "Ich spreche ein wenig Englisch.", it: "Parlo un po' di inglese.", pt: "Eu falo um pouco de inglês.", ru: "Я немного говорю по-английски.", zh: "我会说一点英语。", ja: "英語が少し話せます。", ko: "영어를 조금 할 줄 압니다.", ar: "أتحدث القليل من الإنجليزية.", nl: "Ik spreek een beetje Engels.", sv: "Jag talar lite engelska.", hi: "मैं थोड़ी अंग्रेजी बोलता हूँ।" }
};

const ADVANCED_VOCAB: Record<string, Record<string, string>> = {
  travel: { en: "If I had money, I would travel.", tr: "Param olsaydı seyahat ederdim.", es: "Si tuviera dinero, viajaría.", fr: "Si j'avais de l'argent, je voyagerais.", de: "Wenn ich Geld hätte, würde ich reisen.", it: "Se avessi soldi, viaggerei.", pt: "Se eu tivesse dinheiro, viajaria.", ru: "Если бы у меня были деньги, я бы путешествовал.", zh: "如果我有钱，我就会去旅行。", ja: "お金があれば旅行するのに。", ko: "돈이 있다면 여행을 갈 텐데요.", ar: "لو كان لدي مال لسافرت.", nl: "Als ik geld had, zou ik reizen.", sv: "Om jag hade pengar skulle jag resa.", hi: "अगर मेरे पास पैसे होते, तो मैं यात्रा करता।" },
  explain: { en: "Please explain this to me.", tr: "Lütfen bunu bana açıklayın.", es: "Por favor explécame esto.", fr: "S'il vous plaît expliquez-moi cela.", de: "Bitte erklären Sie mir das.", it: "Per favore spiegami questo.", pt: "Por favor, explique-me isto.", ru: "Пожалуйста, объясните мне это.", zh: "请向我解释一下这个。", ja: "これを説明してください。", ko: "이것을 설명해 주세요.", ar: "يرجى شرح هذا لي.", nl: "Leg dit me alstublieft uit.", sv: "Förklara detta för mig, tack.", hi: "कृपया मुझे यह समझाएं।" },
  actions: { en: "Actions speak louder than words.", tr: "Lafla peynir gemisi yürümez.", es: "Las palabras se las lleva el viento.", fr: "Les actes parlent plus que les mots.", de: "Taten sagen mehr als Worte.", it: "Le azioni contano più delle parole.", pt: "Ações valem mais que palavras.", ru: "Дела говорят громче слов.", zh: "事实胜于雄辩。", ja: "論より証拠。", ko: "말보다 행동이 중요하다.", ar: "الأفعال أبلغ من الأقوال.", nl: "Geen woorden maar daden.", sv: "Handlingar talar högre än ord.", hi: "कथनी से करनी भली।" },
  rain: { en: "It is raining heavily today.", tr: "Bugün çok şiddetli yağmur yağıyor.", es: "Hoy está lloviendo fuertemente.", fr: "Il pleut à verse aujourd'hui.", de: "Heute regnet es in Strömen.", it: "Oggi sta piovendo forte.", pt: "Hoje está chovendo muito.", ru: "Сегодня идет сильный дождь.", zh: "今天雨下得很大。", ja: "今日は大雨が降っています。", ko: "오늘 비가 많이 내립니다.", ar: "إنها تمطر بغزارة اليوم.", nl: "Het regent hard vandaag.", sv: "Det regnar kraftigt idag.", hi: "आज बहुत तेज बारिश हो रही है।" },
  meet: { en: "I look forward to meeting you.", tr: "Sizinle tanışmayı dört gözle bekliyorum.", es: "Espero conocerte pronto.", fr: "J'ai hâte de vous rencontrer.", de: "Ich freue mich darauf, Sie kennenzulernen.", it: "Non vedo l'ora di conoscerti.", pt: "Estou ansioso para conhecer você.", ru: "Я с нетерпением жду встречи с вами.", zh: "我期待与您见面。", ja: "お会いできるのを楽しみにしています。", ko: "만나 뵙기를 기대합니다.", ar: "أتطلع للقائك.", nl: "Ik verheug me erop u te ontmoeten.", sv: "Jag ser fram emot att träffa dig.", hi: "मुझे आपसे मिलने का इंतजार है।" }
};

function shuffleOptions(options: string[]): string[] {
  const arr = [...options];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateQuestionsForLesson(lang: Language, tier: number, lessonIndex: number, vocab: LangVocab): Question[] {
  const langName = lang.name;
  const categoryIndex = (lessonIndex - 1) % 7;

  if (tier === 1) {
    if (categoryIndex === 0) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Hello" in ${langName}?`, options: shuffleOptions([vocab.hello, vocab.goodbye, vocab.please, vocab.thankYou]), correctAnswer: vocab.hello },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "${vocab.hello}"`, correctAnswer: 'Hello' },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Goodbye" in ${langName}?`, options: shuffleOptions([vocab.goodbye, vocab.hello, vocab.please, vocab.thankYou]), correctAnswer: vocab.goodbye },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${vocab.goodbye}"`, correctAnswer: 'Goodbye' },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Hello, ..." (Hello, goodbye)`, options: shuffleOptions([vocab.goodbye, vocab.please, vocab.thankYou, vocab.friend]), correctAnswer: vocab.goodbye },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `Translate: "Goodbye, hello"`, options: shuffleOptions([`${vocab.goodbye}, ${vocab.hello}`, `${vocab.hello}, ${vocab.please}`, `${vocab.please}, ${vocab.thankYou}`, vocab.friend]), correctAnswer: `${vocab.goodbye}, ${vocab.hello}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "${vocab.hello}, ${vocab.goodbye}"`, correctAnswer: 'Hello, goodbye' },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete the greeting: "${vocab.hello.substring(0, 2)}..." (Hello)`, options: shuffleOptions([vocab.hello, vocab.goodbye, vocab.please, vocab.friend]), correctAnswer: vocab.hello },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "Please" in ${langName}?`, options: shuffleOptions([vocab.please, vocab.hello, vocab.goodbye, vocab.thankYou]), correctAnswer: vocab.please },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match the greetings', options: [vocab.hello, 'Hello', vocab.goodbye, 'Goodbye', vocab.please, 'Please', vocab.thankYou, 'Thank you'], correctAnswer: `${vocab.hello}:Hello,${vocab.goodbye}:Goodbye,${vocab.please}:Please,${vocab.thankYou}:Thank you` }
      ];
    } else if (categoryIndex === 1) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Please" in ${langName}?`, options: shuffleOptions([vocab.please, vocab.hello, vocab.goodbye, vocab.thankYou]), correctAnswer: vocab.please },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "${vocab.please}"`, correctAnswer: 'Please' },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Thank you" in ${langName}?`, options: shuffleOptions([vocab.thankYou, vocab.please, vocab.goodbye, vocab.hello]), correctAnswer: vocab.thankYou },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${vocab.thankYou}"`, correctAnswer: 'Thank you' },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Please, ..." (Please, thank you)`, options: shuffleOptions([vocab.thankYou, vocab.hello, vocab.goodbye, vocab.friend]), correctAnswer: vocab.thankYou },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `Translate: "Please, thank you"`, options: shuffleOptions([`${vocab.please}, ${vocab.thankYou}`, `${vocab.hello}, ${vocab.goodbye}`, `${vocab.please}, ${vocab.goodbye}`, vocab.friend]), correctAnswer: `${vocab.please}, ${vocab.thankYou}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "${vocab.please}, ${vocab.thankYou}"`, correctAnswer: 'Please, thank you' },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "Hello, please (... ${vocab.please})"`, options: shuffleOptions([vocab.hello, vocab.goodbye, vocab.thankYou, vocab.friend]), correctAnswer: vocab.hello },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "Hello" in ${langName}?`, options: shuffleOptions([vocab.hello, vocab.please, vocab.goodbye, vocab.thankYou]), correctAnswer: vocab.hello },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match the polite words', options: [vocab.please, 'Please', vocab.thankYou, 'Thank you', vocab.hello, 'Hello', vocab.goodbye, 'Goodbye'], correctAnswer: `${vocab.please}:Please,${vocab.thankYou}:Thank you,${vocab.hello}:Hello,${vocab.goodbye}:Goodbye` }
      ];
    } else if (categoryIndex === 2) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Friend" in ${langName}?`, options: shuffleOptions([vocab.friend, vocab.mother, vocab.father, vocab.brother]), correctAnswer: vocab.friend },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "${vocab.friend}"`, correctAnswer: 'Friend' },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Hello friend" in ${langName}?`, options: shuffleOptions([`${vocab.hello} ${vocab.friend}`, `${vocab.goodbye} ${vocab.friend}`, `${vocab.please} ${vocab.friend}`, vocab.friend]), correctAnswer: `${vocab.hello} ${vocab.friend}` },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${vocab.hello} ${vocab.friend}"`, correctAnswer: 'Hello friend' },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Hello ..." (Hello friend)`, options: shuffleOptions([vocab.friend, vocab.mother, vocab.father, vocab.please]), correctAnswer: vocab.friend },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `Translate: "Goodbye friend"`, options: shuffleOptions([`${vocab.goodbye} ${vocab.friend}`, `${vocab.hello} ${vocab.friend}`, `${vocab.please} ${vocab.friend}`, vocab.friend]), correctAnswer: `${vocab.goodbye} ${vocab.friend}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "${vocab.goodbye} ${vocab.friend}"`, correctAnswer: 'Goodbye friend' },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "Please, my ..." (Please, my friend)`, options: shuffleOptions([vocab.friend, vocab.mother, vocab.father, vocab.hello]), correctAnswer: vocab.friend },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "Please" in ${langName}?`, options: shuffleOptions([vocab.please, vocab.friend, vocab.mother, vocab.father]), correctAnswer: vocab.please },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match communication words', options: [vocab.friend, 'Friend', vocab.please, 'Please', vocab.thankYou, 'Thank you', vocab.hello, 'Hello'], correctAnswer: `${vocab.friend}:Friend,${vocab.please}:Please,${vocab.thankYou}:Thank you,${vocab.hello}:Hello` }
      ];
    } else if (categoryIndex === 3) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Water" in ${langName}?`, options: shuffleOptions([vocab.water, vocab.bread, vocab.book, vocab.one]), correctAnswer: vocab.water },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "${vocab.water}"`, correctAnswer: 'Water' },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Bread" in ${langName}?`, options: shuffleOptions([vocab.bread, vocab.water, vocab.book, vocab.two]), correctAnswer: vocab.bread },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${vocab.bread}"`, correctAnswer: 'Bread' },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Bread & ..." (Bread & water)`, options: shuffleOptions([vocab.water, vocab.book, vocab.hello, vocab.friend]), correctAnswer: vocab.water },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `Translate: "Water, please"`, options: shuffleOptions([`${vocab.water}, ${vocab.please}`, `${vocab.bread}, ${vocab.please}`, `${vocab.water}, ${vocab.thankYou}`, vocab.hello]), correctAnswer: `${vocab.water}, ${vocab.please}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "${vocab.water}, ${vocab.please}"`, correctAnswer: 'Water, please' },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "Bread, please (... ${vocab.please})"`, options: shuffleOptions([vocab.bread, vocab.water, vocab.book, vocab.friend]), correctAnswer: vocab.bread },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `Translate: "Thank you for the water"`, options: shuffleOptions([`${vocab.thankYou}, ${vocab.water}`, `${vocab.please}, ${vocab.water}`, vocab.one, vocab.two]), correctAnswer: `${vocab.thankYou}, ${vocab.water}` },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match food terms', options: [vocab.water, 'Water', vocab.bread, 'Bread', vocab.please, 'Please', vocab.thankYou, 'Thank you'], correctAnswer: `${vocab.water}:Water,${vocab.bread}:Bread,${vocab.please}:Please,${vocab.thankYou}:Thank you` }
      ];
    } else if (categoryIndex === 4) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Book" in ${langName}?`, options: shuffleOptions([vocab.book, vocab.water, vocab.bread, vocab.friend]), correctAnswer: vocab.book },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "${vocab.book}"`, correctAnswer: 'Book' },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `Translate to ${langName}: "My book, please"`, options: shuffleOptions([`${vocab.book}, ${vocab.please}`, `${vocab.water}, ${vocab.please}`, `${vocab.bread}, ${vocab.please}`, vocab.hello]), correctAnswer: `${vocab.book}, ${vocab.please}` },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${vocab.book}, ${vocab.please}"`, correctAnswer: 'Book, please' },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Friend & ... (Friend & book)"`, options: shuffleOptions([vocab.book, vocab.water, vocab.bread, vocab.hello]), correctAnswer: vocab.book },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `Translate: "Thank you for the book"`, options: shuffleOptions([`${vocab.thankYou}, ${vocab.book}`, `${vocab.please}, ${vocab.book}`, vocab.hello, vocab.friend]), correctAnswer: `${vocab.thankYou}, ${vocab.book}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "${vocab.thankYou}, ${vocab.book}"`, correctAnswer: 'Thank you, book' },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "The book is here (${vocab.book} ...)"`, options: shuffleOptions([vocab.book, vocab.water, vocab.bread, vocab.please]), correctAnswer: vocab.book },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "Goodbye" in ${langName}?`, options: shuffleOptions([vocab.goodbye, vocab.book, vocab.water, vocab.bread]), correctAnswer: vocab.goodbye },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match objects', options: [vocab.book, 'Book', vocab.water, 'Water', vocab.bread, 'Bread', vocab.friend, 'Friend'], correctAnswer: `${vocab.book}:Book,${vocab.water}:Water,${vocab.bread}:Bread,${vocab.friend}:Friend` }
      ];
    } else if (categoryIndex === 5) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "One" in ${langName}?`, options: shuffleOptions([vocab.one, vocab.two, vocab.three, vocab.red]), correctAnswer: vocab.one },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "One"`, correctAnswer: 'One' },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Two" in ${langName}?`, options: shuffleOptions([vocab.two, vocab.one, vocab.three, vocab.blue]), correctAnswer: vocab.two },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "Two"`, correctAnswer: 'Two' },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "One, two, ... (One, two, three)"`, options: shuffleOptions([vocab.three, vocab.one, vocab.water, vocab.please]), correctAnswer: vocab.three },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `How do you say "Three" in ${langName}?`, options: shuffleOptions([vocab.three, vocab.one, vocab.two, vocab.green]), correctAnswer: vocab.three },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "Three"`, correctAnswer: 'Three' },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "One and two (One & ...)"`, options: shuffleOptions([vocab.two, vocab.three, vocab.bread, vocab.hello]), correctAnswer: vocab.two },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `Translate: "Three books, please"`, options: shuffleOptions([`${vocab.three} ${vocab.book}, ${vocab.please}`, `${vocab.one} ${vocab.water}`, vocab.hello, vocab.goodbye]), correctAnswer: `${vocab.three} ${vocab.book}, ${vocab.please}` },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match numbers', options: [vocab.one, 'One', vocab.two, 'Two', vocab.three, 'Three', vocab.book, 'Book'], correctAnswer: `${vocab.one}:One,${vocab.two}:Two,${vocab.three}:Three,${vocab.book}:Book` }
      ];
    } else {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Red" in ${langName}?`, options: shuffleOptions([vocab.red, vocab.blue, vocab.green, vocab.one]), correctAnswer: vocab.red },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "Red"`, correctAnswer: 'Red' },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Blue" in ${langName}?`, options: shuffleOptions([vocab.blue, vocab.red, vocab.green, vocab.two]), correctAnswer: vocab.blue },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "Blue"`, correctAnswer: 'Blue' },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Red, blue, ... (Red, blue, green)"`, options: shuffleOptions([vocab.green, vocab.one, vocab.water, vocab.goodbye]), correctAnswer: vocab.green },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `How do you say "Green" in ${langName}?`, options: shuffleOptions([vocab.green, vocab.red, vocab.blue, vocab.three]), correctAnswer: vocab.green },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "Green"`, correctAnswer: 'Green' },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "Blue and green (Blue & ...)"`, options: shuffleOptions([vocab.green, vocab.red, vocab.bread, vocab.hello]), correctAnswer: vocab.green },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `Translate: "Red book, please"`, options: shuffleOptions([`${vocab.red} ${vocab.book}, ${vocab.please}`, `${vocab.blue} ${vocab.water}`, vocab.hello, vocab.goodbye]), correctAnswer: `${vocab.red} ${vocab.book}, ${vocab.please}` },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match colors', options: [vocab.red, 'Red', vocab.blue, 'Blue', vocab.green, 'Green', vocab.book, 'Book'], correctAnswer: `${vocab.red}:Red,${vocab.blue}:Blue,${vocab.green}:Green,${vocab.book}:Book` }
      ];
    }
  } else if (tier === 2) {
    const keys = Object.keys(INTERMEDIATE_VOCAB);
    
    const getPhrase = (keyIndex: number) => {
      const k = keys[keyIndex % keys.length];
      const item = INTERMEDIATE_VOCAB[k];
      return {
        key: k,
        target: item[lang.id] || item.en,
        source: item.en
      };
    };

    const p0 = getPhrase(categoryIndex);
    const p1 = getPhrase(categoryIndex + 1);
    const p2 = getPhrase(categoryIndex + 2);
    const p3 = getPhrase(categoryIndex + 3);
    const p4 = getPhrase(categoryIndex + 4);

    return [
      { id: `q_${lang.id}_2_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "${p0.source}" in ${langName}?`, options: shuffleOptions([p0.target, p1.target, p2.target, p3.target]), correctAnswer: p0.target },
      { id: `q_${lang.id}_2_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "${p1.target}"`, correctAnswer: p1.source },
      { id: `q_${lang.id}_2_${lessonIndex}_3`, type: 'multiple-choice', prompt: `Translate: "${p2.source}"`, options: shuffleOptions([p2.target, p0.target, p3.target, p4.target]), correctAnswer: p2.target },
      { id: `q_${lang.id}_2_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${p3.target}"`, correctAnswer: p3.source },
      { id: `q_${lang.id}_2_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "${p4.target.split(' ').slice(0, -1).join(' ')} ..."`, options: shuffleOptions([p4.target.split(' ').pop() || '', p0.target.split(' ').pop() || '', p1.target.split(' ').pop() || '', p2.target.split(' ').pop() || '']), correctAnswer: p4.target.split(' ').pop() || '' },
      { id: `q_${lang.id}_2_${lessonIndex}_6`, type: 'translate', prompt: `Translate: "${p2.target}"`, correctAnswer: p2.source },
      { id: `q_${lang.id}_2_${lessonIndex}_7`, type: 'fill-blank', prompt: `Complete: "... ${p0.target.split(' ').slice(1).join(' ')}"`, options: shuffleOptions([p0.target.split(' ')[0], p1.target.split(' ')[0], p2.target.split(' ')[0], p3.target.split(' ')[0]]), correctAnswer: p0.target.split(' ')[0] },
      { id: `q_${lang.id}_2_${lessonIndex}_8`, type: 'multiple-choice', prompt: `How do you say "${p3.source}" in ${langName}?`, options: shuffleOptions([p3.target, p0.target, p1.target, p4.target]), correctAnswer: p3.target },
      { id: `q_${lang.id}_2_${lessonIndex}_9`, type: 'translate', prompt: `Translate: "${p4.target}"`, correctAnswer: p4.source },
      { id: `q_${lang.id}_2_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match intermediate terms', options: [p0.target, p0.source, p1.target, p1.source, p2.target, p2.source, p3.target, p3.source], correctAnswer: `${p0.target}:${p0.source},${p1.target}:${p1.source},${p2.target}:${p2.source},${p3.target}:${p3.source}` }
    ];
  } else {
    const keys = Object.keys(ADVANCED_VOCAB);
    
    const getPhrase = (keyIndex: number) => {
      const k = keys[keyIndex % keys.length];
      const item = ADVANCED_VOCAB[k];
      return {
        key: k,
        target: item[lang.id] || item.en,
        source: item.en
      };
    };

    const p0 = getPhrase(categoryIndex);
    const p1 = getPhrase(categoryIndex + 1);
    const p2 = getPhrase(categoryIndex + 2);
    const p3 = getPhrase(categoryIndex + 3);
    const p4 = getPhrase(categoryIndex + 4);

    return [
      { id: `q_${lang.id}_3_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "${p0.source}" in ${langName}?`, options: shuffleOptions([p0.target, p1.target, p2.target, p3.target]), correctAnswer: p0.target },
      { id: `q_${lang.id}_3_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "${p1.target}"`, correctAnswer: p1.source },
      { id: `q_${lang.id}_3_${lessonIndex}_3`, type: 'multiple-choice', prompt: `Translate: "${p2.source}"`, options: shuffleOptions([p2.target, p0.target, p3.target, p4.target]), correctAnswer: p2.target },
      { id: `q_${lang.id}_3_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${p3.target}"`, correctAnswer: p3.source },
      { id: `q_${lang.id}_3_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "${p4.target.split(' ').slice(0, -1).join(' ')} ..."`, options: shuffleOptions([p4.target.split(' ').pop() || '', p0.target.split(' ').pop() || '', p1.target.split(' ').pop() || '', p2.target.split(' ').pop() || '']), correctAnswer: p4.target.split(' ').pop() || '' },
      { id: `q_${lang.id}_3_${lessonIndex}_6`, type: 'translate', prompt: `Translate: "${p2.target}"`, correctAnswer: p2.source },
      { id: `q_${lang.id}_3_${lessonIndex}_7`, type: 'fill-blank', prompt: `Complete: "... ${p0.target.split(' ').slice(1).join(' ')}"`, options: shuffleOptions([p0.target.split(' ')[0], p1.target.split(' ')[0], p2.target.split(' ')[0], p3.target.split(' ')[0]]), correctAnswer: p0.target.split(' ')[0] },
      { id: `q_${lang.id}_3_${lessonIndex}_8`, type: 'multiple-choice', prompt: `How do you say "${p3.source}" in ${langName}?`, options: shuffleOptions([p3.target, p0.target, p1.target, p4.target]), correctAnswer: p3.target },
      { id: `q_${lang.id}_3_${lessonIndex}_9`, type: 'translate', prompt: `Translate: "${p4.target}"`, correctAnswer: p4.source },
      { id: `q_${lang.id}_3_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match advanced terms', options: [p0.target, p0.source, p1.target, p1.source, p2.target, p2.source, p3.target, p3.source], correctAnswer: `${p0.target}:${p0.source},${p1.target}:${p1.source},${p2.target}:${p2.source},${p3.target}:${p3.source}` }
    ];
  }
}

/**
 * Checks if target collections are empty and seeds them.
 * Generates structured learning paths with 35 lessons per course (105 lessons per language, 1,575 total cloud lessons).
 * Commits Firestore writes in chunked transactions to avoid the 500-write batch limit.
 */
export async function seedDatabase(force = false): Promise<{ success: boolean; message: string }> {
  if (!db) {
    return { success: false, message: 'Firebase database is not initialized.' };
  }

  try {
    const langSnap = await getDocs(collection(db, 'languages'));
    
    let shouldSeed = langSnap.size === 0 || force;
    if (!shouldSeed) {
      try {
        const checkRef = doc(db, 'lessons', 'lesson_en_3_1');
        const checkSnap = await getDoc(checkRef);
        if (checkSnap.exists()) {
          const lData = checkSnap.data();
          const firstQ = lData?.questions?.[0];
          if (firstQ && firstQ.prompt && firstQ.prompt.includes('"Hello"')) {
            console.log('Old database seed detected. Forcing database upgrade...');
            shouldSeed = true;
          }
        } else {
          shouldSeed = true;
        }
      } catch (e) {
        console.warn('Error checking database seed age:', e);
      }
    }

    if (!shouldSeed) {
      return { success: true, message: 'Database already has data. Skipping seed.' };
    }

    console.log('Seeding database with expanded 1,575-lessons curriculum content...');

    let batch = writeBatch(db);
    let writeCount = 0;

    const queueWrite = async (ref: any, data: any) => {
      batch.set(ref, data);
      writeCount++;
      if (writeCount >= 400) {
        await batch.commit();
        batch = writeBatch(db!);
        writeCount = 0;
      }
    };

    // 1. Seed Languages
    for (const lang of SAMPLE_LANGUAGES) {
      const ref = doc(db, 'languages', lang.id);
      await queueWrite(ref, lang);

      // 2. Generate Courses dynamically (3 Tiers per language)
      const courses = [
        { id: `${lang.id}_1`, languageId: lang.id, tier: 1, title: `${lang.name} Basics`, description: `Master everyday phrases, basic greetings, and simple vocabulary in ${lang.name}.` },
        { id: `${lang.id}_2`, languageId: lang.id, tier: 2, title: `Intermediate ${lang.name}`, description: `Hold conversations about travel, shopping, dining, and daily activities in ${lang.name}.` },
        { id: `${lang.id}_3`, languageId: lang.id, tier: 3, title: `Advanced ${lang.name}`, description: `Discuss complex issues, business topics, and professional dialogues in ${lang.name}.` }
      ];

      for (const course of courses) {
        const cRef = doc(db, 'courses', course.id);
        await queueWrite(cRef, course);

        // Fetch vocabulary translation for this language
        const vocab = LANGUAGE_VOCABULARY[lang.id] || LANGUAGE_VOCABULARY.en;
        
        // 3. Generate 35 distinct lessons per course
        for (let lessonIndex = 1; lessonIndex <= 35; lessonIndex++) {
          let lessonTitle = '';
          const categoryIndex = (lessonIndex - 1) % 7;
          
          if (course.tier === 1) {
            const titles = ['Greetings & Basics', 'Polite Expressions', 'Everyday Communication', 'Food & Everyday Items', 'Books & Study Items', 'Numbers Course', 'Colors Course'];
            const activeTitle = titles[categoryIndex] || 'Basics Lesson';
            lessonTitle = `${activeTitle} #${Math.ceil(lessonIndex / 7)}`;
          } else if (course.tier === 2) {
            const titles = ['Family & Friends', 'Parents & Relatives', 'Social Conversations', 'Parents & Bread/Water', 'Books & Relatives', 'Numbers & Friends', 'Colors & Home'];
            const activeTitle = titles[categoryIndex] || 'Intermediate Lesson';
            lessonTitle = `${activeTitle} #${Math.ceil(lessonIndex / 7)}`;
          } else {
            const titles = ['Professional Discussions', 'Complex Dialogues', 'Advanced Translation', 'Advanced Water & Bread', 'Advanced Book & Study', 'Advanced Review A', 'Advanced Review B'];
            const activeTitle = titles[categoryIndex] || 'Advanced Lesson';
            lessonTitle = `${activeTitle} #${Math.ceil(lessonIndex / 7)}`;
          }

          const questions = generateQuestionsForLesson(lang, course.tier, lessonIndex, vocab);

          const lesson: Lesson = {
            id: `lesson_${course.id}_${lessonIndex}`,
            courseId: course.id,
            order: lessonIndex,
            title: lessonTitle,
            xpReward: course.tier * 10 + 10,
            questions
          };

          const lRef = doc(db, 'lessons', lesson.id);
          await queueWrite(lRef, lesson);
        }
      }
    }

    // 4. Seed Shop Items
    for (const item of SAMPLE_SHOP_ITEMS) {
      const ref = doc(db, 'shop_items', item.id);
      await queueWrite(ref, item);
    }

    // 5. Seed Badges
    for (const badge of SAMPLE_BADGES) {
      const ref = doc(db, 'badges', badge.id);
      await queueWrite(ref, badge);
    }

    // Commit any remaining writes
    if (writeCount > 0) {
      await batch.commit();
    }

    console.log('Seeding of 1,575 lessons curriculum completed successfully.');
    return { success: true, message: 'Database seeded successfully with 1,575 dynamic cloud lessons!' };
  } catch (error: any) {
    console.error('Error seeding database:', error);
    return { success: false, message: `Failed to seed database: ${error?.message || error}` };
  }
}
