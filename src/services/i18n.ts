export type InterfaceLang = 'en' | 'tr' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'ru' | 'zh' | 'ja' | 'ko';

export interface TranslationDictionary {
  learn: string;
  leaderboard: string;
  shop: string;
  profile: string;
  signOut: string;
  exit: string;
  weeklyLeague: string;
  weeklyLeagueDesc: string;
  gemsBazaar: string;
  gemsBazaarDesc: string;
  streakDays: string;
  totalXP: string;
  gemsBalance: string;
  completedLessons: string;
  unlockedBadges: string;
  devTools: string;
  clearConfig: string;
  clearConfigDesc: string;
  forceSeed: string;
  forceSeedDesc: string;
  start: string;
  cancel: string;
  checkAnswer: string;
  incorrectAnswer: string;
  correctAnswerMsg: string;
  excellentJob: string;
  continue: string;
  lessonComplete: string;
  lessonCompleteDesc: string;
  xpReward: string;
  gemsBonus: string;
  streakMaintained: string;
  noLivesLeft: string;
  noLivesLeftDesc: string;
  backToDashboard: string;
  owned: string;
  insufficientGems: string;
  purchaseSuccess: string;
  chooseLanguage: string;
  getStarted: string;
  heroTitle: string;
  heroSub: string;
  beginnerBtn: string;
  takeTestBtn: string;
  testCompleted: string;
  saveLevel: string;
  createAccountMsg: string;
  saveLevelBtn: string;
  username: string;
  email: string;
  password: string;
  syncPending: string;
  basics?: string;
  intermediate?: string;
  advanced?: string;
  greetings?: string;
  politeWords?: string;
  dailyTalk?: string;
  foodDrink?: string;
  study?: string;
  numbers?: string;
  colors?: string;
  family?: string;
  relatives?: string;
  social?: string;
  dining?: string;
  media?: string;
  quantities?: string;
  environment?: string;
  professional?: string;
  dialogues?: string;
  translation?: string;
  cuisine?: string;
  literature?: string;
  reviewA?: string;
  reviewB?: string;
  yourProgress?: string;
  studentTier?: string;
  noBadges?: string;
  noRankings?: string;
  noRankingsDesc?: string;
  streakFreezeName?: string;
  streakFreezeDesc?: string;
  doubleOrNothingName?: string;
  doubleOrNothingDesc?: string;
  xpBoosterName?: string;
  xpBoosterDesc?: string;
  firstStepsName?: string;
  firstStepsDesc?: string;
  xpWarriorName?: string;
  xpWarriorDesc?: string;
  streakNoviceName?: string;
  streakNoviceDesc?: string;
  linguistName?: string;
  linguistDesc?: string;
  buy?: string;
  noShopItems?: string;
  noShopItemsDesc?: string;
  unlocked?: string;
  signIn?: string;
  welcomeBack?: string;
  saveYourProgress?: string;
  signInDesc?: string;
  signInToAccount?: string;
  claimProgress?: string;
  or?: string;
  continueWithGoogle?: string;
  noAccountSignUp?: string;
  haveAccountSignIn?: string;
  placementResult?: string;
  section?: string;
  loading?: string;
  loadingPlayer?: string;
  noLessons?: string;
  noLessonsDesc?: string;
  requires?: string;
  streak?: string;
  resetConnection?: string;
  syncSeed?: string;
}

