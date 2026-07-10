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
  yes?: string;
  no?: string;
  welcome?: string;
  howAreYou?: string;
  fine?: string;
  sorry?: string;
  excuseMe?: string;
  youAreWelcome?: string;
  milk?: string;
  apple?: string;
  tea?: string;
  pen?: string;
  paper?: string;
  school?: string;
  four?: string;
  five?: string;
  yellow?: string;
  black?: string;
  white?: string;
}

export const LANGUAGE_VOCABULARY: Record<string, LangVocab> = {
  es: { 
    hello: 'Hola', goodbye: 'Adiós', please: 'Por favor', thankYou: 'Gracias', mother: 'La madre', father: 'El padre', friend: 'El amigo', brother: 'El hermano', sister: 'La hermana', water: 'El agua', bread: 'El pan', book: 'El libro', one: 'Uno', two: 'Dos', three: 'Tres', red: 'Rojo', blue: 'Azul', green: 'Verde', sun: 'El sol', rain: 'La lluvia', wind: 'El viento',
    yes: 'Sí', no: 'No', welcome: 'Bienvenido', howAreYou: '¿Cómo estás?', fine: 'Bien', sorry: 'Lo siento', excuseMe: 'Disculpe', youAreWelcome: 'De nada', milk: 'La leche', apple: 'La manzana', tea: 'El té', pen: 'El bolígrafo', paper: 'El papel', school: 'La escuela', four: 'Cuatro', five: 'Cinco', yellow: 'Amarillo', black: 'Negro', white: 'Blanco'
  },
  fr: { 
    hello: 'Bonjour', goodbye: 'Au revoir', please: 'S\'il vous plaît', thankYou: 'Merci', mother: 'La mère', father: 'Le père', friend: 'L\'ami', brother: 'Le frère', sister: 'La sœur', water: 'L\'eau', bread: 'Le pain', book: 'Le livre', one: 'Un', two: 'Deux', three: 'Trois', red: 'Rouge', blue: 'Bleu', green: 'Vert', sun: 'Le soleil', rain: 'La pluie', wind: 'Le vent',
    yes: 'Oui', no: 'Non', welcome: 'Bienvenue', howAreYou: 'Comment ça va ?', fine: 'Bien', sorry: 'Désolé', excuseMe: 'Excusez-moi', youAreWelcome: 'De rien', milk: 'Le lait', apple: 'La pomme', tea: 'Le thé', pen: 'Le stylo', paper: 'Le papier', school: 'L\'école', four: 'Quatre', five: 'Cinq', yellow: 'Jaune', black: 'Noir', white: 'Blanc'
  },
  de: { 
    hello: 'Hallo', goodbye: 'Tschüss', please: 'Bitte', thankYou: 'Danke', mother: 'Die Mutter', father: 'Der Vater', friend: 'Der Freund', brother: 'Der Bruder', sister: 'Die Schwester', water: 'Das Wasser', bread: 'Das Brot', book: 'Das Buch', one: 'Eins', two: 'Zwei', three: 'Drei', red: 'Rot', blue: 'Blau', green: 'Grün', sun: 'Die Sonne', rain: 'Der Regen', wind: 'Der Wind',
    yes: 'Ja', no: 'Nein', welcome: 'Willkommen', howAreYou: 'Wie geht es dir?', fine: 'Gut', sorry: 'Entschuldigung', excuseMe: 'Entschuldigung', youAreWelcome: 'Bitte sehr', milk: 'Die Milch', apple: 'Der Apfel', tea: 'Der Tee', pen: 'Der Stift', paper: 'Das Papier', school: 'Die Schule', four: 'Vier', five: 'Fünf', yellow: 'Gelb', black: 'Schwarz', white: 'Weiß'
  },
  ja: { 
    hello: 'こんにちは', goodbye: 'さようなら', please: 'お願いします', thankYou: 'ありがとう', mother: '母', father: '父', friend: '友達', brother: '兄', sister: '姉', water: '水', bread: 'パン', book: '本', one: '一', two: '二', three: '三', red: '赤', blue: '青', green: '緑', sun: '太陽', rain: '雨', wind: '風',
    yes: 'はい', no: 'いいえ', welcome: 'ようこそ', howAreYou: 'お元気ですか？', fine: '元気です', sorry: 'ごめんなさい', excuseMe: 'すみません', youAreWelcome: 'どういたしまして', milk: '牛乳', apple: 'りんご', tea: 'お茶', pen: 'ペン', paper: '紙', school: '学校', four: '四', five: '五', yellow: '黄色', black: '黒', white: '白'
  },
  it: { 
    hello: 'Ciao', goodbye: 'Arrivederci', please: 'Per favore', thankYou: 'Grazie', mother: 'La madre', father: 'Il padre', friend: 'L\'amico', brother: 'Il fratello', sister: 'La sorella', water: 'L\'acqua', bread: 'Il pane', book: 'Il libro', one: 'Uno', two: 'Due', three: 'Tre', red: 'Rosso', blue: 'Blu', green: 'Verde', sun: 'Il sole', rain: 'La pioggia', wind: 'Il vento',
    yes: 'Sì', no: 'No', welcome: 'Benvenuto', howAreYou: 'Come stai?', fine: 'Bene', sorry: 'Scusa', excuseMe: 'Mi scusi', youAreWelcome: 'Prego', milk: 'Il latte', apple: 'La mela', tea: 'Tè', pen: 'La penna', paper: 'La carta', school: 'La scuola', four: 'Quattro', five: 'Cinque', yellow: 'Giallo', black: 'Nero', white: 'Bianco'
  },
  zh: { 
    hello: '你好', goodbye: '再见', please: '请', thankYou: '谢谢', mother: '母亲', father: '父亲', friend: '朋友', brother: '哥哥', sister: '姐姐', water: '水', bread: '面包', book: '书', one: '一', two: '二', three: '三', red: '红', blue: '蓝', green: '绿', sun: '太阳', rain: '雨', wind: '风',
    yes: '是', no: '不', welcome: '欢迎', howAreYou: '你好吗？', fine: '很好', sorry: '对不起', excuseMe: '打扰一下', youAreWelcome: '不客气', milk: '牛奶', apple: '苹果', tea: '茶', pen: '笔', paper: '纸', school: '学校', four: '四', five: '五', yellow: '黄色', black: '黑色', white: '白色'
  },
  ru: { 
    hello: 'Привет', goodbye: 'Пока', please: 'Пожалуйста', thankYou: 'Спасибо', mother: 'Мать', father: 'Отец', friend: 'Друг', brother: 'Брат', sister: 'Сестра', water: 'Вода', bread: 'Хлеб', book: 'Книга', one: 'Один', two: 'Два', three: 'Три', red: 'Красный', blue: 'Синий', green: 'Зеленый', sun: 'Солнце', rain: 'Дождь', wind: 'Ветер',
    yes: 'Да', no: 'Нет', welcome: 'Добро пожаловать', howAreYou: 'Как дела?', fine: 'Хорошо', sorry: 'Извините', excuseMe: 'Простите', youAreWelcome: 'Не за что', milk: 'Молоко', apple: 'Яблоко', tea: 'Чай', pen: 'Ручка', paper: 'Бумага', school: 'Школа', four: 'Четыре', five: 'Пять', yellow: 'Желтый', black: 'Черный', white: 'Белый'
  },
  pt: { 
    hello: 'Olá', goodbye: 'Adeus', please: 'Por favor', thankYou: 'Obrigado', mother: 'A mãe', father: 'O pai', friend: 'O amigo', brother: 'O irmão', sister: 'A irmã', water: 'A água', bread: 'O pão', book: 'O livro', one: 'Um', two: 'Dois', three: 'Três', red: 'Vermelho', blue: 'Azul', green: 'Verde', sun: 'O sol', rain: 'A chuva', wind: 'O vento',
    yes: 'Sim', no: 'Não', welcome: 'Bem-vindo', howAreYou: 'Como vai?', fine: 'Bem', sorry: 'Desculpe', excuseMe: 'Com licença', youAreWelcome: 'De nada', milk: 'O leite', apple: 'A maçã', tea: 'O chá', pen: 'A caneta', paper: 'O papel', school: 'A escola', four: 'Quatro', five: 'Cinco', yellow: 'Amarelo', black: 'Preto', white: 'Branco'
  },
  ko: { 
    hello: '안녕하세요', goodbye: '안녕히 가세요', please: '부탁합니다', thankYou: '감사합니다', mother: '어머니', father: '아버지', friend: '친구', brother: '형', sister: '누나', water: '물', bread: '빵', book: '책', one: '일', two: '이', three: '삼', red: '빨간색', blue: '파란색', green: '초록색', sun: '태양', rain: '비', wind: '바람',
    yes: '네', no: '아니요', welcome: '환영합니다', howAreYou: '어떻게 지내세요?', fine: '잘 지내요', sorry: '죄송합니다', excuseMe: '실례합니다', youAreWelcome: '천만에요', milk: '우유', apple: '사과', tea: '차', pen: '펜', paper: '종이', school: '학교', four: '사', five: '오', yellow: '노란색', black: '검은색', white: '흰색'
  },
  tr: { 
    hello: 'Merhaba', goodbye: 'Hoşça kal', please: 'Lütfen', thankYou: 'Teşekkürler', mother: 'Anne', father: 'Baba', friend: 'Arkadaş', brother: 'Erkek kardeş', sister: 'Kız kardeş', water: 'Su', bread: 'Ekmek', book: 'Kitap', one: 'Bir', two: 'İki', three: 'Üç', red: 'Kırmızı', blue: 'Mavi', green: 'Yeşil', sun: 'Güneş', rain: 'Yağmur', wind: 'Rüzgar',
    yes: 'Evet', no: 'Hayır', welcome: 'Hoş geldiniz', howAreYou: 'Nasılsınız?', fine: 'İyiyim', sorry: 'Üzgünüm', excuseMe: 'Affedersiniz', youAreWelcome: 'Rica ederim', milk: 'Süt', apple: 'Elma', tea: 'Çay', pen: 'Kalem', paper: 'Kağıt', school: 'Okul', four: 'Dört', five: 'Beş', yellow: 'Sarı', black: 'Siyah', white: 'Beyaz'
  },
  ar: { 
    hello: 'مرحبا', goodbye: 'وداعا', please: 'من فضلك', thankYou: 'شكرا', mother: 'الأم', father: 'الأب', friend: 'الصديق', brother: 'أخ', sister: 'أخت', water: 'الماء', bread: 'الخبز', book: 'الكتاب', one: 'واحد', two: 'اثنين', three: 'ثلاثة', red: 'أحمر', blue: 'أزرق', green: 'أخضر', sun: 'شمس', rain: 'مطر', wind: 'ريح',
    yes: 'نعم', no: 'لا', welcome: 'مرحباً', howAreYou: 'كيف حالك؟', fine: 'بخير', sorry: 'آسف', excuseMe: 'معذرة', youAreWelcome: 'على الرحب والسعة', milk: 'حليب', apple: 'تفاحة', tea: 'شاي', pen: 'قلم', paper: 'ورقة', school: 'مدرسة', four: 'أربعة', five: 'خمسة', yellow: 'أصفر', black: 'أسود', white: 'أبيض'
  },
  nl: { 
    hello: 'Hallo', goodbye: 'Tot ziens', please: 'Alsjeblieft', thankYou: 'Bedankt', mother: 'De moeder', father: 'De vader', friend: 'De vriend', brother: 'De broer', sister: 'De zus', water: 'Het water', bread: 'Het brood', book: 'Het boek', one: 'Een', two: 'Twee', three: 'Drie', red: 'Rood', blue: 'Blauw', green: 'Groen', sun: 'De zon', rain: 'De regen', wind: 'De wind',
    yes: 'Ja', no: 'Nee', welcome: 'Welkom', howAreYou: 'Hoe gaat het?', fine: 'Goed', sorry: 'Sorry', excuseMe: 'Pardon', youAreWelcome: 'Graag gedaan', milk: 'Melk', apple: 'Appel', tea: 'Thee', pen: 'Pen', paper: 'Papier', school: 'School', four: 'Vier', five: 'Vijf', yellow: 'Geel', black: 'Zwart', white: 'Wit'
  },
  sv: { 
    hello: 'Hallå', goodbye: 'Hejdå', please: 'Snälla', thankYou: 'Tack', mother: 'Mamman', father: 'Pappan', friend: 'Vännen', brother: 'Brodern', sister: 'Systern', water: 'Vatten', bread: 'Bröd', book: 'Boken', one: 'En', two: 'Två', three: 'Tre', red: 'Röd', blue: 'Blå', green: 'Grön', sun: 'Solen', rain: 'Regn', wind: 'Vind',
    yes: 'Ja', no: 'Nej', welcome: 'Välkommen', howAreYou: 'Hur mår du?', fine: 'Bra', sorry: 'Förlåt', excuseMe: 'Ursäkta', youAreWelcome: 'Varsågod', milk: 'Mjölk', apple: 'Äpple', tea: 'Te', pen: 'Penna', paper: 'Papper', school: 'Skola', four: 'Fyra', five: 'Fem', yellow: 'Gul', black: 'Svart', white: 'Vit'
  },
  hi: { 
    hello: 'नमस्ते', goodbye: 'अलविदा', please: 'कृपया', thankYou: 'धन्यवाद', mother: 'माता', father: 'पिता', friend: 'मित्र', brother: 'भाई', sister: 'बहन', water: 'पानी', bread: 'रोti', book: 'पुस्तक', one: 'एक', two: 'दो', three: 'तीन', red: 'लाल', blue: 'नीला', green: 'हरा', sun: 'सूर्य', rain: 'वर्षा', wind: 'हवा',
    yes: 'हाँ', no: 'नहीं', welcome: 'स्वागत', howAreYou: 'आप कैसे हैं?', fine: 'ठीक', sorry: 'माफ़ कीजिये', excuseMe: 'क्षमा करें', youAreWelcome: 'आपका स्वागत है', milk: 'दूध', apple: 'सेब', tea: 'चाय', pen: 'कलम', paper: 'कागज़', school: 'विद्यालय', four: 'चार', five: 'पाँच', yellow: 'पीला', black: 'काला', white: 'सफेद'
  },
  en: { 
    hello: 'Hello', goodbye: 'Goodbye', please: 'Please', thankYou: 'Thank you', mother: 'Mother', father: 'Father', friend: 'Friend', brother: 'Brother', sister: 'Sister', water: 'Water', bread: 'Bread', book: 'Book', one: 'One', two: 'Two', three: 'Three', red: 'Red', blue: 'Blue', green: 'Green', sun: 'Sun', rain: 'Rain', wind: 'Wind',
    yes: 'Yes', no: 'No', welcome: 'Welcome', howAreYou: 'How are you?', fine: 'Fine', sorry: 'Sorry', excuseMe: 'Excuse me', youAreWelcome: "You're welcome", milk: 'Milk', apple: 'Apple', tea: 'Tea', pen: 'Pen', paper: 'Paper', school: 'School', four: 'Four', five: 'Five', yellow: 'Yellow', black: 'Black', white: 'White'
  }
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
  family: { en: "I love my family.", tr: "Ailemi seviyorum.", es: "Amo a mi familia.", fr: "J'aime ma famille.", de: "Ich liebe meine Familie.", it: "Amo la mia famiglia.", pt: "Eu amo a minha família.", ru: "Я люблю свою семью.", zh: "我爱我的家庭。", ja: "家族を愛しています。", ko: "가족을 사랑합니다.", ar: "أنا أحب عائلتي.", nl: "Ik hou van mijn familie.", sv: "Jag älskar min familj.", hi: "मैं अपने pfरिवार से प्यार करता हूँ。" }, // tr: Ailemi seviyorum.
  name: { en: "What is your name?", tr: "Adınız nedir?", es: "¿Cómo te llamas?", fr: "Comment vous appelez-vous ?", de: "Wie heißen Sie?", it: "Come ti chiami?", pt: "Qual é o seu nome?", ru: "Как вас зовут?", zh: "你叫什么名字？", ja: "お名前は何ですか？", ko: "이름이 무엇인가요?", ar: "ما اسمك؟", nl: "Wat is je naam?", sv: "Vad heter du?", hi: "आपका नाम क्या है?" },
  speak: { en: "I speak some English.", tr: "Biraz İngilizce konuşuyorum.", es: "Hablo un poco de inglés.", fr: "Je parle un peu anglais.", de: "Ich spreche ein wenig Englisch.", it: "Parlo un po' di inglese.", pt: "Eu falo um pouco de inglês.", ru: "Я немного говорю по-английски.", zh: "我会说一点英语。", ja: "英語が少し話せます。", ko: "영어를 조금 할 줄 압니다.", ar: "أتحدث القليل من الإنجليزية.", nl: "Ik spreek een beetje Engels.", sv: "Jag talar lite engelska.", hi: "मैं थोड़ी अंग्रेजी बोलता हूँ。" },
  where_live: { en: "Where do you live?", tr: "Nerede yaşıyorsunuz?", es: "¿Dónde vives?", fr: "Où habitez-vous ?", de: "Wo wohnen Sie?", ja: "どこに住んでいますか？", it: "Dove vivi?", zh: "你住在哪里？", ru: "Где вы живете?", pt: "Onde você mora?", ko: "어디에 살고 계신가요?", ar: "أين تعيش؟", nl: "Waar woon je?", sv: "Var bor du?", hi: "आप कहाँ रहते हैं?" },
  my_house: { en: "This is my house.", tr: "Bu benim evim.", es: "Esta es mi casa.", fr: "C'est ma maison.", de: "Das ist mein Haus.", ja: "これは私の家です。", it: "Questa è la mia casa.", zh: "这是我的房子。", ru: "Это мой дом.", pt: "Esta é a minha casa.", ko: "이것은 제 집입니다.", ar: "هذا منزلي.", nl: "Dit is mijn huis.", sv: "Det här är mitt hus.", hi: "यह मेरा घर है。" },
  have_brother: { en: "I have a brother.", tr: "Bir erkek kardeşim var.", es: "Tengo un hermano.", fr: "J'ai un frère.", de: "Ich habe einen Bruder.", ja: "私には兄がいます。", it: "Ho un fratello.", zh: "我有一个哥哥。", ru: "У меня есть брат.", pt: "Eu tenho um irmão.", ko: "저는 남동생이 있습니다.", ar: "عندي أخ.", nl: "Ik heb een broer.", sv: "Jag har en bror.", hi: "मेरा एक भाई है。" },
  have_sister: { en: "I have a sister.", tr: "Bir kız kardeşim var.", es: "Tengo una hermana.", fr: "J'ai une sœur.", de: "Ich habe eine Schwester.", ja: "私には姉がいます。", it: "Ho una sorella。", zh: "我有一个姐姐。", ru: "У меня есть сестра.", pt: "Eu tenho uma irmã.", ko: "저는 여동생이 있습니다.", ar: "عندي أخت.", nl: "Ik heb een zus.", sv: "Jag har een syster.", hi: "मेरी एक बहन है。" },
  eat_bread: { en: "I eat bread.", tr: "Ekmek yerim.", es: "Yo como pan.", fr: "Je mange du pain.", de: "Ich esse Brot.", ja: "私はパンを食べます。", it: "Io mangio il pane.", zh: "我吃面包。", ru: "Я ем хлеб.", pt: "Eu como pão.", ko: "저는 빵을 먹습니다.", ar: "أنا آكل الخبز.", nl: "Ik eet brood.", sv: "Jag äter bröd.", hi: "मैं रोटी खाता हूँ。" },
  drink_water: { en: "I drink water.", tr: "Su içerim.", es: "Bebo agua.", fr: "Je bois de l'eau.", de: "Ich trinke Wasser.", ja: "私は水を飲みます。", it: "Bevo acqua.", zh: "我喝水。", ru: "Я пью воду.", pt: "Eu bebo água.", ko: "저는 물을 마십니다.", ar: "أنا أشرب الماء.", nl: "Ik drink water.", sv: "Jag dricker vatten.", hi: "मैं पानी पीता हूँ。" },
  read_book: { en: "I read a book.", tr: "Kitap okurum.", es: "Leo un libro.", fr: "Je lis un livre.", de: "Ich lese ein Buch.", ja: "私は本を読みます。", it: "Leggo un libro.", zh: "我读书。", ru: "Я читаю книгу.", pt: "Eu leio um libro.", ko: "저는 책을 읽습니다.", ar: "أنا أقرأ كتاباً.", nl: "Ik lees een boek.", sv: "Jag läser en bok.", hi: "मैं पुस्तक पढ़ता हूँ。" },
  have_friend: { en: "I have friends.", tr: "Arkadaşlarım var.", es: "Tengo amigos.", fr: "J'ai des amis.", de: "Ich habe Freunde.", ja: "私には友達がいます。", it: "Ho degli amici.", zh: "我有朋友。", ru: "У меня есть друзья.", pt: "Eu tenho amigos.", ko: "저는 친구들이 있습니다.", ar: "عندي أصدقاء.", nl: "Ik heb vrienden.", sv: "Jag har vänner.", hi: "मेरे दोस्त हैं。" },
  like_colors: { en: "I like colors.", tr: "Renkleri severim.", es: "Me gustan los colores.", fr: "J'aime les couleurs.", de: "Ich mag Farben.", ja: "私は色が好きです。", it: "Mi piacciono i colori.", zh: "我喜欢颜色。", ru: "Мне нравятся цвета.", pt: "Eu gosto de cores.", ko: "저는 색상을 좋아합니다.", ar: "أنا أحب الألوان.", nl: "Ik hou van kleuren.", sv: "Jag gillar färger.", hi: "मुझे रंग पसंद हैं。" },
  my_parent: { en: "I love my parents.", tr: "Anne babamı seviyorum.", es: "Amo a mis padres.", fr: "J'aime mes parents.", de: "Ich liebe meine Eltern.", ja: "私は両親を愛しています。", it: "Amo i miei genitori.", zh: "我爱我的父母。", ru: "Я люблю своих родителей.", pt: "Eu amo os meus pais.", ko: "저는 부모님을 사랑합니다.", ar: "أنا أحب والدي.", nl: "Ik hou van mijn ouders.", sv: "Jag älskar mina föräldrar.", hi: "मैं अपने माता-पिता से प्यार करता हूँ。" },
  school_study: { en: "We study at school.", tr: "Okulda ders çalışırız.", es: "Estudiamos en la escuela.", fr: "Nous étudions à l'école.", de: "Wir lernen in der Schule.", ja: "私たちは学校で勉強します。", it: "Studiamo a scuola.", zh: "我们在学校学习。", ru: "Мы учимся в школе.", pt: "Nós estudamos na escola.", ko: "우리는 학교에서 공부합니다.", ar: "نحن ندرس في المدرسة.", nl: "Wij studeren op school.", sv: "Vi studerar i skolan.", hi: "हम स्कूल में पढ़ते हैं。" },
  good_day: { en: "Have a good day.", tr: "İyi günler dilerim.", es: "Que tengas un buen día.", fr: "Passez une bonne journée.", de: "Einen schönen Tag noch.", ja: "良い一日を。", it: "Buona giornata.", zh: "祝你有美好的一天。", ru: "Хорошего дня.", pt: "Tenha um bom dia.", ko: "좋은 하루 보내세요.", ar: "أتمنى لك يوماً سعيداً.", nl: "Prettige dag.", sv: "Ha en bra dag.", hi: "आपका दिन शुभ हो。" },
  count_one_two: { en: "I count one and two.", tr: "Bir ve iki diye sayarım.", es: "Cuento uno y dos.", fr: "Je compte un et deux.", de: "Ich zähle eins und zwei.", ja: "一と二を数えます。", it: "Conto uno e due.", zh: "我数一和二。", ru: "Я считаю один и два.", pt: "Eu conto um e dois.", ko: "일과 이를 셉니다.", ar: "أنا أعد واحد واثنين.", nl: "Ik tel een en twee.", sv: "Jag räknar ett och två.", hi: "मैं एक और दो गिनता हूँ。" }
};

