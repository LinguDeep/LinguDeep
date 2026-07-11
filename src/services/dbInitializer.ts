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
  goodMorning?: string;
  goodNight?: string;
  seeYou?: string;
  thanks?: string;
  pardon?: string;
  okay?: string;
  great?: string;
  love?: string;
  son?: string;
  daughter?: string;
  baby?: string;
  family?: string;
  child?: string;
  coffee?: string;
  cheese?: string;
  fruit?: string;
  meat?: string;
  egg?: string;
  pencil?: string;
  teacher?: string;
  class?: string;
  desk?: string;
  lesson?: string;
  student?: string;
  six?: string;
  seven?: string;
  eight?: string;
  nine?: string;
  ten?: string;
  orange?: string;
  pink?: string;
  purple?: string;
  grey?: string;
}


export const LANGUAGE_VOCABULARY: Record<string, LangVocab> = {
  es: { 
    hello: 'Hola', goodbye: 'Adiós', please: 'Por favor', thankYou: 'Gracias', mother: 'La madre', father: 'El padre', friend: 'El amigo', brother: 'El hermano', sister: 'La hermana', water: 'El agua', bread: 'El pan', book: 'El libro', one: 'Uno', two: 'Dos', three: 'Tres', red: 'Rojo', blue: 'Azul', green: 'Verde', sun: 'El sol', rain: 'La lluvia', wind: 'El viento',
    yes: 'Sí', no: 'No', welcome: 'Bienvenido', howAreYou: '¿Cómo estás?', fine: 'Bien', sorry: 'Lo siento', excuseMe: 'Disculpe', youAreWelcome: 'De nada', milk: 'La leche', apple: 'La manzana', tea: 'El té', pen: 'El bolígrafo', paper: 'El papel', school: 'La escuela', four: 'Cuatro', five: 'Cinco', yellow: 'Amarillo', black: 'Negro', white: 'Blanco',
    goodMorning: 'Buenos días', goodNight: 'Buenas noches', seeYou: 'Nos vemos', thanks: 'Gracias', pardon: 'Perdón', okay: 'Vale', great: 'Genial', love: 'Amor', son: 'El hijo', daughter: 'La hija', baby: 'El bebé', family: 'La familia', child: 'El niño', coffee: 'El café', cheese: 'El queso', fruit: 'La fruta', meat: 'La carne', egg: 'El huevo', pencil: 'El lápiz', teacher: 'El profesor', class: 'La clase', desk: 'El escritorio', lesson: 'La lección', student: 'El estudiante', six: 'Seis', seven: 'Siete', eight: 'Ocho', nine: 'Nueve', ten: 'Diez', orange: 'Naranja', pink: 'Rosa', purple: 'Morado', grey: 'Gris'
  },
  fr: { 
    hello: 'Bonjour', goodbye: 'Au revoir', please: 'S\'il vous plaît', thankYou: 'Merci', mother: 'La mère', father: 'Le père', friend: 'L\'ami', brother: 'Le frère', sister: 'La sœur', water: 'L\'eau', bread: 'Le pain', book: 'Le livre', one: 'Un', two: 'Deux', three: 'Trois', red: 'Rouge', blue: 'Bleu', green: 'Vert', sun: 'Le soleil', rain: 'La pluie', wind: 'Le vent',
    yes: 'Oui', no: 'Non', welcome: 'Bienvenue', howAreYou: 'Comment ça va ?', fine: 'Bien', sorry: 'Désolé', excuseMe: 'Excusez-moi', youAreWelcome: 'De rien', milk: 'Le lait', apple: 'La pomme', tea: 'Le thé', pen: 'Le stylo', paper: 'Le papier', school: 'L\'école', four: 'Quatre', five: 'Cinq', yellow: 'Jaune', black: 'Noir', white: 'Blanc',
    goodMorning: 'Bonjour', goodNight: 'Bonne nuit', seeYou: 'À bientôt', thanks: 'Merci', pardon: 'Pardon', okay: 'D\'accord', great: 'Super', love: 'Amour', son: 'Le fils', daughter: 'La fille', baby: 'Le bébé', family: 'La famille', child: 'L\'enfant', coffee: 'Le café', cheese: 'Le fromage', fruit: 'Le fruit', meat: 'La viande', egg: 'L\'œuf', pencil: 'Le crayon', teacher: 'L\'enseignant', class: 'La classe', desk: 'Le bureau', lesson: 'La leçon', student: 'L\'étudiant', six: 'Six', seven: 'Sept', eight: 'Huit', nine: 'Neuf', ten: 'Dix', orange: 'Orange', pink: 'Rose', purple: 'Violet', grey: 'Gris'
  },
  de: { 
    hello: 'Hallo', goodbye: 'Tschüss', please: 'Bitte', thankYou: 'Danke', mother: 'Die Mutter', father: 'Der Vater', friend: 'Der Freund', brother: 'Der Bruder', sister: 'Die Schwester', water: 'Das Wasser', bread: 'Das Brot', book: 'Das Buch', one: 'Eins', two: 'Zwei', three: 'Drei', red: 'Rot', blue: 'Blau', green: 'Grün', sun: 'Die Sonne', rain: 'Der Regen', wind: 'Der Wind',
    yes: 'Ja', no: 'Nein', welcome: 'Willkommen', howAreYou: 'Wie geht es dir?', fine: 'Gut', sorry: 'Entschuldigung', excuseMe: 'Entschuldigung', youAreWelcome: 'Bitte sehr', milk: 'Die Milch', apple: 'Der Apfel', tea: 'Der Tee', pen: 'Der Stift', paper: 'Das Papier', school: 'Die Schule', four: 'Vier', five: 'Fünf', yellow: 'Gelb', black: 'Schwarz', white: 'Weiß',
    goodMorning: 'Guten Morgen', goodNight: 'Gute Nacht', seeYou: 'Bis bald', thanks: 'Danke', pardon: 'Entschuldigung', okay: 'Okay', great: 'Toll', love: 'Liebe', son: 'Der Sohn', daughter: 'Die Tochter', baby: 'Das Baby', family: 'Die Familie', child: 'Das Kind', coffee: 'Der Kaffee', cheese: 'Der Käse', fruit: 'Das Obst', meat: 'Das Fleisch', egg: 'Das Ei', pencil: 'Der Bleistift', teacher: 'Der Lehrer', class: 'Die Klasse', desk: 'Der Schreibtisch', lesson: 'Die Lektion', student: 'Der Student', six: 'Sechs', seven: 'Sieben', eight: 'Acht', nine: 'Neun', ten: 'Zehn', orange: 'Orange', pink: 'Rosa', purple: 'Lila', grey: 'Grau'
  },
  ja: { 
    hello: 'こんにちは', goodbye: 'さようなら', please: 'お願いします', thankYou: 'ありがとう', mother: '母', father: '父', friend: '友達', brother: '兄', sister: '姉', water: '水', bread: 'パン', book: '本', one: '一', two: '二', three: '三', red: '赤', blue: '青', green: '緑', sun: '太陽', rain: '雨', wind: '風',
    yes: 'はい', no: 'いいえ', welcome: 'ようこそ', howAreYou: 'お元気ですか？', fine: '元気です', sorry: 'ごめんなさい', excuseMe: 'すみません', youAreWelcome: 'どういたしまして', milk: '牛乳', apple: 'りんご', tea: 'お茶', pen: 'ペン', paper: '紙', school: '学校', four: '四', five: '五', yellow: '黄色', black: '黒', white: '白',
    goodMorning: 'おはようございます', goodNight: 'おやすみなさい', seeYou: 'またね', thanks: 'どうも', pardon: 'すみません', okay: '大丈夫', great: 'すごい', love: '愛', son: '息子', daughter: '娘', baby: '赤ちゃん', family: '家族', child: '子供', coffee: 'コーヒー', cheese: 'チーズ', fruit: '果物', meat: '肉', egg: '卵', pencil: '鉛筆', teacher: '先生', class: 'クラス', desk: '机', lesson: 'レッスン', student: '学生', six: '六', seven: '七', eight: '八', nine: '九', ten: '十', orange: 'オレンジ', pink: 'ピンク', purple: '紫', grey: 'グレー'
  },
  it: { 
    hello: 'Ciao', goodbye: 'Arrivederci', please: 'Per favore', thankYou: 'Grazie', mother: 'La madre', father: 'Il padre', friend: 'L\'amico', brother: 'Il fratello', sister: 'La sorella', water: 'L\'acqua', bread: 'Il pane', book: 'Il libro', one: 'Uno', two: 'Due', three: 'Tre', red: 'Rosso', blue: 'Blu', green: 'Verde', sun: 'Il sole', rain: 'La pioggia', wind: 'Il vento',
    yes: 'Sì', no: 'No', welcome: 'Benvenuto', howAreYou: 'Come stai?', fine: 'Bene', sorry: 'Scusa', excuseMe: 'Mi scusi', youAreWelcome: 'Prego', milk: 'Il latte', apple: 'La mela', tea: 'Tè', pen: 'La penna', paper: 'La carta', school: 'La scuola', four: 'Quattro', five: 'Cinque', yellow: 'Giallo', black: 'Nero', white: 'Bianco',
    goodMorning: 'Buongiorno', goodNight: 'Buonanotte', seeYou: 'Ci vediamo', thanks: 'Grazie', pardon: 'Perdono', okay: 'Va bene', great: 'Grande', love: 'Amore', son: 'Il figlio', daughter: 'La filha', baby: 'Il neonato', family: 'La famiglia', child: 'Il bambino', coffee: 'Il caffè', cheese: 'Il formaggio', fruit: 'La frutta', meat: 'La carne', egg: 'L\'uovo', pencil: 'La matita', teacher: 'L\'insegnante', class: 'La classe', desk: 'La scrivania', lesson: 'La lezione', student: 'Lo studente', six: 'Sei', seven: 'Sette', eight: 'Otto', nine: 'Nove', ten: 'Dieci', orange: 'Arancione', pink: 'Rosa', purple: 'Viola', grey: 'Grigio'
  },
  zh: { 
    hello: '你好', goodbye: '再见', please: '请', thankYou: '谢谢', mother: '母亲', father: '父亲', friend: '朋友', brother: '哥哥', sister: '姐姐', water: '水', bread: '面包', book: '书', one: '一', two: '二', three: '三', red: '红', blue: '蓝', green: '绿', sun: '太阳', rain: '雨', wind: '风',
    yes: '是', no: '不', welcome: '欢迎', howAreYou: '你好吗？', fine: '很好', sorry: '对不起', excuseMe: '打扰一下', youAreWelcome: '不客气', milk: '牛奶', apple: '苹果', tea: '茶', pen: '笔', paper: '纸', school: '学校', four: '四', five: '五', yellow: '黄色', black: '黑色', white: '白色',
    goodMorning: '早上好', goodNight: '晚安', seeYou: '再见', thanks: '谢谢', pardon: '对不起', okay: '好的', great: '太棒了', love: '爱', son: '儿子', daughter: '女儿', baby: '婴儿', family: '家庭', child: '孩子', coffee: '咖啡', cheese: '奶酪', fruit: '水果', meat: '肉', egg: '鸡蛋', pencil: '铅笔', teacher: '老师', class: '班级', desk: '书桌', lesson: '课', student: '学生', six: '六', seven: '七', eight: '八', nine: '九', ten: '十', orange: '橙色', pink: '粉红色', purple: '紫色', grey: '灰色'
  },
  ru: { 
    hello: 'Привет', goodbye: 'Пока', please: 'Пожалуйста', thankYou: 'Спасибо', mother: 'Мать', father: 'Отец', friend: 'Друг', brother: 'Брат', sister: 'Сестра', water: 'Вода', bread: 'Хлеб', book: 'Книга', one: 'Один', two: 'Два', three: 'Три', red: 'Красный', blue: 'Синий', green: 'Зеленый', sun: 'Солнце', rain: 'Дождь', wind: 'Ветер',
    yes: 'Да', no: 'Нет', welcome: 'Добро пожаловать', howAreYou: 'Как дела?', fine: 'Хорошо', sorry: 'Извините', excuseMe: 'Простите', youAreWelcome: 'Не за что', milk: 'Молоко', apple: 'Яблоко', tea: 'Чай', pen: 'Ручка', paper: 'Бумага', school: 'Школа', four: 'Четыре', five: 'Пять', yellow: 'Желтый', black: 'Черный', white: 'Белый',
    goodMorning: 'Доброе утро', goodNight: 'Спокойной ночи', seeYou: 'До встречи', thanks: 'Спасибо', pardon: 'Простите', okay: 'Хорошо', great: 'Отлично', love: 'Любовь', son: 'Сын', daughter: 'Дочь', baby: 'Малыш', family: 'Семья', child: 'Ребенок', coffee: 'Кофе', cheese: 'Сыр', fruit: 'Фрукт', meat: 'Мясо', egg: 'Яйцо', pencil: 'Карандаш', teacher: 'Учитель', class: 'Класс', desk: 'Письменный стол', lesson: 'Урок', student: 'Студент', six: 'Шесть', seven: 'Семь', eight: 'Восемь', nine: 'Девять', ten: 'Десять', orange: 'Оранжевый', pink: 'Розовый', purple: 'Фиолетовый', grey: 'Серый'
  },
  pt: { 
    hello: 'Olá', goodbye: 'Adeus', please: 'Por favor', thankYou: 'Obrigado', mother: 'A mãe', father: 'O pai', friend: 'O amigo', brother: 'O irmão', sister: 'A irmã', water: 'A água', bread: 'O pão', book: 'O livro', one: 'Um', two: 'Dois', three: 'Três', red: 'Vermelho', blue: 'Azul', green: 'Verde', sun: 'O sol', rain: 'A chuva', wind: 'O vento',
    yes: 'Sim', no: 'Não', welcome: 'Bem-vindo', howAreYou: 'Como vai?', fine: 'Bem', sorry: 'Desculpe', excuseMe: 'Com licença', youAreWelcome: 'De nada', milk: 'O leite', apple: 'A maçã', tea: 'O chá', pen: 'A caneta', paper: 'O papel', school: 'A escola', four: 'Quatro', five: 'Cinco', yellow: 'Amarelo', black: 'Preto', white: 'Branco',
    goodMorning: 'Bom dia', goodNight: 'Boa noite', seeYou: 'Até logo', thanks: 'Obrigado', pardon: 'Desculpe', okay: 'Tudo bem', great: 'Ótimo', love: 'Amor', son: 'O filho', daughter: 'A filha', baby: 'O bebê', family: 'A família', child: 'A criança', coffee: 'O café', cheese: 'O queijo', fruit: 'A fruta', meat: 'A carne', egg: 'O ovo', pencil: 'O lápiz', teacher: 'O professor', class: 'A classe', desk: 'A escrivaninha', lesson: 'A lição', student: 'O estudante', six: 'Seis', seven: 'Sete', eight: 'Oito', nine: 'Nove', ten: 'Dez', orange: 'Laranja', pink: 'Rosa', purple: 'Roxo', grey: 'Cinza'
  },
  ko: { 
    hello: '안녕하세요', goodbye: '안녕히 가세요', please: '부탁합니다', thankYou: '감사합니다', mother: '어머니', father: '아버지', friend: '친구', brother: '형', sister: '누나', water: '물', bread: '빵', book: '책', one: '일', two: '이', three: '삼', red: '빨간색', blue: '파란색', green: '초록색', sun: '태양', rain: '비', wind: '바람',
    yes: '네', no: '아니요', welcome: '환영합니다', howAreYou: '어떻게 지내세요?', fine: '잘 지내요', sorry: '죄송합니다', excuseMe: '실례합니다', youAreWelcome: '천만에요', milk: '우유', apple: '사과', tea: '차', pen: '펜', paper: '종이', school: '학교', four: '사', five: '오', yellow: '노란색', black: '검은색', white: '흰색',
    goodMorning: '좋은 아침입니다', goodNight: '안녕히 주무세요', seeYou: '또 만나요', thanks: '고마워요', pardon: '미안해요', okay: '괜찮아요', great: '대단해요', love: '사랑', son: '아들', daughter: '딸', baby: '아기', family: '가족', child: '아이', coffee: '커피', cheese: '치즈', fruit: '과일', meat: '고기', egg: '계란', pencil: '연필', teacher: '선생님', class: '학급', desk: '책상', lesson: '과목', student: '학생', six: '육', seven: '칠', eight: '팔', nine: '구', ten: '십', orange: '주황색', pink: '분홍색', purple: '보라색', grey: '회색'
  },
  tr: { 
    hello: 'Merhaba', goodbye: 'Hoşça kal', please: 'Lütfen', thankYou: 'Teşekkürler', mother: 'Anne', father: 'Baba', friend: 'Arkadaş', brother: 'Erkek kardeş', sister: 'Kız kardeş', water: 'Su', bread: 'Ekmek', book: 'Kitap', one: 'Bir', two: 'İki', three: 'Üç', red: 'Kırmızı', blue: 'Mavi', green: 'Yeşil', sun: 'Güneş', rain: 'Yağmur', wind: 'Rüzgar',
    yes: 'Evet', no: 'Hayır', welcome: 'Hoş geldiniz', howAreYou: 'Nasılsınız?', fine: 'İyiyim', sorry: 'Üzgünüm', excuseMe: 'Affedersiniz', youAreWelcome: 'Rica ederim', milk: 'Süt', apple: 'Elma', tea: 'Çay', pen: 'Kalem', paper: 'Kağıt', school: 'Okul', four: 'Dört', five: 'Beş', yellow: 'Sarı', black: 'Siyah', white: 'Beyaz',
    goodMorning: 'Günaydın', goodNight: 'İyi geceler', seeYou: 'Görüşürüz', thanks: 'Teşekkürler', pardon: 'Affedersiniz', okay: 'Tamam', great: 'Harika', love: 'Sevgi', son: 'Oğul', daughter: 'Kız evlat', baby: 'Bebek', family: 'Aile', child: 'Çocuk', coffee: 'Kahve', cheese: 'Peynir', fruit: 'Meyve', meat: 'Et', egg: 'Yumurta', pencil: 'Kurşun kalem', teacher: 'Öğretmen', class: 'Sınıf', desk: 'Sıra', lesson: 'Ders', student: 'Öğrenci', six: 'Altı', seven: 'Yedi', eight: 'Sekiz', nine: 'Dokuz', ten: 'On', orange: 'Turuncu', pink: 'Pembe', purple: 'Mor', grey: 'Gri'
  },
  ar: { 
    hello: 'مرحبا', goodbye: 'وداعا', please: 'من فضلك', thankYou: 'شكرا', mother: 'الأم', father: 'الأب', friend: 'الصديق', brother: 'أخ', sister: 'أخت', water: 'الماء', bread: 'الخبز', book: 'الكتاب', one: 'واحد', two: 'اثنين', three: 'ثلاثة', red: 'أحمر', blue: 'أزرق', green: 'أخضر', sun: 'شمس', rain: 'مطر', wind: 'ريح',
    yes: 'نعم', no: 'لا', welcome: 'مرحباً', howAreYou: 'كيف حالك؟', fine: 'بخير', sorry: 'آسف', excuseMe: 'معذرة', youAreWelcome: 'على الرحب والسعة', milk: 'حليب', apple: 'تفاحة', tea: 'شاي', pen: 'قلم', paper: 'ورقة', school: 'مدرسة', four: 'أربعة', five: 'خمسة', yellow: 'أصفر', black: 'أسود', white: 'أبيض',
    goodMorning: 'صباح الخير', goodNight: 'تصبح على خير', seeYou: 'أراك لاحقاً', thanks: 'شكراً', pardon: 'عفواً', okay: 'حسناً', great: 'رائع', love: 'حب', son: 'الابن', daughter: 'الابنة', baby: 'طفل رضيع', family: 'العائلة', child: 'طفل', coffee: 'القهوة', cheese: 'الجبن', fruit: 'الفاكهة', meat: 'اللحم', egg: 'البيضة', pencil: 'قلم رصاص', teacher: 'المعلم', class: 'الصف', desk: 'المكتب', lesson: 'الدرس', student: 'الطالب', six: 'ستة', seven: 'سبعة', eight: 'ثمانية', nine: 'تسعة', ten: 'عشرة', orange: 'برتقالي', pink: 'وردي', purple: 'بنفسجي', grey: 'رمادي'
  },
  nl: { 
    hello: 'Hallo', goodbye: 'Tot ziens', please: 'Alsjeblieft', thankYou: 'Bedankt', mother: 'De moeder', father: 'De vader', friend: 'De vriend', brother: 'De broer', sister: 'De zus', water: 'Het water', bread: 'Het brood', book: 'Het boek', one: 'Een', two: 'Twee', three: 'Drie', red: 'Rood', blue: 'Blauw', green: 'Groen', sun: 'De zon', rain: 'De regen', wind: 'De wind',
    yes: 'Ja', no: 'Nee', welcome: 'Welkom', howAreYou: 'Hoe gaat het?', fine: 'Goed', sorry: 'Sorry', excuseMe: 'Pardon', youAreWelcome: 'Graag gedaan', milk: 'Melk', apple: 'Appel', tea: 'Thee', pen: 'Pen', paper: 'Papier', school: 'School', four: 'Vier', five: 'Vijf', yellow: 'Geel', black: 'Zwart', white: 'Wit',
    goodMorning: 'Goedemorgen', goodNight: 'Goedenacht', seeYou: 'Tot ziens', thanks: 'Bedankt', pardon: 'Pardon', okay: 'Oké', great: 'Geweldig', love: 'Liefde', son: 'Zoon', daughter: 'Dochter', baby: 'Baby', family: 'Familie', child: 'Kind', coffee: 'Koffie', cheese: 'Kaas', fruit: 'Fruit', meat: 'Vlees', egg: 'Ei', pencil: 'Potlood', teacher: 'Leraar', class: 'Klas', desk: 'Bureau', lesson: 'Les', student: 'Student', six: 'Zes', seven: 'Zeven', eight: 'Acht', nine: 'Negen', ten: 'Tien', orange: 'Oranje', pink: 'Roze', purple: 'Paars', grey: 'Grijs'
  },
  sv: { 
    hello: 'Hallå', goodbye: 'Hejdå', please: 'Snälla', thankYou: 'Tack', mother: 'Mamman', father: 'Pappan', friend: 'Vännen', brother: 'Brodern', sister: 'Systern', water: 'Vatten', bread: 'Bröd', book: 'Boken', one: 'En', two: 'Två', three: 'Tre', red: 'Röd', blue: 'Blå', green: 'Grön', sun: 'Solen', rain: 'Regn', wind: 'Vind',
    yes: 'Ja', no: 'Nej', welcome: 'Välkommen', howAreYou: 'Hur mår du?', fine: 'Bra', sorry: 'Förlåt', excuseMe: 'Ursäkta', youAreWelcome: 'Varsågod', milk: 'Mjölk', apple: 'Äpple', tea: 'Te', pen: 'Penna', paper: 'Papper', school: 'Skola', four: 'Fyra', five: 'Fem', yellow: 'Gul', black: 'Svart', white: 'Vit',
    goodMorning: 'God morgon', goodNight: 'God natt', seeYou: 'Vi ses', thanks: 'Tack', pardon: 'Ursäkta', okay: 'Okej', great: 'Jättebra', love: 'Kärlek', son: 'Son', daughter: 'Dotter', baby: 'Bebis', family: 'Familj', child: 'Barn', coffee: 'Kaffe', cheese: 'Ost', fruit: 'Frukt', meat: 'Kött', egg: 'Ägg', pencil: 'Penna', teacher: 'Lärare', class: 'Klass', desk: 'Skrivbord', lesson: 'Lektion', student: 'Student', six: 'Sex', seven: 'Sju', eight: 'Åtta', nine: 'Nio', ten: 'Tio', orange: 'Orange', pink: 'Rosa', purple: 'Lila', grey: 'Grå'
  },
  hi: { 
    hello: 'नमस्ते', goodbye: 'अलविदा', please: 'कृपया', thankYou: 'धन्यवाद', mother: 'माता', father: 'पिता', friend: 'मित्र', brother: 'भाई', sister: 'बहन', water: 'पानी', bread: 'रोti', book: 'पुस्तक', one: 'एक', two: 'दो', three: 'तीन', red: 'लाल', blue: 'नीला', green: 'हरा', sun: 'सूर्य', rain: 'वर्षा', wind: 'हवा',
    yes: 'हाँ', no: 'नहीं', welcome: 'स्वागत', howAreYou: 'आप कैसे हैं?', fine: 'ठीक', sorry: 'माफ़ कीजिये', excuseMe: 'क्षमा करें', youAreWelcome: 'आपका स्वागत है', milk: 'दूध', apple: 'सेब', tea: 'चाय', pen: 'कलम', paper: 'कागज़', school: 'विद्यालय', four: 'चार', five: 'पाँच', yellow: 'पीला', black: 'काला', white: 'सफेद',
    goodMorning: 'सुप्रभात', goodNight: 'शुभ रात्रि', seeYou: 'फिर मिलेंगे', thanks: 'धन्यवाद', pardon: 'माफ़ कीजिए', okay: 'ठीक है', great: 'बहुत बढ़िया', love: 'प्यार', son: 'बेटा', daughter: 'बेटी', baby: 'शिशु', family: 'परिवार', child: 'बच्चा', coffee: 'कॉफी', cheese: 'पनीर', fruit: 'फल', meat: 'मांस', egg: 'अंडा', pencil: 'पेंसिल', teacher: 'शिक्षक', class: 'कक्षा', desk: 'मेज़', lesson: 'पाठ', student: 'छात्र', six: 'छह', seven: 'सात', eight: 'आठ', nine: 'नौ', ten: 'दस', orange: 'नारंगी', pink: 'गुलाबी', purple: 'बैंगनी', grey: 'सलेटी'
  },
  en: { 
    hello: 'Hello', goodbye: 'Goodbye', please: 'Please', thankYou: 'Thank you', mother: 'Mother', father: 'Father', friend: 'Friend', brother: 'Brother', sister: 'Sister', water: 'Water', bread: 'Bread', book: 'Book', one: 'One', two: 'Two', three: 'Three', red: 'Red', blue: 'Blue', green: 'Green', sun: 'Sun', rain: 'Rain', wind: 'Wind',
    yes: 'Yes', no: 'No', welcome: 'Welcome', howAreYou: 'How are you?', fine: 'Fine', sorry: 'Sorry', excuseMe: 'Excuse me', youAreWelcome: "You're welcome", milk: 'Milk', apple: 'Apple', tea: 'Tea', pen: 'Pen', paper: 'Paper', school: 'School', four: 'Four', five: 'Five', yellow: 'Yellow', black: 'Black', white: 'White',
    goodMorning: 'Good morning', goodNight: 'Good night', seeYou: 'See you', thanks: 'Thanks', pardon: 'Pardon', okay: 'Okay', great: 'Great', love: 'Love', son: 'Son', daughter: 'Daughter', baby: 'Baby', family: 'Family', child: 'Child', coffee: 'Coffee', cheese: 'Cheese', fruit: 'Fruit', meat: 'Meat', egg: 'Egg', pencil: 'Pencil', teacher: 'Teacher', class: 'Class', desk: 'Desk', lesson: 'Lesson', student: 'Student', six: 'Six', seven: 'Seven', eight: 'Eight', nine: 'Nine', ten: 'Ten', orange: 'Orange', pink: 'Pink', purple: 'Purple', grey: 'Grey'
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

export let INTERMEDIATE_VOCAB: Record<string, Record<string, string>> = {};

export let ADVANCED_VOCAB: Record<string, Record<string, string>> = {};



const TIER1_CATEGORY_VOCAB: Record<number, { key: keyof LangVocab; english: string }[]> = {
  0: [
    { key: 'hello', english: 'Hello' },
    { key: 'goodbye', english: 'Goodbye' },
    { key: 'yes', english: 'Yes' },
    { key: 'no', english: 'No' },
    { key: 'welcome', english: 'Welcome' },
    { key: 'howAreYou', english: 'How are you?' },
    { key: 'fine', english: 'Fine' },
    { key: 'goodMorning', english: 'Good morning' },
    { key: 'goodNight', english: 'Good night' },
    { key: 'seeYou', english: 'See you' }
  ],
  1: [
    { key: 'please', english: 'Please' },
    { key: 'thankYou', english: 'Thank you' },
    { key: 'sorry', english: 'Sorry' },
    { key: 'excuseMe', english: 'Excuse me' },
    { key: 'youAreWelcome', english: "You're welcome" },
    { key: 'thanks', english: 'Thanks' },
    { key: 'pardon', english: 'Pardon' },
    { key: 'okay', english: 'Okay' },
    { key: 'great', english: 'Great' },
    { key: 'love', english: 'Love' }
  ],
  2: [
    { key: 'mother', english: 'Mother' },
    { key: 'father', english: 'Father' },
    { key: 'friend', english: 'Friend' },
    { key: 'brother', english: 'Brother' },
    { key: 'sister', english: 'Sister' },
    { key: 'son', english: 'Son' },
    { key: 'daughter', english: 'Daughter' },
    { key: 'baby', english: 'Baby' },
    { key: 'family', english: 'Family' },
    { key: 'child', english: 'Child' }
  ],
  3: [
    { key: 'water', english: 'Water' },
    { key: 'bread', english: 'Bread' },
    { key: 'milk', english: 'Milk' },
    { key: 'apple', english: 'Apple' },
    { key: 'tea', english: 'Tea' },
    { key: 'coffee', english: 'Coffee' },
    { key: 'cheese', english: 'Cheese' },
    { key: 'fruit', english: 'Fruit' },
    { key: 'meat', english: 'Meat' },
    { key: 'egg', english: 'Egg' }
  ],
  4: [
    { key: 'book', english: 'Book' },
    { key: 'pen', english: 'Pen' },
    { key: 'paper', english: 'Paper' },
    { key: 'school', english: 'School' },
    { key: 'pencil', english: 'Pencil' },
    { key: 'teacher', english: 'Teacher' },
    { key: 'class', english: 'Class' },
    { key: 'desk', english: 'Desk' },
    { key: 'lesson', english: 'Lesson' },
    { key: 'student', english: 'Student' }
  ],
  5: [
    { key: 'one', english: 'One' },
    { key: 'two', english: 'Two' },
    { key: 'three', english: 'Three' },
    { key: 'four', english: 'Four' },
    { key: 'five', english: 'Five' },
    { key: 'six', english: 'Six' },
    { key: 'seven', english: 'Seven' },
    { key: 'eight', english: 'Eight' },
    { key: 'nine', english: 'Nine' },
    { key: 'ten', english: 'Ten' }
  ],
  6: [
    { key: 'red', english: 'Red' },
    { key: 'blue', english: 'Blue' },
    { key: 'green', english: 'Green' },
    { key: 'yellow', english: 'Yellow' },
    { key: 'black', english: 'Black' },
    { key: 'white', english: 'White' },
    { key: 'orange', english: 'Orange' },
    { key: 'pink', english: 'Pink' },
    { key: 'purple', english: 'Purple' },
    { key: 'grey', english: 'Grey' }
  ]
};

const TIER2_CATEGORY_VOCAB: Record<number, string[]> = {
  0: [
    'family_have_mother_i', 'family_have_father_i', 'family_have_brother_i', 'family_have_sister_i', 'family_have_friend_i',
    'family_have_child_i', 'family_see_mother_i', 'family_see_father_i', 'family_see_brother_i', 'family_see_sister_i'
  ],
  1: [
    'family_have_mother_we', 'family_have_father_we', 'family_have_brother_we', 'family_have_sister_we', 'family_have_friend_we',
    'family_have_child_we', 'family_see_mother_we', 'family_see_father_we', 'family_see_brother_we', 'family_see_sister_we'
  ],
  2: [
    'social_see_house_i', 'social_see_car_i', 'social_see_friend_i', 'social_have_house_i', 'social_have_car_i',
    'social_see_house_we', 'social_see_car_we', 'social_see_friend_we', 'social_have_house_we', 'social_have_car_we'
  ],
  3: [
    'dining_eat_bread_i', 'dining_eat_cheese_i', 'dining_eat_apple_i', 'dining_eat_meat_i', 'dining_eat_egg_i',
    'dining_drink_water_i', 'dining_drink_milk_i', 'dining_drink_tea_i', 'dining_drink_coffee_i', 'dining_drink_juice_i'
  ],
  4: [
    'media_read_book_i', 'media_read_novel_i', 'media_read_letter_i', 'media_write_letter_i', 'media_write_essay_i',
    'media_read_book_we', 'media_read_novel_we', 'media_read_letter_we', 'media_write_letter_we', 'media_write_essay_we'
  ],
  5: [
    'quantities_have_book_i', 'quantities_have_apple_i', 'quantities_have_car_i',
    'quantities_have_book_we', 'quantities_have_apple_we', 'quantities_have_car_we',
    'quantities_have_book_i', 'quantities_have_apple_i', 'quantities_have_car_i', 'quantities_have_book_we'
  ],
  6: [
    'environment_see_house_i', 'environment_see_car_i', 'environment_see_house_we', 'environment_see_car_we',
    'environment_see_house_i', 'environment_see_car_i', 'environment_see_house_we', 'environment_see_car_we',
    'environment_see_house_i', 'environment_see_car_i'
  ]
};

const TIER3_CATEGORY_VOCAB: Record<number, string[]> = {
  0: [
    'family_have_mother_i', 'family_have_father_i', 'family_have_brother_i', 'family_have_sister_i', 'family_have_friend_i',
    'family_have_child_i', 'family_see_mother_i', 'family_see_father_i', 'family_see_brother_i', 'family_see_sister_i'
  ],
  1: [
    'family_have_mother_we', 'family_have_father_we', 'family_have_brother_we', 'family_have_sister_we', 'family_have_friend_we',
    'family_have_child_we', 'family_see_mother_we', 'family_see_father_we', 'family_see_brother_we', 'family_see_sister_we'
  ],
  2: [
    'social_see_house_i', 'social_see_car_i', 'social_see_friend_i', 'social_have_house_i', 'social_have_car_i',
    'social_see_house_we', 'social_see_car_we', 'social_see_friend_we', 'social_have_house_we', 'social_have_car_we'
  ],
  3: [
    'dining_eat_bread_i', 'dining_eat_cheese_i', 'dining_eat_apple_i', 'dining_eat_meat_i', 'dining_eat_egg_i',
    'dining_drink_water_i', 'dining_drink_milk_i', 'dining_drink_tea_i', 'dining_drink_coffee_i', 'dining_drink_juice_i'
  ],
  4: [
    'media_read_book_i', 'media_read_novel_i', 'media_read_letter_i', 'media_write_letter_i', 'media_write_essay_i',
    'media_read_book_we', 'media_read_novel_we', 'media_read_letter_we', 'media_write_letter_we', 'media_write_essay_we'
  ],
  5: [
    'quantities_have_book_i', 'quantities_have_apple_i', 'quantities_have_car_i',
    'quantities_have_book_we', 'quantities_have_apple_we', 'quantities_have_car_we',
    'quantities_have_book_i', 'quantities_have_apple_i', 'quantities_have_car_i', 'quantities_have_book_we'
  ],
  6: [
    'environment_see_house_i', 'environment_see_car_i', 'environment_see_house_we', 'environment_see_car_we',
    'environment_see_house_i', 'environment_see_car_i', 'environment_see_house_we', 'environment_see_car_we',
    'environment_see_house_i', 'environment_see_car_i'
  ]
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

  const buildChips = (correctText: string, distractors: string[]) => {
    const cleanWord = (w: string) => w.replace(/[.,\/#!$%\^&\*;:{}=\-_\x60~()?¿¡]/g, "").trim();
    const correctWords = correctText.split(/\s+/).map(cleanWord).filter(Boolean);
    const distractorWords = distractors.join(" ").split(/\s+/).map(cleanWord).filter(Boolean);
    
    const uniqueCorrect = Array.from(new Set(correctWords));
    const uniqueDistractors = Array.from(new Set(distractorWords))
      .filter(w => !uniqueCorrect.some(cw => cw.toLowerCase() === w.toLowerCase()))
      .slice(0, 4);
    
    return shuffleOptions([...uniqueCorrect, ...uniqueDistractors]);
  };

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
      { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'sentence-builder', prompt: `Translate: "${p0.source}, ${p1.source}"`, options: buildChips(`${p0.target} ${p1.target}`, [p2.target, p3.target]), correctAnswer: `${p0.target}, ${p1.target}` },
      { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'sentence-builder', prompt: `Translate: "${p2.source}, ${p3.source}"`, options: buildChips(`${p2.target} ${p3.target}`, [p0.target, p1.target]), correctAnswer: `${p2.target}, ${p3.target}` },
      { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'multiple-choice', prompt: `Translate: "${p0.source}"`, options: shuffleOptions([p0.target, p1.target, p2.target, p3.target]), correctAnswer: p0.target },
      { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'sentence-builder', prompt: `Translate: "${p1.source}, ${p3.source}"`, options: buildChips(`${p1.target} ${p3.target}`, [p0.target, p2.target]), correctAnswer: `${p1.target}, ${p3.target}` },
      { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "${p3.source}" in ${langName}?`, options: shuffleOptions([p3.target, p0.target, p1.target, p2.target]), correctAnswer: p3.target },
      { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match the terms', options: [p0.target, p0.source, p1.target, p1.source, p2.target, p2.source, p3.target, p3.source], correctAnswer: `${p0.target}:${p0.source},${p1.target}:dots` }
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
      { id: `q_${lang.id}_2_${lessonIndex}_5`, type: 'sentence-builder', prompt: `Translate: "${p4.source}"`, options: buildChips(p4.target, [p0.target, p1.target]), correctAnswer: p4.target },
      { id: `q_${lang.id}_2_${lessonIndex}_6`, type: 'translate', prompt: `Translate: "${p2.target}"`, correctAnswer: p2.source },
      { id: `q_${lang.id}_2_${lessonIndex}_7`, type: 'sentence-builder', prompt: `Translate: "${p0.source}"`, options: buildChips(p0.target, [p2.target, p3.target]), correctAnswer: p0.target },
      { id: `q_${lang.id}_2_${lessonIndex}_8`, type: 'multiple-choice', prompt: `How do you say "${p3.source}" in ${langName}?`, options: shuffleOptions([p3.target, p0.target, p1.target, p4.target]), correctAnswer: p3.target },
      { id: `q_${lang.id}_2_${lessonIndex}_9`, type: 'sentence-builder', prompt: `Translate: "${p1.source}"`, options: buildChips(p1.target, [p2.target, p4.target]), correctAnswer: p1.target },
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
      { id: `q_${lang.id}_3_${lessonIndex}_5`, type: 'sentence-builder', prompt: `Translate: "${p4.source}"`, options: buildChips(p4.target, [p0.target, p1.target]), correctAnswer: p4.target },
      { id: `q_${lang.id}_3_${lessonIndex}_6`, type: 'translate', prompt: `Translate: "${p2.target}"`, correctAnswer: p2.source },
      { id: `q_${lang.id}_3_${lessonIndex}_7`, type: 'sentence-builder', prompt: `Translate: "${p0.source}"`, options: buildChips(p0.target, [p2.target, p3.target]), correctAnswer: p0.target },
      { id: `q_${lang.id}_3_${lessonIndex}_8`, type: 'multiple-choice', prompt: `How do you say "${p3.source}" in ${langName}?`, options: shuffleOptions([p3.target, p0.target, p1.target, p4.target]), correctAnswer: p3.target },
      { id: `q_${lang.id}_3_${lessonIndex}_9`, type: 'sentence-builder', prompt: `Translate: "${p1.source}"`, options: buildChips(p1.target, [p2.target, p4.target]), correctAnswer: p1.target },
      { id: `q_${lang.id}_3_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match advanced terms', options: [p0.target, p0.source, p1.target, p1.source, p2.target, p2.source, p3.target, p3.source], correctAnswer: `${p0.target}:${p0.source},${p1.target}:${p1.source},${p2.target}:${p2.source},${p3.target}:${p3.source}` }
    ];
  }
}
interface VerbConjugation {
  i: string;
  we: string;
}

interface GrammarRule {
  order: 'SVO' | 'SOV';
  space: boolean;
  subjects: { i: string; we: string };
  verbs: {
    eat: VerbConjugation;
    drink: VerbConjugation;
    read: VerbConjugation;
    write: VerbConjugation;
    see: VerbConjugation;
    have: VerbConjugation;
  };
  objects: Record<string, string>;
  objectsAdv: Record<string, string>;
}

export const MULTILINGUAL_GRAMMAR: Record<string, GrammarRule> = {
  en: {
    order: 'SVO',
    space: true,
    subjects: { i: "I", we: "We" },
    verbs: {
      eat: { i: "eat", we: "eat" },
      drink: { i: "drink", we: "drink" },
      read: { i: "read", we: "read" },
      write: { i: "write", we: "write" },
      see: { i: "see", we: "see" },
      have: { i: "have", we: "have" }
    },
    objects: {
      bread: "bread", cheese: "cheese", apple: "an apple", meat: "meat", egg: "an egg", fish: "fish", rice: "rice", fruit: "fruit",
      water: "water", milk: "milk", tea: "tea", coffee: "coffee", juice: "juice",
      book: "a book", novel: "a novel", letter: "a letter", essay: "an essay", paper: "on paper",
      mother: "my mother", father: "my father", brother: "a brother", sister: "a sister", friend: "a friend", child: "a child",
      house: "a house", car: "a car"
    },
    objectsAdv: {
      bread: "warm bread", cheese: "delicious cheese", apple: "a red apple", meat: "fresh meat", egg: "a fresh egg", fish: "grilled fish", rice: "spicy rice", fruit: "sweet fruit",
      water: "pure water", milk: "warm milk", tea: "hot tea", coffee: "hot coffee", juice: "fresh juice",
      book: "a scientific book", novel: "a classical novel", letter: "an important letter", essay: "an academic essay", paper: "on clean paper",
      mother: "my beloved mother", father: "my beloved father", brother: "an older brother", sister: "a younger sister", friend: "a close friend", child: "a lovely child",
      house: "a beautiful house", car: "a fast car"
    }
  },
  tr: {
    order: 'SOV',
    space: true,
    subjects: { i: "", we: "" },
    verbs: {
      eat: { i: "yerim", we: "yeriz" },
      drink: { i: "içerim", we: "içeriz" },
      read: { i: "okurum", we: "okuruz" },
      write: { i: "yazarım", we: "yazarız" },
      see: { i: "görüyorum", we: "görüyoruz" },
      have: { i: "sahibiyim", we: "sahibiz" }
    },
    objects: {
      bread: "ekmek", cheese: "peynir", apple: "elma", meat: "et", egg: "yumurta", fish: "balık", rice: "pilav", fruit: "meyve",
      water: "su", milk: "süt", tea: "çay", coffee: "kahve", juice: "meyve suyu",
      book: "bir kitap", novel: "bir roman", letter: "bir mektup", essay: "bir makale", paper: "kağıda",
      mother: "annemi", father: "babamı", brother: "bir erkek kardeşe", sister: "bir kız kardeşe", friend: "bir arkadaşa", child: "bir çocuğa",
      house: "bir eve", car: "bir arabaya"
    },
    objectsAdv: {
      bread: "sıcak ekmek", cheese: "lezzetli peynir", apple: "kırmızı elma", meat: "taze et", egg: "taze yumurta", fish: "ızgara balık", rice: "baharatlı pilav", fruit: "tatlı meyve",
      water: "temiz su", milk: "ılık süt", tea: "sıcak çay", coffee: "sıcak kahve", juice: "taze meyve suyu",
      book: "bilimsel bir kitap", novel: "klasik bir roman", letter: "önemli bir mektup", essay: "akademik bir makale", paper: "temiz kağıda",
      mother: "sevgili annemi", father: "sevgili babamı", brother: "büyük bir erkek kardeşe", sister: "küçük bir kız kardeşe", friend: "yakın bir arkadaşa", child: "sevimli bir çocuğa",
      house: "güzel bir eve", car: "hızlı bir arabaya"
    }
  },
  es: {
    order: 'SVO',
    space: true,
    subjects: { i: "", we: "" },
    verbs: {
      eat: { i: "como", we: "comemos" },
      drink: { i: "bebo", we: "bebemos" },
      read: { i: "leo", we: "leemos" },
      write: { i: "escribo", we: "escribimos" },
      see: { i: "veo", we: "vemos" },
      have: { i: "tengo", we: "tenemos" }
    },
    objects: {
      bread: "pan", cheese: "queso", apple: "una manzana", meat: "carne", egg: "un huevo", fish: "pescado", rice: "arroz", fruit: "fruta",
      water: "agua", milk: "leche", tea: "té", coffee: "café", juice: "jugo",
      book: "un libro", novel: "una novela", letter: "una carta", essay: "un ensayo", paper: "en papel",
      mother: "a mi madre", father: "a mi padre", brother: "un hermano", sister: "una hermana", friend: "un amigo", child: "un hijo",
      house: "una casa", car: "un carro"
    },
    objectsAdv: {
      bread: "pan caliente", cheese: "queso delicioso", apple: "una manzana roja", meat: "carne fresca", egg: "un huevo fresco", fish: "pescado asado", rice: "arroz picante", fruit: "fruta dulce",
      water: "agua pura", milk: "leche tibia", tea: "té caliente", coffee: "café caliente", juice: "jugo fresco",
      book: "un libro científico", novel: "una novela clásica", letter: "una carta importante", essay: "un ensayo académico", paper: "en papel limpio",
      mother: "a mi querida madre", father: "a mi querido padre", brother: "un hermano mayor", sister: "una hermana menor", friend: "un amigo cercano", child: "un hijo adorable",
      house: "una casa hermosa", car: "un carro rápido"
    }
  },
  fr: {
    order: 'SVO',
    space: true,
    subjects: { i: "Je", we: "Nous" },
    verbs: {
      eat: { i: "mange", we: "mangeons" },
      drink: { i: "bois", we: "buvons" },
      read: { i: "lis", we: "lisons" },
      write: { i: "écris", we: "écrivons" },
      see: { i: "vois", we: "voyons" },
      have: { i: "ai", we: "avons" }
    },
    objects: {
      bread: "du pain", cheese: "du fromage", apple: "une pomme", meat: "de la viande", egg: "un œuf", fish: "du poisson", rice: "du riz", fruit: "des fruits",
      water: "de l'eau", milk: "du lait", tea: "du thé", coffee: "du café", juice: "du jus",
      book: "un livre", novel: "un roman", letter: "une lettre", essay: "une dissertation", paper: "sur du papier",
      mother: "ma mère", father: "mon père", brother: "un frère", sister: "une sœur", friend: "un ami", child: "un enfant",
      house: "une maison", car: "une voiture"
    },
    objectsAdv: {
      bread: "du pain chaud", cheese: "du fromage délicieux", apple: "une pomme rouge", meat: "de la viande fraîche", egg: "un œuf frais", fish: "du poisson grillé", rice: "du riz épicé", fruit: "des fruits doux",
      water: "de l'eau pure", milk: "du lait chaud", tea: "du thé chaud", coffee: "du café chaud", juice: "du jus frais",
      book: "un livre scientifique", novel: "un roman classique", letter: "une lettre importante", essay: "une dissertation académique", paper: "sur du papier propre",
      mother: "ma mère bien-aimée", father: "mon père bien-aimé", brother: "un frère aîné", sister: "une sœur cadette", friend: "un ami proche", child: "un bel enfant",
      house: "une belle maison", car: "une voiture rapide"
    }
  },
  de: {
    order: 'SVO',
    space: true,
    subjects: { i: "Ich", we: "Wir" },
    verbs: {
      eat: { i: "esse", we: "essen" },
      drink: { i: "trinke", we: "trinken" },
      read: { i: "lese", we: "lesen" },
      write: { i: "schreibe", we: "schreiben" },
      see: { i: "sehe", we: "sehen" },
      have: { i: "habe", we: "haben" }
    },
    objects: {
      bread: "Brot", cheese: "Käse", apple: "einen Apfel", meat: "Fleisch", egg: "ein Ei", fish: "Fisch", rice: "Reis", fruit: "Obst",
      water: "Wasser", milk: "Milch", tea: "Tee", coffee: "Kaffee", juice: "Saft",
      book: "ein Buch", novel: "einen Roman", letter: "einen Brief", essay: "einen Aufsatz", paper: "auf Papier",
      mother: "meine Mutter", father: "meinen Vater", brother: "einen Bruder", sister: "eine Schwester", friend: "einen Freund", child: "ein kind",
      house: "ein Haus", car: "ein Auto"
    },
    objectsAdv: {
      bread: "warmes Brot", cheese: "leckeren Käse", apple: "einen roten Apfel", meat: "frisches Fleisch", egg: "ein frisches Ei", fish: "gegrillten Fisch", rice: "scharfen Reis", fruit: "süßes Obst",
      water: "reines Wasser", milk: "warme Milch", tea: "heißen Tee", coffee: "heißen Kaffee", juice: "frischen Saft",
      book: "ein wissenschaftliches Buch", novel: "einen klassischen Roman", letter: "einen wichtigen Brief", essay: "einen akademischen Aufsatz", paper: "auf sauberem Papier",
      mother: "meine geliebte Mutter", father: "meinen geliebten Vater", brother: "einen älteren Bruder", sister: "eine jüngere Schwester", friend: "einen engen Freund", child: "ein liebes Kind",
      house: "ein schönes Haus", car: "ein schnelles Auto"
    }
  },
  it: {
    order: 'SVO',
    space: true,
    subjects: { i: "", we: "" },
    verbs: {
      eat: { i: "mangio", we: "mangiamo" },
      drink: { i: "bebo", we: "beviamo" },
      read: { i: "leggo", we: "leggiamo" },
      write: { i: "scrivo", we: "scriviamo" },
      see: { i: "vedo", we: "vediamo" },
      have: { i: "ho", we: "abbiamo" }
    },
    objects: {
      bread: "pane", cheese: "formaggio", apple: "una mela", meat: "carne", egg: "un uovo", fish: "pesce", rice: "riso", fruit: "frutta",
      water: "acqua", milk: "latte", tea: "tè", coffee: "caffè", juice: "succo",
      book: "un libro", novel: "un romanzo", letter: "una lettera", essay: "un saggio", paper: "su carta",
      mother: "mia madre", father: "mio padre", brother: "un fratello", sister: "una sorella", friend: "un amico", child: "un bambino",
      house: "una casa", car: "un'auto"
    },
    objectsAdv: {
      bread: "pane caldo", cheese: "formaggio delizioso", apple: "una mela rossa", meat: "carne fresca", egg: "un uovo fresco", fish: "pesce grigliato", rice: "riso picante", fruit: "frutta dolce",
      water: "acqua pura", milk: "latte caldo", tea: "tè caldo", coffee: "caffè caldo", juice: "succo fresco",
      book: "un libro scientifico", novel: "un romanzo classico", letter: "una lettera importante", essay: "un saggio accademico", paper: "su carta pulita",
      mother: "mia madre amata", father: "mio padre amato", brother: "un fratello maggiore", sister: "una sorella minore", friend: "un amico intimo", child: "un bel bambino",
      house: "una casa bella", car: "un'auto veloce"
    }
  },
  pt: {
    order: 'SVO',
    space: true,
    subjects: { i: "", we: "" },
    verbs: {
      eat: { i: "como", we: "comemos" },
      drink: { i: "bebo", we: "bebemos" },
      read: { i: "leio", we: "lemos" },
      write: { i: "escrevo", we: "escrevemos" },
      see: { i: "vejo", we: "vemos" },
      have: { i: "tenho", we: "temos" }
    },
    objects: {
      bread: "pão", cheese: "queijo", apple: "uma maçã", meat: "carne", egg: "um ovo", fish: "peixe", rice: "arroz", fruit: "fruta",
      water: "água", milk: "leite", tea: "chá", coffee: "café", juice: "suco",
      book: "um livro", novel: "um romance", letter: "uma carta", essay: "uma redação", paper: "em papel",
      mother: "minha mãe", father: "meu pai", brother: "um irmão", sister: "uma irmã", friend: "um amigo", child: "um filho",
      house: "uma casa", car: "um carro"
    },
    objectsAdv: {
      bread: "pão quente", cheese: "queijo delicioso", apple: "uma maçã vermelha", meat: "carne fresca", egg: "um ovo fresco", fish: "peixe grelhado", rice: "arroz picante", fruit: "fruta doce",
      water: "água pura", milk: "leite morno", tea: "chá quente", coffee: "café quente", juice: "suco fresco",
      book: "um livro científico", novel: "um romance clássico", letter: "uma carta importante", essay: "uma redação académica", paper: "em papel limpo",
      mother: "minha amada mãe", father: "meu amado pai", brother: "um irmão mais velho", sister: "uma irmã mais nova", friend: "um amigo próximo", child: "um filho adorável",
      house: "uma casa bonita", car: "um carro rápido"
    }
  },
  nl: {
    order: 'SVO',
    space: true,
    subjects: { i: "Ik", we: "We" },
    verbs: {
      eat: { i: "eet", we: "eten" },
      drink: { i: "drink", we: "drinken" },
      read: { i: "lees", we: "lezen" },
      write: { i: "schrijf", we: "schrijven" },
      see: { i: "zie", we: "zien" },
      have: { i: "heb", we: "hebben" }
    },
    objects: {
      bread: "brood", cheese: "kaas", apple: "een appel", meat: "vlees", egg: "een ei", fish: "vis", rice: "rijst", fruit: "fruit",
      water: "water", milk: "melk", tea: "thee", coffee: "koffie", juice: "sap",
      book: "een boek", novel: "een roman", letter: "een brief", essay: "een essay", paper: "op papier",
      mother: "mijn moeder", father: "mijn vader", brother: "een broer", sister: "een zus", friend: "een vriend", child: "een kind",
      house: "een huis", car: "een auto"
    },
    objectsAdv: {
      bread: "warm brood", cheese: "heerlijke kaas", apple: "een rode appel", meat: "vers vlees", egg: "een vers ei", fish: "gegrilde vis", rice: "pittige rijst", fruit: "zoet fruit",
      water: "schoon water", milk: "warme melk", tea: "hete thee", coffee: "hete koffie", juice: "vers sap",
      book: "een wetenschappelijk boek", novel: "een klassieke roman", letter: "een belangrijke brief", essay: "een academisch essay", paper: "op schoon papier",
      mother: "mijn geliefde moeder", father: "mijn geliefde vader", brother: "een oudere broer", sister: "een jongere zus", friend: "een hechte vriend", child: "een lief kind",
      house: "een mooi huis", car: "een snelle auto"
    }
  },
  sv: {
    order: 'SVO',
    space: true,
    subjects: { i: "Jag", we: "Vi" },
    verbs: {
      eat: { i: "äter", we: "äter" },
      drink: { i: "dricker", we: "dricker" },
      read: { i: "läser", we: "läser" },
      write: { i: "skriver", we: "skriver" },
      see: { i: "ser", we: "ser" },
      have: { i: "har", we: "har" }
    },
    objects: {
      bread: "bröd", cheese: "ost", apple: "ett äpple", meat: "kött", egg: "ett ägg", fish: "fisk", rice: "ris", fruit: "frukt",
      water: "vatten", milk: "mjölk", tea: "te", coffee: "kaffe", juice: "juice",
      book: "en bok", novel: "en roman", letter: "ett brev", essay: "en uppsats", paper: "på papper",
      mother: "min mamma", father: "min pappa", brother: "en bror", sister: "en syster", friend: "en vän", child: "ett barn",
      house: "ett hus", car: "en bil"
    },
    objectsAdv: {
      bread: "varmt bröd", cheese: "god ost", apple: "ett rött äpple", meat: "färsk kött", egg: "ett färskt ägg", fish: "grillad fisk", rice: "kryddigt ris", fruit: "söt frukt",
      water: "rent vatten", milk: "varm mjölk", tea: "hett te", coffee: "varmt kaffe", juice: "färsk juice",
      book: "en vetenskaplig bok", novel: "en klassisk roman", letter: "ett viktigt brev", essay: "en akademisk uppsats", paper: "på rent papper",
      mother: "min älskade mamma", father: "min älskade pappa", brother: "en äldre bror", sister: "en yngre syster", friend: "en nära vän", child: "ett fint barn",
      house: "ett fint hus", car: "en snabb bil"
    }
  },
  ru: {
    order: 'SVO',
    space: true,
    subjects: { i: "Я", we: "Мы" },
    verbs: {
      eat: { i: "ем", we: "едим" },
      drink: { i: "пью", we: "пьем" },
      read: { i: "читаю", we: "читаем" },
      write: { i: "пишу", we: "пишем" },
      see: { i: "вижу", we: "видим" },
      have: { i: "имею", we: "имеем" }
    },
    objects: {
      bread: "хлеб", cheese: "сыр", apple: "яблоко", meat: "мясо", egg: "яйцо", fish: "рыбу", rice: "рис", fruit: "фрукты",
      water: "воду", milk: "молоко", tea: "чай", coffee: "кофе", juice: "сок",
      book: "книгу", novel: "роман", letter: "письмо", essay: "эссе", paper: "на бумаге",
      mother: "маму", father: "отца", brother: "брата", sister: "сестру", friend: "друга", child: "ребенка",
      house: "дом", car: "машину"
    },
    objectsAdv: {
      bread: "теплый хлеб", cheese: "вкусный сыр", apple: "красное яблоко", meat: "свежее мясо", egg: "свежее яйцо", fish: "жареную рыбу", rice: "острый рис", fruit: "сладкие фрукты",
      water: "чистую воду", milk: "теплое молоко", tea: "горячий чай", coffee: "горячий кофе", juice: "свежий сок",
      book: "научную книгу", novel: "классический роман", letter: "важное письмо", essay: "академическое эссе", paper: "на чистой бумаге",
      mother: "любимую маму", father: "любимого отца", brother: "старшего брата", sister: "младшую сестру", friend: "близкого друга", child: "милого ребенка",
      house: "красивый дом", car: "быструю машину"
    }
  },
  zh: {
    order: 'SVO',
    space: false,
    subjects: { i: "我", we: "我们" },
    verbs: {
      eat: { i: "吃", we: "吃" },
      drink: { i: "喝", we: "喝" },
      read: { i: "读", we: "读" },
      write: { i: "写", we: "写" },
      see: { i: "看见", we: "看见" },
      have: { i: "有", we: "有" }
    },
    objects: {
      bread: "面包", cheese: "奶酪", apple: "苹果", meat: "肉", egg: "鸡蛋", fish: "鱼", rice: "米饭", fruit: "水果",
      water: "水", milk: "牛奶", tea: "茶", coffee: "咖啡", juice: "果汁",
      book: "书", novel: "小说", letter: "信", essay: "文章", paper: "在纸上",
      mother: "妈妈", father: "爸爸", brother: "哥哥", sister: "姐姐", friend: "朋友", child: "孩子",
      house: "房子", car: "车"
    },
    objectsAdv: {
      bread: "热面包", cheese: "美味的奶酪", apple: "红苹果", meat: "新鲜的肉", egg: "新鲜的鸡蛋", fish: "烤鱼", rice: "辛辣的米饭", fruit: "甜水果",
      water: "纯净水", milk: "热牛奶", tea: "热茶", coffee: "热咖啡", juice: "新鲜果汁",
      book: "科学书籍", novel: "经典小说", letter: "重要的信", essay: "学术文章", paper: "在干净的纸上",
      mother: "亲爱的妈妈", father: "亲爱的爸爸", brother: "哥哥", sister: "妹妹", friend: "密友", child: "可爱的孩子",
      house: "漂亮的房子", car: "快车"
    }
  },
  ja: {
    order: 'SOV',
    space: false,
    subjects: { i: "私は", we: "私たちは" },
    verbs: {
      eat: { i: "食べます", we: "食べます" },
      drink: { i: "飲みます", we: "飲みます" },
      read: { i: "読みます", we: "読みます" },
      write: { i: "書きます", we: "書きます" },
      see: { i: "見ます", we: "見ます" },
      have: { i: "持っています", we: "持っています" }
    },
    objects: {
      bread: "パンを", cheese: "チーズを", apple: "りんごを", meat: "肉を", egg: "卵を", fish: "魚を", rice: "ご飯を", fruit: "果物を",
      water: "水を", milk: "牛乳を", tea: "お茶を", coffee: "コーヒーを", juice: "ジュースを",
      book: "本を", novel: "小説を", letter: "手紙を", essay: "作文を", paper: "紙に",
      mother: "母を", father: "父を", brother: "兄を", sister: "姉を", friend: "友達を", child: "子供を",
      house: "家を", car: "車を"
    },
    objectsAdv: {
      bread: "温かいパンを", cheese: "美味しいチーズを", apple: "赤いりんごを", meat: "新鮮な肉を", egg: "新鮮な卵を", fish: "焼き魚を", rice: "辛いご飯を", fruit: "甘い果物を",
      water: "きれいな水を", milk: "温かい牛乳を", tea: "温かいお茶を", coffee: "温かいコーヒーを", juice: "新鮮なジュースを",
      book: "科学の本を", novel: "古典的な小説を", letter: "重要な手紙を", essay: "学術的な作文を", paper: "きれいな紙に",
      mother: "愛する母を", father: "愛する父を", brother: "兄を", sister: "妹を", friend: "親しい友達を", child: "可愛い子供を",
      house: "美しい家を", car: "速い車を"
    }
  },
  ko: {
    order: 'SOV',
    space: true,
    subjects: { i: "저는", we: "우리는" },
    verbs: {
      eat: { i: "먹습니다", we: "먹습니다" },
      drink: { i: "마십니다", we: "마십니다" },
      read: { i: "읽습니다", we: "읽습니다" },
      write: { i: "씁니다", we: "씁니다" },
      see: { i: "봅니다", we: "봅니다" },
      have: { i: "가지고 있습니다", we: "가지고 있습니다" }
    },
    objects: {
      bread: "빵을", cheese: "치즈를", apple: "사과를", meat: "고기를", egg: "계란을", fish: "생선을", rice: "밥을", fruit: "과일을",
      water: "물을", milk: "우유를", tea: "차를", coffee: "커피를", juice: "주스를",
      book: "책을", novel: "소설을", letter: "편지를", essay: "에세이를", paper: "종이에",
      mother: "어머니를", father: "아버지를", brother: "형을", sister: "누나를", friend: "친구를", child: "아이를",
      house: "집을", car: "차를"
    },
    objectsAdv: {
      bread: "따뜻한 빵을", cheese: "맛있는 치즈를", apple: "빨간 사과를", meat: "신선한 고기를", egg: "신선한 계란을", fish: "구운 생선을", rice: "매운 밥을", fruit: "단 과일을",
      water: "깨끗한 물을", milk: "따뜻한 우유를", tea: "뜨거운 차를", coffee: "뜨거운 커피를", juice: "신선한 주스를",
      book: "과학 책을", novel: "고전 소설을", letter: "중요한 편지를", essay: "학술 에세이를", paper: "깨끗한 종이에",
      mother: "사랑하는 어머니를", father: "사랑하는 아버지를", brother: "형을", sister: "여동생을", friend: "친한 친구를", child: "사랑스러운 아이를",
      house: "아름다운 집을", car: "빠른 차를"
    }
  },
  ar: {
    order: 'SVO',
    space: true,
    subjects: { i: "أنا", we: "نحن" },
    verbs: {
      eat: { i: "آكل", we: "نأكل" },
      drink: { i: "أشرب", we: "نشرب" },
      read: { i: "أقرأ", we: "نقرأ" },
      write: { i: "أكتب", we: "نكتب" },
      see: { i: "أرى", we: "نرى" },
      have: { i: "عندي", we: "عندنا" }
    },
    objects: {
      bread: "الخبز", cheese: "الجبن", apple: "تفاحة", meat: "اللحم", egg: "بيضة", fish: "السمك", rice: "الأرز", fruit: "الفاكهة",
      water: "الماء", milk: "الحليب", tea: "الشاي", coffee: "القهوة", juice: "العصير",
      book: "كتاباً", novel: "رواية", letter: "رسالة", essay: "مقالاً", paper: "على الورق",
      mother: "أمي", father: "أبي", brother: "أخاً", sister: "أختاً", friend: "صديقاً", child: "طفلاً",
      house: "منزلاً", car: "سيارة"
    },
    objectsAdv: {
      bread: "الخبز الدافئ", cheese: "الجبن اللذيذ", apple: "تفاحة حمراء", meat: "اللحم الطازج", egg: "بيضة طازجة", fish: "السمك المشوي", rice: "الأرز الحار", fruit: "الفاكهة الحلوة",
      water: "الماء النقي", milk: "الحليب الدافئ", tea: "الشاي الساخن", coffee: "القهوة الساخنة", juice: "العصير الطازج",
      book: "كتاباً علمياً", novel: "رواية كلاسيكية", letter: "رسالة هامة", essay: "مقالاً أكاديمياً", paper: "على ورق نظيف",
      mother: "أمي الحبيبة", father: "أبي الحبيب", brother: "أخاً أكبر", sister: "أختاً أصغر", friend: "صديقاً مقرباً", child: "طفلاً جميلاً",
      house: "منزلاً جميلاً", car: "سيارة سريعة"
    }
  },
  hi: {
    order: 'SOV',
    space: true,
    subjects: { i: "मैं", we: "हम" },
    verbs: {
      eat: { i: "खाता हूँ", we: "खाते हैं" },
      drink: { i: "पीता हूँ", we: "पीते हैं" },
      read: { i: "पढ़ता हूँ", we: "पढ़ते हैं" },
      write: { i: "लिखता हूँ", we: "लिखते हैं" },
      see: { i: "देखता हूँ", we: "देखते हैं" },
      have: { i: "पास है", we: "पास है" }
    },
    objects: {
      bread: "रोटी", cheese: "पनीर", apple: "सेब", meat: "मांस", egg: "अंडा", fish: "मछली", rice: "चावल", fruit: "फल",
      water: "पानी", milk: "दूध", tea: "चाय", coffee: "कॉफी", juice: "रस",
      book: "एक किताब", novel: "एक उपन्यास", letter: "एक पत्र", essay: "एक निबंध", paper: "कागज़ पर",
      mother: "अपनी माँ को", father: "अपने पिता को", brother: "एक भाई", sister: "एक बहन", friend: "एक दोस्त", child: "एक बच्चा",
      house: "एक घर", car: "एक कार"
    },
    objectsAdv: {
      bread: "गर्म रोटी", cheese: "स्वादिष्ट पनीर", apple: "एक लाल सेब", meat: "ताज़ा मांस", egg: "ताज़ा अंडा", fish: "भुनी हुई मछली", rice: "तीखा चावल", fruit: "मीठा फल",
      water: "शुद्ध पानी", milk: "गर्म दूध", tea: "गर्म चाय", coffee: "गर्म कॉफी", juice: "ताज़ा रस",
      book: "एक वैज्ञानिक पुस्तक", novel: "एक शास्त्रीय उपन्यास", letter: "एक महत्वपूर्ण पत्र", essay: "एक शैक्षणिक निबंध", paper: "साफ कागज़ पर",
      mother: "अपनी प्यारी माँ को", father: "अपने प्यारे पिता को", brother: "एक बड़े भाई", sister: "एक छोटी बहन", friend: "एक करीबी दोस्त", child: "एक प्यारा बच्चा",
      house: "एक सुंदर घर", car: "एक तेज़ कार"
    }
  }
};


export function buildDynamicVocabLists() {
  const foodNouns = ['bread', 'cheese', 'apple', 'meat', 'egg', 'fish', 'rice', 'fruit'];
  const drinkNouns = ['water', 'milk', 'tea', 'coffee', 'juice'];
  const familyNouns = ['mother', 'father', 'brother', 'sister', 'friend', 'child'];
  const envNouns = ['house', 'car'];

  const langCodes = ['es', 'fr', 'de', 'ja', 'it', 'zh', 'ru', 'pt', 'ko', 'tr', 'ar', 'nl', 'sv', 'hi', 'en'];

  // Helper to build a sentence
  const buildSentence = (lang: string, subjectKey: 'i' | 'we', verbKey: 'eat' | 'drink' | 'read' | 'write' | 'see' | 'have', nounKey: string, isAdvanced = false) => {
    const grammar = MULTILINGUAL_GRAMMAR[lang] || MULTILINGUAL_GRAMMAR.en;
    let subject = grammar.subjects[subjectKey];
    
    // Hindi special have case
    if (lang === 'hi' && verbKey === 'have') {
      subject = subjectKey === 'i' ? "मेरे" : "हमारे";
    }

    const verb = grammar.verbs[verbKey][subjectKey];
    const object = isAdvanced ? grammar.objectsAdv[nounKey] : grammar.objects[nounKey];

    const spacer = grammar.space ? ' ' : '';
    const endPunct = (lang === 'ja' || lang === 'zh') ? '。' : '.';

    let words: string[] = [];
    if (grammar.order === 'SVO') {
      words = [subject, verb, object].filter(Boolean);
    } else {
      words = [subject, object, verb].filter(Boolean);
    }

    let sentence = words.join(spacer);
    if (!grammar.space) {
      sentence = sentence.replace(/\s+/g, '');
    }
    // Capitalize first character
    if (sentence.length > 0) {
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    return sentence + endPunct;
  };

  // Populate dynamic vocabulary maps
  const addCategoryVocab = (categoryKey: string, subjectKey: 'i' | 'we', verbKey: 'eat' | 'drink' | 'read' | 'write' | 'see' | 'have', nounsList: string[], isAdvanced: boolean) => {
    const targetMap = isAdvanced ? ADVANCED_VOCAB : INTERMEDIATE_VOCAB;
    
    for (const noun of nounsList) {
      const key = `${categoryKey}_${verbKey}_${noun}_${subjectKey}`;
      const translations: Record<string, string> = {};
      
      for (const lang of langCodes) {
        translations[lang] = buildSentence(lang, subjectKey, verbKey, noun, isAdvanced);
      }
      
      targetMap[key] = translations;
    }
  };

  // Intermediate (Tier 2) Seeding
  // Category 0 & 1: Family / Relatives
  addCategoryVocab('family', 'i', 'have', familyNouns, false);
  addCategoryVocab('family', 'we', 'have', familyNouns, false);
  addCategoryVocab('family', 'i', 'see', familyNouns, false);
  addCategoryVocab('family', 'we', 'see', familyNouns, false);

  // Category 2: Social
  addCategoryVocab('social', 'i', 'see', envNouns.concat(['friend']), false);
  addCategoryVocab('social', 'we', 'see', envNouns.concat(['friend']), false);
  addCategoryVocab('social', 'i', 'have', envNouns, false);
  addCategoryVocab('social', 'we', 'have', envNouns, false);

  // Category 3: Dining / Food & Drink
  addCategoryVocab('dining', 'i', 'eat', foodNouns, false);
  addCategoryVocab('dining', 'we', 'eat', foodNouns, false);
  addCategoryVocab('dining', 'i', 'drink', drinkNouns, false);
  addCategoryVocab('dining', 'we', 'drink', drinkNouns, false);

  // Category 4: Media / Study
  addCategoryVocab('media', 'i', 'read', ['book', 'novel', 'letter'], false);
  addCategoryVocab('media', 'we', 'read', ['book', 'novel', 'letter'], false);
  addCategoryVocab('media', 'i', 'write', ['letter', 'essay', 'paper'], false);
  addCategoryVocab('media', 'we', 'write', ['letter', 'essay', 'paper'], false);

  // Category 5: Quantities (have multiple items)
  addCategoryVocab('quantities', 'i', 'have', ['book', 'apple', 'car'], false);
  addCategoryVocab('quantities', 'we', 'have', ['book', 'apple', 'car'], false);

  // Category 6: Environment
  addCategoryVocab('environment', 'i', 'see', envNouns, false);
  addCategoryVocab('environment', 'we', 'see', envNouns, false);

  // Advanced (Tier 3) Seeding
  // Category 0 & 1: Family
  addCategoryVocab('family', 'i', 'have', familyNouns, true);
  addCategoryVocab('family', 'we', 'have', familyNouns, true);
  addCategoryVocab('family', 'i', 'see', familyNouns, true);
  addCategoryVocab('family', 'we', 'see', familyNouns, true);

  // Category 2: Social
  addCategoryVocab('social', 'i', 'see', envNouns.concat(['friend']), true);
  addCategoryVocab('social', 'we', 'see', envNouns.concat(['friend']), true);
  addCategoryVocab('social', 'i', 'have', envNouns, true);
  addCategoryVocab('social', 'we', 'have', envNouns, true);

  // Category 3: Dining
  addCategoryVocab('dining', 'i', 'eat', foodNouns, true);
  addCategoryVocab('dining', 'we', 'eat', foodNouns, true);
  addCategoryVocab('dining', 'i', 'drink', drinkNouns, true);
  addCategoryVocab('dining', 'we', 'drink', drinkNouns, true);

  // Category 4: Media
  addCategoryVocab('media', 'i', 'read', ['book', 'novel', 'letter'], true);
  addCategoryVocab('media', 'we', 'read', ['book', 'novel', 'letter'], true);
  addCategoryVocab('media', 'i', 'write', ['letter', 'essay', 'paper'], true);
  addCategoryVocab('media', 'we', 'write', ['letter', 'essay', 'paper'], true);

  // Category 5: Quantities
  addCategoryVocab('quantities', 'i', 'have', ['book', 'apple', 'car'], true);
  addCategoryVocab('quantities', 'we', 'have', ['book', 'apple', 'car'], true);

  // Category 6: Environment
  addCategoryVocab('environment', 'i', 'see', envNouns, true);
  addCategoryVocab('environment', 'we', 'see', envNouns, true);
}

export async function seedDatabase(force = false): Promise<{ success: boolean; message: string }> {
  if (!db) {
    return { success: false, message: 'Firebase database is not initialized.' };
  }

  try {
    buildDynamicVocabLists();
    const langSnap = await getDocs(collection(db, 'languages'));
    
    let shouldSeed = langSnap.size === 0 || force;
    if (!shouldSeed) {
      try {
        const checkRef = doc(db, 'lessons', 'lesson_en_3_1');
        const checkSnap = await getDoc(checkRef);
        if (checkSnap.exists()) {
          const lData = checkSnap.data();
          const firstQ = lData?.questions?.[0];
          if ((firstQ && firstQ.prompt && firstQ.prompt.includes('"Hello"')) || !lData?.version || lData.version < 9) {
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
            const titles = ['Greetings', 'Polite Words', 'Daily Talk', 'Food & Drink', 'Study', 'Numbers', 'Colors'];
            const activeTitle = titles[categoryIndex] || 'Greetings';
            lessonTitle = `${activeTitle} #${(lessonIndex - 1) % 7 + 1}`;
          } else if (course.tier === 2) {
            const titles = ['Family', 'Relatives', 'Social', 'Dining', 'Media', 'Quantities', 'Environment'];
            const activeTitle = titles[categoryIndex] || 'Family';
            lessonTitle = `${activeTitle} #${(lessonIndex - 1) % 7 + 1}`;
          } else {
            const titles = ['Professional', 'Dialogues', 'Translation', 'Cuisine', 'Literature', 'Review A', 'Review B'];
            const activeTitle = titles[categoryIndex] || 'Professional';
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
            version: 9
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