export const TRANSLATIONS: Record<InterfaceLang, TranslationDictionary> = {
  en: {
    learn: 'Learn',
    leaderboard: 'Leaderboard',
    shop: 'Shop',
    profile: 'Profile',
    signOut: 'Sign Out',
    exit: 'Exit',
    weeklyLeague: 'Weekly League',
    weeklyLeagueDesc: 'Practice daily, earn XP, and secure your place at the top of the chart!',
    gemsBazaar: 'Gems Bazaar',
    gemsBazaarDesc: 'Spend your earned gems on helpful boosters and streak protect upgrades!',
    streakDays: 'Day Streak',
    totalXP: 'Total XP',
    gemsBalance: 'Gems Balance',
    completedLessons: 'Lessons Done',
    unlockedBadges: 'Achievement Badges',
    devTools: 'Settings & Dev Tools',
    clearConfig: 'Clear Firebase Credentials',
    clearConfigDesc: 'Clear your local storage Firebase Credentials. Useful to test the configuration gateway and signup flows from scratch.',
    forceSeed: 'Force Seed Firestore Data',
    forceSeedDesc: 'In case your database becomes desynced, you can force seed lessons, questions, and achievements:',
    start: 'Start',
    cancel: 'Cancel',
    checkAnswer: 'Check Answer',
    incorrectAnswer: 'Incorrect Answer',
    correctAnswerMsg: 'You got it right! Keep rolling.',
    excellentJob: 'Excellent Job!',
    continue: 'Continue',
    lessonComplete: 'Lesson Complete!',
    lessonCompleteDesc: 'You are becoming a master speaker! Keep up the daily streak.',
    xpReward: 'Experience',
    gemsBonus: 'Gems Bonus',
    streakMaintained: 'Streak Maintained!',
    noLivesLeft: 'No Lives Left',
    noLivesLeftDesc: "Don't worry! Review your vocab, recharge your hearts, and try again. Practice makes perfect!",
    backToDashboard: 'Back to Dashboard',
    owned: 'Owned',
    insufficientGems: 'You do not have enough gems! Complete more lessons.',
    purchaseSuccess: 'Successfully purchased!',
    chooseLanguage: 'I want to learn:',
    getStarted: 'Get Started',
    heroTitle: 'The free, fun, and proven way to learn.',
    heroSub: 'Gamified tracks, interactive placement quizzes, and 100% cloud-synced progress. Unlock your path!',
    beginnerBtn: "I'm a complete beginner",
    takeTestBtn: 'Take the Placement Test',
    testCompleted: 'Test Completed!',
    saveLevel: 'Save Your Level',
    createAccountMsg: 'Create an account to claim your 50 XP bonus and unlock lessons.',
    saveLevelBtn: 'Create Account to Save Level',
    username: 'Username',
    email: 'Email Address',
    password: 'Password',
    syncPending: 'Pending Sync',
    basics: 'Basics',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    greetings: 'Greetings',
    politeWords: 'Polite Words',
    dailyTalk: 'Daily Talk',
    foodDrink: 'Food & Drink',
    study: 'Study',
    numbers: 'Numbers',
    colors: 'Colors',
    family: 'Family',
    relatives: 'Relatives',
    social: 'Social',
    dining: 'Dining',
    media: 'Media',
    quantities: 'Quantities',
    environment: 'Environment',
    professional: 'Professional',
    dialogues: 'Dialogues',
    translation: 'Translation',
    cuisine: 'Cuisine',
    literature: 'Literature',
    reviewA: 'Review A',
    reviewB: 'Review B',
    yourProgress: 'Your Progress',
    studentTier: 'Tier {tier} Student',
    noBadges: 'No badges configured in target database.',
    noRankings: 'No rankings yet',
    noRankingsDesc: 'Users will appear here once they complete lessons!',
    streakFreezeName: 'Streak Freeze',
    streakFreezeDesc: 'Allows your daily streak to remain in place if you miss a day of active practice.',
    doubleOrNothingName: 'Double or Nothing',
    doubleOrNothingDesc: 'Bet 50 gems to win 100 if you maintain a 7-day learning streak.',
    xpBoosterName: 'XP Booster',
    xpBoosterDesc: 'Double all XP rewards earned from learning lessons for the next 30 minutes.',
    firstStepsName: 'First Steps',
    firstStepsDesc: 'Begin your language adventure by completing the placement test or first lesson.',
    xpWarriorName: 'XP Warrior',
    xpWarriorDesc: 'Gain a total of 150 Experience Points (XP) across your learning journey.',
    streakNoviceName: 'Streak Novice',
    streakNoviceDesc: 'Keep your brain active and maintain a 3-day learning streak.',
    linguistName: 'Master Linguist',
    linguistDesc: 'Gain a total of 500 Experience Points (XP) to reach language mastery.',
    buy: 'Buy',
    noShopItems: 'Bazaar is empty',
    noShopItemsDesc: 'No shop items defined in database.',
    unlocked: 'Unlocked',
    signIn: 'Sign In',
    welcomeBack: 'Welcome Back!',
    saveYourProgress: 'Save Your Progress',
    signInDesc: 'Sign in to access your course path, leaderboard ranks, and gems.',
    signInToAccount: 'Sign In to Account',
    claimProgress: 'Claim Progress & XP',
    or: 'or',
    continueWithGoogle: 'Continue with Google',
    noAccountSignUp: "Don't have an account? Sign Up",
    haveAccountSignIn: 'Already have an account? Sign In',
    placementResult: 'Placement Tier Result: ',
    section: 'Section',
    loading: 'Loading…',
    loadingPlayer: 'Loading Lesson Player...',
    noLessons: 'No lessons available',
    noLessonsDesc: 'Seed the database or switch tiers.',
    requires: 'Requires: ',
    streak: 'Streak',
    resetConnection: 'Reset Connection',
    syncSeed: 'Sync Seed',
  },
  tr: {
    learn: 'Öğren',
    leaderboard: 'Liderlik',
    shop: 'Mağaza',
    profile: 'Profil',
    signOut: 'Oturumu Kapat',
    exit: 'Çıkış',
    weeklyLeague: 'Haftalık Lig',
    weeklyLeagueDesc: 'Her gün pratik yapın, XP kazanın ve zirvedeki yerinizi koruyun!',
    gemsBazaar: 'Mücevher Pazarı',
    gemsBazaarDesc: 'Mücevherlerinizi faydalı takviyelere ve seri koruma geliştirmelerine harcayın!',
    streakDays: 'Günlük Seri',
    totalXP: 'Toplam XP',
    gemsBalance: 'Mücevher Bakiyesi',
    completedLessons: 'Tamamlanan Dersler',
    unlockedBadges: 'Başarı Rozetleri',
    devTools: 'Ayarlar ve Geliştirici Araçları',
    clearConfig: 'Kimlik Bilgilerini Temizle',
    clearConfigDesc: 'Kimlik bilgilerini temizleyerek bağlantı ekranını ve kayıt akışlarını sıfırdan test edin.',
    forceSeed: 'Tohumlamaya Zorla',
    forceSeedDesc: 'Eğer senkronizasyon bozulursa, dersleri, soruları ve başarıları yeniden yükleyebilirsiniz:',
    start: 'Başla',
    cancel: 'İptal',
    checkAnswer: 'Kontrol Et',
    incorrectAnswer: 'Yanlış Cevap',
    correctAnswerMsg: 'Doğru cevap! Devam et.',
    excellentJob: 'Harika İş!',
    continue: 'Devam Et',
    lessonComplete: 'Ders Tamamlandı!',
    lessonCompleteDesc: 'Usta bir konuşmacı olma yolundasın! Günlük serini devam ettir.',
    xpReward: 'Deneyim',
    gemsBonus: 'Mücevher Bonusu',
    streakMaintained: 'Seri Korundu!',
    noLivesLeft: 'Can Kalmadı',
    noLivesLeftDesc: 'Kelimelerini gözden geçir, canlarını doldur ve tekrar dene. Pratik mükemmelleştirir!',
    backToDashboard: 'Panele Geri Dön',
    owned: 'Sahip Olundu',
    insufficientGems: 'Yeterli mücevheriniz yok! Daha fazla ders tamamlayın.',
    purchaseSuccess: 'Başarıyla satın alındı!',
    chooseLanguage: 'Öğrenmek istediğim dil:',
    getStarted: 'Başlayın',
    heroTitle: 'Öğrenmenin ücretsiz, eğlenceli ve kanıtlanmış yolu.',
    heroSub: 'Oyunlaştırılmış yollar, etkileşimli seviye belirleme testleri ve bulut senkronizasyonlu ilerleme.',
    beginnerBtn: 'Yeni başlıyorum',
    takeTestBtn: 'Seviye Belirleme Testine Gir',
    testCompleted: 'Test Tamamlandı!',
    saveLevel: 'Seviyeni Kaydet',
    createAccountMsg: '50 XP bonusunu almak ve dersleri açmak için bir hesap oluştur.',
    saveLevelBtn: 'Kaydet ve Hesap Oluştur',
    username: 'Kullanıcı Adı',
    email: 'E-posta Adresi',
    password: 'Şifre',
    syncPending: 'Senkronizasyon Bekliyor',
    basics: 'Temel Seviye',
    intermediate: 'Orta Seviye',
    advanced: 'İleri Seviye',
    greetings: 'Selamlaşma',
    politeWords: 'Nezaket',
    dailyTalk: 'Günlük Sohbet',
    foodDrink: 'Yiyecek & İçecek',
    study: 'Ders Çalışma',
    numbers: 'Sayılar',
    colors: 'Renkler',
    family: 'Aile',
    relatives: 'Akrabalar',
    social: 'Sosyal Hayat',
    dining: 'Yemek',
    media: 'Medya',
    quantities: 'Miktarlar',
    environment: 'Çevre',
    professional: 'İş Hayatı',
    dialogues: 'Diyaloglar',
    translation: 'Çeviri',
    cuisine: 'Mutfak',
    literature: 'Edebiyat',
    reviewA: 'Genel Tekrar A',
    reviewB: 'Genel Tekrar B',
    yourProgress: 'Gelişiminiz',
    studentTier: '{tier}. Aşama Öğrencisi',
    noBadges: 'Veritabanında kayıtlı rozet bulunamadı.',
    noRankings: 'Henüz sıralama yok',
    noRankingsDesc: 'Kullanıcılar ders tamamladıkça burada listelenecektir!',
    streakFreezeName: 'Seri Dondurucu',
    streakFreezeDesc: 'Aktif çalışmayı kaçırdığınız gün günlük serinizin bozulmamasını sağlar.',
    doubleOrNothingName: 'Çift veya Hiç',
    doubleOrNothingDesc: '50 gem yatırın, 7 günlük seriyi korursanız 100 gem kazanın.',
    xpBoosterName: 'XP Artırıcı',
    xpBoosterDesc: 'Önümüzdeki 30 dakika boyunca tamamlanan derslerden iki kat XP kazanın.',
    firstStepsName: 'İlk Adımlar',
    firstStepsDesc: 'Seviye belirleme testini veya ilk dersi tamamlayarak dil maceranıza başlayın.',
    xpWarriorName: 'XP Savaşçısı',
    xpWarriorDesc: 'Öğrenme yolculuğunuz boyunca toplam 150 Deneyim Puanı (XP) kazanın.',
    streakNoviceName: 'Seri Çaylağı',
    streakNoviceDesc: 'Beyninizi aktif tutun ve 3 günlük çalışma serisini koruyun.',
    linguistName: 'Usta Dilbilimci',
    linguistDesc: 'Dil hakimiyetine ulaşmak için toplam 500 Deneyim Puanı (XP) kazanın.',
    buy: 'Satın Al',
    noShopItems: 'Pazar boş',
    noShopItemsDesc: 'Veritabanında mağaza ürünü tanımlanmamış.',
    unlocked: 'Açıldı',
    signIn: 'Giriş Yap',
    welcomeBack: 'Tekrar Hoş Geldiniz!',
    saveYourProgress: 'İlerlemeni Kaydet',
    signInDesc: 'Kurs yolunuza, liderlik tablolarınıza ve mücevherlerinize erişmek için giriş yapın.',
    signInToAccount: 'Hesaba Giriş Yap',
    claimProgress: 'İlerlemeyi ve XP\'yi Al',
    or: 'veya',
    continueWithGoogle: 'Google ile Devam Et',
    noAccountSignUp: 'Hesabınız yok mu? Kaydolun',
    haveAccountSignIn: 'Zaten bir hesabınız var mı? Giriş yapın',
    placementResult: 'Seviye Belirleme Sonucu: ',
    section: 'Bölüm',
    loading: 'Yükleniyor…',
    loadingPlayer: 'Ders Oynatıcı Yükleniyor...',
    noLessons: 'Ders bulunamadı',
    noLessonsDesc: 'Veritabanını tohumlayın veya seviye değiştirin.',
    requires: 'Gereksinim: ',
    streak: 'Seri',
    resetConnection: 'Bağlantıyı Sıfırla',
    syncSeed: 'Verileri Eşitle',
  },
  es: {
    learn: 'Aprender',
    leaderboard: 'Clasificación',
    shop: 'Tienda',
    profile: 'Perfil',
    signOut: 'Cerrar Sesión',
    exit: 'Salir',
    weeklyLeague: 'Liga Semanal',
    weeklyLeagueDesc: '¡Practica a diario, gana XP y asegura tu lugar en la cima de la tabla!',
    gemsBazaar: 'Bazar de Gemas',
    gemsBazaarDesc: '¡Gasta tus gemas en potenciadores útiles y mejoras de protección de racha!',
    streakDays: 'Racha de Días',
    totalXP: 'XP Total',
    gemsBalance: 'Saldo de Gemas',
    completedLessons: 'Lecciones Hechas',
    unlockedBadges: 'Insignias de Logros',
    devTools: 'Ajustes y Herramientas',
    clearConfig: 'Limpiar Credenciales',
    clearConfigDesc: 'Limpia las credenciales de Firebase en el almacenamiento local para volver a configurar.',
    forceSeed: 'Forzar Carga de Datos',
    forceSeedDesc: 'En caso de desincronización, puedes volver a sembrar lecciones, preguntas y logros:',
    start: 'Empezar',
    cancel: 'Cancelar',
    checkAnswer: 'Comprobar',
    incorrectAnswer: 'Respuesta Incorrecta',
    correctAnswerMsg: '¡Lo lograste! Sigue adelante.',
    excellentJob: '¡Excelente Trabajo!',
    continue: 'Continuar',
    lessonComplete: '¡Lección Completada!',
    lessonCompleteDesc: '¡Te estás convirtiendo en un maestro del idioma! Mantén tu racha diaria.',
    xpReward: 'Experiencia',
    gemsBonus: 'Bono de Gemas',
    streakMaintained: '¡Racha Mantendida!',
    noLivesLeft: 'Sin Vidas',
    noLivesLeftDesc: '¡No te preocupes! Repasa el vocabulario, recarga tus corazones e inténtalo de nuevo.',
    backToDashboard: 'Volver al Panel',
    owned: 'Adquirido',
    insufficientGems: '¡No tienes suficientes gemas! Completa más lecciones.',
    purchaseSuccess: '¡Compra completada con éxito!',
    chooseLanguage: 'Quiero aprender:',
    getStarted: 'Empezar',
    heroTitle: 'La forma gratuita, divertida y comprobada de aprender.',
    heroSub: 'Rutas gamificadas, pruebas de nivel y progreso sincronizado en la nube.',
    beginnerBtn: 'Soy principiante',
    takeTestBtn: 'Hacer prueba de nivel',
    testCompleted: '¡Prueba Completada!',
    saveLevel: 'Guardar tu Nivel',
    createAccountMsg: 'Crea una cuenta para reclamar tu bono de 50 XP y desbloquear lecciones.',
    saveLevelBtn: 'Crear Cuenta para Guardar',
    username: 'Usuario',
    email: 'Correo electrónico',
    password: 'Contraseña',
    syncPending: 'Sincronización Pendiente',
    basics: 'Básico',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
    greetings: 'Saludos',
    politeWords: 'Cortesía',
    dailyTalk: 'Conversación Diaria',
    foodDrink: 'Comida y Bebida',
    study: 'Estudio',
    numbers: 'Números',
    colors: 'Colores',
    family: 'Familia',
    relatives: 'Parientes',
    social: 'Vida Social',
    dining: 'Cena',
    media: 'Medios',
    quantities: 'Cantidades',
    environment: 'Entorno',
    professional: 'Profesional',
    dialogues: 'Diálogos',
    translation: 'Traducción',
    cuisine: 'Cocina',
    literature: 'Literatura',
    reviewA: 'Repaso A',
    reviewB: 'Repaso B',
    yourProgress: 'Tu Progreso',
    studentTier: 'Estudiante de Nivel {tier}',
    noBadges: 'No hay insignias configuradas en la base de datos.',
    noRankings: 'No hay clasificaciones aún',
    noRankingsDesc: '¡Los usuarios aparecerán aquí cuando completen lecciones!',
    streakFreezeName: 'Protector de Racha',
    streakFreezeDesc: 'Permite mantener tu racha diaria si olvidas practicar un día.',
    doubleOrNothingName: 'Doble o Nada',
    doubleOrNothingDesc: 'Apuesta 50 gemas para ganar 100 si mantienes una racha de 7 días.',
    xpBoosterName: 'Potenciador de XP',
    xpBoosterDesc: 'Duplica todas las recompensas de XP de tus lecciones durante 30 minutos.',
    firstStepsName: 'Primeros Pasos',
    firstStepsDesc: 'Comienza tu aventura lingüística completando el test de nivelación o la primera lección.',
    xpWarriorName: 'Guerrero de XP',
    xpWarriorDesc: 'Consigue un total de 150 puntos de experiencia (XP) a lo largo de tu aprendizaje.',
    streakNoviceName: 'Novato de Racha',
    streakNoviceDesc: 'Mantén tu cerebro activo y mantén una racha de aprendizaje de 3 días.',
    linguistName: 'Maestro Lingüista',
    linguistDesc: 'Gana un total de 500 puntos de experiencia (XP) para dominar el idioma.',
    buy: 'Comprar',
    noShopItems: 'El bazar está vacío',
    noShopItemsDesc: 'No hay artículos definidos en la base de datos.',
    unlocked: 'Desbloqueado',
    signIn: 'Iniciar Sesión',
    welcomeBack: '¡Bienvenido de Nuevo!',
    saveYourProgress: 'Guarda tu Progreso',
    signInDesc: 'Inicia sesión para acceder a tu ruta, clasificación y gemas.',
    signInToAccount: 'Iniciar Sesión',
    claimProgress: 'Reclamar Progreso y XP',
    or: 'o',
    continueWithGoogle: 'Continuar con Google',
    noAccountSignUp: '¿No tienes una cuenta? Regístrate',
    haveAccountSignIn: '¿Ya tienes una cuenta? Inicia sesión',
    placementResult: 'Resultado de Nivel: ',
    section: 'Sección',
    loading: 'Cargando…',
    loadingPlayer: 'Cargando Reproductor de Lecciones...',
    noLessons: 'No hay lecciones disponibles',
    noLessonsDesc: 'Siembre la base de datos o cambie de nivel.',
    requires: 'Requiere: ',
    streak: 'Racha',
    resetConnection: 'Restablecer Conexión',
    syncSeed: 'Sincronizar Datos',
  },
  fr: {
    learn: 'Apprendre',
    leaderboard: 'Classement',
    shop: 'Boutique',
    profile: 'Profil',
    signOut: 'Déconnexion',
    exit: 'Sortie',
    weeklyLeague: 'Ligue Hebdomadaire',
    weeklyLeagueDesc: 'Pratiquez quotidiennement, gagnez des XP et assurez votre place au sommet!',
    gemsBazaar: 'Bazar de Gemmes',
    gemsBazaarDesc: 'Dépensez vos gemmes pour des boosters et la protection de série!',
    streakDays: 'Série de Jours',
    totalXP: 'XP Total',
    gemsBalance: 'Solde de Gemmes',
    completedLessons: 'Leçons Faites',
    unlockedBadges: 'Badges de Réussite',
    devTools: 'Outils de Dév',
    clearConfig: 'Effacer les Identifiants',
    clearConfigDesc: 'Effacez les identifiants de stockage local pour réinitialiser la configuration.',
    forceSeed: 'Forcer le Chargement',
    forceSeedDesc: 'Réinitialisez les leçons, les questions et les badges en cas de désynchronisation:',
    start: 'Commencer',
    cancel: 'Annuler',
    checkAnswer: 'Vérifier',
    incorrectAnswer: 'Réponse Incorrecte',
    correctAnswerMsg: 'C\'est correct! Continuez.',
    excellentJob: 'Excellent Travail!',
    continue: 'Continuer',
    lessonComplete: 'Leçon Terminée!',
    lessonCompleteDesc: 'Vous devenez un expert de la langue! Gardez votre série quotidienne.',
    xpReward: 'Expérience',
    gemsBonus: 'Bonus de Gemmes',
    streakMaintained: 'Série Maintenue!',
    noLivesLeft: 'Plus de Vies',
    noLivesLeftDesc: 'Ne vous inquiétez pas! Révisez votre vocabulaire, rechargez vos cœurs et réessayez.',
    backToDashboard: 'Retour au Tableau',
    owned: 'Acheté',
    insufficientGems: 'Gemmes insuffisantes! Complétez plus de leçons.',
    purchaseSuccess: 'Achat réussi!',
    chooseLanguage: 'Je veux apprendre:',
    getStarted: 'Commencer',
    heroTitle: 'La méthode gratuite, ludique et efficace pour apprendre.',
    heroSub: 'Parcours de jeu, quiz de placement et progression synchronisée dans le nuage.',
    beginnerBtn: 'Je suis débutant',
    takeTestBtn: 'Passer le test de niveau',
    testCompleted: 'Test Terminé!',
    saveLevel: 'Sauvegarder le Niveau',
    createAccountMsg: 'Créez un compte pour réclamer votre bonus de 50 XP et débloquer les leçons.',
    saveLevelBtn: 'Créer un Compte pour Sauvegarder',
    username: 'Utilisateur',
    email: 'Adresse e-mail',
    password: 'Mot de passe',
    syncPending: 'Ajustement en cours',
  },
  de: {
    learn: 'Lernen',
    leaderboard: 'Bestenliste',
    shop: 'Shop',
    profile: 'Profil',
    signOut: 'Abmelden',
    exit: 'Verlassen',
    weeklyLeague: 'Wöchentliche Liga',
    weeklyLeagueDesc: 'Täglich üben, XP verdienen und den Spitzenplatz in der Tabelle sichern!',
    gemsBazaar: 'Edelstein-Basar',
    gemsBazaarDesc: 'Gib Edelsteine für nützliche Booster und Streak-Schutz aus!',
    streakDays: 'Tages-Streak',
    totalXP: 'Gesamt XP',
    gemsBalance: 'Edelstein-Guthaben',
    completedLessons: 'Abgeschlossene Lektionen',
    unlockedBadges: 'Erfolgsabzeichen',
    devTools: 'Entwickler-Tools',
    clearConfig: 'Anmeldedaten löschen',
    clearConfigDesc: 'Löschen Sie die Firebase-Zugangsdaten im lokalen Speicher, um das Setup zurückzusetzen.',
    forceSeed: 'Daten neu laden',
    forceSeedDesc: 'Lektionen, Fragen und Abzeichen bei Synchronisationsfehlern neu laden:',
    start: 'Starten',
    cancel: 'Abbrechen',
    checkAnswer: 'Prüfen',
    incorrectAnswer: 'Falsche Antwort',
    correctAnswerMsg: 'Das ist richtig! Weiter so.',
    excellentJob: 'Gute Arbeit!',
    continue: 'Weiter',
    lessonComplete: 'Lektion beendet!',
    lessonCompleteDesc: 'Du wirst zum Sprachmeister! Halte deinen täglichen Streak.',
    xpReward: 'Erfahrung',
    gemsBonus: 'Edelstein-Bonus',
    streakMaintained: 'Streak gehalten!',
    noLivesLeft: 'Keine Leben übrig',
    noLivesLeftDesc: 'Keine Sorge! Lerne Vokabeln, lade deine Herzen auf und versuche es erneut.',
    backToDashboard: 'Zurück zum Dashboard',
    owned: 'Besessen',
    insufficientGems: 'Nicht genug Edelsteine! Schließe mehr Lektionen ab.',
    purchaseSuccess: 'Kauf erfolgreich!',
    chooseLanguage: 'Ich möchte lernen:',
    getStarted: 'Loslegen',
    heroTitle: 'Kostenlos, spielerisch und nachweislich effektiv lernen.',
    heroSub: 'Spielerische Pfade, interaktive Einstufungstests und cloud-synchrone Fortschritte.',
    beginnerBtn: 'Ich bin Anfänger',
    takeTestBtn: 'Einstufungstest machen',
    testCompleted: 'Test abgeschlossen!',
    saveLevel: 'Stufe speichern',
    createAccountMsg: 'Erstelle ein Konto, um deinen 50-XP-Bonus zu erhalten und Lektionen freizuschalten.',
    saveLevelBtn: 'Konto erstellen und speichern',
    username: 'Benutzername',
    email: 'E-Mail-Adresse',
    password: 'Passwort',
    syncPending: 'Synchronisierung ausstehend',
  },
  pt: {
    learn: 'Aprender',
    leaderboard: 'Classificação',
    shop: 'Loja',
    profile: 'Perfil',
    signOut: 'Sair',
    exit: 'Fechar',
    weeklyLeague: 'Liga Semanal',
    weeklyLeagueDesc: 'Pratique diariamente, ganhe XP e garanta seu lugar no topo!',
    gemsBazaar: 'Bazar de Gemas',
    gemsBazaarDesc: 'Gaste suas gemas em boosters úteis e proteção de ofensiva!',
    streakDays: 'Dias de Ofensiva',
    totalXP: 'XP Total',
    gemsBalance: 'Saldo de Gemas',
    completedLessons: 'Lições Feitas',
    unlockedBadges: 'Conquistas',
    devTools: 'Ferramentas de Dev',
    clearConfig: 'Limpar Credenciais',
    clearConfigDesc: 'Limpa as credenciais do Firebase no armazenamento local para reconfigurar.',
    forceSeed: 'Forçar Carga',
    forceSeedDesc: 'Recarregue lições, perguntas e conquistas se houver falha de sincronização:',
    start: 'Começar',
    cancel: 'Cancelar',
    checkAnswer: 'Verificar',
    incorrectAnswer: 'Resposta Incorreta',
    correctAnswerMsg: 'Você acertou! Continue assim.',
    excellentJob: 'Excelente Trabalho!',
    continue: 'Continuar',
    lessonComplete: 'Lição Concluída!',
    lessonCompleteDesc: 'Você está dominando o idioma! Mantenha sua ofensiva diária.',
    xpReward: 'Experiência',
    gemsBonus: 'Bônus de Gemas',
    streakMaintained: 'Ofensiva Mantida!',
    noLivesLeft: 'Sem Vidas',
    noLivesLeftDesc: 'Não se preocupe! Revise seu vocabulário, recarregue corações e tente novamente.',
    backToDashboard: 'Voltar ao Painel',
    owned: 'Adquirido',
    insufficientGems: 'Gemas insuficientes! Complete mais lições.',
    purchaseSuccess: 'Comprado com sucesso!',
    chooseLanguage: 'Quero aprender:',
    getStarted: 'Começar',
    heroTitle: 'A forma gratuita, divertida e eficaz de aprender.',
    heroSub: 'Caminhos gamificados, testes de nível e progresso sincronizado na nuvem.',
    beginnerBtn: 'Sou iniciante',
    takeTestBtn: 'Fazer teste de nível',
    testCompleted: 'Teste Concluído!',
    saveLevel: 'Salvar seu Nível',
    createAccountMsg: 'Crie uma conta para receber o bônus de 50 XP e liberar lições.',
    saveLevelBtn: 'Criar Conta para Salvar',
    username: 'Usuário',
    email: 'E-mail',
    password: 'Senha',
    syncPending: 'Sincronização pendente',
  },
  it: {
    learn: 'Impara',
    leaderboard: 'Classifica',
    shop: 'Negozio',
    profile: 'Profilo',
    signOut: 'Disconnetti',
    exit: 'Esci',
    weeklyLeague: 'Lega Settimanale',
    weeklyLeagueDesc: 'Pratica ogni giorno, guadagna XP e assicurati il primo posto!',
    gemsBazaar: 'Bazar delle Gemme',
    gemsBazaarDesc: 'Spendi gemme per potenziamenti e protezione dello streak!',
    streakDays: 'Giorni di Streak',
    totalXP: 'XP Totali',
    gemsBalance: 'Saldo Gemme',
    completedLessons: 'Lezioni Completate',
    unlockedBadges: 'Distintivi',
    devTools: 'Strumenti di Sviluppo',
    clearConfig: 'Cancella Credenziali',
    clearConfigDesc: 'Cancella le credenziali Firebase nel database locale per riavviare il setup.',
    forceSeed: 'Forza Caricamento',
    forceSeedDesc: 'Ripristina le lezioni, le domande e i badge in caso di problemi:',
    start: 'Inizia',
    cancel: 'Annulla',
    checkAnswer: 'Controlla',
    incorrectAnswer: 'Risposta Errata',
    correctAnswerMsg: 'Esatto! Continua così.',
    excellentJob: 'Ottimo Lavoro!',
    continue: 'Continua',
    lessonComplete: 'Lezione Completata!',
    lessonCompleteDesc: 'Stai diventando un esperto della lingua! Mantieni il tuo streak.',
    xpReward: 'Esperienza',
    gemsBonus: 'Bonus Gemme',
    streakMaintained: 'Streak Mantenuto!',
    noLivesLeft: 'Vite Esaurite',
    noLivesLeftDesc: 'Non preoccuparti! Ripassa i vocaboli, ricarica i cuori e riprova.',
    backToDashboard: 'Torna alla Dashboard',
    owned: 'Acquistato',
    insufficientGems: 'Gemme insufficienti! Completa più lezioni.',
    purchaseSuccess: 'Acquisto completato!',
    chooseLanguage: 'Voglio imparare:',
    getStarted: 'Inizia',
    heroTitle: 'Il modo gratuito, divertente ed efficace per imparare.',
    heroSub: 'Percorsi di gioco, test di livello interattivi e progressi sincronizzati nel cloud.',
    beginnerBtn: 'Sono un principiante',
    takeTestBtn: 'Fai il test di livello',
    testCompleted: 'Test Completato!',
    saveLevel: 'Salva il Livello',
    createAccountMsg: 'Crea un account per ricevere il bonus di 50 XP e sbloccare le lezioni.',
    saveLevelBtn: 'Crea Account per Salvare',
    username: 'Nome utente',
    email: 'Indirizzo e-mail',
    password: 'Password',
    syncPending: 'Sincronizzazione in corso',
  },
  ru: {
    learn: 'Учить',
    leaderboard: 'Рейтинг',
    shop: 'Магазин',
    profile: 'Профиль',
    signOut: 'Выйти',
    exit: 'Выход',
    weeklyLeague: 'Недельная Лига',
    weeklyLeagueDesc: 'Практикуйтесь ежедневно, зарабатывайте XP и занимайте первые места!',
    gemsBazaar: 'Лавка Самоцветов',
    gemsBazaarDesc: 'Тратьте самоцветы на полезные бустеры и защиту ударного режима!',
    streakDays: 'Дней Подряд',
    totalXP: 'Всего XP',
    gemsBalance: 'Баланс Самоцветов',
    completedLessons: 'Уроков Пройдено',
    unlockedBadges: 'Достижения',
    devTools: 'Инструменты Dev',
    clearConfig: 'Сбросить Настройки',
    clearConfigDesc: 'Сбросьте ключи Firebase из локального хранилища для повторной настройки.',
    forceSeed: 'Импортировать Базу',
    forceSeedDesc: 'Перезапустите уроки, вопросы и достижения при рассинхронизации:',
    start: 'Начать',
    cancel: 'Отмена',
    checkAnswer: 'Проверить',
    incorrectAnswer: 'Неверный Ответ',
    correctAnswerMsg: 'Правильно! Продолжайте.',
    excellentJob: 'Отличная Работа!',
    continue: 'Продолжить',
    lessonComplete: 'Урок Завершен!',
    lessonCompleteDesc: 'Вы становитесь мастером речи! Поддерживайте ежедневный ударный режим.',
    xpReward: 'Опыт',
    gemsBonus: 'Бонус Самоцветов',
    streakMaintained: 'Режим Сохранен!',
    noLivesLeft: 'Жизни Закончились',
    noLivesLeftDesc: 'Не волнуйтесь! Повторите слова, восстановите сердца и попробуйте снова.',
    backToDashboard: 'На Главную',
    owned: 'Куплено',
    insufficientGems: 'Недостаточно самоцветов! Пройдите больше уроков.',
    purchaseSuccess: 'Успешно куплено!',
    chooseLanguage: 'Я хочу учить:',
    getStarted: 'Начать',
    heroTitle: 'Бесплатный, веселый и эффективный способ учить языки.',
    heroSub: 'Игровые маршруты, интерактивные тесты и синхронизация в облаке.',
    beginnerBtn: 'Я новичок',
    takeTestBtn: 'Пройти тест на уровень',
    testCompleted: 'Тест Завершен!',
    saveLevel: 'Сохранить Уровень',
    createAccountMsg: 'Создайте аккаунт, чтобы получить бонус 50 XP и открыть уроки.',
    saveLevelBtn: 'Создать Аккаунт для Сохранения',
    username: 'Имя пользователя',
    email: 'Эл. почта',
    password: 'Пароль',
    syncPending: 'Синхронизация...',
  },
  zh: {
    learn: '学习',
    leaderboard: '排行榜',
    shop: '商店',
    profile: '个人主页',
    signOut: '退出登录',
    exit: '退出',
    weeklyLeague: '每周联赛',
    weeklyLeagueDesc: '每日练习以获得经验值 (XP)，冲上排行榜顶端！',
    gemsBazaar: '宝石集市',
    gemsBazaarDesc: '使用宝石购买实用助力道具和连击保护！',
    streakDays: '连击天数',
    totalXP: '总经验值',
    gemsBalance: '宝石余额',
    completedLessons: '完成课程',
    unlockedBadges: '成就勋章',
    devTools: '开发者设置',
    clearConfig: '清除凭证',
    clearConfigDesc: '清除本地存储的 Firebase 配置以便重新进行初始化设置。',
    forceSeed: '重置数据',
    forceSeedDesc: '如遇数据同步问题，可点击此处强制重新导入课程与勋章数据：',
    start: '开始',
    cancel: '取消',
    checkAnswer: '检查答案',
    incorrectAnswer: '答案错误',
    correctAnswerMsg: '回答正确！继续保持。',
    excellentJob: '太棒了！',
    continue: '继续',
    lessonComplete: '课程完成！',
    lessonCompleteDesc: '你正在成为语言大师！坚持每日练习连击。',
    xpReward: '获得经验',
    gemsBonus: '宝石奖励',
    streakMaintained: '保持连击！',
    noLivesLeft: '没有生命值了',
    noLivesLeftDesc: '别担心！复习词汇、恢复红心然后再试一次。熟能生巧！',
    backToDashboard: '返回主页',
    owned: '已拥有',
    insufficientGems: '宝石不足！完成更多课程以获取宝石。',
    purchaseSuccess: '购买成功！',
    chooseLanguage: '我要学习：',
    getStarted: '开始学习',
    heroTitle: '免费、有趣且高效的语言学习方式。',
    heroSub: '游戏化关卡、即时水平测试，以及 100% 云端进度同步。',
    beginnerBtn: '我是零基础新手',
    takeTestBtn: '参加语言水平测试',
    testCompleted: '测试完成！',
    saveLevel: '保存您的水平',
    createAccountMsg: '创建账户以领取 50 XP 奖励并解锁对应关卡课程。',
    saveLevelBtn: '创建账户并保存进度',
    username: '用户名',
    email: '电子邮箱',
    password: '密码',
    syncPending: '等待同步',
  },
  ja: {
    learn: '学ぶ',
    leaderboard: 'ランキング',
    shop: 'ショップ',
    profile: 'プロフィール',
    signOut: 'サインアウト',
    exit: '閉じる',
    weeklyLeague: '週間リーグ',
    weeklyLeagueDesc: '毎日練習してXPを獲得し、ランキングのトップを目指しましょう！',
    gemsBazaar: 'ジェムバザー',
    gemsBazaarDesc: '貯めたジェムで便利なアイテムや連続記録保護と交換しましょう！',
    streakDays: '連続日数',
    totalXP: '累計 XP',
    gemsBalance: 'ジェム残高',
    completedLessons: '完了したレッスン',
    unlockedBadges: '獲得バッジ',
    devTools: '開発ツール',
    clearConfig: '認証情報の消去',
    clearConfigDesc: 'ローカルストレージに保存されているFirebase接続設定を削除してリセットします。',
    forceSeed: 'データの強制ロード',
    forceSeedDesc: '同期に不具合がある場合、レッスン、問題、バッジデータを再読込します：',
    start: 'スタート',
    cancel: 'キャンセル',
    checkAnswer: '判定する',
    incorrectAnswer: '不正解です',
    correctAnswerMsg: '正解です！その調子です。',
    excellentJob: '素晴らしい！',
    continue: '次に進む',
    lessonComplete: 'レッスン完了！',
    lessonCompleteDesc: '素晴らしい上達です！毎日の連続記録を維持しましょう。',
    xpReward: '経験値',
    gemsBonus: 'ジェム獲得',
    streakMaintained: '記録維持！',
    noLivesLeft: 'ライフがありません',
    noLivesLeftDesc: '大丈夫です！単語を復習し、ライフを回復させてからもう一度挑戦しましょう。',
    backToDashboard: 'ダッシュボードに戻る',
    owned: '所有済み',
    insufficientGems: 'ジェムが不足しています！レッスンを完了させて貯めましょう。',
    purchaseSuccess: '購入が完了しました！',
    chooseLanguage: '学習したい言語：',
    getStarted: 'スタート',
    heroTitle: '無料で楽しく、効果的な新しい言語学習。',
    heroSub: 'ゲーム感覚のパス、即時読み込みのレベル診断、そして安心のクラウド同期。',
    beginnerBtn: '初めて学習します',
    takeTestBtn: 'レベル診断テストを受ける',
    testCompleted: 'テスト完了！',
    saveLevel: 'レベルを保存する',
    createAccountMsg: 'アカウントを作成して 50 XP ボーナスを獲得し、レッスンを開始しましょう。',
    saveLevelBtn: 'アカウントを作成して保存する',
    username: 'ユーザー名',
    email: 'メールアドレス',
    password: 'パスワード',
    syncPending: '同期中...',
  },
  ko: {
    learn: '학습하기',
    leaderboard: '리그 순위',
    shop: '상점',
    profile: '프로필',
    signOut: '로그아웃',
    exit: '닫기',
    weeklyLeague: '주간 리그',
    weeklyLeagueDesc: '매일 연습하고 XP를 획득하여 리그 최정상 자리를 획득하세요!',
    gemsBazaar: '보석 상점',
    gemsBazaarDesc: '모은 보석으로 유용한 부스터 및 연속 기록 보호 아이템을 구매하세요!',
    streakDays: '연속 학습일',
    totalXP: '총 XP',
    gemsBalance: '보석 잔액',
    completedLessons: '완료한 레슨',
    unlockedBadges: '달성 업적',
    devTools: '설정 및 개발툴',
    clearConfig: '인증 정보 삭제',
    clearConfigDesc: '로컬 스토리지에 캐시된 Firebase 자격 증명을 초기화하고 설정을 다시 실행합니다.',
    forceSeed: '데이터 재생성',
    forceSeedDesc: '클라우드 데이터에 동기화 오류가 발생했을 경우 레슨 및 배지 데이터를 다시 로드합니다:',
    start: '시작',
    cancel: '취소',
    checkAnswer: '답안 확인',
    incorrectAnswer: '오답입니다',
    correctAnswerMsg: '정답입니다! 계속 집중하세요.',
    excellentJob: '참 잘했어요!',
    continue: '계속하기',
    lessonComplete: '레슨 완료!',
    lessonCompleteDesc: '완벽하게 소화하셨네요! 매일 매일 학습 기록을 이어나가세요.',
    xpReward: '경험치',
    gemsBonus: '보석 보너스',
    streakMaintained: '학습 기록 유지!',
    noLivesLeft: '하트가 부족합니다',
    noLivesLeftDesc: '걱정 마세요! 단어장을 복습하고 하트를 재충전한 뒤 다시 시도해 보세요.',
    backToDashboard: '대시보드로 돌아가기',
    owned: '보유 중',
    insufficientGems: '보석이 부족합니다! 레슨을 완료하여 더 모아보세요.',
    purchaseSuccess: '성공적으로 구매했습니다!',
    chooseLanguage: '배우고 싶은 언어:',
    getStarted: '시작하기',
    heroTitle: '무료로, 재밌게, 효과적으로 언어를 마스터해 보세요.',
    heroSub: '게임 같은 학습 경로, 즉시 시작하는 레벨 테스트, 클라우드 실시간 동기화.',
    beginnerBtn: '완전 초보자입니다',
    takeTestBtn: '레벨 테스트 받기',
    testCompleted: '테스트 완료!',
    saveLevel: '진도 저장하기',
    createAccountMsg: '프로필을 생성하여 50 XP 보너스를 받고 맞춤형 학습을 해제하세요.',
    saveLevelBtn: '가입하고 결과 저장하기',
    username: '사용자 이름',
    email: '이메일 주소',
    password: '비밀번호',
    syncPending: '동기화 대기 중',
  }
};