const ADVANCED_VOCAB: Record<string, Record<string, string>> = {
  travel: { en: "If I had money, I would travel.", tr: "Param olsaydı seyahat ederdim.", es: "Si tuviera dinero, viajaría.", fr: "Si j'avais de l'argent, je voyagerais.", de: "Wenn ich Geld hätte, würde ich reisen.", it: "Se avessi soldi, viaggerei.", pt: "Se eu tivesse dinheiro, viajaria.", ru: "Если бы у меня были деньги, я бы путешествовал.", zh: "如果我有钱，我就会去旅行。", ja: "お金があれば旅行するのに。", ko: "돈이 있다면 여행을 갈 텐데요.", ar: "لو كان لدي مال لسافرت.", nl: "Als ik geld had, zou ik reizen.", sv: "Om jag hade pengar skulle jag resa.", hi: "अगर मेरे पास पैसे होते, तो मैं यात्रा करता।" },
  explain: { en: "Please explain this to me.", tr: "Lütfen bunu bana açıklayın.", es: "Por favor explécame esto.", fr: "S'il vous plaît expliquez-moi cela.", de: "Bitte erklären Sie mir das.", it: "Per favore spiegami questo.", pt: "Por favor, explique-me isto.", ru: "Пожалуйста, объясните мне это.", zh: "请向我解释一下这个。", ja: "これを説明してください。", ko: "이것을 설명해 주세요.", ar: "يرجى شرح هذا لي.", nl: "Leg dit me alstublieft uit.", sv: "Förklara detta för mig, tack.", hi: "कृपया मुझे यह समझाएं।" },
  actions: { en: "Actions speak louder than words.", tr: "Lafla peynir gemisi yürümez.", es: "Las palabras se las lleva el viento.", fr: "Les actes parlent plus que les mots.", de: "Taten sagen mehr als Worte.", it: "Le azioni contano più delle parole.", pt: "Ações valem mais que palavras.", ru: "Дела говорят громче слов.", zh: "事实胜于雄辩。", ja: "論より証拠。", ko: "말보다 행동이 중요하다.", ar: "الأفعال أبلغ من الأقوال.", nl: "Geen woorden maar daden.", sv: "Handlingar talar högre än ord.", hi: "कथनी से करनी भली।" },
  rain: { en: "It is raining heavily today.", tr: "Bugün çok şiddetli yağmur yağıyor.", es: "Hoy está lloviendo fuertemente.", fr: "Il pleut à verse aujourd'hui.", de: "Heute regnet es in Strömen.", it: "Oggi sta piovendo forte.", pt: "Hoje está chovendo muito.", ru: "Сегодня идет сильный дождь.", zh: "今天雨下得很大。", ja: "今日は大雨が降っています。", ko: "오늘 비가 많이 내립니다.", ar: "إنها تمطر بغзарة اليوم.", nl: "Het regent hard vandaag.", sv: "Det regnar kraftigt idag.", hi: "आज बहुत तेज बारिश हो रही है।" },
  meet: { en: "I look forward to meeting you.", tr: "Sizinle tanışmayı dört gözle bekliyorum.", es: "Espero conocerte pronto.", fr: "J'ai hâte de vous rencontrer.", de: "Ich freue mich darauf, Sie kennenzulernen.", it: "Non vedo l'ora di conoscerti.", pt: "Estou ansioso para conhecer você.", ru: "Я с нетерпением жду встречи с вами.", zh: "我期待与您见面。", ja: "お会いできるのを楽しみにしています。", ko: "만나 뵙기를 기대합니다.", ar: "أتطلع للقائك.", nl: "Ik verheug me erop u te ontmoeten.", sv: "Jag ser fram emot att träffa dig.", hi: "मुझे आपसे मिलने का इंतजार है।" },
  work_office: { en: "We work at the office.", tr: "Ofiste çalışıyoruz.", es: "Trabajamos en la oficina.", fr: "Nous travaillons au bureau.", de: "Wir arbeiten im Büro.", ja: "私たちはオフィスで働いています。", it: "Lavoriamo in ufficio.", zh: "我们在办公室工作。", ru: "Мы работаем в офисе.", pt: "Nós trabalhavamos no escritório.", ko: "우리는 사무실에서 일합니다.", ar: "نحن نعمل في المكتب.", nl: "Wij werken op kantoor.", sv: "Vi arbetar på kontoret.", hi: "हम कार्यालय में काम करते हैं।" },
  business_meeting: { en: "The business meeting went well.", tr: "İş toplantısı iyi geçti.", es: "La reunión de negocios salió bien.", fr: "La réunion d'affaires s'est bien passée.", de: "Das Geschäftstreffen lief gut.", ja: "会議はうまくいきました。", it: "L'incontro di lavoro è andato bene.", zh: "商务会议进行得很好。", ru: "Деловая встреча прошла хорошо.", pt: "A reunião de negócios correu bem.", ko: "비즈니스 회의가 잘 진행되었습니다.", ar: "سارت اجتماع العمل بشكل جيد.", nl: "De zakelijke bijeenkomst liep goed.", sv: "Affärsmötet gick bra.", hi: "व्यावसायिक बैठक अच्छी रही।" },
  complex_topic: { en: "We are discussing a complex topic.", tr: "Karmaşık bir konuyu tartışıyoruz.", es: "Estamos discutiendo un tema complejo.", fr: "Nous discutons d'un sujet complexe.", de: "Wir diskutieren ein komplexes Thema.", ja: "複雑なテーマについて議論しています。", it: "Stiamo discutendo un tema complesso.", zh: "我们正在讨论一个复杂的话题。", ru: "Мы обсуждаем сложную тему.", pt: "Estamos discutindo um tema complexo.", ko: "우리는 복잡한 주제에 대해 토론하고 있습니다.", ar: "نحن نناقش موضوعاً معقداً.", nl: "We bespreken een complex onderwerp.", sv: "Vi diskuterer ett komplext ämne.", hi: "हम एक जटिल विषय पर चर्चा कर रहे हैं।" },
  different_language: { en: "Translating between different languages is hard.", tr: "Farklı diller arasında çeviri yapmak zordur.", es: "Traducir entre diferentes idiomas es difícil.", fr: "Traduire entre différentes langues est difficile.", de: "Das Übersetzen zwischen verschiedenen Sprachen ist schwierig.", ja: "異なる言語間の翻訳は難しいです。", it: "Tradurre tra lingue diverse è difficile.", zh: "在不同语言之间翻译是困难的。", ru: "Переводить с разных языков трудно.", pt: "Traduzir entre línguas diferentes é difícil.", ko: "서로 다른 언어 사이의 번역은 어렵습니다.", ar: "الترجمة بين اللغات المختلفة صعبة.", nl: "Vertalen tussen verschillende talen is moeilijk.", sv: "Att översätta mellan olika språk är svårt.", hi: "विभिन्न भाषाओं के बीच अनुवाद करना कठिन है।" },
  drink_pure_water: { en: "Humans need to drink pure water.", tr: "İnsanların temiz su içmesi gerekir.", es: "Los humanos necesitan beber agua pura.", fr: "Les humains ont besoin de boire de l'eau pure.", de: "Menschen müssen reines Wasser trinken.", ja: "人間はきれいな水を飲む必要があります。", it: "Gli umani hanno bisogno di bere acqua pura.", zh: "人类需要饮用纯净水。", ru: "Людям нужно пить чистую воду.", pt: "Os humanos precisam de beber água pura.", ko: "인간은 깨끗한 물을 마셔야 합니다.", ar: "يحتاج البشر إلى شرب الماء النقي.", nl: "Mensen moeten schoon water drinken.", sv: "Människor behöver dricka rent vatten.", hi: "मनुष्यों को शुद्ध पानी पीने की आवश्यकता है।" },
  warm_bread: { en: "Nothing is better than warm bread.", tr: "Sıcak ekmekten daha iyi bir şey yoktur.", es: "Nada es mejor que el pan caliente.", fr: "Rien n'est meilleur que le pain chaud.", de: "Nichts ist besser als warmes Brot.", ja: "焼きたてのパンより美味しいものはありません。", it: "Niente è meglio del pane caldo.", zh: "没有什么比热面包更好的了。", ru: "Нет ничего лучше теплого хлеба.", pt: "Nada é melhor do que pão quente.", ko: "따뜻한 빵보다 더 좋은 것은 없습니다.", ar: "لا شيء أفضل من الخبز الدافئ.", nl: "Niets is beter dan warm brood.", sv: "Inget är bättre än varmt bröd.", hi: "गर्म रोटी से बेहतर कुछ नहीं है।" },
  read_scientific_book: { en: "I prefer to read scientific books.", tr: "Bilimsel kitaplar okumayı tercih ederim.", es: "Prefiero leer libros científicos.", fr: "Je préfère lire des livres scientifiques.", de: "Ich lese lieber wissenschaftliche Bücher.", ja: "私は科学本を読むのを好みます。", it: "Preferisco leggere libri scientifici.", zh: "我更喜欢读科学书籍。", ru: "Я предпочитаю читать научные книги.", pt: "Eu prefiro ler livros científicos.", ko: "저는 과학 서적을 읽는 것을 선호합니다.", ar: "أفضل قراءة الكتب العلمية.", nl: "Ik lees liever wetenschappelijke boeken.", sv: "Jag föredrar att läsa vetenskapliga böcker.", hi: "मैं वैज्ञानिक पुस्तकें पढ़ना पसंद करता हूँ।" },
  advanced_study: { en: "Advanced study requires lot of effort.", tr: "İleri düzey çalışma çok çaba gerektirir.", es: "El estudio advanced requiere mucho esfuerzo.", fr: "L'étude avancée demande beaucoup d'efforts.", de: "Fortgeschrittenes Studium erfordert viel Mühe.", ja: "高度な学習には多大な努力が必要です。", it: "Lo studio avancato richiede molto sforzo.", zh: "高级研究需要很多努力。", ru: "Продвинутое обучение требует много усилий.", pt: "O estudo advanced exige muito esforço.", ko: "고급 학습은 많은 노력을 필요로 합니다.", ar: "الدراسة المتقدمة تتطلب الكثير من الجهد.", nl: "Geavanceerde studie vereist veel inspanning.", sv: "Avancerade studier kräver mycket ansträngning.", hi: "उन्नत अध्ययन के लिए बहुत प्रयास की आवश्यकता होती है।" },
  weather_report: { en: "The weather report says it will rain.", tr: "Hava durumu raporu yağmur yağacağını söylüyor.", es: "El reporte del clima dice que lloverá.", fr: "Le rapport météo indique qu'il va pleuvoir.", de: "Der Wetterbericht sagt Regen voraus.", ja: "天気予報では雨が降ると言っています。", it: "Il bollettino meteorologico dice che pioverà.", zh: "天气预报说会下雨。", ru: "Прогноз погоды говорит, что пойдет дождь.", pt: "O boletim meteorológico diz что vai chover.", ko: "일기 예보에 따르면 비가 올 것이라고 합니다.", ar: "يقول تقرير الطقس إنها ستمطر.", nl: "Het weerbericht zegt dat het gaat regenen.", sv: "Väderrapporten säger att det ska regna.", hi: "मौसम की रिपोर्ट कहती है कि बारिश होगी।" },
  professional_goal: { en: "My professional goal is language mastery.", tr: "Mesleki hedefim dil uzmanlığıdır.", es: "Mi objetivo profesional es el dominio del idioma.", fr: "Mon objectif professionnel est la maîtrise de la langue.", de: "Mein berufliches Ziel ist die Beherrschung der Sprache.", ja: "私の専門的な目標は語学の習得です。", it: "Il mio obiettivo professionale è la padronanza della lingua.", zh: "我的专业目标 es精通语言。", ru: "Моя профессиональная цель - владение языком.", pt: "O meu objetivo profissional é a fluência no idioma.", ko: "저의 전문적인 목표는 언어 마스터입니다.", ar: "هدفي المهني هو إتقان اللغة.", nl: "Mijn professionele doel is taalbeheersing.", sv: "Mitt yrkesmässiga mål är att behärska språket.", hi: "मेरा व्यावसायिक लक्ष्य भाषा में महारत हासिल करना है।" },
  scientific_research: { en: "We support scientific research projects.", tr: "Bilimsel araştırma projelerini destekliyoruz.", es: "Apoyamos proyectos de investigación científica.", fr: "Nous soutenons les projets de recherche scientifique.", de: "Wir unterstützen wissenschaftliche Forschungsprojekte.", ja: "私たちは科学研究プロジェクトを支援しています。", it: "Sosteniamo progetti di ricerca scientifica.", zh: "我们支持科学研究项目。", ru: "Мы поддерживаем проекты научных исследований.", pt: "Apoiamos projetos de pesquisa científica.", ko: "우리는 과학 연구 프로젝트를 지원합니다.", ar: "نحن ندعم مشاريع البحث العلمي.", nl: "Wij ondersteunen wetenschappelijke onderzoeksprojecten.", sv: "Vi stödjer vetenskapliga forskningsprojekt.", hi: "हम वैज्ञानिक अनुसंधान परियोजनाओं का समर्थन करते हैं।" },
  complex_dialogue: { en: "They had a complex dialogue yesterday.", tr: "Dün karmaşık bir diyalog kurdular.", es: "Ayer tuvieron un diálogo complejo.", fr: "Ils ont eu un dialogue complexe hier.", de: "Sie hatten gestern einen komplexen Dialog.", ja: "昨日、彼らは複雑な対話をしました。", it: "Ieri hanno avuto un dialogue complexe.", zh: "他们昨天进行了一次复杂的对话。", ru: "Вчера у них был сложный диалог.", pt: "Eles tiveram um dialogue complexo ontem.", ko: "그들은 어제 복잡한 대화를 나눴습니다.", ar: "كان لديهم حوار معقد أمس.", nl: "Ze hadden gisteren een complexe dialoog.", sv: "De hade en komplex dialog igår.", hi: "कल उनके बीच bir diyalog kuruldu." }
};



const TIER1_CATEGORY_VOCAB: Record<number, { key: keyof LangVocab; english: string }[]> = {
  0: [
    { key: 'hello', english: 'Hello' },
    { key: 'goodbye', english: 'Goodbye' },
    { key: 'yes', english: 'Yes' },
    { key: 'no', english: 'No' },
    { key: 'welcome', english: 'Welcome' },
    { key: 'howAreYou', english: 'How are you?' },
    { key: 'fine', english: 'Fine' }
  ],
  1: [
    { key: 'please', english: 'Please' },
    { key: 'thankYou', english: 'Thank you' },
    { key: 'sorry', english: 'Sorry' },
    { key: 'excuseMe', english: 'Excuse me' },
    { key: 'youAreWelcome', english: "You're welcome" }
  ],
  2: [
    { key: 'mother', english: 'Mother' },
    { key: 'father', english: 'Father' },
    { key: 'friend', english: 'Friend' },
    { key: 'brother', english: 'Brother' },
    { key: 'sister', english: 'Sister' }
  ],
  3: [
    { key: 'water', english: 'Water' },
    { key: 'bread', english: 'Bread' },
    { key: 'milk', english: 'Milk' },
    { key: 'apple', english: 'Apple' },
    { key: 'tea', english: 'Tea' }
  ],
  4: [
    { key: 'book', english: 'Book' },
    { key: 'pen', english: 'Pen' },
    { key: 'paper', english: 'Paper' },
    { key: 'school', english: 'School' }
  ],
  5: [
    { key: 'one', english: 'One' },
    { key: 'two', english: 'Two' },
    { key: 'three', english: 'Three' },
    { key: 'four', english: 'Four' },
    { key: 'five', english: 'Five' }
  ],
  6: [
    { key: 'red', english: 'Red' },
    { key: 'blue', english: 'Blue' },
    { key: 'green', english: 'Green' },
    { key: 'yellow', english: 'Yellow' },
    { key: 'black', english: 'Black' },
    { key: 'white', english: 'White' }
  ]
};