export const getTranslation = (key: keyof TranslationDictionary, lang: string): string => {
  const selectedLang = (lang as InterfaceLang) || 'en';
  const dict = TRANSLATIONS[selectedLang] || TRANSLATIONS.en;
  return dict[key] || TRANSLATIONS.en[key] || String(key);
};

/**
 * Dynamically queries the MyMemory translation API to translate dynamic database content
 * (e.g. lesson questions, custom prompts) without requiring expensive API keys.
 */
export async function translateQueryFromAPI(text: string, sourceLang: string, targetLang: string): Promise<string> {
  if (!text || sourceLang === targetLang) return text;
  
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('API fetch failed');
    
    const data = await res.json();
    if (data?.responseData?.translatedText) {
      return data.responseData.translatedText;
    }
  } catch (e) {
    console.error('MyMemory Translation API error', e);
  }
  return text; // fallback
}

export function localizePrompt(prompt: string, interfaceLang: string): string {
  if (!prompt) return prompt;

  // 1. Language names translations dictionary
  const langNames: Record<string, Record<string, string>> = {
    en: { Spanish: 'Spanish', French: 'French', German: 'German', Japanese: 'Japanese', Italian: 'Italian', Chinese: 'Chinese', Russian: 'Russian', Portuguese: 'Portuguese', Korean: 'Korean', Turkish: 'Turkish', Arabic: 'Arabic', Dutch: 'Dutch', Swedish: 'Swedish', Hindi: 'Hindi', English: 'English' },
    tr: { Spanish: 'İspanyolca', French: 'Fransızca', German: 'Almanca', Japanese: 'Japonca', Italian: 'İtalyanca', Chinese: 'Çince', Russian: 'Rusça', Portuguese: 'Portekizce', Korean: 'Korece', Turkish: 'Türkçe', Arabic: 'Arapça', Dutch: 'Felemenkçe', Swedish: 'İsveççe', Hindi: 'Hintçe', English: 'İngilizce' },
    es: { Spanish: 'español', French: 'francés', German: 'alemán', Japanese: 'japonés', Italian: 'italiano', Chinese: 'chino', Russian: 'ruso', Portuguese: 'portugués', Korean: 'coreano', Turkish: 'turco', Arabic: 'árabe', Dutch: 'neerlandés', Swedish: 'sueco', Hindi: 'hindi', English: 'inglés' },
    fr: { Spanish: 'espagnol', French: 'français', German: 'allemand', Japanese: 'japonais', Italian: 'italien', Chinese: 'chinois', Russian: 'russe', Portuguese: 'portugais', Korean: 'coréen', Turkish: 'turc', Arabic: 'arabe', Dutch: 'néerlandais', Swedish: 'suédois', Hindi: 'hindi', English: 'anglais' },
    de: { Spanish: 'Spanisch', French: 'Französisch', German: 'Deutsch', Japanese: 'Japanisch', Italian: 'Italienisch', Chinese: 'Chinesisch', Russian: 'Russisch', Portuguese: 'Portugiesisch', Korean: 'Koreanisch', Turkish: 'Türkisch', Arabic: 'Arabisch', Dutch: 'Niederländisch', Swedish: 'Schwedisch', Hindi: 'Hindi', English: 'Englisch' }
  };

  // 2. Vocabulary words translation dictionary (English to target interface language)
  const vocabWords: Record<string, Record<string, string>> = {
    tr: { 
      Hello: 'Merhaba', Goodbye: 'Hoşça kal', Please: 'Lütfen', 'Thank you': 'Teşekkürler', Mother: 'Anne', Father: 'Baba', Friend: 'Arkadaş', Brother: 'Erkek kardeş', Sister: 'Kız kardeş', Water: 'Su', Bread: 'Ekmek', Book: 'Kitap', One: 'Bir', Two: 'İki', Three: 'Üç', Red: 'Kırmızı', Blue: 'Mavi', Green: 'Yeşil', Sun: 'Güneş', Rain: 'Yağmur', Wind: 'Rüzgar',
      "Where is the station?": "İstasyon nerede?", "How much is this?": "Bu ne kadar?", "I love my family.": "Ailemi seviyorum.", "What is your name?": "Adınız nedir?", "I speak some English.": "Biraz İngilizce konuşuyorum.",
      "If I had money, I would travel.": "Param olsaydı seyahat ederdim.", "Please explain this to me.": "Lütfen bunu bana açıklayın.", "Actions speak louder than words.": "Lafla peynir gemisi yürümez.", "It is raining heavily today.": "Bugün çok şiddetli yağmur yağıyor.", "I look forward to meeting you.": "Sizinle tanışmayı dört gözle bekliyorum."
    },
    es: { 
      Hello: 'Hola', Goodbye: 'Adiós', Please: 'Por favor', 'Thank you': 'Gracias', Mother: 'Madre', Father: 'Padre', Friend: 'Amigo', Brother: 'Hermano', Sister: 'Hermana', Water: 'Agua', Bread: 'Pan', Book: 'Libro', One: 'Uno', Two: 'Dos', Three: 'Tres', Red: 'Rojo', Blue: 'Azul', Green: 'Verde', Sun: 'Sol', Rain: 'Lluvia', Wind: 'Viento',
      "Where is the station?": "¿Dónde está la estación?", "How much is this?": "¿Cuánto cuesta esto?", "I love my family.": "Amo a mi familia.", "What is your name?": "¿Cómo te llamas?", "I speak some English.": "Hablo un poco de inglés.",
      "If I had money, I would travel.": "Si tuviera dinero, viajaría.", "Please explain this to me.": "Por favor explícame esto.", "Actions speak louder than words.": "Las palabras se las lleva el viento.", "It is raining heavily today.": "Hoy está lloviendo fuertemente.", "I look forward to meeting you.": "Espero conocerte pronto."
    },
    fr: { 
      Hello: 'Bonjour', Goodbye: 'Au revoir', Please: 'S\'il vous plaît', 'Thank you': 'Merci', Mother: 'Mère', Father: 'Père', Friend: 'Ami', Brother: 'Frère', Sister: 'Sœur', Water: 'Eau', Bread: 'Pain', Book: 'Livre', One: 'Un', Two: 'Deux', Three: 'Trois', Red: 'Rouge', Blue: 'Bleu', Green: 'Vert', Sun: 'Soleil', Rain: 'Pluie', Wind: 'Vent',
      "Where is the station?": "Où est la gare ?", "How much is this?": "Combien ça coûte ?", "I love my family.": "J'aime ma famille.", "What is your name?": "Comment vous appelez-vous ?", "I speak some English.": "Je parle un peu anglais.",
      "If I had money, I would travel.": "Si j'avais de l'argent, je voyagerais.", "Please explain this to me.": "S'il vous plaît expliquez-moi cela.", "Actions speak louder than words.": "Les actes parlent plus que les mots.", "It is raining heavily today.": "Il pleut à verse aujourd'hui.", "I look forward to meeting you.": "J'ai hâte de vous rencontrer."
    },
    de: { 
      Hello: 'Hallo', Goodbye: 'Tschüss', Please: 'Bitte', 'Thank you': 'Danke', Mother: 'Mutter', Father: 'Vater', Friend: 'Freund', Brother: 'Bruder', Sister: 'Schwester', Water: 'Wasser', Bread: 'Brot', Book: 'Buch', One: 'Eins', Two: 'Zwei', Three: 'Drei', Red: 'Rot', Blue: 'Blau', Green: 'Grün', Sun: 'Sonne', Rain: 'Regen', Wind: 'Wind',
      "Where is the station?": "Wo ist der Bahnhof?", "How much is this?": "Wie viel kostet das?", "I love my family.": "Ich liebe meine Familie.", "What is your name?": "Wie heißen Sie?", "I speak some English.": "Ich spreche ein wenig Englisch.",
      "If I had money, I would travel.": "Wenn ich Geld hätte, würde ich reisen.", "Please explain this to me.": "Bitte erklären Sie mir das.", "Actions speak louder than words.": "Taten sagen mehr als Worte.", "It is raining heavily today.": "Heute regnet es in Strömen.", "I look forward to meeting you.": "Ich freue mich darauf, Sie kennenzulernen."
    }
  };

  // Helpers to get localized version
  const getLangName = (l: string) => (langNames[interfaceLang] || langNames.en)[l] || l;
  const cleanEnglish = (str: string) => str.toLowerCase().replace(/ı/g, 'i').replace(/İ/g, 'i');
  const getVocabWord = (w: string) => {
    const table = vocabWords[interfaceLang] || {};
    const key = Object.keys(table).find(k => cleanEnglish(k) === cleanEnglish(w));
    return key ? table[key] : w;
  };

  // Pattern 1: How do you say "Hello" in Spanish?
  const regexSay = /How do you say\s+["']([^"']+)["']\s+in\s+([^?]+)\?/i;
  let match = prompt.match(regexSay);
  if (match) {
    const word = match[1];
    const lang = match[2].trim();
    if (interfaceLang === 'tr') {
      return `${getLangName(lang)} dilinde "${getVocabWord(word)}" nasıl denir?`;
    } else if (interfaceLang === 'es') {
      return `¿Cómo se dice "${getVocabWord(word)}" en ${getLangName(lang)}?`;
    } else if (interfaceLang === 'fr') {
      return `Comment dit-on "${getVocabWord(word)}" en ${getLangName(lang)} ?`;
    } else if (interfaceLang === 'de') {
      return `Wie sagt man "${getVocabWord(word)}" auf ${getLangName(lang)}?`;
    }
    return `How do you say "${getVocabWord(word)}" in ${getLangName(lang)}?`;
  }

  // Pattern 2: What does "Hola" mean?
  const regexMean = /What does\s+["']([^"']+)["']\s+mean\?/i;
  match = prompt.match(regexMean);
  if (match) {
    const word = match[1];
    if (interfaceLang === 'tr') {
      return `"${word}" ne anlama gelir?`;
    } else if (interfaceLang === 'es') {
      return `¿Qué significa "${word}"?`;
    } else if (interfaceLang === 'fr') {
      return `Que signifie "${word}" ?`;
    } else if (interfaceLang === 'de') {
      return `Was bedeutet "${word}"?`;
    }
    return `What does "${word}" mean?`;
  }

  // Pattern 3: Translate: "Hello"
  const regexTranslate = /Translate:\s+["']([^"']+)["']/i;
  match = prompt.match(regexTranslate);
  if (match) {
    const word = match[1];
    if (interfaceLang === 'tr') {
      return `Çevirin: "${getVocabWord(word)}"`;
    } else if (interfaceLang === 'es') {
      return `Traduce: "${getVocabWord(word)}"`;
    } else if (interfaceLang === 'fr') {
      return `Traduisez : "${getVocabWord(word)}"`;
    } else if (interfaceLang === 'de') {
      return `Übersetze: "${getVocabWord(word)}"`;
    }
    return `Translate: "${getVocabWord(word)}"`;
  }

  // Pattern 4: Complete: "..."
  if (prompt.includes('Complete:')) {
    if (interfaceLang === 'tr') return prompt.replace('Complete:', 'Tamamlayın:');
    if (interfaceLang === 'es') return prompt.replace('Complete:', 'Completa:');
    if (interfaceLang === 'fr') return prompt.replace('Complete:', 'Complétez :');
    if (interfaceLang === 'de') return prompt.replace('Complete:', 'Vervollständige:');
  }

  // Fallback: search-replace direct words
  let localized = prompt;
  if (interfaceLang !== 'en') {
    const table = vocabWords[interfaceLang] || {};
    for (const [enWord, localWord] of Object.entries(table)) {
      const reg = new RegExp(`\\b${enWord}\\b`, 'gi');
      localized = localized.replace(reg, localWord);
    }
  }

  return localized;
}