const TIER2_CATEGORY_VOCAB: Record<number, string[]> = {
  0: ['family', 'name', 'speak', 'have_friend', 'good_day'],
  1: ['my_parent', 'have_brother', 'have_sister', 'family', 'name'],
  2: ['station', 'cost', 'speak', 'where_live', 'good_day'],
  3: ['my_parent', 'eat_bread', 'drink_water', 'family', 'cost'],
  4: ['read_book', 'school_study', 'have_brother', 'have_sister', 'my_parent'],
  5: ['count_one_two', 'have_friend', 'speak', 'name', 'good_day'],
  6: ['my_house', 'like_colors', 'station', 'cost', 'where_live']
};

const TIER3_CATEGORY_VOCAB: Record<number, string[]> = {
  0: ['work_office', 'business_meeting', 'professional_goal', 'meet', 'explain'],
  1: ['complex_topic', 'complex_dialogue', 'explain', 'actions', 'meet'],
  2: ['different_language', 'explain', 'travel', 'actions', 'meet'],
  3: ['drink_pure_water', 'warm_bread', 'explain', 'travel', 'actions'],
  4: ['read_scientific_book', 'advanced_study', 'scientific_research', 'explain', 'travel'],
  5: ['work_office', 'business_meeting', 'complex_topic', 'different_language', 'drink_pure_water'],
  6: ['warm_bread', 'read_scientific_book', 'advanced_study', 'weather_report', 'professional_goal']
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
  const categoryIndex = Math.floor((lessonIndex - 1) / 7) % 7;
  const subLessonIndex = (lessonIndex - 1) % 7;

  if (tier === 1) {
    const vocabList = TIER1_CATEGORY_VOCAB[categoryIndex] || TIER1_CATEGORY_VOCAB[0];
    const getTier1Phrase = (offset: number) => {
      const idx = (subLessonIndex * 2 + offset) % vocabList.length;
      const item = vocabList[idx];
      return {
        target: vocab[item.key] || item.english,
        source: item.english
      };
    };

    const p0 = getTier1Phrase(0);
    const p1 = getTier1Phrase(1);
    const p2 = getTier1Phrase(2);
    const p3 = getTier1Phrase(3);

    return [
      { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "${p0.source}" in ${langName}?`, options: shuffleOptions([p0.target, p1.target, p2.target, p3.target]), correctAnswer: p0.target },
      { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "${p1.target}"`, correctAnswer: p1.source },
      { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "${p2.source}" in ${langName}?`, options: shuffleOptions([p2.target, p0.target, p1.target, p3.target]), correctAnswer: p2.target },
      { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${p3.target}"`, correctAnswer: p3.source },
      { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "${p0.target} & ... (${p0.source} & ${p1.source})"`, options: shuffleOptions([p1.target, p2.target, p3.target, vocab.friend]), correctAnswer: p1.target },
      { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `Translate: "${p0.source}, ${p1.source}"`, options: shuffleOptions([`${p0.target}, ${p1.target}`, `${p1.target}, ${p2.target}`, `${p2.target}, ${p3.target}`, vocab.friend]), correctAnswer: `${p0.target}, ${p1.target}` },
      { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "${p0.target}, ${p1.target}"`, correctAnswer: `${p0.source}, ${p1.source}` },
      { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "${p2.target.substring(0, Math.max(1, Math.floor(p2.target.length / 2)))}..." (${p2.source})`, options: shuffleOptions([p2.target, p0.target, p1.target, p3.target]), correctAnswer: p2.target },
      { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "${p3.source}" in ${langName}?`, options: shuffleOptions([p3.target, p0.target, p1.target, p2.target]), correctAnswer: p3.target },
      { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match the terms', options: [p0.target, p0.source, p1.target, p1.source, p2.target, p2.source, p3.target, p3.source], correctAnswer: `${p0.target}:${p0.source},${p1.target}:${p1.source},${p2.target}:${p2.source},${p3.target}:${p3.source}` }
    ];
  } else if (tier === 2) {
    const vocabList = TIER2_CATEGORY_VOCAB[categoryIndex] || TIER2_CATEGORY_VOCAB[0];
    
    const getPhrase = (offset: number) => {
      const k = vocabList[(subLessonIndex * 2 + offset) % vocabList.length];
      const item = INTERMEDIATE_VOCAB[k];
      return {
        key: k,
        target: item[lang.id] || item.en,
        source: item.en
      };
    };

    const p0 = getPhrase(0);
    const p1 = getPhrase(1);
    const p2 = getPhrase(2);
    const p3 = getPhrase(3);
    const p4 = getPhrase(4);

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
    const vocabList = TIER3_CATEGORY_VOCAB[categoryIndex] || TIER3_CATEGORY_VOCAB[0];
    
    const getPhrase = (offset: number) => {
      const k = vocabList[(subLessonIndex * 2 + offset) % vocabList.length];
      const item = ADVANCED_VOCAB[k];
      return {
        key: k,
        target: item[lang.id] || item.en,
        source: item.en
      };
    };

    const p0 = getPhrase(0);
    const p1 = getPhrase(1);
    const p2 = getPhrase(2);
    const p3 = getPhrase(3);
    const p4 = getPhrase(4);

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
          if ((firstQ && firstQ.prompt && firstQ.prompt.includes('"Hello"')) || !lData?.version || lData.version < 6) {
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
          const categoryIndex = Math.floor((lessonIndex - 1) / 7) % 7;
          
          if (course.tier === 1) {
            const titles = ['Greetings & Basics', 'Polite Expressions', 'Everyday Communication', 'Food & Everyday Items', 'Books & Study Items', 'Numbers Course', 'Colors Course'];
            const activeTitle = titles[categoryIndex] || 'Basics Lesson';
            lessonTitle = `${activeTitle} #${(lessonIndex - 1) % 7 + 1}`;
          } else if (course.tier === 2) {
            const titles = ['Family & Friends', 'Parents & Relatives', 'Social Conversations', 'Parents & Bread/Water', 'Books & Relatives', 'Numbers & Friends', 'Colors & Home'];
            const activeTitle = titles[categoryIndex] || 'Intermediate Lesson';
            lessonTitle = `${activeTitle} #${(lessonIndex - 1) % 7 + 1}`;
          } else {
            const titles = ['Professional Discussions', 'Complex Dialogues', 'Advanced Translation', 'Advanced Water & Bread', 'Advanced Book & Study', 'Advanced Review A', 'Advanced Review B'];
            const activeTitle = titles[categoryIndex] || 'Advanced Lesson';
            lessonTitle = `${activeTitle} #${(lessonIndex - 1) % 7 + 1}`;
          }

          const questions = generateQuestionsForLesson(lang, course.tier, lessonIndex, vocab);

          const lesson: Lesson & { version?: number } = {
            id: `lesson_${course.id}_${lessonIndex}`,
            courseId: course.id,
            order: lessonIndex,
            title: lessonTitle,
            xpReward: course.tier * 10 + 10,
            questions,
            version: 6
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
