const LANG_FLAGS = {
    tr: { flag: "🇹🇷", nameTr: "Türkçe", nameEn: "Turkish", locale: "tr-TR" },
    en: { flag: "🇺🇸", nameTr: "İngilizce", nameEn: "English", locale: "en-US" },
    fr: { flag: "🇫🇷", nameTr: "Fransızca", nameEn: "French", locale: "fr-FR" },
    de: { flag: "🇩🇪", nameTr: "Almanca", nameEn: "German", locale: "de-DE" },
    es: { flag: "🇪🇸", nameTr: "İspanyolca", nameEn: "Spanish", locale: "es-ES" },
    it: { flag: "🇮🇹", nameTr: "İtalyanca", nameEn: "Italian", locale: "it-IT" },
    pt: { flag: "🇵🇹", nameTr: "Portekizce", nameEn: "Portuguese", locale: "pt-PT" },
    ru: { flag: "🇷🇺", nameTr: "Rusça", nameEn: "Russian", locale: "ru-RU" },
    ja: { flag: "🇯🇵", nameTr: "Japonca", nameEn: "Japanese", locale: "ja-JP" },
    zh: { flag: "🇨🇳", nameTr: "Çince", nameEn: "Chinese", locale: "zh-CN" },
    ar: { flag: "🇸🇦", nameTr: "Arapça", nameEn: "Arabic", locale: "ar-SA" },
    ko: { flag: "🇰🇷", nameTr: "Korece", nameEn: "Korean", locale: "ko-KR" },
    hi: { flag: "🇮🇳", nameTr: "Hintçe", nameEn: "Hindi", locale: "hi-IN" },
    nl: { flag: "🇳🇱", nameTr: "Flemenkçe", nameEn: "Dutch", locale: "nl-NL" },
    sv: { flag: "🇸🇪", nameTr: "İsveççe", nameEn: "Swedish", locale: "sv-SE" }
};

const CULTURE_CHAPTERS = {
    en: { id: 'culture_en', title: 'English Culture & Life', icon: 'fa-flag-usa', words: [
        {en:"Halloween",tr:"Cadılar Bayramı"},{en:"Thanksgiving",tr:"Şükran Günü"},{en:"Baseball",tr:"Beyzbol"},
        {en:"Broadway",tr:"Broadway"},{en:"Jazz",tr:"Caz müziği"},{en:"Barbecue",tr:"Barbekü"},
        {en:"Prom",tr:"Mezuniyet balosu"},{en:"Cowboy",tr:"Kovboy"},{en:"Road trip",tr:"Yol gezisi"},
        {en:"Skyscraper",tr:"Gökdelen"},{en:"Cheerleader",tr:"Amigo"},{en:"Black Friday",tr:"Kara Cuma"},
        {en:"Super Bowl",tr:"Süper Kase"},{en:"Silicon Valley",tr:"Silikon Vadisi"},
        {en:"Country music",tr:"Country müziği"},{en:"Hot dog",tr:"Sosis sandviç"},
        {en:"Pancake",tr:"Pankek"},{en:"Maple syrup",tr:"Akçaağaç şurubu"},
        {en:"Drive-through",tr:"Arabadan servis"},{en:"Sitcom",tr:"Durum komedisi"},
        {en:"Yard sale",tr:"Bahçe satışı"},{en:"Diner",tr:"Lokanta"},
        {en:"Dollar",tr:"Dolar"},{en:"American football",tr:"Amerikan futbolu"},{en:"Fahrenheit",tr:"Fahrenheit"}
    ]},
    fr: { id: 'culture_fr', title: 'French Culture & Life', icon: 'fa-bread-slice', words: [
        {en:"Baguette",tr:"Fransız ekmeği"},{en:"Croissant",tr:"Kruvasan"},{en:"Champagne",tr:"Şampanya"},
        {en:"Eiffel Tower",tr:"Eyfel Kulesi"},{en:"Louvre",tr:"Louvre müzesi"},{en:"Cafe",tr:"Kafe"},
        {en:"Tour de France",tr:"Fransa turu bisiklet yarışı"},{en:"Haute couture",tr:"Yüksek moda"},
        {en:"Perfume",tr:"Parfüm"},{en:"Crepe",tr:"Krep"},{en:"Macaron",tr:"Makaron"},
        {en:"Accordion",tr:"Akordeon"},{en:"Beret",tr:"Bere"},{en:"Cannes festival",tr:"Cannes film festivali"},
        {en:"Bastille Day",tr:"Bastille günü"},{en:"Bordeaux wine",tr:"Bordo şarabı"},
        {en:"Mime",tr:"Pantomim"},{en:"Brie cheese",tr:"Brie peyniri"},{en:"Seine river",tr:"Sen nehri"},
        {en:"Versailles",tr:"Versay sarayı"},{en:"Escargot",tr:"Sümüklüböcek yemeği"},
        {en:"Moulin Rouge",tr:"Moulin Rouge"},{en:"Pétanque",tr:"Fransız topu oyunu"},
        {en:"French cuisine",tr:"Fransız mutfağı"},{en:"Fleur-de-lis",tr:"Zambak sembolü"}
    ]},
    de: { id: 'culture_de', title: 'German Culture & Life', icon: 'fa-beer', words: [
        {en:"Oktoberfest",tr:"Ekim bira festivali"},{en:"Bratwurst",tr:"Alman sosisi"},{en:"Pretzel",tr:"Simit ekmeği"},
        {en:"Beer garden",tr:"Bira bahçesi"},{en:"Christmas market",tr:"Noel pazarı"},
        {en:"Autobahn",tr:"Alman otoyolu"},{en:"Black Forest",tr:"Kara Orman"},
        {en:"Brandenburg Gate",tr:"Brandenburg Kapısı"},{en:"Bundesliga",tr:"Almanya futbol ligi"},
        {en:"Fairy tale",tr:"Peri masalı"},{en:"Carnival",tr:"Karnaval"},{en:"Lederhosen",tr:"Alman deri pantolonu"},
        {en:"Sauerkraut",tr:"Ekşi lahana"},{en:"Rhine river",tr:"Ren nehri"},{en:"Castle",tr:"Şato"},
        {en:"Recycling",tr:"Geri dönüşüm"},{en:"Punctuality",tr:"Dakiklik"},{en:"Spa",tr:"Kaplıca"},
        {en:"Schnitzel",tr:"Şnitzel"},{en:"Strudel",tr:"Strudel pastası"},{en:"Dirndl",tr:"Alman kadın kıyafeti"},
        {en:"Porcelain",tr:"Porselen"},{en:"Folk music",tr:"Halk müziği"},
        {en:"Bread culture",tr:"Ekmek kültürü"},{en:"Philosopher",tr:"Filozof"}
    ]},
    es: { id: 'culture_es', title: 'Spanish Culture & Life', icon: 'fa-guitar', words: [
        {en:"Flamenco",tr:"Flamenko dansı"},{en:"Tapas",tr:"İspanyol atıştırmalıkları"},{en:"Paella",tr:"İspanyol pilavı"},
        {en:"Siesta",tr:"Öğle uykusu"},{en:"Fiesta",tr:"Bayram kutlaması"},{en:"Bullfighting",tr:"Boğa güreşi"},
        {en:"Sangria",tr:"İspanyol şarap içeceği"},{en:"Churros",tr:"Kızarmış hamur"},
        {en:"Gazpacho",tr:"Soğuk domates çorbası"},{en:"Sagrada Familia",tr:"Kutsal Aile kilisesi"},
        {en:"La Tomatina",tr:"Domates festivali"},{en:"Running of the bulls",tr:"Boğaların koşusu"},
        {en:"Matador",tr:"Boğa güreşçisi"},{en:"FC Barcelona",tr:"Barcelona futbol kulübü"},
        {en:"Manchego cheese",tr:"Manchego peyniri"},{en:"Ibiza",tr:"İbiza adası"},
        {en:"Jamón",tr:"İber jambonu"},{en:"Don Quixote",tr:"Don Kişot"},{en:"Picasso",tr:"Picasso"},
        {en:"Tortilla española",tr:"İspanyol omleti"},{en:"Olive oil",tr:"Zeytinyağı"},
        {en:"Holy Week",tr:"Kutsal Hafta"},{en:"Zarzuela",tr:"İspanyol operası"},
        {en:"Flamenco guitar",tr:"Flamenko gitarı"},{en:"Carnival",tr:"Karnaval"}
    ]},
    it: { id: 'culture_it', title: 'Italian Culture & Life', icon: 'fa-pizza-slice', words: [
        {en:"Pasta",tr:"Makarna"},{en:"Pizza",tr:"Pizza"},{en:"Gelato",tr:"İtalyan dondurması"},
        {en:"Espresso",tr:"Espresso kahvesi"},{en:"Tiramisu",tr:"Tiramisu tatlısı"},{en:"Opera",tr:"Opera"},
        {en:"Colosseum",tr:"Kolezyum"},{en:"Gondola",tr:"Venedik teknesi"},{en:"Vatican",tr:"Vatikan"},
        {en:"Renaissance",tr:"Rönesans"},{en:"Ferrari",tr:"Ferrari arabası"},{en:"Versace",tr:"Versace markası"},
        {en:"Da Vinci",tr:"Da Vinci"},{en:"Michelangelo",tr:"Michelangelo"},
        {en:"Leaning Tower",tr:"Eğik Kule"},{en:"Truffle",tr:"Trüf mantarı"},
        {en:"Prosecco",tr:"İtalyan köpüklü şarabı"},{en:"Caprese",tr:"İtalyan salatası"},
        {en:"Dante",tr:"Dante Alighieri"},{en:"Venice Carnival",tr:"Venedik Karnavalı"},
        {en:"Fashion week",tr:"Moda haftası"},{en:"Limoncello",tr:"Limon likörü"},
        {en:"Aperitivo",tr:"Akşam atıştırması"},{en:"Sicilian",tr:"Sicilyalı"},
        {en:"Espresso bar",tr:"Espresso barı"}
    ]},
    pt: { id: 'culture_pt', title: 'Portuguese Culture & Life', icon: 'fa-music', words: [
        {en:"Fado",tr:"Portekiz halk müziği"},{en:"Pastel de nata",tr:"Portekiz kremalı turtası"},
        {en:"Bacalhau",tr:"Tuzlu morina balığı"},{en:"Port wine",tr:"Porto şarabı"},
        {en:"Azulejo",tr:"Portekiz çinisi"},{en:"Lisbon tram",tr:"Lizbon tramvayı"},
        {en:"Surfing",tr:"Sörf"},{en:"Discovery era",tr:"Keşifler çağı"},{en:"Caldo verde",tr:"Yeşil çorba"},
        {en:"Piri piri",tr:"Acı sos"},{en:"Sardine festival",tr:"Sardalye festivali"},
        {en:"Vasco da Gama",tr:"Vasko da Gama"},{en:"Benfica",tr:"Benfica kulübü"},
        {en:"Tile art",tr:"Çini sanatı"},{en:"Sintra palace",tr:"Sintra sarayı"},
        {en:"Douro valley",tr:"Douro vadisi"},{en:"Saudade",tr:"Özlem duygusu"},
        {en:"Fisherman",tr:"Balıkçı"},{en:"Ginjinha",tr:"Vişne likörü"},
        {en:"Carnation revolution",tr:"Karanfil devrimi"},{en:"Football",tr:"Futbol"},
        {en:"Pastéis de Belém",tr:"Belém böreği"},{en:"Cape Verde",tr:"Yeşil Burun Adaları"},
        {en:"Tuk-tuk",tr:"Üç tekerlekli araç"},{en:"Algarve",tr:"Algarve sahili"}
    ]},
    ja: { id: 'culture_ja', title: 'Japanese Culture & Life', icon: 'fa-torii-gate', words: [
        {en:"Cherry blossom",tr:"Kiraz çiçeği"},{en:"Samurai",tr:"Samuray"},{en:"Ninja",tr:"Ninja"},
        {en:"Geisha",tr:"Geyşa"},{en:"Sumo",tr:"Sumo güreşi"},{en:"Sushi",tr:"Suşi"},
        {en:"Ramen",tr:"Ramen çorbası"},{en:"Anime",tr:"Anime"},{en:"Manga",tr:"Manga"},
        {en:"Kabuki",tr:"Kabuki tiyatrosu"},{en:"Tea ceremony",tr:"Çay töreni"},
        {en:"Mount Fuji",tr:"Fuji dağı"},{en:"Torii gate",tr:"Torii kapısı"},{en:"Kimono",tr:"Kimono"},
        {en:"Shinkansen",tr:"Japon hızlı treni"},{en:"Origami",tr:"Origami"},
        {en:"Bonsai",tr:"Bonsai ağacı"},{en:"Karate",tr:"Karate"},{en:"Zen",tr:"Zen budizmi"},
        {en:"Onsen",tr:"Japon kaplıcası"},{en:"Taiko drum",tr:"Japon davulu"},
        {en:"Ikebana",tr:"Çiçek düzenleme sanatı"},{en:"Haiku",tr:"Haiku şiiri"},
        {en:"Tempura",tr:"Tempura"},{en:"Pachinko",tr:"Japon oyun makinesi"}
    ]},
    zh: { id: 'culture_zh', title: 'Chinese Culture & Life', icon: 'fa-dragon', words: [
        {en:"Dragon",tr:"Ejderha"},{en:"Kung fu",tr:"Kung fu"},{en:"Dim sum",tr:"Çin lokması"},
        {en:"Dumplings",tr:"Mantı"},{en:"Hot pot",tr:"Çin güveci"},{en:"Great Wall",tr:"Çin Seddi"},
        {en:"Forbidden City",tr:"Yasak Şehir"},{en:"Terracotta army",tr:"Toprak ordu"},
        {en:"Mahjong",tr:"Mahjong oyunu"},{en:"Calligraphy",tr:"Hat sanatı"},
        {en:"Silk road",tr:"İpek yolu"},{en:"Panda",tr:"Panda"},{en:"Tai chi",tr:"Tai chi"},
        {en:"Spring Festival",tr:"Bahar festivali"},{en:"Red envelope",tr:"Kırmızı zarf"},
        {en:"Fireworks",tr:"Havai fişek"},{en:"Moon Festival",tr:"Ay festivali"},
        {en:"Lantern Festival",tr:"Fener festivali"},{en:"Acupuncture",tr:"Akupunktur"},
        {en:"Paper cutting",tr:"Kağıt kesme sanatı"},{en:"Jade",tr:"Yeşim taşı"},
        {en:"Confucius",tr:"Konfüçyüs"},{en:"Dragon boat",tr:"Ejderha teknesi"},
        {en:"Chopsticks",tr:"Yemek çubukları"},{en:"Temple of Heaven",tr:"Gök Tapınağı"}
    ]},
    ar: { id: 'culture_ar', title: 'Arabic Culture & Life', icon: 'fa-mosque', words: [
        {en:"Oud",tr:"Ud çalgısı"},{en:"Arabic calligraphy",tr:"Arap hat sanatı"},{en:"Hookah",tr:"Nargile"},
        {en:"Mint tea",tr:"Nane çayı"},{en:"Couscous",tr:"Kuskus"},{en:"Tagine",tr:"Tağin güveci"},
        {en:"Henna",tr:"Kına"},{en:"Arabesque",tr:"Arabesk süsleme"},{en:"Souk",tr:"Arap çarşısı"},
        {en:"Camel",tr:"Deve"},{en:"Pyramid",tr:"Piramit"},{en:"Hajj",tr:"Hac"},
        {en:"Falconry",tr:"Doğancılık"},{en:"Keffiyeh",tr:"Arap başlığı"},
        {en:"Belly dance",tr:"Oryantal dans"},{en:"Arabian Nights",tr:"Binbir Gece Masalları"},
        {en:"Date palm",tr:"Hurma ağacı"},{en:"Dagger",tr:"Hançer"},
        {en:"Mosque dome",tr:"Cami kubbesi"},{en:"Coffee ceremony",tr:"Kahve töreni"},
        {en:"Incense",tr:"Tütsü"},{en:"Dhow boat",tr:"Geleneksel Arap teknesi"},
        {en:"Shawarma",tr:"Döner"},{en:"Meze",tr:"Meze"},{en:"Desert",tr:"Çöl"}
    ]},
    ko: { id: 'culture_ko', title: 'Korean Culture & Life', icon: 'fa-record-vinyl', words: [
        {en:"K-pop",tr:"Kore pop müziği"},{en:"K-drama",tr:"Kore dizisi"},{en:"Kimchi",tr:"Kimchi turşusu"},
        {en:"Bibimbap",tr:"Bibimbap yemeği"},{en:"Bulgogi",tr:"Izgara et"},{en:"Hanbok",tr:"Kore geleneksel kıyafeti"},
        {en:"Taekwondo",tr:"Tekvando"},{en:"Soju",tr:"Kore içkisi"},{en:"Noraebang",tr:"Karaoke odası"},
        {en:"Hallyu",tr:"Kore dalgası"},{en:"Tteokbokki",tr:"Baharatlı pirinç pastası"},
        {en:"Samgyeopsal",tr:"Domuz eti ızgara"},{en:"Hanok",tr:"Geleneksel Kore evi"},
        {en:"Chuseok",tr:"Kore hasat bayramı"},{en:"Seollal",tr:"Kore yeni yılı"},
        {en:"Makgeolli",tr:"Pirinç şarabı"},{en:"Aegyo",tr:"Sevimli davranış"},
        {en:"Ondol",tr:"Kore zemin ısıtma"},{en:"Gochujang",tr:"Acı biber sosu"},
        {en:"Temple stay",tr:"Tapınak konaklama"},{en:"Haenyeo",tr:"Deniz kadını dalgıçlar"},
        {en:"Hangeul",tr:"Kore alfabesi"},{en:"Jjigae",tr:"Kore güveci"},
        {en:"PC cafe",tr:"İnternet kafe"},{en:"Doenjang",tr:"Fermente soya fasulyesi"}
    ]},
    hi: { id: 'culture_hi', title: 'Indian Culture & Life', icon: 'fa-om', words: [
        {en:"Yoga",tr:"Yoga"},{en:"Curry",tr:"Köri yemeği"},{en:"Tandoor",tr:"Tandır fırını"},
        {en:"Chai",tr:"Baharatlı çay"},{en:"Bollywood",tr:"Hint film endüstrisi"},{en:"Sari",tr:"Hint kıyafeti"},
        {en:"Diwali",tr:"Işık festivali"},{en:"Holi",tr:"Renk festivali"},{en:"Taj Mahal",tr:"Tac Mahal"},
        {en:"Cricket",tr:"Kriket"},{en:"Rangoli",tr:"Renkli desen sanatı"},{en:"Namaste",tr:"Saygı selamı"},
        {en:"Gandhi",tr:"Gandhi"},{en:"Ayurveda",tr:"Geleneksel tıp"},{en:"Spice market",tr:"Baharat çarşısı"},
        {en:"Rickshaw",tr:"Riksa"},{en:"Elephant",tr:"Fil"},{en:"Peacock",tr:"Tavus kuşu"},
        {en:"Vedas",tr:"Kutsal metinler"},{en:"Monsoon",tr:"Muson yağmuru"},
        {en:"Naan bread",tr:"Hint ekmeği"},{en:"Biryani",tr:"Hint pilavı"},
        {en:"Ganges",tr:"Ganj nehri"},{en:"Maharaja",tr:"Hint prensi"},{en:"Mehndi",tr:"Hint kına deseni"}
    ]},
    nl: { id: 'culture_nl', title: 'Dutch Culture & Life', icon: 'fa-wind', words: [
        {en:"Windmill",tr:"Yel değirmeni"},{en:"Tulip",tr:"Lale"},{en:"Bicycle",tr:"Bisiklet"},
        {en:"Gouda cheese",tr:"Gouda peyniri"},{en:"Stroopwafel",tr:"Hollanda gözlemesi"},
        {en:"Clogs",tr:"Ahşap ayakkabı"},{en:"Rembrandt",tr:"Rembrandt"},{en:"Van Gogh",tr:"Van Gogh"},
        {en:"Diamond",tr:"Elmas"},{en:"Delft blue",tr:"Delft çinisi"},{en:"Heineken",tr:"Heineken birası"},
        {en:"Edam cheese",tr:"Edam peyniri"},{en:"Polder",tr:"Denizden kazanılan arazi"},
        {en:"Dyke",tr:"Su bendi"},{en:"Herring",tr:"Ringa balığı"},{en:"Ajax",tr:"Ajax futbol kulübü"},
        {en:"Anne Frank",tr:"Anne Frank"},{en:"Canal",tr:"Kanal"},{en:"Tulip field",tr:"Lale tarlası"},
        {en:"King's Day",tr:"Kral günü"},{en:"Oliebollen",tr:"Hollanda hamur tatlısı"},
        {en:"Sinterklaas",tr:"Hollanda Noel Baba"},{en:"Frikandel",tr:"Hollanda sosisi"},
        {en:"Pea soup",tr:"Bezelye çorbası"},{en:"Dutch courage",tr:"Cesaret"}
    ]},
    sv: { id: 'culture_sv', title: 'Swedish Culture & Life', icon: 'fa-snowflake', words: [
        {en:"Midsummer",tr:"Yaz ortası festivali"},{en:"Fika",tr:"Kahve molası"},
        {en:"Cinnamon roll",tr:"Tarçınlı çörek"},{en:"Smörgåsbord",tr:"İsveç büfesi"},
        {en:"Nobel Prize",tr:"Nobel ödülü"},{en:"Viking",tr:"Viking"},
        {en:"Northern lights",tr:"Kuzey ışıkları"},{en:"Moose",tr:"Geyik"},{en:"Sauna",tr:"Sauna"},
        {en:"IKEA",tr:"IKEA mobilya"},{en:"ABBA",tr:"ABBA müzik grubu"},{en:"Volvo",tr:"Volvo arabası"},
        {en:"Midnight sun",tr:"Gece yarısı güneşi"},{en:"Dalarna horse",tr:"Dala atı"},
        {en:"Lagom",tr:"Tam kararında"},{en:"Pippi Longstocking",tr:"Pippi Uzunçorap"},
        {en:"Astrid Lindgren",tr:"Astrid Lindgren"},{en:"Julbord",tr:"Noel yemeği"},
        {en:"Semla",tr:"İsveç tatlısı"},{en:"Gravlax",tr:"Marine somon"},
        {en:"Surströmming",tr:"Fermente ringa balığı"},{en:"Lucia Day",tr:"Lucia günü"},
        {en:"Walpurgis Night",tr:"Walpurgis gecesi"},{en:"Allsvenskan",tr:"İsveç futbol ligi"},
        {en:"Innebandy",tr:"Salon hokeyi"}
    ]}
};

const UI_LOCALES = {
    tr: {
        welcomeTitle: "Dil Öğrenmenin En Eğlenceli Yolu",
        welcomePara: "1000'den fazla temel kelimeyi oyunlaştırılmış bir yapıyla ezberle.",
        startBtn: "Hadi Başlayalım",
        backBtn: "Geri Dön",
        viewTitleLevels: "Seviye Seçin",
        navLearn: "ÖĞREN",
        navPractice: "PRATİK",
        navLeagues: "LİGLER",
        navSettings: "AYARLAR",
        leagueTitle: "LİG YOLCULUĞU",
        accuracy: "Ortalama Doğruluk",
        totalWork: "Toplam Çalışma",
        strongestLevel: "En Güçlü Seviye",
        highScore: "EN YÜKSEK SKOR",
        completedSessions: "TAMAMLANAN SEANS",
        learningAnalysis: "ÖĞRENME ANALİZİ",
        personalRecords: "KİŞİSEL REKORLARIN",
        accountManagement: "HESAP YÖNETİMİ",
        session: "Oturum",
        logout: "ÇIKIŞ YAP",
        changePass: "ŞİFRE DEĞİŞTİR",
        changePassDesc: "Hesap güvenliğinizi güncelleyin.",
        accountAndData: "HESAP VE VERİ",
        clearProgress: "İlerlemeyi Temizle",
        clearDesc: "Tüm verilerin kalıcı olarak sıfırlanır.",
        resetBtn: "SIFIRLA",
        totalAchievement: "Toplam Başarı",
        progress: "İlerleme",
        courseCustomTitle: "Öğrenme Rotanı Özelleştir",
        courseNativeTitle: "1. Ana Dilini Seç",
        courseTargetTitle: "2. Hedef Dilini Seç",
        progressSavedInfo: "Her dil çifti için ilerlemeniz bağımsız olarak kaydedilir.",
        skipBtn: "PAS GEÇ",
        checkBtn: "KONTROL ET",
        streakLabel: "Günlük Seri",
        totalXpLabel: "Toplam XP",
        learnedLabel: "Öğrenilen",
        wordNotFoundError: "Hata: Bu bölümde kelime bulunamadı!",
        quizStartError: "Quiz başlatılamadı. Lütfen sayfayı yenileyin.",
        resultsError: "Sonuçlar hesaplanırken hata oluştu, ancak ilerlemen kaydedildi.",
        initError: "Uygulama başlatılamadı:",
        passMismatch: "Şifreler eşleşmiyor!",
        passUpdateSuccess: "Şifreniz başarıyla güncellendi!",
        wordDataError: "Kelime verileri bulunamadı, test başlatılamıyor.",
        preparingLangsError: "Diller hazırlanamadı, lütfen internetinizi kontrol edin.",
        testCompleted: "Test Tamamlandı! Seviyeniz:",
        minAbbr: "dk",
        promoteDesc: "Lig atlamak için daha fazla XP kazanmalısın.",
        noRecordsMsg: "Henüz rekorun yok. Bir ünite tamamla!",
        accuracySmall: "Başarı",
        newPassPrompt: "Yeni şifrenizi girin:",
        confirmPassPrompt: "Yeni şifreyi onaylayın:",
        leagueInPrefix: "ŞU AN",
        leagueInSuffix: "LİGİNDESİN",
        leagueLegendaryTop: "EFSANEVİ LİG'İN ZİRVESİNDESİN!",
        leagueNextReqPrefix: "",
        leagueNextReqSuffix: "Terfi Sınavı'na hak kazanmak için",
        leagueNextReqMid: "XP daha gerekiyor.",
        mapPreparing: "Harita Hazırlanıyor...",
        mapAdapting: "Global Dil Motoru içeriği uyarlıyor...",
        levelNotReady: "Bu Seviye Henüz Hazır Değil",
        levelNoContent: "seviyesi için içerik bulunamadı.",
        unitLevelPrefix: "Ünite",
        unitLevelBasics: "Seviyesi Temelleri",
        newPassPlaceholder: "Yeni şifrenizi girin",
        confirmPassPlaceholder: "Şifrenizi onaylayın",
        settingsTitle: "UYGULAMA AYARLARI",
        autoPlay: "Otomatik Sesletim",
        autoPlayDesc: "Her soruda telaffuzu otomatik çal.",
        language: "Dil Tercihleri",
        sourceLangLabel: "Kendi Dilin",
        targetLangLabel: "Öğrenmek İstediğin Dil",
        footerText: "Dil öğrenmenin sınırlarını LinguDeep ile aş.",
        setupTitle: "Dil Motoru Kurulumu",
        setupDesc: "Evrensel öğrenme motoru için dillerini seç.",
        setupBtn: "YOLCULUĞA BAŞLA",
        placementTitle: "Seviye Belirleme Testi",
        placementDesc: "Sana en uygun öğrenme yolunu hazırlıyoruz...",
        authTag: "Güvenli Bağlantı",
        authTitle: "LinguDeep",
        authDesc: "Dil öğrenmenin geleceği",
        loginBtn: "GİRİŞ YAP",
        registerBtn: "KAYIT OL",
        newAccount: "Yeni Hesap Oluştur",
        alreadyAccount: "Zaten Hesabım Var",
        usernamePlc: "Kullanıcı Adı",
        passwordPlc: "Şifre",
        passConfirmPlc: "Şifreyi Onayla",
        qEnToSource: "Cümledeki vurgulu kelimenin karşılığını bulun:",
        qSourceToTarget: "Anlamına gelen kelimeyi bulun:",
        qAudio: "Dinle ve Kelimeyi Yakala",
        qScramble: "Bu cümleyi çevirin:",
        resTitleSuccess: "🎉 BÖLÜM TAMAMLANDI!",
        resTitleFail: "💪 BİRAZ DAHA GAYRET!",
        resAccuracy: "Başarı",
        resXp: "Kazanılan XP",
        resDuration: "Süre",
        resSummaryCount: "kelimeyi doğru bildin.",
        resBtn: "Ana Sayfaya Dön",
        errWrong: "Yanlış! Doğrusu:",
        feedbackList: ["Mükemmel!", "Harika!", "Böyle Devam!", "Süpersin!", "Zirveye!", "Alev Aldın!"],
        guideTipsTitle: "Günün Öğrenme Tavsiyeleri",
        guideWordsTitle: "Bölüm Kelimeleri",
        guideCloseBtn: "ANLADIM, BAŞLAYALIM",
        unitLabel: "Ünite",
        startTooltip: "BAŞLA",
        questTitle: "Günlük Hedefler",
        questDesc: "Tamamlayarak ekstra XP ve ödüller kazan.",
        questXpTitle: "XP Avcısı",
        questWordTitle: "Kelime Ustası",
        questClaimBtn: "ÖDÜLLERİ TOPLA",
        questReward: "GÜNLÜK ROZET KAZANILDI!",
        questIncomplete: "Hedefleri tamamla, rozeti ve ödülü kap!",
        heartsOutTitle: "Canın Bitti!",
        heartsOutDesc: "Pratik yaparak veya bekleyerek can kazanabilirsin.",
        earnHeartsBtn: "CAN KAZAN (PRATİK TEST)",
        laterBtn: "DAHA SONRA",
        weekDays: ['PAZ', 'PZT', 'SAL', 'ÇAR', 'PER', 'CUM', 'CTS'],
        promotionReady: "TERFİYE HAZIRSIN!",
        promotionDesc: "Ligine geçmek için final sınavını kazanmalısın.",
        startExam: "SINAVA BAŞLA",
        weakPointsTitle: "Özel Antrenman",
        weakPointsDesc: "Hata Yaptığın Kelimeler",
        weakPointsEmptyTitle: "Harika İş!",
        weakPointsEmptyDesc: "Şu an zayıf yönün bulunmuyor. Tüm kelimeleri başarıyla öğrendin!",
        weakPointsEmptyBtn: "DİĞER SEVİYELERE GÖZ AT",
        optionPrefix: "Seçenek",
        setupWelcome: "Hoş Geldiniz!",
        setupWelcomeDesc: "Öğrenme yolunuzu özelleştirelim",
        setupYourLang: "KENDİ DİLİNZ",
        setupTargetLang: "ÖĞRENMEK İSTEDİĞİNİZ DİL",
        setupSaved: "Kurulum tamamlandı!",
        setupSameLanguage: "Diller aynı olamaz!",
        setupSecurityTag: "Küresel Dil Motoru",
        loginLoading: "GİRİŞ YAPILIYOR...",
        loginError: "Hatalı kullanıcı adı veya şifre!",
        loginSuccess: "Güvenli giriş yapıldı!",
        loginFillAll: "Lütfen tüm alanları doldurun!",
        registerLoading: "HESAP OLUŞTURULUYOR...",
        registerSuccess: "Hesap oluşturuldu!",
        registerFillAll: "Lütfen tüm alanları doldurun!",
        registerPasswordMismatch: "Şifreler eşleşmiyor!",
        registerUsernameTaken: "Bu kullanıcı adı zaten alınmış!",
        registerUsernameShort: "Kullanıcı adı en az 3 karakter olmalı!",
        resSummaryPrefix: "",
        resSummarySuffix: "kelimeden",
        resSummaryMid: "tanesini doğru bildin.",
        settingsThemeDark: "Gece Modu",
        settingsThemeLight: "Gündüz Modu",
        settingsThemeDesc: "Premium karanlık tema görünümü.",
        settingsThemeLightDesc: "Modern açık tema görünümü.",
        learningStatus: "ÖĞRENİLİYOR",
        preparingLangs: "Diller Hazırlanıyor...",
        resetConfirm: "İlerlemeyi sıfırlamak istediğine emin misin?",
        passChanged: "Şifre başarıyla değiştirildi!",
        passShort: "Şifre en az 3 karakter olmalı!",
        passChangeError: "Eski şifre yanlış!",
        logoutConfirm: "Çıkış yapmak istiyor musunuz?",
        genericError: "Bir hata oluştu!",
        xpSummary: "XP Kazan",
        wordSummary: "Kelime Tamamla",
        allBtn: "TÜMÜ",
        guestName: "Misafir",
        leaguesTitleView: "Ligler ve Başarılar",
        settingsTitleView: "Uygulama Ayarları",
        errorMapLoad: "Hata: Harita yüklenemedi.",
        errorWordLoad: "Hata: Kelime verileri yüklenemedi. Lütfen sayfayı yenileyin.",
        guidebookBtn: "REHBER",
        preparingMap: "Harita Hazırlanıyor...",
        closeBtn: "KAPAT",
        rewardClaimed: "Ödül Alındı! +1 Can",
        authDivider: "veya",
        comboLabel: "KOMBO",
        setupLanguage: "DİL",
        viewAll: "TÜMÜ",
        locale: "tr-TR",
        levels: {
            "Başlangıç": "Başlangıç",
            "Orta": "Orta",
            "İleri": "İleri",
            "Zayıf Yönler": "Zayıf Yönler"
        },
        levelDescs: {
            "Başlangıç": "A1-A2 Temel Kelimeler",
            "Orta": "B1-B2 Orta Seviye",
            "İleri": "C1+ Uzman Kelimeler"
        },
        leagues: ["BRONZ", "GÜMÜŞ", "ALTIN", "PLATİN", "EFSANEVİ"],
        promotionCongrats: "TEBRİKLER!",
        promotionSub: "%s Ligine Terfi Ettin!",
        promotionBonus: "+500 BONUS XP KAZANDIN!",
        promotionBtn: "DEVAM ET",
        promotionTestTitle: "%s LİGİ TERFİ SINAVI",
        heartPracticeTitle: "Can Kazanma Testi",
        langSettingsUpdate: "Dil ayarları güncelleniyor...",
        xpPopup: "+ %s XP",
        setupUILangLabel: "ARAYÜZ DİLİ",
        setupSourceLangLabel: "BİLDİĞİNİZ DİL",
        setupTargetLangLabel: "ÖĞRENECEĞİNİZ DİL",
        qTargetToSource: "Bu kelimenin anlamı nedir?",
        currentPassPrompt: "Mevcut şifrenizi girin:",
        ttsUnavailable: "🔇 Ses sentezi bu cihazda desteklenmiyor. Sesli sorular devre dışı.",
        emailPlc: "E-posta",
        displayNamePlc: "Görünen Ad (İsteğe Bağlı)",
        createPassPlc: "Şifre Oluştur (min. 6 karakter)",
        googleLoginBtn: "Google ile Devam Et",
        emailNotVerified: "E-posta adresin doğrulanmamış. Lütfen e-posta kutunu kontrol et.",
        emailVerificationSent: "Doğrulama maili gönderildi! Doğruladıktan sonra giriş yap.",
        googlePopupClosed: "Google girişi iptal edildi.",
        googleAccountConflict: "Bu e-posta farklı bir giriş yöntemiyle kayıtlı."
    },
    en: {
        welcomeTitle: "The Most Fun Way to Learn Languages",
        welcomePara: "Memorize over 1000 essential words with a gamified experience.",
        startBtn: "Let's Get Started",
        backBtn: "Back",
        viewTitleLevels: "Select Level",
        navLearn: "LEARN",
        navPractice: "PRACTICE",
        navLeagues: "LEAGUES",
        navSettings: "SETTINGS",
        leagueTitle: "LEAGUE JOURNEY",
        accuracy: "Average Accuracy",
        totalWork: "Total Study Time",
        strongestLevel: "Strongest Level",
        highScore: "HIGH SCORE",
        completedSessions: "COMPLETED SESSIONS",
        learningAnalysis: "LEARNING ANALYSIS",
        personalRecords: "PERSONAL RECORDS",
        accountManagement: "ACCOUNT MANAGEMENT",
        session: "Session",
        logout: "LOGOUT",
        changePass: "CHANGE PASSWORD",
        changePassDesc: "Update your account security.",
        accountAndData: "ACCOUNT & DATA",
        clearProgress: "Clear Progress",
        clearDesc: "All your data will be permanently reset.",
        resetBtn: "RESET",
        totalAchievement: "Total Progress",
        progress: "Progress",
        courseCustomTitle: "Customize Learning Path",
        courseNativeTitle: "1. Select Native Language",
        courseTargetTitle: "2. Select Target Language",
        progressSavedInfo: "Your progress is saved independently for each language pair.",
        skipBtn: "SKIP",
        checkBtn: "CHECK",
        streakLabel: "Daily Streak",
        totalXpLabel: "Total XP",
        learnedLabel: "Learned Words",
        wordNotFoundError: "Error: No words found in this section!",
        quizStartError: "Quiz could not be started. Please refresh the page.",
        resultsError: "Error calculating results, but your progress was saved.",
        initError: "App failed to start:",
        passMismatch: "Passwords do not match!",
        passUpdateSuccess: "Your password has been updated successfully!",
        wordDataError: "Word data not found, cannot start test.",
        preparingLangsError: "Could not prepare languages, please check your connection.",
        testCompleted: "Test Completed! Your Level:",
        minAbbr: "min",
        promoteDesc: "Earn more XP to be promoted to the next league.",
        noRecordsMsg: "No records yet. Complete a chapter!",
        accuracySmall: "Accuracy",
        newPassPrompt: "Enter your new password:",
        confirmPassPrompt: "Confirm your new password:",
        leagueInPrefix: "YOU ARE IN",
        leagueInSuffix: "LEAGUE",
        leagueLegendaryTop: "YOU ARE AT THE TOP OF THE LEGENDARY LEAGUE!",
        leagueNextReqPrefix: "You need",
        leagueNextReqSuffix: "more XP to qualify for the",
        leagueNextReqMid: "Promotion Exam.",
        mapPreparing: "Preparing Map...",
        mapAdapting: "Global Language Engine is adapting content...",
        levelNotReady: "Level Not Ready Yet",
        levelNoContent: "no content found for level.",
        unitLevelPrefix: "Unit",
        unitLevelBasics: "Level Basics",
        newPassPlaceholder: "Enter new password",
        confirmPassPlaceholder: "Confirm your password",
        settingsTitle: "APP SETTINGS",
        autoPlay: "Auto-Play Audio",
        autoPlayDesc: "Play pronunciation automatically for each question.",
        language: "Language Preferences",
        sourceLangLabel: "Your Native Language",
        targetLangLabel: "Language to Learn",
        footerText: "Push language learning boundaries with LinguDeep.",
        setupTitle: "Language Engine Setup",
        setupDesc: "Choose your languages for the universal learning engine.",
        setupBtn: "START THE JOURNEY",
        placementTitle: "Placement Test",
        placementDesc: "We're preparing the best learning path for you...",
        authTag: "Secure Connection",
        authTitle: "LinguDeep",
        authDesc: "The future of language learning",
        loginBtn: "LOGIN",
        registerBtn: "REGISTER",
        newAccount: "Create New Account",
        alreadyAccount: "Already Have An Account",
        usernamePlc: "Username",
        passwordPlc: "Password",
        passConfirmPlc: "Confirm Password",
        qEnToSource: "Find the meaning of the highlighted word:",
        qSourceToTarget: "Find the word that means:",
        qAudio: "Listen and catch the word",
        qScramble: "Translate this sentence:",
        resTitleSuccess: "🎉 CHAPTER COMPLETED!",
        resTitleFail: "💪 KEEP PUSHING!",
        resAccuracy: "Accuracy",
        resXp: "XP Earned",
        resDuration: "Duration",
        resSummaryPrefix: "You got",
        resSummarySuffix: "out of",
        resSummaryMid: "words correct.",
        resBtn: "Back to Home",
        errWrong: "Wrong! Correct is:",
        feedbackList: ["Excellent!", "Great!", "Keep it up!", "Superb!", "To the top!", "You're on fire!"],
        guideTipsTitle: "Today's Learning Tips",
        guideWordsTitle: "Section Words",
        guideCloseBtn: "GOT IT, LET'S START",
        unitLabel: "Unit",
        startTooltip: "START",
        questTitle: "Daily Goals",
        questDesc: "Complete quests to earn extra XP and rewards.",
        questXpTitle: "XP Hunter",
        questWordTitle: "Word Master",
        questClaimBtn: "CLAIM REWARDS",
        questReward: "DAILY BADGE EARNED!",
        questIncomplete: "Complete goals to get your badge and reward!",
        heartsOutTitle: "Out of Hearts!",
        heartsOutDesc: "You can earn hearts by practicing or waiting.",
        earnHeartsBtn: "EARN HEARTS (PRACTICE TEST)",
        laterBtn: "LATER",
        weekDays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        promotionReady: "READY FOR PROMOTION!",
        promotionDesc: "Win the final exam to advance to the next league.",
        startExam: "START EXAM",
        weakPointsTitle: "Special Training",
        weakPointsDesc: "Words You Mistook",
        weakPointsEmptyTitle: "Great Job!",
        weakPointsEmptyDesc: "You currently have no weak points. You've learned all words successfully!",
        weakPointsEmptyBtn: "BROWSE OTHER LEVELS",
        optionPrefix: "Option",
        setupWelcome: "Welcome!",
        setupWelcomeDesc: "Let's customize your learning path",
        setupYourLang: "YOUR LANGUAGE",
        setupTargetLang: "TARGET LANGUAGE",
        setupSaved: "Settings saved!",
        setupSameLanguage: "Languages cannot be the same!",
        setupSecurityTag: "Global Language Engine",
        loginLoading: "LOGGING IN...",
        loginError: "Invalid username or password!",
        loginSuccess: "Login successful!",
        loginFillAll: "Please fill all fields!",
        registerLoading: "CREATING ACCOUNT...",
        registerSuccess: "Account created!",
        registerFillAll: "Please fill all fields!",
        registerPasswordMismatch: "Passwords do not match!",
        registerUsernameTaken: "This username is already taken!",
        registerUsernameShort: "Username must be at least 3 characters!",
        learningStatus: "LEARNING",
        preparingLangs: "Preparing Languages...",
        setupSaved: "Setup completed!",
        resetConfirm: "Are you sure you want to reset all progress?",
        passChanged: "Password changed successfully!",
        passShort: "Password must be at least 3 characters!",
        passChangeError: "Old password incorrect!",
        logoutConfirm: "Are you sure you want to logout?",
        genericError: "An error occurred!",
        xpSummary: "Earn XP",
        wordSummary: "Complete Words",
        allBtn: "ALL",
        guestName: "Guest",
        leaguesTitleView: "Leagues & Achievements",
        settingsTitleView: "App Settings",
        errorMapLoad: "Error: Could not load map.",
        errorWordLoad: "Error: Could not load word data. Please refresh.",
        guidebookBtn: "GUIDEBOOK",
        preparingMap: "Preparing Map...",
        closeBtn: "CLOSE",
        rewardClaimed: "Reward Claimed! +1 Heart",
        authDivider: "or",
        comboLabel: "COMBO",
        setupLanguage: "LANGUAGE",
        viewAll: "ALL",
        locale: "en-US",
        levels: {
            "Başlangıç": "Beginner",
            "Orta": "Intermediate",
            "İleri": "Advanced",
            "Zayıf Yönler": "Weak Points"
        },
        levelDescs: {
            "Başlangıç": "A1-A2 Basic Vocabulary",
            "Orta": "B1-B2 Intermediate Words",
            "İleri": "C1+ Advanced Mastery"
        },
        leagues: ["BRONZE", "SILVER", "GOLD", "PLATINUM", "LEGENDARY"],
        promotionCongrats: "CONGRATULATIONS!",
        promotionSub: "You've been promoted to %s League!",
        promotionBonus: "+500 BONUS XP EARNED!",
        promotionBtn: "CONTINUE",
        promotionTestTitle: "%s LEAGUE PROMOTION EXAM",
        heartPracticeTitle: "Heart Recovery Test",
        langSettingsUpdate: "Updating language settings...",
        xpPopup: "+ %s XP",
        setupUILangLabel: "INTERFACE LANGUAGE",
        setupSourceLangLabel: "NATIVE LANGUAGE",
        setupTargetLangLabel: "LEARNING TARGET",
        qTargetToSource: "What does this word mean?",
        currentPassPrompt: "Enter current password:",
        ttsUnavailable: "🔇 Audio synthesis not supported on this device. Audio questions disabled.",
        emailPlc: "Email",
        displayNamePlc: "Display Name (Optional)",
        createPassPlc: "Create Password (min. 6 chars)",
        googleLoginBtn: "Continue with Google",
        emailNotVerified: "Your email is not verified. Please check your inbox.",
        emailVerificationSent: "Verification email sent! Verify your email then sign in.",
        googlePopupClosed: "Google sign-in was cancelled.",
        googleAccountConflict: "This email is registered with a different sign-in method."
    },
    fr: {
        welcomeTitle: "La façon la plus amusante d'apprendre les langues",
        welcomePara: "Mémorisez plus de 1000 mots essentiels avec une expérience gamifiée.",
        startBtn: "Commençons", backBtn: "Retour", viewTitleLevels: "Choisir le niveau",
        navLearn: "APPRENDRE", navPractice: "PRATIQUE", navLeagues: "LIGUES", navSettings: "PARAMÈTRES",
        leagueTitle: "PARCOURS DE LIGUE", accuracy: "Précision Moyenne", totalWork: "Temps d'Étude Total",
        strongestLevel: "Niveau le Plus Fort", highScore: "MEILLEUR SCORE", completedSessions: "SESSIONS COMPLÉTÉES",
        learningAnalysis: "ANALYSE D'APPRENTISSAGE", personalRecords: "RECORDS PERSONNELS",
        accountManagement: "GESTION DU COMPTE", session: "Session", logout: "DÉCONNEXION",
        changePass: "CHANGER LE MOT DE PASSE", changePassDesc: "Mettez à jour la sécurité de votre compte.",
        accountAndData: "COMPTE ET DONNÉES", clearProgress: "Effacer la Progression",
        clearDesc: "Toutes vos données seront réinitialisées définitivement.", resetBtn: "RÉINITIALISER",
        totalAchievement: "Progression Totale", progress: "Progression",
        courseCustomTitle: "Personnaliser le Parcours", courseNativeTitle: "1. Langue Maternelle",
        courseTargetTitle: "2. Langue Cible",
        progressSavedInfo: "Votre progression est sauvegardée indépendamment pour chaque paire de langues.",
        skipBtn: "PASSER", checkBtn: "VÉRIFIER", streakLabel: "Série Quotidienne",
        totalXpLabel: "XP Total", learnedLabel: "Mots Appris",
        wordNotFoundError: "Erreur: Aucun mot trouvé!", quizStartError: "Impossible de démarrer. Actualisez.",
        resultsError: "Erreur de calcul, mais progression sauvegardée.", initError: "L'application n'a pas démarré:",
        passMismatch: "Les mots de passe ne correspondent pas!", passUpdateSuccess: "Mot de passe mis à jour!",
        wordDataError: "Données introuvables.", preparingLangsError: "Vérifiez votre connexion.",
        testCompleted: "Test Terminé! Votre Niveau:", minAbbr: "min",
        promoteDesc: "Gagnez plus de XP pour être promu.", noRecordsMsg: "Pas encore de records.",
        accuracySmall: "Précision", newPassPrompt: "Nouveau mot de passe:", confirmPassPrompt: "Confirmez:",
        leagueInPrefix: "VOUS ÊTES EN", leagueInSuffix: "LIGUE",
        leagueLegendaryTop: "VOUS ÊTES AU SOMMET DE LA LIGUE LÉGENDAIRE!",
        leagueNextReqPrefix: "Il vous faut", leagueNextReqSuffix: "XP de plus pour la Ligue", leagueNextReqMid: ".",
        mapPreparing: "Préparation de la Carte...", mapAdapting: "Moteur Global adapte le contenu...",
        levelNotReady: "Niveau Pas Encore Prêt", levelNoContent: "aucun contenu pour ce niveau.",
        unitLevelPrefix: "Unité", unitLevelBasics: "Bases du Niveau",
        newPassPlaceholder: "Nouveau mot de passe", confirmPassPlaceholder: "Confirmez",
        settingsTitle: "PARAMÈTRES", autoPlay: "Lecture Audio Auto",
        autoPlayDesc: "Lire la prononciation automatiquement.", language: "Préférences de Langue",
        sourceLangLabel: "Votre Langue Maternelle", targetLangLabel: "Langue à Apprendre",
        footerText: "Repoussez les limites avec LinguDeep.",
        setupTitle: "Configuration du Moteur", setupDesc: "Choisissez vos langues.", setupBtn: "COMMENCER",
        placementTitle: "Test de Placement", placementDesc: "Préparation du meilleur parcours...",
        authTag: "Connexion Sécurisée", authTitle: "LinguDeep", authDesc: "L'avenir de l'apprentissage",
        loginBtn: "CONNEXION", registerBtn: "S'INSCRIRE", newAccount: "Créer un Nouveau Compte",
        alreadyAccount: "J'ai Déjà un Compte", usernamePlc: "Nom d'utilisateur",
        passwordPlc: "Mot de passe", passConfirmPlc: "Confirmer",
        qEnToSource: "Trouvez la signification du mot en surbrillance:",
        qSourceToTarget: "Trouvez le mot qui signifie:", qAudio: "Écoutez et trouvez le mot",
        qScramble: "Traduisez cette phrase:", resTitleSuccess: "🎉 CHAPITRE TERMINÉ!",
        resTitleFail: "💪 CONTINUEZ!", resAccuracy: "Précision", resXp: "XP Gagnés",
        resDuration: "Durée", resSummaryPrefix: "Vous avez eu", resSummarySuffix: "sur", resSummaryMid: "mots corrects.",
        resBtn: "Retour à l'Accueil", errWrong: "Faux! La bonne réponse est:",
        feedbackList: ["Excellent!", "Super!", "Continuez!", "Superbe!", "Au sommet!", "Vous êtes en feu!"],
        guideTipsTitle: "Conseils du Jour", guideWordsTitle: "Mots de la Section",
        guideCloseBtn: "COMPRIS, COMMENÇONS", unitLabel: "Unité", startTooltip: "COMMENCER",
        questTitle: "Objectifs Quotidiens", questDesc: "Complétez des quêtes pour gagner XP.",
        questXpTitle: "Chasseur de XP", questWordTitle: "Maître des Mots",
        questClaimBtn: "RÉCLAMER", questReward: "BADGE QUOTIDIEN GAGNÉ!",
        questIncomplete: "Complétez les objectifs pour votre badge!",
        heartsOutTitle: "Plus de Cœurs!", heartsOutDesc: "Pratiquez ou attendez.",
        earnHeartsBtn: "GAGNER DES CŒURS", laterBtn: "PLUS TARD",
        weekDays: ['DIM','LUN','MAR','MER','JEU','VEN','SAM'],
        promotionReady: "PRÊT POUR LA PROMOTION!", promotionDesc: "Gagnez l'examen final.",
        startExam: "COMMENCER L'EXAMEN", weakPointsTitle: "Entraînement Spécial",
        weakPointsDesc: "Mots que vous avez manqués", weakPointsEmptyTitle: "Excellent travail!",
        weakPointsEmptyDesc: "Pas de points faibles! Vous avez tout appris!", weakPointsEmptyBtn: "AUTRES NIVEAUX",
        optionPrefix: "Option", setupWelcome: "Bienvenue!", setupWelcomeDesc: "Personnalisons votre parcours",
        setupYourLang: "VOTRE LANGUE", setupTargetLang: "LANGUE CIBLE", setupSaved: "Configuration terminée!",
        setupSameLanguage: "Les langues ne peuvent pas être identiques!", setupSecurityTag: "Moteur de Langue Global",
        loginLoading: "CONNEXION...", loginError: "Identifiants invalides!", loginSuccess: "Connexion réussie!",
        loginFillAll: "Remplissez tous les champs!", registerLoading: "CRÉATION DU COMPTE...",
        registerSuccess: "Compte créé!", registerFillAll: "Remplissez tous les champs!",
        registerPasswordMismatch: "Les mots de passe ne correspondent pas!",
        registerUsernameTaken: "Ce nom est déjà pris!", registerUsernameShort: "Min. 3 caractères!",
        learningStatus: "EN APPRENTISSAGE", preparingLangs: "Préparation des Langues...",
        resetConfirm: "Réinitialiser toute la progression?", passChanged: "Mot de passe changé!",
        passShort: "Min. 3 caractères!", passChangeError: "Ancien mot de passe incorrect!",
        logoutConfirm: "Voulez-vous vous déconnecter?", genericError: "Une erreur s'est produite!",
        xpSummary: "Gagner des XP", wordSummary: "Compléter des Mots", allBtn: "TOUT",
        guestName: "Invité", leaguesTitleView: "Ligues et Réalisations", settingsTitleView: "Paramètres",
        errorMapLoad: "Erreur: Carte introuvable.", errorWordLoad: "Erreur: Données introuvables.",
        guidebookBtn: "GUIDE", preparingMap: "Préparation...", closeBtn: "FERMER",
        rewardClaimed: "Récompense! +1 Cœur", authDivider: "ou", comboLabel: "COMBO",
        setupLanguage: "LANGUE", viewAll: "TOUT", locale: "fr-FR",
        levels: { "Başlangıç": "Débutant", "Orta": "Intermédiaire", "İleri": "Avancé", "Zayıf Yönler": "Points Faibles" },
        levelDescs: { "Başlangıç": "A1-A2 Vocabulaire de Base", "Orta": "B1-B2 Intermédiaire", "İleri": "C1+ Avancé" },
        leagues: ["BRONZE","ARGENT","OR","PLATINE","LÉGENDAIRE"],
        promotionCongrats: "FÉLICITATIONS!", promotionSub: "Promu en Ligue %s!", promotionBonus: "+500 BONUS XP!",
        promotionBtn: "CONTINUER", promotionTestTitle: "EXAMEN LIGUE %s", heartPracticeTitle: "Test de Récupération",
        langSettingsUpdate: "Mise à jour...", xpPopup: "+ %s XP", setupUILangLabel: "LANGUE D'INTERFACE",
        setupSourceLangLabel: "LANGUE MATERNELLE", setupTargetLangLabel: "LANGUE CIBLE",
        qTargetToSource: "Que signifie ce mot?",
        currentPassPrompt: "Mot de passe actuel :",
        ttsUnavailable: "🔇 Synthèse vocale non prise en charge. Questions audio désactivées.",
        emailPlc: "E-mail",
        displayNamePlc: "Nom d'affichage (Optionnel)",
        createPassPlc: "Créer un mot de passe (min. 6 car.)",
        googleLoginBtn: "Continuer avec Google",
        emailNotVerified: "Votre e-mail n'est pas vérifié. Vérifiez votre boîte de réception.",
        emailVerificationSent: "E-mail de vérification envoyé! Vérifiez puis connectez-vous.",
        googlePopupClosed: "Connexion Google annulée.",
        googleAccountConflict: "Cet e-mail est associé à une autre méthode de connexion."
    },
    de: {
        welcomeTitle: "Der spaßigste Weg, Sprachen zu lernen",
        welcomePara: "Merke dir über 1000 Wörter mit einer spielerischen Erfahrung.",
        startBtn: "Los geht's", backBtn: "Zurück", viewTitleLevels: "Stufe auswählen",
        navLearn: "LERNEN", navPractice: "ÜBUNG", navLeagues: "LIGEN", navSettings: "EINSTELLUNGEN",
        leagueTitle: "LIGA-REISE", accuracy: "Durchschnittliche Genauigkeit", totalWork: "Gesamte Lernzeit",
        strongestLevel: "Stärkste Stufe", highScore: "HÖCHSTPUNKTZAHL", completedSessions: "ABGESCHLOSSENE SITZUNGEN",
        learningAnalysis: "LERNANALYSE", personalRecords: "PERSÖNLICHE REKORDE",
        accountManagement: "KONTOVERWALTUNG", session: "Sitzung", logout: "ABMELDEN",
        changePass: "PASSWORT ÄNDERN", changePassDesc: "Aktualisieren Sie Ihre Kontosicherheit.",
        accountAndData: "KONTO & DATEN", clearProgress: "Fortschritt Löschen",
        clearDesc: "Alle Daten werden dauerhaft zurückgesetzt.", resetBtn: "ZURÜCKSETZEN",
        totalAchievement: "Gesamtfortschritt", progress: "Fortschritt",
        courseCustomTitle: "Lernpfad Anpassen", courseNativeTitle: "1. Muttersprache",
        courseTargetTitle: "2. Zielsprache",
        progressSavedInfo: "Fortschritt wird für jedes Sprachpaar unabhängig gespeichert.",
        skipBtn: "ÜBERSPRINGEN", checkBtn: "PRÜFEN", streakLabel: "Tägliche Serie",
        totalXpLabel: "Gesamt-XP", learnedLabel: "Gelernte Wörter",
        wordNotFoundError: "Fehler: Keine Wörter gefunden!", quizStartError: "Quiz konnte nicht starten.",
        resultsError: "Fehler, aber Fortschritt gespeichert.", initError: "App konnte nicht starten:",
        passMismatch: "Passwörter stimmen nicht überein!", passUpdateSuccess: "Passwort aktualisiert!",
        wordDataError: "Wortdaten nicht gefunden.", preparingLangsError: "Verbindung prüfen.",
        testCompleted: "Test Abgeschlossen! Ihr Niveau:", minAbbr: "min",
        promoteDesc: "Mehr XP für Aufstieg verdienen.", noRecordsMsg: "Noch keine Rekorde.",
        accuracySmall: "Genauigkeit", newPassPrompt: "Neues Passwort:", confirmPassPrompt: "Bestätigen:",
        leagueInPrefix: "SIE SIND IN DER", leagueInSuffix: "LIGA",
        leagueLegendaryTop: "SIE SIND AN DER SPITZE DER LEGENDÄREN LIGA!",
        leagueNextReqPrefix: "Sie benötigen", leagueNextReqSuffix: "weitere XP für Liga", leagueNextReqMid: ".",
        mapPreparing: "Karte wird vorbereitet...", mapAdapting: "Sprachmaschine passt an...",
        levelNotReady: "Stufe Noch Nicht Bereit", levelNoContent: "kein Inhalt gefunden.",
        unitLevelPrefix: "Einheit", unitLevelBasics: "Grundlagen",
        newPassPlaceholder: "Neues Passwort", confirmPassPlaceholder: "Bestätigen",
        settingsTitle: "EINSTELLUNGEN", autoPlay: "Audio Auto-Abspielen",
        autoPlayDesc: "Aussprache automatisch abspielen.", language: "Spracheinstellungen",
        sourceLangLabel: "Ihre Muttersprache", targetLangLabel: "Zu Lernende Sprache",
        footerText: "Sprachbarrieren mit LinguDeep überwinden.",
        setupTitle: "Sprachmaschine Einrichten", setupDesc: "Sprachen auswählen.", setupBtn: "REISE BEGINNEN",
        placementTitle: "Einstufungstest", placementDesc: "Besten Lernpfad vorbereiten...",
        authTag: "Sichere Verbindung", authTitle: "LinguDeep", authDesc: "Die Zukunft des Sprachenlernens",
        loginBtn: "ANMELDEN", registerBtn: "REGISTRIEREN", newAccount: "Neues Konto Erstellen",
        alreadyAccount: "Ich Habe Bereits ein Konto", usernamePlc: "Benutzername",
        passwordPlc: "Passwort", passConfirmPlc: "Passwort Bestätigen",
        qEnToSource: "Finden Sie die Bedeutung des hervorgehobenen Wortes:",
        qSourceToTarget: "Finden Sie das Wort, das bedeutet:", qAudio: "Hören und Wort finden",
        qScramble: "Übersetzen Sie diesen Satz:", resTitleSuccess: "🎉 KAPITEL ABGESCHLOSSEN!",
        resTitleFail: "💪 WEITER SO!", resAccuracy: "Genauigkeit", resXp: "XP Verdient",
        resDuration: "Dauer", resSummaryPrefix: "Sie haben", resSummarySuffix: "von", resSummaryMid: "Wörtern richtig.",
        resBtn: "Zurück zur Startseite", errWrong: "Falsch! Richtig ist:",
        feedbackList: ["Ausgezeichnet!","Super!","Weiter so!","Hervorragend!","Zum Gipfel!","Sie brennen!"],
        guideTipsTitle: "Heutige Lerntipps", guideWordsTitle: "Abschnittswörter",
        guideCloseBtn: "VERSTANDEN, LOS", unitLabel: "Einheit", startTooltip: "STARTEN",
        questTitle: "Tägliche Ziele", questDesc: "Quests abschließen für XP.",
        questXpTitle: "XP-Jäger", questWordTitle: "Wortmeister",
        questClaimBtn: "BELOHNUNGEN ABHOLEN", questReward: "TÄGLICHES ABZEICHEN!",
        questIncomplete: "Ziele abschließen für Abzeichen!",
        heartsOutTitle: "Keine Herzen!", heartsOutDesc: "Üben oder warten.",
        earnHeartsBtn: "HERZEN VERDIENEN", laterBtn: "SPÄTER",
        weekDays: ['SO','MO','DI','MI','DO','FR','SA'],
        promotionReady: "BEREIT FÜR BEFÖRDERUNG!", promotionDesc: "Abschlussprüfung gewinnen.",
        startExam: "PRÜFUNG STARTEN", weakPointsTitle: "Spezielles Training",
        weakPointsDesc: "Falsch beantworte Wörter", weakPointsEmptyTitle: "Gute Arbeit!",
        weakPointsEmptyDesc: "Keine Schwachstellen! Alle Wörter gelernt!", weakPointsEmptyBtn: "ANDERE STUFEN",
        optionPrefix: "Option", setupWelcome: "Willkommen!", setupWelcomeDesc: "Lernpfad anpassen",
        setupYourLang: "IHRE SPRACHE", setupTargetLang: "ZIELSPRACHE", setupSaved: "Einrichtung abgeschlossen!",
        setupSameLanguage: "Sprachen können nicht gleich sein!", setupSecurityTag: "Globale Sprachmaschine",
        loginLoading: "ANMELDUNG...", loginError: "Ungültiger Benutzername oder Passwort!", loginSuccess: "Angemeldet!",
        loginFillAll: "Alle Felder ausfüllen!", registerLoading: "KONTO ERSTELLEN...",
        registerSuccess: "Konto erstellt!", registerFillAll: "Alle Felder ausfüllen!",
        registerPasswordMismatch: "Passwörter stimmen nicht überein!",
        registerUsernameTaken: "Benutzername bereits vergeben!", registerUsernameShort: "Min. 3 Zeichen!",
        learningStatus: "LERNEND", preparingLangs: "Sprachen Vorbereiten...",
        resetConfirm: "Gesamten Fortschritt zurücksetzen?", passChanged: "Passwort geändert!",
        passShort: "Min. 3 Zeichen!", passChangeError: "Altes Passwort falsch!",
        logoutConfirm: "Abmelden?", genericError: "Ein Fehler ist aufgetreten!",
        xpSummary: "XP verdienen", wordSummary: "Wörter abschließen", allBtn: "ALLE",
        guestName: "Gast", leaguesTitleView: "Ligen & Erfolge", settingsTitleView: "Einstellungen",
        errorMapLoad: "Fehler: Karte nicht geladen.", errorWordLoad: "Fehler: Daten nicht geladen.",
        guidebookBtn: "LEITFADEN", preparingMap: "Vorbereiten...", closeBtn: "SCHLIESSEN",
        rewardClaimed: "Belohnung! +1 Herz", authDivider: "oder", comboLabel: "KOMBO",
        setupLanguage: "SPRACHE", viewAll: "ALLE", locale: "de-DE",
        levels: { "Başlangıç": "Anfänger", "Orta": "Mittelstufe", "İleri": "Fortgeschritten", "Zayıf Yönler": "Schwachstellen" },
        levelDescs: { "Başlangıç": "A1-A2 Grundwortschatz", "Orta": "B1-B2 Mittelstufe", "İleri": "C1+ Fortgeschritten" },
        leagues: ["BRONZE","SILBER","GOLD","PLATIN","LEGENDÄR"],
        promotionCongrats: "GLÜCKWUNSCH!", promotionSub: "In die %s Liga befördert!", promotionBonus: "+500 BONUS-XP!",
        promotionBtn: "WEITER", promotionTestTitle: "%s LIGA PRÜFUNG", heartPracticeTitle: "Herzwiederherstellung",
        langSettingsUpdate: "Aktualisierung...", xpPopup: "+ %s XP", setupUILangLabel: "OBERFLÄCHENSPRACHE",
        setupSourceLangLabel: "MUTTERSPRACHE", setupTargetLangLabel: "LERNZIEL",
        qTargetToSource: "Was bedeutet dieses Wort?",
        currentPassPrompt: "Aktuelles Passwort:",
        ttsUnavailable: "🔇 Sprachsynthese nicht unterstützt. Audiofragen deaktiviert.",
        emailPlc: "E-Mail",
        displayNamePlc: "Anzeigename (Optional)",
        createPassPlc: "Passwort erstellen (min. 6 Zeichen)",
        googleLoginBtn: "Mit Google fortfahren",
        emailNotVerified: "Ihre E-Mail ist nicht verifiziert. Bitte prüfen Sie Ihren Posteingang.",
        emailVerificationSent: "Bestätigungs-E-Mail gesendet! Bestätigen Sie dann anmelden.",
        googlePopupClosed: "Google-Anmeldung abgebrochen.",
        googleAccountConflict: "Diese E-Mail ist mit einer anderen Anmeldemethode verknüpft."
    },
    es: {
        welcomeTitle: "La forma más divertida de aprender idiomas",
        welcomePara: "Memoriza más de 1000 palabras esenciales con una experiencia gamificada.",
        startBtn: "¡Empecemos!", backBtn: "Volver", viewTitleLevels: "Seleccionar Nivel",
        navLearn: "APRENDER", navPractice: "PRÁCTICA", navLeagues: "LIGAS", navSettings: "AJUSTES",
        leagueTitle: "VIAJE DE LIGA", accuracy: "Precisión Media", totalWork: "Tiempo Total de Estudio",
        strongestLevel: "Nivel Más Fuerte", highScore: "PUNTUACIÓN MÁS ALTA", completedSessions: "SESIONES COMPLETADAS",
        learningAnalysis: "ANÁLISIS DE APRENDIZAJE", personalRecords: "RÉCORDS PERSONALES",
        accountManagement: "GESTIÓN DE CUENTA", session: "Sesión", logout: "CERRAR SESIÓN",
        changePass: "CAMBIAR CONTRASEÑA", changePassDesc: "Actualiza la seguridad de tu cuenta.",
        accountAndData: "CUENTA Y DATOS", clearProgress: "Borrar Progreso",
        clearDesc: "Todos tus datos se restablecerán permanentemente.", resetBtn: "RESTABLECER",
        totalAchievement: "Progreso Total", progress: "Progreso",
        courseCustomTitle: "Personalizar Ruta de Aprendizaje", courseNativeTitle: "1. Idioma Nativo",
        courseTargetTitle: "2. Idioma Objetivo",
        progressSavedInfo: "Tu progreso se guarda independientemente para cada par de idiomas.",
        skipBtn: "SALTAR", checkBtn: "COMPROBAR", streakLabel: "Racha Diaria",
        totalXpLabel: "XP Total", learnedLabel: "Palabras Aprendidas",
        wordNotFoundError: "Error: ¡No se encontraron palabras!", quizStartError: "No se pudo iniciar. Actualiza.",
        resultsError: "Error de cálculo, pero progreso guardado.", initError: "La aplicación no pudo iniciar:",
        passMismatch: "¡Las contraseñas no coinciden!", passUpdateSuccess: "¡Contraseña actualizada!",
        wordDataError: "Datos no encontrados.", preparingLangsError: "Verifica tu conexión.",
        testCompleted: "¡Prueba Completada! Tu Nivel:", minAbbr: "min",
        promoteDesc: "Gana más XP para ser promovido.", noRecordsMsg: "Sin récords aún.",
        accuracySmall: "Precisión", newPassPrompt: "Nueva contraseña:", confirmPassPrompt: "Confirma:",
        leagueInPrefix: "ESTÁS EN LA", leagueInSuffix: "LIGA",
        leagueLegendaryTop: "¡ESTÁS EN LA CIMA DE LA LIGA LEGENDARIA!",
        leagueNextReqPrefix: "Necesitas", leagueNextReqSuffix: "XP más para la Liga", leagueNextReqMid: ".",
        mapPreparing: "Preparando Mapa...", mapAdapting: "Motor Global adaptando contenido...",
        levelNotReady: "Nivel Aún No Listo", levelNoContent: "no se encontró contenido.",
        unitLevelPrefix: "Unidad", unitLevelBasics: "Conceptos Básicos",
        newPassPlaceholder: "Nueva contraseña", confirmPassPlaceholder: "Confirma tu contraseña",
        settingsTitle: "AJUSTES", autoPlay: "Reproducción Automática",
        autoPlayDesc: "Reproducir pronunciación automáticamente.", language: "Preferencias de Idioma",
        sourceLangLabel: "Tu Idioma Nativo", targetLangLabel: "Idioma a Aprender",
        footerText: "Supera los límites con LinguDeep.",
        setupTitle: "Configuración del Motor", setupDesc: "Elige tus idiomas.", setupBtn: "COMENZAR",
        placementTitle: "Prueba de Nivel", placementDesc: "Preparando el mejor camino...",
        authTag: "Conexión Segura", authTitle: "LinguDeep", authDesc: "El futuro del aprendizaje",
        loginBtn: "INICIAR SESIÓN", registerBtn: "REGISTRARSE", newAccount: "Crear Nueva Cuenta",
        alreadyAccount: "Ya Tengo Una Cuenta", usernamePlc: "Nombre de usuario",
        passwordPlc: "Contraseña", passConfirmPlc: "Confirmar Contraseña",
        qEnToSource: "Encuentra el significado de la palabra resaltada:",
        qSourceToTarget: "Encuentra la palabra que significa:", qAudio: "Escucha y encuentra la palabra",
        qScramble: "Traduce esta oración:", resTitleSuccess: "🎉 ¡CAPÍTULO COMPLETADO!",
        resTitleFail: "💪 ¡SIGUE ADELANTE!", resAccuracy: "Precisión", resXp: "XP Ganados",
        resDuration: "Duración", resSummaryPrefix: "Tuviste", resSummarySuffix: "de", resSummaryMid: "palabras correctas.",
        resBtn: "Volver al Inicio", errWrong: "¡Incorrecto! La respuesta correcta es:",
        feedbackList: ["¡Excelente!","¡Genial!","¡Sigue así!","¡Soberbio!","¡A la cima!","¡Estás en llamas!"],
        guideTipsTitle: "Consejos de Hoy", guideWordsTitle: "Palabras de la Sección",
        guideCloseBtn: "ENTENDIDO, ¡EMPECEMOS!", unitLabel: "Unidad", startTooltip: "COMENZAR",
        questTitle: "Objetivos Diarios", questDesc: "Completa misiones para ganar XP.",
        questXpTitle: "Cazador de XP", questWordTitle: "Maestro de Palabras",
        questClaimBtn: "RECLAMAR", questReward: "¡INSIGNIA DIARIA GANADA!",
        questIncomplete: "¡Completa los objetivos para tu insignia!",
        heartsOutTitle: "¡Sin Corazones!", heartsOutDesc: "Practica o espera.",
        earnHeartsBtn: "GANAR CORAZONES", laterBtn: "DESPUÉS",
        weekDays: ['DOM','LUN','MAR','MIÉ','JUE','VIE','SÁB'],
        promotionReady: "¡LISTO PARA LA PROMOCIÓN!", promotionDesc: "Gana el examen final.",
        startExam: "COMENZAR EXAMEN", weakPointsTitle: "Entrenamiento Especial",
        weakPointsDesc: "Palabras que Fallaste", weakPointsEmptyTitle: "¡Buen Trabajo!",
        weakPointsEmptyDesc: "¡Sin puntos débiles! ¡Aprendiste todo!", weakPointsEmptyBtn: "OTROS NIVELES",
        optionPrefix: "Opción", setupWelcome: "¡Bienvenido!", setupWelcomeDesc: "Personalicemos tu ruta",
        setupYourLang: "TU IDIOMA", setupTargetLang: "IDIOMA OBJETIVO", setupSaved: "¡Configuración completada!",
        setupSameLanguage: "¡Los idiomas no pueden ser iguales!", setupSecurityTag: "Motor de Idioma Global",
        loginLoading: "INICIANDO SESIÓN...", loginError: "¡Usuario o contraseña inválidos!", loginSuccess: "¡Sesión iniciada!",
        loginFillAll: "¡Completa todos los campos!", registerLoading: "CREANDO CUENTA...",
        registerSuccess: "¡Cuenta creada!", registerFillAll: "¡Completa todos los campos!",
        registerPasswordMismatch: "¡Las contraseñas no coinciden!",
        registerUsernameTaken: "¡Este usuario ya está en uso!", registerUsernameShort: "¡Min. 3 caracteres!",
        learningStatus: "APRENDIENDO", preparingLangs: "Preparando Idiomas...",
        resetConfirm: "¿Restablecer todo el progreso?", passChanged: "¡Contraseña cambiada!",
        passShort: "¡Min. 3 caracteres!", passChangeError: "¡Contraseña antigua incorrecta!",
        logoutConfirm: "¿Cerrar sesión?", genericError: "¡Ocurrió un error!",
        xpSummary: "Ganar XP", wordSummary: "Completar Palabras", allBtn: "TODO",
        guestName: "Invitado", leaguesTitleView: "Ligas y Logros", settingsTitleView: "Ajustes",
        errorMapLoad: "Error: No se cargó el mapa.", errorWordLoad: "Error: No se cargaron datos.",
        guidebookBtn: "GUÍA", preparingMap: "Preparando...", closeBtn: "CERRAR",
        rewardClaimed: "¡Recompensa! +1 Corazón", authDivider: "o", comboLabel: "COMBO",
        setupLanguage: "IDIOMA", viewAll: "TODO", locale: "es-ES",
        levels: { "Başlangıç": "Principiante", "Orta": "Intermedio", "İleri": "Avanzado", "Zayıf Yönler": "Puntos Débiles" },
        levelDescs: { "Başlangıç": "A1-A2 Vocabulario Básico", "Orta": "B1-B2 Intermedio", "İleri": "C1+ Avanzado" },
        leagues: ["BRONCE","PLATA","ORO","PLATINO","LEGENDARIO"],
        promotionCongrats: "¡FELICITACIONES!", promotionSub: "¡Promovido a Liga %s!", promotionBonus: "+500 BONUS XP!",
        promotionBtn: "CONTINUAR", promotionTestTitle: "EXAMEN LIGA %s", heartPracticeTitle: "Test de Recuperación",
        langSettingsUpdate: "Actualizando...", xpPopup: "+ %s XP", setupUILangLabel: "IDIOMA DE INTERFAZ",
        setupSourceLangLabel: "IDIOMA NATIVO", setupTargetLangLabel: "IDIOMA OBJETIVO",
        qTargetToSource: "¿Qué significa esta palabra?",
        currentPassPrompt: "Contraseña actual:",
        ttsUnavailable: "🔇 Síntesis de voz no compatible. Preguntas de audio desactivadas.",
        emailPlc: "Correo electrónico",
        displayNamePlc: "Nombre Visible (Opcional)",
        createPassPlc: "Crear Contraseña (mín. 6 caracteres)",
        googleLoginBtn: "Continuar con Google",
        emailNotVerified: "Tu correo no está verificado. Por favor revisa tu bandeja de entrada.",
        emailVerificationSent: "¡Correo de verificación enviado! Verifica y luego inicia sesión.",
        googlePopupClosed: "Inicio de sesión con Google cancelado.",
        googleAccountConflict: "Este correo está registrado con otro método de inicio de sesión."
    },
    it: {
        welcomeTitle: "Il modo più divertente per imparare le lingue",
        welcomePara: "Memorizza oltre 1000 parole essenziali con un'esperienza gamificata.",
        startBtn: "Iniziamo", backBtn: "Indietro", viewTitleLevels: "Seleziona Livello",
        navLearn: "IMPARA", navPractice: "PRATICA", navLeagues: "LEGHE", navSettings: "IMPOSTAZIONI",
        leagueTitle: "VIAGGIO LEGA", accuracy: "Precisione Media", totalWork: "Tempo Totale di Studio",
        strongestLevel: "Livello Più Forte", highScore: "PUNTEGGIO PIÙ ALTO", completedSessions: "SESSIONI COMPLETATE",
        learningAnalysis: "ANALISI DELL'APPRENDIMENTO", personalRecords: "RECORD PERSONALI",
        accountManagement: "GESTIONE ACCOUNT", session: "Sessione", logout: "ESCI",
        changePass: "CAMBIA PASSWORD", changePassDesc: "Aggiorna la sicurezza del tuo account.",
        accountAndData: "ACCOUNT E DATI", clearProgress: "Cancella Progresso",
        clearDesc: "Tutti i dati verranno ripristinati definitivamente.", resetBtn: "RIPRISTINA",
        totalAchievement: "Progresso Totale", progress: "Progresso",
        courseCustomTitle: "Personalizza Percorso", courseNativeTitle: "1. Lingua Madre",
        courseTargetTitle: "2. Lingua Obiettivo",
        progressSavedInfo: "Il progresso viene salvato indipendentemente per ogni coppia di lingue.",
        skipBtn: "SALTA", checkBtn: "CONTROLLA", streakLabel: "Serie Giornaliera",
        totalXpLabel: "XP Totali", learnedLabel: "Parole Imparate",
        wordNotFoundError: "Errore: Nessuna parola trovata!", quizStartError: "Impossibile avviare. Aggiorna.",
        resultsError: "Errore, ma progresso salvato.", initError: "L'app non ha potuto avviarsi:",
        passMismatch: "Le password non corrispondono!", passUpdateSuccess: "Password aggiornata!",
        wordDataError: "Dati non trovati.", preparingLangsError: "Controlla la connessione.",
        testCompleted: "Test Completato! Il Tuo Livello:", minAbbr: "min",
        promoteDesc: "Guadagna più XP per essere promosso.", noRecordsMsg: "Ancora nessun record.",
        accuracySmall: "Precisione", newPassPrompt: "Nuova password:", confirmPassPrompt: "Conferma:",
        leagueInPrefix: "SEI NELLA", leagueInSuffix: "LEGA",
        leagueLegendaryTop: "SEI IN CIMA ALLA LEGA LEGGENDARIA!",
        leagueNextReqPrefix: "Hai bisogno di", leagueNextReqSuffix: "XP in più per la Lega", leagueNextReqMid: ".",
        mapPreparing: "Preparazione Mappa...", mapAdapting: "Motore Globale adatta contenuto...",
        levelNotReady: "Livello Non Ancora Pronto", levelNoContent: "nessun contenuto trovato.",
        unitLevelPrefix: "Unità", unitLevelBasics: "Basi del Livello",
        newPassPlaceholder: "Nuova password", confirmPassPlaceholder: "Conferma password",
        settingsTitle: "IMPOSTAZIONI", autoPlay: "Riproduzione Automatica",
        autoPlayDesc: "Riproduci la pronuncia automaticamente.", language: "Preferenze Lingua",
        sourceLangLabel: "La Tua Lingua Madre", targetLangLabel: "Lingua da Imparare",
        footerText: "Supera i limiti con LinguDeep.",
        setupTitle: "Configurazione Motore", setupDesc: "Scegli le tue lingue.", setupBtn: "INIZIA IL VIAGGIO",
        placementTitle: "Test di Posizionamento", placementDesc: "Prepariamo il percorso migliore...",
        authTag: "Connessione Sicura", authTitle: "LinguDeep", authDesc: "Il futuro dell'apprendimento",
        loginBtn: "ACCEDI", registerBtn: "REGISTRATI", newAccount: "Crea Nuovo Account",
        alreadyAccount: "Ho Già un Account", usernamePlc: "Nome utente",
        passwordPlc: "Password", passConfirmPlc: "Conferma Password",
        qEnToSource: "Trova il significato della parola evidenziata:",
        qSourceToTarget: "Trova la parola che significa:", qAudio: "Ascolta e trova la parola",
        qScramble: "Traduci questa frase:", resTitleSuccess: "🎉 CAPITOLO COMPLETATO!",
        resTitleFail: "💪 CONTINUA!", resAccuracy: "Precisione", resXp: "XP Guadagnati",
        resDuration: "Durata", resSummaryPrefix: "Hai avuto", resSummarySuffix: "su", resSummaryMid: "parole corrette.",
        resBtn: "Torna alla Home", errWrong: "Sbagliato! La risposta corretta è:",
        feedbackList: ["Eccellente!","Ottimo!","Continua così!","Superbo!","In cima!","Sei in fiamme!"],
        guideTipsTitle: "Consigli di Oggi", guideWordsTitle: "Parole della Sezione",
        guideCloseBtn: "CAPITO, INIZIAMO", unitLabel: "Unità", startTooltip: "INIZIA",
        questTitle: "Obiettivi Giornalieri", questDesc: "Completa le missioni per guadagnare XP.",
        questXpTitle: "Cacciatore di XP", questWordTitle: "Maestro delle Parole",
        questClaimBtn: "RECLAMA", questReward: "BADGE GIORNALIERO GUADAGNATO!",
        questIncomplete: "Completa gli obiettivi per il tuo badge!",
        heartsOutTitle: "Cuori Esauriti!", heartsOutDesc: "Pratica o aspetta.",
        earnHeartsBtn: "GUADAGNA CUORI", laterBtn: "DOPO",
        weekDays: ['DOM','LUN','MAR','MER','GIO','VEN','SAB'],
        promotionReady: "PRONTO PER LA PROMOZIONE!", promotionDesc: "Vinci l'esame finale.",
        startExam: "INIZIA ESAME", weakPointsTitle: "Allenamento Speciale",
        weakPointsDesc: "Parole Sbagliate", weakPointsEmptyTitle: "Ottimo Lavoro!",
        weakPointsEmptyDesc: "Nessun punto debole! Hai imparato tutto!", weakPointsEmptyBtn: "ALTRI LIVELLI",
        optionPrefix: "Opzione", setupWelcome: "Benvenuto!", setupWelcomeDesc: "Personalizziamo il tuo percorso",
        setupYourLang: "LA TUA LINGUA", setupTargetLang: "LINGUA OBIETTIVO", setupSaved: "Configurazione completata!",
        setupSameLanguage: "Le lingue non possono essere uguali!", setupSecurityTag: "Motore Linguistico Globale",
        loginLoading: "ACCESSO...", loginError: "Nome utente o password non validi!", loginSuccess: "Accesso effettuato!",
        loginFillAll: "Compila tutti i campi!", registerLoading: "CREAZIONE ACCOUNT...",
        registerSuccess: "Account creato!", registerFillAll: "Compila tutti i campi!",
        registerPasswordMismatch: "Le password non corrispondono!",
        registerUsernameTaken: "Nome utente già in uso!", registerUsernameShort: "Min. 3 caratteri!",
        learningStatus: "IN APPRENDIMENTO", preparingLangs: "Preparazione Lingue...",
        resetConfirm: "Ripristinare tutti i progressi?", passChanged: "Password cambiata!",
        passShort: "Min. 3 caratteri!", passChangeError: "Vecchia password errata!",
        logoutConfirm: "Sei sicuro di voler uscire?", genericError: "Si è verificato un errore!",
        xpSummary: "Guadagna XP", wordSummary: "Completa Parole", allBtn: "TUTTO",
        guestName: "Ospite", leaguesTitleView: "Leghe e Risultati", settingsTitleView: "Impostazioni",
        errorMapLoad: "Errore: Mappa non caricata.", errorWordLoad: "Errore: Dati non caricati.",
        guidebookBtn: "GUIDA", preparingMap: "Preparazione...", closeBtn: "CHIUDI",
        rewardClaimed: "Premio! +1 Cuore", authDivider: "o", comboLabel: "COMBO",
        setupLanguage: "LINGUA", viewAll: "TUTTO", locale: "it-IT",
        levels: { "Başlangıç": "Principiante", "Orta": "Intermedio", "İleri": "Avanzato", "Zayıf Yönler": "Punti Deboli" },
        levelDescs: { "Başlangıç": "A1-A2 Vocabolario di Base", "Orta": "B1-B2 Intermedio", "İleri": "C1+ Avanzato" },
        leagues: ["BRONZO","ARGENTO","ORO","PLATINO","LEGGENDARIO"],
        promotionCongrats: "CONGRATULAZIONI!", promotionSub: "Promosso alla Lega %s!", promotionBonus: "+500 BONUS XP!",
        promotionBtn: "CONTINUA", promotionTestTitle: "ESAME LEGA %s", heartPracticeTitle: "Test Recupero Cuore",
        langSettingsUpdate: "Aggiornamento...", xpPopup: "+ %s XP", setupUILangLabel: "LINGUA INTERFACCIA",
        setupSourceLangLabel: "LINGUA MADRE", setupTargetLangLabel: "OBIETTIVO",
        qTargetToSource: "Cosa significa questa parola?",
        currentPassPrompt: "Password attuale:",
        ttsUnavailable: "🔇 Sintesi vocale non supportata. Domande audio disabilitate.",
        emailPlc: "Email",
        displayNamePlc: "Nome Visualizzato (Opzionale)",
        createPassPlc: "Crea Password (min. 6 caratteri)",
        googleLoginBtn: "Continua con Google",
        emailNotVerified: "La tua email non è verificata. Controlla la tua casella di posta.",
        emailVerificationSent: "Email di verifica inviata! Verifica e poi accedi.",
        googlePopupClosed: "Accesso Google annullato.",
        googleAccountConflict: "Questa email è registrata con un altro metodo di accesso."
    },
    pt: {
        welcomeTitle: "A forma mais divertida de aprender idiomas",
        welcomePara: "Memorize mais de 1000 palavras essenciais com uma experiência gamificada.",
        startBtn: "Vamos Começar", backBtn: "Voltar", viewTitleLevels: "Selecionar Nível",
        navLearn: "APRENDER", navPractice: "PRÁTICA", navLeagues: "LIGAS", navSettings: "CONFIGURAÇÕES",
        leagueTitle: "JORNADA DA LIGA", accuracy: "Precisão Média", totalWork: "Tempo Total de Estudo",
        strongestLevel: "Nível Mais Forte", highScore: "PONTUAÇÃO MAIS ALTA", completedSessions: "SESSÕES CONCLUÍDAS",
        learningAnalysis: "ANÁLISE DE APRENDIZAGEM", personalRecords: "RECORDES PESSOAIS",
        accountManagement: "GERENCIAMENTO DE CONTA", session: "Sessão", logout: "SAIR",
        changePass: "ALTERAR SENHA", changePassDesc: "Atualize a segurança da sua conta.",
        accountAndData: "CONTA E DADOS", clearProgress: "Limpar Progresso",
        clearDesc: "Todos os dados serão redefinidos permanentemente.", resetBtn: "REDEFINIR",
        totalAchievement: "Progresso Total", progress: "Progresso",
        courseCustomTitle: "Personalizar Caminho", courseNativeTitle: "1. Idioma Nativo",
        courseTargetTitle: "2. Idioma Alvo",
        progressSavedInfo: "Seu progresso é salvo independentemente para cada par de idiomas.",
        skipBtn: "PULAR", checkBtn: "VERIFICAR", streakLabel: "Sequência Diária",
        totalXpLabel: "XP Total", learnedLabel: "Palavras Aprendidas",
        wordNotFoundError: "Erro: Nenhuma palavra encontrada!", quizStartError: "Não foi possível iniciar. Atualize.",
        resultsError: "Erro no cálculo, mas progresso salvo.", initError: "O aplicativo não pôde iniciar:",
        passMismatch: "As senhas não coincidem!", passUpdateSuccess: "Senha atualizada!",
        wordDataError: "Dados não encontrados.", preparingLangsError: "Verifique sua conexão.",
        testCompleted: "Teste Concluído! Seu Nível:", minAbbr: "min",
        promoteDesc: "Ganhe mais XP para ser promovido.", noRecordsMsg: "Sem recordes ainda.",
        accuracySmall: "Precisão", newPassPrompt: "Nova senha:", confirmPassPrompt: "Confirme:",
        leagueInPrefix: "VOCÊ ESTÁ NA", leagueInSuffix: "LIGA",
        leagueLegendaryTop: "VOCÊ ESTÁ NO TOPO DA LIGA LENDÁRIA!",
        leagueNextReqPrefix: "Você precisa de", leagueNextReqSuffix: "XP a mais para a Liga", leagueNextReqMid: ".",
        mapPreparing: "Preparando Mapa...", mapAdapting: "Motor Global adaptando conteúdo...",
        levelNotReady: "Nível Ainda Não Pronto", levelNoContent: "nenhum conteúdo encontrado.",
        unitLevelPrefix: "Unidade", unitLevelBasics: "Noções Básicas",
        newPassPlaceholder: "Nova senha", confirmPassPlaceholder: "Confirme sua senha",
        settingsTitle: "CONFIGURAÇÕES", autoPlay: "Reprodução Automática",
        autoPlayDesc: "Reproduzir pronúncia automaticamente.", language: "Preferências de Idioma",
        sourceLangLabel: "Seu Idioma Nativo", targetLangLabel: "Idioma a Aprender",
        footerText: "Supere os limites com LinguDeep.",
        setupTitle: "Configuração do Motor", setupDesc: "Escolha seus idiomas.", setupBtn: "INICIAR A JORNADA",
        placementTitle: "Teste de Nivelamento", placementDesc: "Preparando o melhor caminho...",
        authTag: "Conexão Segura", authTitle: "LinguDeep", authDesc: "O futuro do aprendizado",
        loginBtn: "ENTRAR", registerBtn: "REGISTRAR", newAccount: "Criar Nova Conta",
        alreadyAccount: "Já Tenho Uma Conta", usernamePlc: "Nome de usuário",
        passwordPlc: "Senha", passConfirmPlc: "Confirmar Senha",
        qEnToSource: "Encontre o significado da palavra destacada:",
        qSourceToTarget: "Encontre a palavra que significa:", qAudio: "Ouça e encontre a palavra",
        qScramble: "Traduza esta frase:", resTitleSuccess: "🎉 CAPÍTULO CONCLUÍDO!",
        resTitleFail: "💪 CONTINUE TENTANDO!", resAccuracy: "Precisão", resXp: "XP Ganhos",
        resDuration: "Duração", resSummaryPrefix: "Você acertou", resSummarySuffix: "de", resSummaryMid: "palavras.",
        resBtn: "Voltar ao Início", errWrong: "Errado! A resposta correta é:",
        feedbackList: ["Excelente!","Ótimo!","Continue assim!","Soberbo!","Ao topo!","Está pegando fogo!"],
        guideTipsTitle: "Dicas de Hoje", guideWordsTitle: "Palavras da Seção",
        guideCloseBtn: "ENTENDIDO, VAMOS COMEÇAR", unitLabel: "Unidade", startTooltip: "COMEÇAR",
        questTitle: "Objetivos Diários", questDesc: "Complete missões para ganhar XP.",
        questXpTitle: "Caçador de XP", questWordTitle: "Mestre das Palavras",
        questClaimBtn: "RESGATAR", questReward: "DISTINTIVO DIÁRIO CONQUISTADO!",
        questIncomplete: "Complete os objetivos para seu distintivo!",
        heartsOutTitle: "Sem Corações!", heartsOutDesc: "Pratique ou espere.",
        earnHeartsBtn: "GANHAR CORAÇÕES", laterBtn: "DEPOIS",
        weekDays: ['DOM','SEG','TER','QUA','QUI','SEX','SÁB'],
        promotionReady: "PRONTO PARA PROMOÇÃO!", promotionDesc: "Ganhe o exame final.",
        startExam: "INICIAR EXAME", weakPointsTitle: "Treinamento Especial",
        weakPointsDesc: "Palavras que Errou", weakPointsEmptyTitle: "Ótimo Trabalho!",
        weakPointsEmptyDesc: "Sem pontos fracos! Aprendeu tudo!", weakPointsEmptyBtn: "OUTROS NÍVEIS",
        optionPrefix: "Opção", setupWelcome: "Bem-vindo!", setupWelcomeDesc: "Vamos personalizar seu caminho",
        setupYourLang: "SEU IDIOMA", setupTargetLang: "IDIOMA ALVO", setupSaved: "Configuração concluída!",
        setupSameLanguage: "Os idiomas não podem ser iguais!", setupSecurityTag: "Motor de Idioma Global",
        loginLoading: "ENTRANDO...", loginError: "Usuário ou senha inválidos!", loginSuccess: "Login realizado!",
        loginFillAll: "Preencha todos os campos!", registerLoading: "CRIANDO CONTA...",
        registerSuccess: "Conta criada!", registerFillAll: "Preencha todos os campos!",
        registerPasswordMismatch: "As senhas não coincidem!",
        registerUsernameTaken: "Este usuário já está em uso!", registerUsernameShort: "Min. 3 caracteres!",
        learningStatus: "APRENDENDO", preparingLangs: "Preparando Idiomas...",
        resetConfirm: "Redefinir todo o progresso?", passChanged: "Senha alterada!",
        passShort: "Min. 3 caracteres!", passChangeError: "Senha antiga incorreta!",
        logoutConfirm: "Tem certeza que deseja sair?", genericError: "Ocorreu um erro!",
        xpSummary: "Ganhar XP", wordSummary: "Completar Palavras", allBtn: "TUDO",
        guestName: "Convidado", leaguesTitleView: "Ligas e Conquistas", settingsTitleView: "Configurações",
        errorMapLoad: "Erro: Mapa não carregado.", errorWordLoad: "Erro: Dados não carregados.",
        guidebookBtn: "GUIA", preparingMap: "Preparando...", closeBtn: "FECHAR",
        rewardClaimed: "Recompensa! +1 Coração", authDivider: "ou", comboLabel: "COMBO",
        setupLanguage: "IDIOMA", viewAll: "TUDO", locale: "pt-PT",
        levels: { "Başlangıç": "Iniciante", "Orta": "Intermediário", "İleri": "Avançado", "Zayıf Yönler": "Pontos Fracos" },
        levelDescs: { "Başlangıç": "A1-A2 Vocabulário Básico", "Orta": "B1-B2 Intermediário", "İleri": "C1+ Avançado" },
        leagues: ["BRONZE","PRATA","OURO","PLATINA","LENDÁRIO"],
        promotionCongrats: "PARABÉNS!", promotionSub: "Promovido para a Liga %s!", promotionBonus: "+500 BONUS XP!",
        promotionBtn: "CONTINUAR", promotionTestTitle: "EXAME LIGA %s", heartPracticeTitle: "Teste de Recuperação",
        langSettingsUpdate: "Atualizando...", xpPopup: "+ %s XP", setupUILangLabel: "IDIOMA DA INTERFACE",
        setupSourceLangLabel: "IDIOMA NATIVO", setupTargetLangLabel: "ALVO DE APRENDIZAGEM",
        qTargetToSource: "O que significa esta palavra?",
        currentPassPrompt: "Senha atual:",
        ttsUnavailable: "🔇 Síntese de voz não suportada. Questões de áudio desativadas.",
        emailPlc: "E-mail",
        displayNamePlc: "Nome de Exibição (Opcional)",
        createPassPlc: "Criar Senha (mín. 6 caracteres)",
        googleLoginBtn: "Continuar com Google",
        emailNotVerified: "Seu e-mail não foi verificado. Verifique sua caixa de entrada.",
        emailVerificationSent: "E-mail de verificação enviado! Verifique e depois entre.",
        googlePopupClosed: "Login com Google cancelado.",
        googleAccountConflict: "Este e-mail está registrado com outro método de login."
    },
    ja: {
        welcomeTitle: "言語学習で最も楽しい方法",
        welcomePara: "ゲーム感覚で1000以上の基本単語を覚えよう。",
        startBtn: "始めましょう", backBtn: "戻る", viewTitleLevels: "レベルを選択",
        navLearn: "学習", navPractice: "練習", navLeagues: "リーグ", navSettings: "設定",
        leagueTitle: "リーグの旅", accuracy: "平均正確度", totalWork: "総学習時間",
        strongestLevel: "最も強いレベル", highScore: "ハイスコア", completedSessions: "完了セッション",
        learningAnalysis: "学習分析", personalRecords: "個人記録",
        accountManagement: "アカウント管理", session: "セッション", logout: "ログアウト",
        changePass: "パスワード変更", changePassDesc: "アカウントのセキュリティを更新する。",
        accountAndData: "アカウントとデータ", clearProgress: "進捗をクリア",
        clearDesc: "すべてのデータが完全にリセットされます。", resetBtn: "リセット",
        totalAchievement: "総進捗", progress: "進捗",
        courseCustomTitle: "学習パスをカスタマイズ", courseNativeTitle: "1. 母国語を選択",
        courseTargetTitle: "2. 目標言語を選択",
        progressSavedInfo: "各言語ペアの進捗は独立して保存されます。",
        skipBtn: "スキップ", checkBtn: "確認", streakLabel: "デイリーストリーク",
        totalXpLabel: "総XP", learnedLabel: "学習済み単語",
        wordNotFoundError: "エラー: 単語が見つかりません！", quizStartError: "クイズを開始できません。更新してください。",
        resultsError: "計算エラー、しかし進捗は保存されました。", initError: "アプリを起動できませんでした:",
        passMismatch: "パスワードが一致しません！", passUpdateSuccess: "パスワードが更新されました！",
        wordDataError: "単語データが見つかりません。", preparingLangsError: "接続を確認してください。",
        testCompleted: "テスト完了！あなたのレベル:", minAbbr: "分",
        promoteDesc: "次のリーグに昇格するためにXPを獲得してください。", noRecordsMsg: "まだ記録がありません。",
        accuracySmall: "正確度", newPassPrompt: "新しいパスワード:", confirmPassPrompt: "確認:",
        leagueInPrefix: "あなたは", leagueInSuffix: "リーグにいます",
        leagueLegendaryTop: "レジェンダリーリーグの頂点にいます！",
        leagueNextReqPrefix: "あと", leagueNextReqSuffix: "リーグ昇格に必要なXP", leagueNextReqMid: "。",
        mapPreparing: "マップを準備中...", mapAdapting: "グローバルエンジンがコンテンツを調整中...",
        levelNotReady: "レベルはまだ準備ができていません", levelNoContent: "コンテンツが見つかりません。",
        unitLevelPrefix: "ユニット", unitLevelBasics: "レベルの基礎",
        newPassPlaceholder: "新しいパスワード", confirmPassPlaceholder: "パスワードを確認",
        settingsTitle: "アプリ設定", autoPlay: "自動再生",
        autoPlayDesc: "各質問の発音を自動的に再生する。", language: "言語設定",
        sourceLangLabel: "母国語", targetLangLabel: "学習する言語",
        footerText: "LinguDeepで言語学習の限界を超えよう。",
        setupTitle: "言語エンジン設定", setupDesc: "言語を選択してください。", setupBtn: "旅を始める",
        placementTitle: "レベル判定テスト", placementDesc: "最適な学習パスを準備しています...",
        authTag: "安全な接続", authTitle: "LinguDeep", authDesc: "言語学習の未来",
        loginBtn: "ログイン", registerBtn: "登録", newAccount: "新しいアカウントを作成",
        alreadyAccount: "すでにアカウントがあります", usernamePlc: "ユーザー名",
        passwordPlc: "パスワード", passConfirmPlc: "パスワードを確認",
        qEnToSource: "ハイライトされた単語の意味を見つけてください:",
        qSourceToTarget: "意味する単語を見つけてください:", qAudio: "聴いて単語を見つけよう",
        qScramble: "この文を翻訳してください:", resTitleSuccess: "🎉 チャプター完了！",
        resTitleFail: "💪 もう少し頑張ろう！", resAccuracy: "正確度", resXp: "獲得XP",
        resDuration: "時間", resSummaryPrefix: "", resSummarySuffix: "問中", resSummaryMid: "問正解。",
        resBtn: "ホームに戻る", errWrong: "不正解！正解は:",
        feedbackList: ["素晴らしい！","すごい！","続けて！","最高！","頂点へ！","絶好調！"],
        guideTipsTitle: "今日の学習ヒント", guideWordsTitle: "セクションの単語",
        guideCloseBtn: "わかった、始めよう", unitLabel: "ユニット", startTooltip: "スタート",
        questTitle: "デイリーゴール", questDesc: "クエストを完了してXPを獲得しよう。",
        questXpTitle: "XPハンター", questWordTitle: "単語マスター",
        questClaimBtn: "報酬を受け取る", questReward: "デイリーバッジ獲得！",
        questIncomplete: "目標を完了してバッジを獲得しよう！",
        heartsOutTitle: "ハートがありません！", heartsOutDesc: "練習するか待ってください。",
        earnHeartsBtn: "ハートを獲得", laterBtn: "後で",
        weekDays: ['日','月','火','水','木','金','土'],
        promotionReady: "昇格の準備ができています！", promotionDesc: "最終試験に勝利してください。",
        startExam: "試験を始める", weakPointsTitle: "特別トレーニング",
        weakPointsDesc: "間違えた単語", weakPointsEmptyTitle: "よくできました！",
        weakPointsEmptyDesc: "弱点がありません！すべての単語を学習しました！", weakPointsEmptyBtn: "他のレベル",
        optionPrefix: "選択肢", setupWelcome: "ようこそ！", setupWelcomeDesc: "学習パスをカスタマイズしましょう",
        setupYourLang: "あなたの言語", setupTargetLang: "目標言語", setupSaved: "設定完了！",
        setupSameLanguage: "言語は同じにできません！", setupSecurityTag: "グローバル言語エンジン",
        loginLoading: "ログイン中...", loginError: "ユーザー名またはパスワードが無効です！", loginSuccess: "ログイン成功！",
        loginFillAll: "すべてのフィールドを入力してください！", registerLoading: "アカウント作成中...",
        registerSuccess: "アカウント作成済み！", registerFillAll: "すべてのフィールドを入力してください！",
        registerPasswordMismatch: "パスワードが一致しません！",
        registerUsernameTaken: "このユーザー名はすでに使用されています！", registerUsernameShort: "最低3文字必要！",
        learningStatus: "学習中", preparingLangs: "言語を準備中...",
        resetConfirm: "すべての進捗をリセットしますか？", passChanged: "パスワードが変更されました！",
        passShort: "最低3文字必要！", passChangeError: "古いパスワードが間違っています！",
        logoutConfirm: "ログアウトしますか？", genericError: "エラーが発生しました！",
        xpSummary: "XPを獲得", wordSummary: "単語を完了", allBtn: "すべて",
        guestName: "ゲスト", leaguesTitleView: "リーグと実績", settingsTitleView: "アプリ設定",
        errorMapLoad: "エラー: マップを読み込めません。", errorWordLoad: "エラー: 単語データを読み込めません。",
        guidebookBtn: "ガイド", preparingMap: "準備中...", closeBtn: "閉じる",
        rewardClaimed: "報酬獲得！+1ハート", authDivider: "または", comboLabel: "コンボ",
        setupLanguage: "言語", viewAll: "すべて", locale: "ja-JP",
        levels: { "Başlangıç": "初級", "Orta": "中級", "İleri": "上級", "Zayıf Yönler": "弱点" },
        levelDescs: { "Başlangıç": "A1-A2 基本語彙", "Orta": "B1-B2 中級単語", "İleri": "C1+ 上級マスタリー" },
        leagues: ["ブロンズ","シルバー","ゴールド","プラチナ","レジェンド"],
        promotionCongrats: "おめでとう！", promotionSub: "%sリーグに昇格しました！", promotionBonus: "+500ボーナスXP獲得！",
        promotionBtn: "続ける", promotionTestTitle: "%sリーグ昇格試験", heartPracticeTitle: "ハート回復テスト",
        langSettingsUpdate: "言語設定を更新中...", xpPopup: "+ %s XP", setupUILangLabel: "インターフェース言語",
        setupSourceLangLabel: "母国語", setupTargetLangLabel: "学習目標",
        qTargetToSource: "この単語の意味は何ですか？",
        currentPassPrompt: "現在のパスワード:",
        ttsUnavailable: "🔇 このデバイスでは音声合成がサポートされていません。音声問題が無効です。",
        emailPlc: "メールアドレス",
        displayNamePlc: "表示名（任意）",
        createPassPlc: "パスワード作成（最低6文字）",
        googleLoginBtn: "Googleで続ける",
        emailNotVerified: "メールが確認されていません。受信トレイを確認してください。",
        emailVerificationSent: "確認メールを送信しました！確認後にログインしてください。",
        googlePopupClosed: "Googleログインがキャンセルされました。",
        googleAccountConflict: "このメールは別のログイン方法で登録されています。"
    },
    zh: {
        welcomeTitle: "最有趣的语言学习方式",
        welcomePara: "通过游戏化体验记忆1000多个基本词汇。",
        startBtn: "开始吧", backBtn: "返回", viewTitleLevels: "选择级别",
        navLearn: "学习", navPractice: "练习", navLeagues: "联赛", navSettings: "设置",
        leagueTitle: "联赛之旅", accuracy: "平均准确率", totalWork: "总学习时间",
        strongestLevel: "最强级别", highScore: "最高分", completedSessions: "已完成会话",
        learningAnalysis: "学习分析", personalRecords: "个人记录",
        accountManagement: "账户管理", session: "会话", logout: "退出登录",
        changePass: "修改密码", changePassDesc: "更新您的账户安全。",
        accountAndData: "账户与数据", clearProgress: "清除进度",
        clearDesc: "所有数据将被永久重置。", resetBtn: "重置",
        totalAchievement: "总进度", progress: "进度",
        courseCustomTitle: "自定义学习路径", courseNativeTitle: "1. 选择母语",
        courseTargetTitle: "2. 选择目标语言",
        progressSavedInfo: "每对语言的进度独立保存。",
        skipBtn: "跳过", checkBtn: "检查", streakLabel: "每日连续",
        totalXpLabel: "总XP", learnedLabel: "已学单词",
        wordNotFoundError: "错误：未找到单词！", quizStartError: "无法开始测验。请刷新。",
        resultsError: "计算错误，但进度已保存。", initError: "应用程序无法启动：",
        passMismatch: "密码不匹配！", passUpdateSuccess: "密码已更新！",
        wordDataError: "未找到单词数据。", preparingLangsError: "请检查您的连接。",
        testCompleted: "测试完成！您的级别：", minAbbr: "分钟",
        promoteDesc: "获得更多XP以晋升。", noRecordsMsg: "还没有记录。",
        accuracySmall: "准确率", newPassPrompt: "新密码：", confirmPassPrompt: "确认：",
        leagueInPrefix: "您在", leagueInSuffix: "联赛",
        leagueLegendaryTop: "您在传奇联赛的顶端！",
        leagueNextReqPrefix: "还需要", leagueNextReqSuffix: "XP才能晋升联赛", leagueNextReqMid: "。",
        mapPreparing: "准备地图中...", mapAdapting: "全球引擎正在适应内容...",
        levelNotReady: "级别尚未准备好", levelNoContent: "未找到该级别的内容。",
        unitLevelPrefix: "单元", unitLevelBasics: "级别基础",
        newPassPlaceholder: "新密码", confirmPassPlaceholder: "确认密码",
        settingsTitle: "应用设置", autoPlay: "自动播放音频",
        autoPlayDesc: "自动播放每个问题的发音。", language: "语言偏好",
        sourceLangLabel: "您的母语", targetLangLabel: "要学习的语言",
        footerText: "用LinguDeep突破语言学习的边界。",
        setupTitle: "语言引擎设置", setupDesc: "选择您的语言。", setupBtn: "开始旅程",
        placementTitle: "水平测试", placementDesc: "正在准备最佳学习路径...",
        authTag: "安全连接", authTitle: "LinguDeep", authDesc: "语言学习的未来",
        loginBtn: "登录", registerBtn: "注册", newAccount: "创建新账户",
        alreadyAccount: "我已有账户", usernamePlc: "用户名",
        passwordPlc: "密码", passConfirmPlc: "确认密码",
        qEnToSource: "找到高亮单词的含义：",
        qSourceToTarget: "找到意思为...的单词：", qAudio: "听并找到单词",
        qScramble: "翻译这个句子：", resTitleSuccess: "🎉 章节完成！",
        resTitleFail: "💪 继续加油！", resAccuracy: "准确率", resXp: "获得XP",
        resDuration: "时长", resSummaryPrefix: "您答对了", resSummarySuffix: "共", resSummaryMid: "个单词。",
        resBtn: "返回主页", errWrong: "错误！正确答案是：",
        feedbackList: ["优秀！","太棒了！","继续！","出色！","登顶！","火力全开！"],
        guideTipsTitle: "今日学习技巧", guideWordsTitle: "本节单词",
        guideCloseBtn: "明白了，开始吧", unitLabel: "单元", startTooltip: "开始",
        questTitle: "每日目标", questDesc: "完成任务获得额外XP。",
        questXpTitle: "XP猎手", questWordTitle: "单词大师",
        questClaimBtn: "领取", questReward: "每日徽章获得！",
        questIncomplete: "完成目标获得徽章！",
        heartsOutTitle: "没有心了！", heartsOutDesc: "练习或等待。",
        earnHeartsBtn: "获得心", laterBtn: "稍后",
        weekDays: ['日','一','二','三','四','五','六'],
        promotionReady: "准备晋升！", promotionDesc: "赢得期末考试。",
        startExam: "开始考试", weakPointsTitle: "特别训练",
        weakPointsDesc: "您答错的单词", weakPointsEmptyTitle: "干得好！",
        weakPointsEmptyDesc: "没有弱点！您已学会所有单词！", weakPointsEmptyBtn: "其他级别",
        optionPrefix: "选项", setupWelcome: "欢迎！", setupWelcomeDesc: "让我们定制您的学习路径",
        setupYourLang: "您的语言", setupTargetLang: "目标语言", setupSaved: "设置完成！",
        setupSameLanguage: "语言不能相同！", setupSecurityTag: "全球语言引擎",
        loginLoading: "登录中...", loginError: "无效的用户名或密码！", loginSuccess: "登录成功！",
        loginFillAll: "请填写所有字段！", registerLoading: "创建账户中...",
        registerSuccess: "账户已创建！", registerFillAll: "请填写所有字段！",
        registerPasswordMismatch: "密码不匹配！",
        registerUsernameTaken: "此用户名已被使用！", registerUsernameShort: "最少3个字符！",
        learningStatus: "学习中", preparingLangs: "准备语言中...",
        resetConfirm: "重置所有进度？", passChanged: "密码已更改！",
        passShort: "最少3个字符！", passChangeError: "旧密码错误！",
        logoutConfirm: "确定要退出吗？", genericError: "发生了错误！",
        xpSummary: "获得XP", wordSummary: "完成单词", allBtn: "全部",
        guestName: "访客", leaguesTitleView: "联赛与成就", settingsTitleView: "应用设置",
        errorMapLoad: "错误：无法加载地图。", errorWordLoad: "错误：无法加载单词数据。",
        guidebookBtn: "指南", preparingMap: "准备中...", closeBtn: "关闭",
        rewardClaimed: "奖励领取！+1心", authDivider: "或", comboLabel: "连击",
        setupLanguage: "语言", viewAll: "全部", locale: "zh-CN",
        levels: { "Başlangıç": "初级", "Orta": "中级", "İleri": "高级", "Zayıf Yönler": "薄弱点" },
        levelDescs: { "Başlangıç": "A1-A2 基础词汇", "Orta": "B1-B2 中级词汇", "İleri": "C1+ 高级掌握" },
        leagues: ["青铜","白银","黄金","白金","传奇"],
        promotionCongrats: "恭喜！", promotionSub: "晋升至%s联赛！", promotionBonus: "+500奖励XP！",
        promotionBtn: "继续", promotionTestTitle: "%s联赛晋升考试", heartPracticeTitle: "心恢复测试",
        langSettingsUpdate: "更新语言设置中...", xpPopup: "+ %s XP", setupUILangLabel: "界面语言",
        setupSourceLangLabel: "母语", setupTargetLangLabel: "学习目标",
        qTargetToSource: "这个词是什么意思？",
        currentPassPrompt: "当前密码:",
        ttsUnavailable: "🔇 此设备不支持音频合成。音频问题已禁用。",
        emailPlc: "电子邮件",
        displayNamePlc: "显示名称（可选）",
        createPassPlc: "创建密码（最少6个字符）",
        googleLoginBtn: "通过Google继续",
        emailNotVerified: "您的电子邮件未经验证。请检查您的收件箱。",
        emailVerificationSent: "验证邮件已发送！验证后再登录。",
        googlePopupClosed: "Google登录已取消。",
        googleAccountConflict: "此电子邮件已通过其他登录方式注册。"
    },
    ar: {
        welcomeTitle: "الطريقة الأكثر متعة لتعلم اللغات",
        welcomePara: "احفظ أكثر من 1000 كلمة أساسية بتجربة مُلعَّبة.",
        startBtn: "لنبدأ", backBtn: "رجوع", viewTitleLevels: "اختر المستوى",
        navLearn: "تعلم", navPractice: "تمرين", navLeagues: "الدوريات", navSettings: "الإعدادات",
        leagueTitle: "رحلة الدوري", accuracy: "متوسط الدقة", totalWork: "إجمالي وقت الدراسة",
        strongestLevel: "أقوى مستوى", highScore: "أعلى نقاط", completedSessions: "الجلسات المكتملة",
        learningAnalysis: "تحليل التعلم", personalRecords: "السجلات الشخصية",
        accountManagement: "إدارة الحساب", session: "جلسة", logout: "تسجيل الخروج",
        changePass: "تغيير كلمة المرور", changePassDesc: "تحديث أمان حسابك.",
        accountAndData: "الحساب والبيانات", clearProgress: "مسح التقدم",
        clearDesc: "سيتم إعادة تعيين جميع بياناتك نهائياً.", resetBtn: "إعادة تعيين",
        totalAchievement: "إجمالي التقدم", progress: "التقدم",
        courseCustomTitle: "تخصيص مسار التعلم", courseNativeTitle: "١. اختر لغتك الأم",
        courseTargetTitle: "٢. اختر اللغة المستهدفة",
        progressSavedInfo: "يتم حفظ تقدمك بشكل مستقل لكل زوج لغوي.",
        skipBtn: "تخطي", checkBtn: "تحقق", streakLabel: "السلسلة اليومية",
        totalXpLabel: "إجمالي XP", learnedLabel: "الكلمات المتعلمة",
        wordNotFoundError: "خطأ: لم يتم العثور على كلمات!", quizStartError: "تعذر البدء. حدّث الصفحة.",
        resultsError: "خطأ في الحساب، لكن التقدم محفوظ.", initError: "تعذر تشغيل التطبيق:",
        passMismatch: "كلمات المرور غير متطابقة!", passUpdateSuccess: "تم تحديث كلمة المرور!",
        wordDataError: "لم يتم العثور على البيانات.", preparingLangsError: "تحقق من اتصالك.",
        testCompleted: "اكتمل الاختبار! مستواك:", minAbbr: "د",
        promoteDesc: "اكسب المزيد من XP للترقية.", noRecordsMsg: "لا توجد سجلات بعد.",
        accuracySmall: "الدقة", newPassPrompt: "كلمة المرور الجديدة:", confirmPassPrompt: "تأكيد:",
        leagueInPrefix: "أنت في", leagueInSuffix: "دوري",
        leagueLegendaryTop: "أنت في قمة الدوري الأسطوري!",
        leagueNextReqPrefix: "تحتاج", leagueNextReqSuffix: "XP أكثر للدوري", leagueNextReqMid: ".",
        mapPreparing: "تحضير الخريطة...", mapAdapting: "المحرك العالمي يكيّف المحتوى...",
        levelNotReady: "المستوى غير جاهز بعد", levelNoContent: "لم يتم العثور على محتوى.",
        unitLevelPrefix: "وحدة", unitLevelBasics: "أساسيات المستوى",
        newPassPlaceholder: "كلمة المرور الجديدة", confirmPassPlaceholder: "تأكيد كلمة المرور",
        settingsTitle: "إعدادات التطبيق", autoPlay: "تشغيل تلقائي للصوت",
        autoPlayDesc: "تشغيل النطق تلقائياً لكل سؤال.", language: "تفضيلات اللغة",
        sourceLangLabel: "لغتك الأم", targetLangLabel: "اللغة المراد تعلمها",
        footerText: "تجاوز حدود تعلم اللغات مع LinguDeep.",
        setupTitle: "إعداد محرك اللغة", setupDesc: "اختر لغاتك.", setupBtn: "ابدأ الرحلة",
        placementTitle: "اختبار التحديد", placementDesc: "نحضّر أفضل مسار تعلم لك...",
        authTag: "اتصال آمن", authTitle: "LinguDeep", authDesc: "مستقبل تعلم اللغات",
        loginBtn: "تسجيل الدخول", registerBtn: "تسجيل", newAccount: "إنشاء حساب جديد",
        alreadyAccount: "لدي حساب بالفعل", usernamePlc: "اسم المستخدم",
        passwordPlc: "كلمة المرور", passConfirmPlc: "تأكيد كلمة المرور",
        qEnToSource: "ابحث عن معنى الكلمة المميزة:",
        qSourceToTarget: "ابحث عن الكلمة التي تعني:", qAudio: "استمع وابحث عن الكلمة",
        qScramble: "ترجم هذه الجملة:", resTitleSuccess: "🎉 اكتمل الفصل!",
        resTitleFail: "💪 استمر!", resAccuracy: "الدقة", resXp: "XP مكتسب",
        resDuration: "المدة", resSummaryPrefix: "حصلت على", resSummarySuffix: "من", resSummaryMid: "كلمات صحيحة.",
        resBtn: "العودة للرئيسية", errWrong: "خطأ! الإجابة الصحيحة هي:",
        feedbackList: ["ممتاز!","رائع!","استمر!","بارع!","للقمة!","أنت متقد!"],
        guideTipsTitle: "نصائح التعلم اليوم", guideWordsTitle: "كلمات القسم",
        guideCloseBtn: "فهمت، لنبدأ", unitLabel: "وحدة", startTooltip: "ابدأ",
        questTitle: "الأهداف اليومية", questDesc: "أكمل المهام لكسب XP.",
        questXpTitle: "صائد XP", questWordTitle: "سيد الكلمات",
        questClaimBtn: "استلم", questReward: "شارة يومية مكتسبة!",
        questIncomplete: "أكمل الأهداف للحصول على شارتك!",
        heartsOutTitle: "لا قلوب!", heartsOutDesc: "تدرب أو انتظر.",
        earnHeartsBtn: "اكسب قلوباً", laterBtn: "لاحقاً",
        weekDays: ['أحد','اثن','ثلث','أرب','خمس','جمع','سبت'],
        promotionReady: "جاهز للترقية!", promotionDesc: "افز في الاختبار النهائي.",
        startExam: "ابدأ الاختبار", weakPointsTitle: "تدريب خاص",
        weakPointsDesc: "الكلمات التي أخطأت فيها", weakPointsEmptyTitle: "عمل رائع!",
        weakPointsEmptyDesc: "لا نقاط ضعف! تعلمت كل شيء!", weakPointsEmptyBtn: "مستويات أخرى",
        optionPrefix: "خيار", setupWelcome: "مرحباً!", setupWelcomeDesc: "دعنا نخصص مسار تعلمك",
        setupYourLang: "لغتك", setupTargetLang: "اللغة المستهدفة", setupSaved: "اكتمل الإعداد!",
        setupSameLanguage: "لا يمكن أن تكون اللغات متطابقة!", setupSecurityTag: "محرك اللغة العالمي",
        loginLoading: "جاري الدخول...", loginError: "اسم مستخدم أو كلمة مرور غير صالحة!", loginSuccess: "تم الدخول بنجاح!",
        loginFillAll: "يرجى ملء جميع الحقول!", registerLoading: "إنشاء الحساب...",
        registerSuccess: "تم إنشاء الحساب!", registerFillAll: "يرجى ملء جميع الحقول!",
        registerPasswordMismatch: "كلمات المرور غير متطابقة!",
        registerUsernameTaken: "اسم المستخدم مستخدم بالفعل!", registerUsernameShort: "الحد الأدنى 3 أحرف!",
        learningStatus: "يتعلم", preparingLangs: "تحضير اللغات...",
        resetConfirm: "إعادة تعيين كل التقدم؟", passChanged: "تم تغيير كلمة المرور!",
        passShort: "الحد الأدنى 3 أحرف!", passChangeError: "كلمة المرور القديمة غير صحيحة!",
        logoutConfirm: "هل تريد تسجيل الخروج؟", genericError: "حدث خطأ!",
        xpSummary: "اكسب XP", wordSummary: "أكمل الكلمات", allBtn: "الكل",
        guestName: "ضيف", leaguesTitleView: "الدوريات والإنجازات", settingsTitleView: "إعدادات التطبيق",
        errorMapLoad: "خطأ: تعذر تحميل الخريطة.", errorWordLoad: "خطأ: تعذر تحميل البيانات.",
        guidebookBtn: "الدليل", preparingMap: "تحضير...", closeBtn: "إغلاق",
        rewardClaimed: "تم الحصول على المكافأة! +1 قلب", authDivider: "أو", comboLabel: "كومبو",
        setupLanguage: "اللغة", viewAll: "الكل", locale: "ar-SA",
        levels: { "Başlangıç": "مبتدئ", "Orta": "متوسط", "İleri": "متقدم", "Zayıf Yönler": "نقاط الضعف" },
        levelDescs: { "Başlangıç": "A1-A2 مفردات أساسية", "Orta": "B1-B2 متوسط", "İleri": "C1+ متقدم" },
        leagues: ["برونز","فضة","ذهب","بلاتين","أسطوري"],
        promotionCongrats: "تهانينا!", promotionSub: "ترقيت إلى دوري %s!", promotionBonus: "+500 XP مكافأة!",
        promotionBtn: "استمر", promotionTestTitle: "اختبار الترقية دوري %s", heartPracticeTitle: "اختبار استعادة القلوب",
        langSettingsUpdate: "تحديث إعدادات اللغة...", xpPopup: "+ %s XP", setupUILangLabel: "لغة الواجهة",
        setupSourceLangLabel: "اللغة الأم", setupTargetLangLabel: "هدف التعلم",
        qTargetToSource: "ما معنى هذه الكلمة؟",
        currentPassPrompt: "كلمة المرور الحالية:",
        ttsUnavailable: "🔇 تركيب الصوت غير مدعوم على هذا الجهاز. أسئلة الصوت معطلة.",
        emailPlc: "البريد الإلكتروني",
        displayNamePlc: "الاسم المعروض (اختياري)",
        createPassPlc: "إنشاء كلمة مرور (الحد الأدنى 6 أحرف)",
        googleLoginBtn: "المتابعة مع Google",
        emailNotVerified: "بريدك الإلكتروني غير مؤكد. يرجى التحقق من صندوق الوارد.",
        emailVerificationSent: "تم إرسال بريد التحقق! تحقق ثم سجل الدخول.",
        googlePopupClosed: "تم إلغاء تسجيل الدخول بـ Google.",
        googleAccountConflict: "هذا البريد مسجل بطريقة تسجيل دخول مختلفة."
    },
    ko: {
        welcomeTitle: "언어 학습의 가장 재미있는 방법",
        welcomePara: "게임화된 경험으로 1000개 이상의 필수 단어를 암기하세요.",
        startBtn: "시작하자", backBtn: "뒤로", viewTitleLevels: "레벨 선택",
        navLearn: "학습", navPractice: "연습", navLeagues: "리그", navSettings: "설정",
        leagueTitle: "리그 여정", accuracy: "평균 정확도", totalWork: "총 학습 시간",
        strongestLevel: "가장 강한 레벨", highScore: "최고 점수", completedSessions: "완료된 세션",
        learningAnalysis: "학습 분석", personalRecords: "개인 기록",
        accountManagement: "계정 관리", session: "세션", logout: "로그아웃",
        changePass: "비밀번호 변경", changePassDesc: "계정 보안을 업데이트하세요.",
        accountAndData: "계정 및 데이터", clearProgress: "진행 상황 지우기",
        clearDesc: "모든 데이터가 영구적으로 초기화됩니다.", resetBtn: "초기화",
        totalAchievement: "총 진행 상황", progress: "진행 상황",
        courseCustomTitle: "학습 경로 맞춤화", courseNativeTitle: "1. 모국어 선택",
        courseTargetTitle: "2. 목표 언어 선택",
        progressSavedInfo: "각 언어 쌍에 대한 진행 상황이 독립적으로 저장됩니다.",
        skipBtn: "건너뛰기", checkBtn: "확인", streakLabel: "일일 연속",
        totalXpLabel: "총 XP", learnedLabel: "학습한 단어",
        wordNotFoundError: "오류: 단어를 찾을 수 없습니다!", quizStartError: "퀴즈를 시작할 수 없습니다. 새로고침하세요.",
        resultsError: "계산 오류, 하지만 진행 상황은 저장되었습니다.", initError: "앱을 시작할 수 없습니다:",
        passMismatch: "비밀번호가 일치하지 않습니다!", passUpdateSuccess: "비밀번호가 업데이트되었습니다!",
        wordDataError: "단어 데이터를 찾을 수 없습니다.", preparingLangsError: "연결을 확인하세요.",
        testCompleted: "테스트 완료! 당신의 레벨:", minAbbr: "분",
        promoteDesc: "다음 리그로 승격하려면 XP를 더 획득하세요.", noRecordsMsg: "아직 기록이 없습니다.",
        accuracySmall: "정확도", newPassPrompt: "새 비밀번호:", confirmPassPrompt: "확인:",
        leagueInPrefix: "당신은", leagueInSuffix: "리그에 있습니다",
        leagueLegendaryTop: "레전드 리그의 정상에 있습니다!",
        leagueNextReqPrefix: "리그 승격을 위해", leagueNextReqSuffix: "XP가 더 필요합니다", leagueNextReqMid: ".",
        mapPreparing: "지도 준비 중...", mapAdapting: "글로벌 엔진이 콘텐츠를 조정 중...",
        levelNotReady: "레벨이 아직 준비되지 않았습니다", levelNoContent: "콘텐츠를 찾을 수 없습니다.",
        unitLevelPrefix: "유닛", unitLevelBasics: "레벨 기초",
        newPassPlaceholder: "새 비밀번호", confirmPassPlaceholder: "비밀번호 확인",
        settingsTitle: "앱 설정", autoPlay: "자동 재생",
        autoPlayDesc: "각 질문에 대해 발음을 자동으로 재생합니다.", language: "언어 기본 설정",
        sourceLangLabel: "모국어", targetLangLabel: "학습할 언어",
        footerText: "LinguDeep으로 언어 학습의 한계를 넘어서세요.",
        setupTitle: "언어 엔진 설정", setupDesc: "언어를 선택하세요.", setupBtn: "여정 시작",
        placementTitle: "레벨 테스트", placementDesc: "최적의 학습 경로를 준비 중...",
        authTag: "안전한 연결", authTitle: "LinguDeep", authDesc: "언어 학습의 미래",
        loginBtn: "로그인", registerBtn: "가입", newAccount: "새 계정 만들기",
        alreadyAccount: "이미 계정이 있습니다", usernamePlc: "사용자 이름",
        passwordPlc: "비밀번호", passConfirmPlc: "비밀번호 확인",
        qEnToSource: "강조된 단어의 의미를 찾으세요:",
        qSourceToTarget: "의미하는 단어를 찾으세요:", qAudio: "듣고 단어를 찾으세요",
        qScramble: "이 문장을 번역하세요:", resTitleSuccess: "🎉 챕터 완료!",
        resTitleFail: "💪 계속 도전하세요!", resAccuracy: "정확도", resXp: "획득 XP",
        resDuration: "기간", resSummaryPrefix: "", resSummarySuffix: "개 중", resSummaryMid: "개 정답.",
        resBtn: "홈으로 돌아가기", errWrong: "틀렸습니다! 정답은:",
        feedbackList: ["훌륭해요!","대단해요!","계속해요!","멋져요!","정상으로!","불꽃 같아요!"],
        guideTipsTitle: "오늘의 학습 팁", guideWordsTitle: "섹션 단어",
        guideCloseBtn: "알겠어요, 시작하자", unitLabel: "유닛", startTooltip: "시작",
        questTitle: "일일 목표", questDesc: "퀘스트를 완료하여 XP를 획득하세요.",
        questXpTitle: "XP 사냥꾼", questWordTitle: "단어 마스터",
        questClaimBtn: "보상 받기", questReward: "일일 배지 획득!",
        questIncomplete: "목표를 완료하여 배지를 획득하세요!",
        heartsOutTitle: "하트가 없습니다!", heartsOutDesc: "연습하거나 기다리세요.",
        earnHeartsBtn: "하트 획득", laterBtn: "나중에",
        weekDays: ['일','월','화','수','목','금','토'],
        promotionReady: "승격 준비 완료!", promotionDesc: "최종 시험에서 승리하세요.",
        startExam: "시험 시작", weakPointsTitle: "특별 훈련",
        weakPointsDesc: "틀린 단어", weakPointsEmptyTitle: "잘 하셨어요!",
        weakPointsEmptyDesc: "약점이 없습니다! 모든 단어를 학습했습니다!", weakPointsEmptyBtn: "다른 레벨",
        optionPrefix: "옵션", setupWelcome: "환영합니다!", setupWelcomeDesc: "학습 경로를 맞춤화해 보겠습니다",
        setupYourLang: "당신의 언어", setupTargetLang: "목표 언어", setupSaved: "설정 완료!",
        setupSameLanguage: "언어가 같을 수 없습니다!", setupSecurityTag: "글로벌 언어 엔진",
        loginLoading: "로그인 중...", loginError: "유효하지 않은 사용자 이름 또는 비밀번호!", loginSuccess: "로그인 성공!",
        loginFillAll: "모든 필드를 입력해 주세요!", registerLoading: "계정 생성 중...",
        registerSuccess: "계정이 생성되었습니다!", registerFillAll: "모든 필드를 입력해 주세요!",
        registerPasswordMismatch: "비밀번호가 일치하지 않습니다!",
        registerUsernameTaken: "이 사용자 이름은 이미 사용 중입니다!", registerUsernameShort: "최소 3자 필요!",
        learningStatus: "학습 중", preparingLangs: "언어 준비 중...",
        resetConfirm: "모든 진행 상황을 초기화하시겠습니까?", passChanged: "비밀번호가 변경되었습니다!",
        passShort: "최소 3자 필요!", passChangeError: "이전 비밀번호가 틀렸습니다!",
        logoutConfirm: "로그아웃하시겠습니까?", genericError: "오류가 발생했습니다!",
        xpSummary: "XP 획득", wordSummary: "단어 완료", allBtn: "전체",
        guestName: "게스트", leaguesTitleView: "리그 및 업적", settingsTitleView: "앱 설정",
        errorMapLoad: "오류: 지도를 불러올 수 없습니다.", errorWordLoad: "오류: 단어 데이터를 불러올 수 없습니다.",
        guidebookBtn: "가이드", preparingMap: "준비 중...", closeBtn: "닫기",
        rewardClaimed: "보상 획득! +1 하트", authDivider: "또는", comboLabel: "콤보",
        setupLanguage: "언어", viewAll: "전체", locale: "ko-KR",
        levels: { "Başlangıç": "초급", "Orta": "중급", "İleri": "고급", "Zayıf Yönler": "약점" },
        levelDescs: { "Başlangıç": "A1-A2 기본 어휘", "Orta": "B1-B2 중급 단어", "İleri": "C1+ 고급 마스터리" },
        leagues: ["브론즈","실버","골드","플래티넘","레전드"],
        promotionCongrats: "축하합니다!", promotionSub: "%s 리그로 승격했습니다!", promotionBonus: "+500 보너스 XP 획득!",
        promotionBtn: "계속", promotionTestTitle: "%s 리그 승격 시험", heartPracticeTitle: "하트 회복 테스트",
        langSettingsUpdate: "언어 설정 업데이트 중...", xpPopup: "+ %s XP", setupUILangLabel: "인터페이스 언어",
        setupSourceLangLabel: "모국어", setupTargetLangLabel: "학습 목표",
        qTargetToSource: "이 단어의 의미는 무엇입니까?",
        currentPassPrompt: "현재 비밀번호:",
        ttsUnavailable: "🔇 이 기기에서 음성 합성이 지원되지 않습니다. 오디오 문제가 비활성화됩니다.",
        emailPlc: "이메일",
        displayNamePlc: "표시 이름 (선택 사항)",
        createPassPlc: "비밀번호 만들기 (최소 6자)",
        googleLoginBtn: "Google로 계속",
        emailNotVerified: "이메일이 인증되지 않았습니다. 받은 편지함을 확인하세요.",
        emailVerificationSent: "인증 이메일이 전송되었습니다! 인증 후 로그인하세요.",
        googlePopupClosed: "Google 로그인이 취소되었습니다.",
        googleAccountConflict: "이 이메일은 다른 로그인 방법으로 등록되어 있습니다."
    },
    hi: {
        welcomeTitle: "भाषा सीखने का सबसे मज़ेदार तरीका",
        welcomePara: "गेमीफाइड अनुभव के साथ 1000 से अधिक आवश्यक शब्द याद करें।",
        startBtn: "शुरू करें", backBtn: "वापस", viewTitleLevels: "स्तर चुनें",
        navLearn: "सीखें", navPractice: "अभ्यास", navLeagues: "लीग", navSettings: "सेटिंग्स",
        leagueTitle: "लीग यात्रा", accuracy: "औसत सटीकता", totalWork: "कुल अध्ययन समय",
        strongestLevel: "सबसे मजबूत स्तर", highScore: "उच्च स्कोर", completedSessions: "पूर्ण सत्र",
        learningAnalysis: "सीखने का विश्लेषण", personalRecords: "व्यक्तिगत रिकॉर्ड",
        accountManagement: "खाता प्रबंधन", session: "सत्र", logout: "लॉगआउट",
        changePass: "पासवर्ड बदलें", changePassDesc: "अपनी खाता सुरक्षा अपडेट करें।",
        accountAndData: "खाता और डेटा", clearProgress: "प्रगति साफ करें",
        clearDesc: "सभी डेटा स्थायी रूप से रीसेट हो जाएगा।", resetBtn: "रीसेट",
        totalAchievement: "कुल प्रगति", progress: "प्रगति",
        courseCustomTitle: "सीखने का रास्ता कस्टमाइज़ करें", courseNativeTitle: "1. मातृभाषा चुनें",
        courseTargetTitle: "2. लक्ष्य भाषा चुनें",
        progressSavedInfo: "प्रत्येक भाषा जोड़ी के लिए प्रगति स्वतंत्र रूप से सहेजी जाती है।",
        skipBtn: "छोड़ें", checkBtn: "जाँचें", streakLabel: "दैनिक स्ट्रीक",
        totalXpLabel: "कुल XP", learnedLabel: "सीखे गए शब्द",
        wordNotFoundError: "त्रुटि: कोई शब्द नहीं मिला!", quizStartError: "क्विज़ शुरू नहीं हो सका। रीफ्रेश करें।",
        resultsError: "गणना त्रुटि, लेकिन प्रगति सहेजी गई।", initError: "ऐप शुरू नहीं हो सका:",
        passMismatch: "पासवर्ड मेल नहीं खाते!", passUpdateSuccess: "पासवर्ड अपडेट हो गया!",
        wordDataError: "शब्द डेटा नहीं मिला।", preparingLangsError: "अपना कनेक्शन जांचें।",
        testCompleted: "परीक्षण पूरा! आपका स्तर:", minAbbr: "मिनट",
        promoteDesc: "अगली लीग में जाने के लिए अधिक XP कमाएं।", noRecordsMsg: "अभी तक कोई रिकॉर्ड नहीं।",
        accuracySmall: "सटीकता", newPassPrompt: "नया पासवर्ड:", confirmPassPrompt: "पुष्टि करें:",
        leagueInPrefix: "आप", leagueInSuffix: "लीग में हैं",
        leagueLegendaryTop: "आप लेजेंडरी लीग के शीर्ष पर हैं!",
        leagueNextReqPrefix: "आपको", leagueNextReqSuffix: "अधिक XP चाहिए लीग के लिए", leagueNextReqMid: "।",
        mapPreparing: "मानचित्र तैयार हो रहा है...", mapAdapting: "वैश्विक इंजन सामग्री अनुकूलित कर रहा है...",
        levelNotReady: "स्तर अभी तैयार नहीं है", levelNoContent: "कोई सामग्री नहीं मिली।",
        unitLevelPrefix: "इकाई", unitLevelBasics: "स्तर की मूल बातें",
        newPassPlaceholder: "नया पासवर्ड", confirmPassPlaceholder: "पासवर्ड पुष्टि करें",
        settingsTitle: "ऐप सेटिंग्स", autoPlay: "ऑटो-प्ले ऑडियो",
        autoPlayDesc: "प्रत्येक प्रश्न के लिए उच्चारण स्वतः चलाएं।", language: "भाषा प्राथमिकताएं",
        sourceLangLabel: "आपकी मातृभाषा", targetLangLabel: "सीखने की भाषा",
        footerText: "LinguDeep के साथ भाषा सीखने की सीमाएं पार करें।",
        setupTitle: "भाषा इंजन सेटअप", setupDesc: "अपनी भाषाएं चुनें।", setupBtn: "यात्रा शुरू करें",
        placementTitle: "स्तर परीक्षण", placementDesc: "आपके लिए सबसे अच्छा रास्ता तैयार कर रहे हैं...",
        authTag: "सुरक्षित कनेक्शन", authTitle: "LinguDeep", authDesc: "भाषा सीखने का भविष्य",
        loginBtn: "लॉगिन", registerBtn: "पंजीकरण", newAccount: "नया खाता बनाएं",
        alreadyAccount: "मेरे पास पहले से खाता है", usernamePlc: "उपयोगकर्ता नाम",
        passwordPlc: "पासवर्ड", passConfirmPlc: "पासवर्ड की पुष्टि करें",
        qEnToSource: "हाइलाइट किए गए शब्द का अर्थ खोजें:",
        qSourceToTarget: "वह शब्द खोजें जिसका अर्थ है:", qAudio: "सुनें और शब्द खोजें",
        qScramble: "इस वाक्य का अनुवाद करें:", resTitleSuccess: "🎉 अध्याय पूरा!",
        resTitleFail: "💪 आगे बढ़ते रहें!", resAccuracy: "सटीकता", resXp: "अर्जित XP",
        resDuration: "अवधि", resSummaryPrefix: "आपने", resSummarySuffix: "में से", resSummaryMid: "सही किए।",
        resBtn: "होम पर वापस", errWrong: "गलत! सही उत्तर है:",
        feedbackList: ["उत्कृष्ट!","शानदार!","जारी रखें!","अद्भुत!","शीर्ष पर!","आग लग गई!"],
        guideTipsTitle: "आज के सीखने के सुझाव", guideWordsTitle: "अनुभाग के शब्द",
        guideCloseBtn: "समझ गया, शुरू करें", unitLabel: "इकाई", startTooltip: "शुरू",
        questTitle: "दैनिक लक्ष्य", questDesc: "XP कमाने के लिए क्वेस्ट पूरे करें।",
        questXpTitle: "XP शिकारी", questWordTitle: "शब्द मास्टर",
        questClaimBtn: "पुरस्कार लें", questReward: "दैनिक बैज मिला!",
        questIncomplete: "बैज पाने के लिए लक्ष्य पूरे करें!",
        heartsOutTitle: "दिल खत्म!", heartsOutDesc: "अभ्यास करें या प्रतीक्षा करें।",
        earnHeartsBtn: "दिल कमाएं", laterBtn: "बाद में",
        weekDays: ['रवि','सोम','मंगल','बुध','गुरु','शुक्र','शनि'],
        promotionReady: "पदोन्नति के लिए तैयार!", promotionDesc: "अंतिम परीक्षा जीतें।",
        startExam: "परीक्षा शुरू करें", weakPointsTitle: "विशेष प्रशिक्षण",
        weakPointsDesc: "गलत किए गए शब्द", weakPointsEmptyTitle: "बढ़िया काम!",
        weakPointsEmptyDesc: "कोई कमजोर बिंदु नहीं! सभी शब्द सीख लिए!", weakPointsEmptyBtn: "अन्य स्तर",
        optionPrefix: "विकल्प", setupWelcome: "स्वागत है!", setupWelcomeDesc: "अपना सीखने का रास्ता कस्टमाइज़ करें",
        setupYourLang: "आपकी भाषा", setupTargetLang: "लक्ष्य भाषा", setupSaved: "सेटअप पूरा!",
        setupSameLanguage: "भाषाएं समान नहीं हो सकतीं!", setupSecurityTag: "वैश्विक भाषा इंजन",
        loginLoading: "लॉगिन हो रहा है...", loginError: "अमान्य उपयोगकर्ता नाम या पासवर्ड!", loginSuccess: "लॉगिन सफल!",
        loginFillAll: "सभी फ़ील्ड भरें!", registerLoading: "खाता बनाया जा रहा है...",
        registerSuccess: "खाता बनाया गया!", registerFillAll: "सभी फ़ील्ड भरें!",
        registerPasswordMismatch: "पासवर्ड मेल नहीं खाते!",
        registerUsernameTaken: "यह उपयोगकर्ता नाम पहले से उपयोग में है!", registerUsernameShort: "न्यूनतम 3 अक्षर!",
        learningStatus: "सीख रहे हैं", preparingLangs: "भाषाएं तैयार हो रही हैं...",
        resetConfirm: "सारी प्रगति रीसेट करें?", passChanged: "पासवर्ड बदल गया!",
        passShort: "न्यूनतम 3 अक्षर!", passChangeError: "पुराना पासवर्ड गलत!",
        logoutConfirm: "लॉगआउट करें?", genericError: "कोई त्रुटि हुई!",
        xpSummary: "XP कमाएं", wordSummary: "शब्द पूरे करें", allBtn: "सभी",
        guestName: "अतिथि", leaguesTitleView: "लीग और उपलब्धियां", settingsTitleView: "ऐप सेटिंग्स",
        errorMapLoad: "त्रुटि: मानचित्र लोड नहीं हो सका।", errorWordLoad: "त्रुटि: शब्द डेटा लोड नहीं हो सका।",
        guidebookBtn: "गाइड", preparingMap: "तैयारी...", closeBtn: "बंद करें",
        rewardClaimed: "पुरस्कार मिला! +1 दिल", authDivider: "या", comboLabel: "कॉम्बो",
        setupLanguage: "भाषा", viewAll: "सभी", locale: "hi-IN",
        levels: { "Başlangıç": "शुरुआती", "Orta": "मध्यवर्ती", "İleri": "उन्नत", "Zayıf Yönler": "कमज़ोर बिंदु" },
        levelDescs: { "Başlangıç": "A1-A2 बुनियादी शब्दावली", "Orta": "B1-B2 मध्यवर्ती शब्द", "İleri": "C1+ उन्नत महारत" },
        leagues: ["कांस्य","रजत","स्वर्ण","प्लेटिनम","लीजेंड"],
        promotionCongrats: "बधाई हो!", promotionSub: "%s लीग में पदोन्नत!", promotionBonus: "+500 बोनस XP!",
        promotionBtn: "जारी रखें", promotionTestTitle: "%s लीग पदोन्नति परीक्षा", heartPracticeTitle: "दिल रिकवरी टेस्ट",
        langSettingsUpdate: "भाषा सेटिंग्स अपडेट हो रही हैं...", xpPopup: "+ %s XP", setupUILangLabel: "इंटरफेस भाषा",
        setupSourceLangLabel: "मातृभाषा", setupTargetLangLabel: "सीखने का लक्ष्य",
        qTargetToSource: "इस शब्द का अर्थ क्या है?",
        currentPassPrompt: "वर्तमान पासवर्ड:",
        ttsUnavailable: "🔇 इस डिवाइस पर ऑडियो संश्लेषण समर्थित नहीं है। ऑडियो प्रश्न अक्षम।",
        emailPlc: "ईमेल",
        displayNamePlc: "प्रदर्शन नाम (वैकल्पिक)",
        createPassPlc: "पासवर्ड बनाएं (न्यूनतम 6 अक्षर)",
        googleLoginBtn: "Google के साथ जारी रखें",
        emailNotVerified: "आपका ईमेल सत्यापित नहीं है। कृपया अपना इनबॉक्स जांचें।",
        emailVerificationSent: "सत्यापन ईमेल भेजा गया! सत्यापित करें फिर साइन इन करें।",
        googlePopupClosed: "Google साइन-इन रद्द किया गया।",
        googleAccountConflict: "यह ईमेल किसी अन्य साइन-इन विधि से पंजीकृत है।"
    },
    nl: {
        welcomeTitle: "De leukste manier om talen te leren",
        welcomePara: "Onthoud meer dan 1000 essentiële woorden met een gamified ervaring.",
        startBtn: "Laten we beginnen", backBtn: "Terug", viewTitleLevels: "Niveau selecteren",
        navLearn: "LEREN", navPractice: "OEFENING", navLeagues: "LIGA'S", navSettings: "INSTELLINGEN",
        leagueTitle: "LIGA REIS", accuracy: "Gemiddelde Nauwkeurigheid", totalWork: "Totale Studietijd",
        strongestLevel: "Sterkste Niveau", highScore: "HOOGSTE SCORE", completedSessions: "VOLTOOIDE SESSIES",
        learningAnalysis: "LEERANALYSE", personalRecords: "PERSOONLIJKE RECORDS",
        accountManagement: "ACCOUNTBEHEER", session: "Sessie", logout: "UITLOGGEN",
        changePass: "WACHTWOORD WIJZIGEN", changePassDesc: "Werk uw accountbeveiliging bij.",
        accountAndData: "ACCOUNT & GEGEVENS", clearProgress: "Voortgang Wissen",
        clearDesc: "Al uw gegevens worden permanent gereset.", resetBtn: "RESETTEN",
        totalAchievement: "Totale Voortgang", progress: "Voortgang",
        courseCustomTitle: "Leerpad Aanpassen", courseNativeTitle: "1. Moedertaal Selecteren",
        courseTargetTitle: "2. Doeltaal Selecteren",
        progressSavedInfo: "Uw voortgang wordt onafhankelijk opgeslagen voor elk taalpaar.",
        skipBtn: "OVERSLAAN", checkBtn: "CONTROLEREN", streakLabel: "Dagelijkse Reeks",
        totalXpLabel: "Totaal XP", learnedLabel: "Geleerde Woorden",
        wordNotFoundError: "Fout: Geen woorden gevonden!", quizStartError: "Quiz kon niet starten. Ververs de pagina.",
        resultsError: "Berekeningsfout, maar voortgang opgeslagen.", initError: "App kon niet starten:",
        passMismatch: "Wachtwoorden komen niet overeen!", passUpdateSuccess: "Wachtwoord bijgewerkt!",
        wordDataError: "Woordgegevens niet gevonden.", preparingLangsError: "Controleer uw verbinding.",
        testCompleted: "Test Voltooid! Uw Niveau:", minAbbr: "min",
        promoteDesc: "Verdien meer XP om gepromoveerd te worden.", noRecordsMsg: "Nog geen records.",
        accuracySmall: "Nauwkeurigheid", newPassPrompt: "Nieuw wachtwoord:", confirmPassPrompt: "Bevestig:",
        leagueInPrefix: "U BEVINDT ZICH IN DE", leagueInSuffix: "LIGA",
        leagueLegendaryTop: "U STAAT AAN DE TOP VAN DE LEGENDARISCHE LIGA!",
        leagueNextReqPrefix: "U heeft", leagueNextReqSuffix: "meer XP nodig voor Liga", leagueNextReqMid: ".",
        mapPreparing: "Kaart Voorbereiden...", mapAdapting: "Globale Motor past inhoud aan...",
        levelNotReady: "Niveau Nog Niet Klaar", levelNoContent: "geen inhoud gevonden.",
        unitLevelPrefix: "Eenheid", unitLevelBasics: "Niveau Basis",
        newPassPlaceholder: "Nieuw wachtwoord", confirmPassPlaceholder: "Bevestig wachtwoord",
        settingsTitle: "APP INSTELLINGEN", autoPlay: "Audio Auto-Afspelen",
        autoPlayDesc: "Uitspraak automatisch afspelen.", language: "Taalvoorkeuren",
        sourceLangLabel: "Uw Moedertaal", targetLangLabel: "Te Leren Taal",
        footerText: "Overwin taalbarrières met LinguDeep.",
        setupTitle: "Taalmotor Instellen", setupDesc: "Kies uw talen.", setupBtn: "BEGIN DE REIS",
        placementTitle: "Plaatsingstest", placementDesc: "Beste leerpad voorbereiden...",
        authTag: "Veilige Verbinding", authTitle: "LinguDeep", authDesc: "De toekomst van taalonderwijs",
        loginBtn: "INLOGGEN", registerBtn: "REGISTREREN", newAccount: "Nieuw Account Aanmaken",
        alreadyAccount: "Ik Heb Al een Account", usernamePlc: "Gebruikersnaam",
        passwordPlc: "Wachtwoord", passConfirmPlc: "Wachtwoord Bevestigen",
        qEnToSource: "Vind de betekenis van het gemarkeerde woord:",
        qSourceToTarget: "Vind het woord dat betekent:", qAudio: "Luister en vind het woord",
        qScramble: "Vertaal deze zin:", resTitleSuccess: "🎉 HOOFDSTUK VOLTOOID!",
        resTitleFail: "💪 BLIJF DOORGAAN!", resAccuracy: "Nauwkeurigheid", resXp: "XP Verdiend",
        resDuration: "Duur", resSummaryPrefix: "U had", resSummarySuffix: "van", resSummaryMid: "woorden goed.",
        resBtn: "Terug naar Home", errWrong: "Fout! Correct is:",
        feedbackList: ["Uitstekend!","Super!","Zo doorgaan!","Schitterend!","Naar de top!","U bent geweldig!"],
        guideTipsTitle: "Tips van Vandaag", guideWordsTitle: "Sectiewoorden",
        guideCloseBtn: "BEGREPEN, LATEN WE BEGINNEN", unitLabel: "Eenheid", startTooltip: "STARTEN",
        questTitle: "Dagelijkse Doelen", questDesc: "Voltooi quests voor extra XP.",
        questXpTitle: "XP Jager", questWordTitle: "Woordmeester",
        questClaimBtn: "BELONING OPEISEN", questReward: "DAGELIJKS BADGE VERDIEND!",
        questIncomplete: "Voltooi doelen voor uw badge!",
        heartsOutTitle: "Geen Harten!", heartsOutDesc: "Oefen of wacht.",
        earnHeartsBtn: "HARTEN VERDIENEN", laterBtn: "LATER",
        weekDays: ['ZO','MA','DI','WO','DO','VR','ZA'],
        promotionReady: "KLAAR VOOR PROMOTIE!", promotionDesc: "Win het eindexamen.",
        startExam: "EXAMEN STARTEN", weakPointsTitle: "Speciale Training",
        weakPointsDesc: "Woorden die u fout had", weakPointsEmptyTitle: "Goed Gedaan!",
        weakPointsEmptyDesc: "Geen zwakke punten! Alles geleerd!", weakPointsEmptyBtn: "ANDERE NIVEAUS",
        optionPrefix: "Optie", setupWelcome: "Welkom!", setupWelcomeDesc: "Uw leerpad aanpassen",
        setupYourLang: "UW TAAL", setupTargetLang: "DOELTAAL", setupSaved: "Instellingen opgeslagen!",
        setupSameLanguage: "Talen mogen niet gelijk zijn!", setupSecurityTag: "Globale Taalmotor",
        loginLoading: "INLOGGEN...", loginError: "Ongeldige gebruikersnaam of wachtwoord!", loginSuccess: "Ingelogd!",
        loginFillAll: "Vul alle velden in!", registerLoading: "ACCOUNT AANMAKEN...",
        registerSuccess: "Account aangemaakt!", registerFillAll: "Vul alle velden in!",
        registerPasswordMismatch: "Wachtwoorden komen niet overeen!",
        registerUsernameTaken: "Gebruikersnaam al in gebruik!", registerUsernameShort: "Min. 3 tekens!",
        learningStatus: "AAN HET LEREN", preparingLangs: "Talen Voorbereiden...",
        resetConfirm: "Alle voortgang resetten?", passChanged: "Wachtwoord gewijzigd!",
        passShort: "Min. 3 tekens!", passChangeError: "Oud wachtwoord onjuist!",
        logoutConfirm: "Uitloggen?", genericError: "Er is een fout opgetreden!",
        xpSummary: "XP verdienen", wordSummary: "Woorden voltooien", allBtn: "ALLES",
        guestName: "Gast", leaguesTitleView: "Liga's en Prestaties", settingsTitleView: "Instellingen",
        errorMapLoad: "Fout: Kaart niet geladen.", errorWordLoad: "Fout: Gegevens niet geladen.",
        guidebookBtn: "GIDS", preparingMap: "Voorbereiden...", closeBtn: "SLUITEN",
        rewardClaimed: "Beloning! +1 Hart", authDivider: "of", comboLabel: "COMBO",
        setupLanguage: "TAAL", viewAll: "ALLES", locale: "nl-NL",
        levels: { "Başlangıç": "Beginner", "Orta": "Gemiddeld", "İleri": "Gevorderd", "Zayıf Yönler": "Zwakke Punten" },
        levelDescs: { "Başlangıç": "A1-A2 Basiswoordenschat", "Orta": "B1-B2 Gemiddeld", "İleri": "C1+ Gevorderd" },
        leagues: ["BRONS","ZILVER","GOUD","PLATINA","LEGENDARISCH"],
        promotionCongrats: "GEFELICITEERD!", promotionSub: "Gepromoveerd naar %s Liga!", promotionBonus: "+500 BONUS XP!",
        promotionBtn: "DOORGAAN", promotionTestTitle: "%s LIGA PROMOTIEEXAMEN", heartPracticeTitle: "Hart Hersteltest",
        langSettingsUpdate: "Instellingen bijwerken...", xpPopup: "+ %s XP", setupUILangLabel: "INTERFACETAAL",
        setupSourceLangLabel: "MOEDERTAAL", setupTargetLangLabel: "LEERDOEL",
        qTargetToSource: "Wat betekent dit woord?",
        currentPassPrompt: "Huidig wachtwoord:",
        ttsUnavailable: "🔇 Spraaksynthese niet ondersteund. Audiofragen gedeactiveerd.",
        emailPlc: "E-mail",
        displayNamePlc: "Weergavenaam (Optioneel)",
        createPassPlc: "Wachtwoord aanmaken (min. 6 tekens)",
        googleLoginBtn: "Doorgaan met Google",
        emailNotVerified: "Uw e-mail is niet geverifieerd. Controleer uw inbox.",
        emailVerificationSent: "Verificatie-e-mail verzonden! Verifieer en log dan in.",
        googlePopupClosed: "Google-aanmelding geannuleerd.",
        googleAccountConflict: "Dit e-mailadres is geregistreerd met een andere aanmeldmethode."
    },
    sv: {
        welcomeTitle: "Det roligaste sättet att lära sig språk",
        welcomePara: "Memorera över 1000 viktiga ord med en spelifierad upplevelse.",
        startBtn: "Låt oss börja", backBtn: "Tillbaka", viewTitleLevels: "Välj nivå",
        navLearn: "LÄR DIG", navPractice: "ÖVNING", navLeagues: "LIGOR", navSettings: "INSTÄLLNINGAR",
        leagueTitle: "LIGRESA", accuracy: "Genomsnittlig Noggrannhet", totalWork: "Total Studietid",
        strongestLevel: "Starkaste Nivå", highScore: "HÖGSTA POÄNG", completedSessions: "AVSLUTADE SESSIONER",
        learningAnalysis: "INLÄRNINGSANALYS", personalRecords: "PERSONLIGA REKORD",
        accountManagement: "KONTOHANTERING", session: "Session", logout: "LOGGA UT",
        changePass: "ÄNDRA LÖSENORD", changePassDesc: "Uppdatera din kontosäkerhet.",
        accountAndData: "KONTO & DATA", clearProgress: "Rensa Framsteg",
        clearDesc: "Alla dina data återställs permanent.", resetBtn: "ÅTERSTÄLL",
        totalAchievement: "Totala Framsteg", progress: "Framsteg",
        courseCustomTitle: "Anpassa Inlärningsväg", courseNativeTitle: "1. Välj Modersmål",
        courseTargetTitle: "2. Välj Målspråk",
        progressSavedInfo: "Dina framsteg sparas oberoende för varje språkpar.",
        skipBtn: "HOPPA ÖVER", checkBtn: "KONTROLLERA", streakLabel: "Daglig Serie",
        totalXpLabel: "Totalt XP", learnedLabel: "Inlärda Ord",
        wordNotFoundError: "Fel: Inga ord hittades!", quizStartError: "Quiz kunde inte starta. Uppdatera sidan.",
        resultsError: "Beräkningsfel men framsteg sparades.", initError: "Appen kunde inte starta:",
        passMismatch: "Lösenorden stämmer inte överens!", passUpdateSuccess: "Lösenord uppdaterat!",
        wordDataError: "Orddata hittades inte.", preparingLangsError: "Kontrollera din anslutning.",
        testCompleted: "Test Slutfört! Din Nivå:", minAbbr: "min",
        promoteDesc: "Tjäna mer XP för att befordras.", noRecordsMsg: "Inga rekord ännu.",
        accuracySmall: "Noggrannhet", newPassPrompt: "Nytt lösenord:", confirmPassPrompt: "Bekräfta:",
        leagueInPrefix: "DU ÄR I", leagueInSuffix: "LIGAN",
        leagueLegendaryTop: "DU ÄR I TOPPEN AV DEN LEGENDARISKA LIGAN!",
        leagueNextReqPrefix: "Du behöver", leagueNextReqSuffix: "mer XP för Ligan", leagueNextReqMid: ".",
        mapPreparing: "Förbereder Karta...", mapAdapting: "Global Motor anpassar innehåll...",
        levelNotReady: "Nivå Inte Klar Ännu", levelNoContent: "inget innehåll hittades.",
        unitLevelPrefix: "Enhet", unitLevelBasics: "Nivågrunder",
        newPassPlaceholder: "Nytt lösenord", confirmPassPlaceholder: "Bekräfta lösenord",
        settingsTitle: "APP-INSTÄLLNINGAR", autoPlay: "Auto-Spela Ljud",
        autoPlayDesc: "Spela uttal automatiskt.", language: "Språkinställningar",
        sourceLangLabel: "Ditt Modersmål", targetLangLabel: "Språk att Lära",
        footerText: "Övervinn språkbarriärer med LinguDeep.",
        setupTitle: "Ställ In Språkmotor", setupDesc: "Välj dina språk.", setupBtn: "BÖRJA RESAN",
        placementTitle: "Placeringstest", placementDesc: "Förbereder bästa inlärningsväg...",
        authTag: "Säker Anslutning", authTitle: "LinguDeep", authDesc: "Framtiden för språkinlärning",
        loginBtn: "LOGGA IN", registerBtn: "REGISTRERA", newAccount: "Skapa Nytt Konto",
        alreadyAccount: "Jag Har Redan ett Konto", usernamePlc: "Användarnamn",
        passwordPlc: "Lösenord", passConfirmPlc: "Bekräfta Lösenord",
        qEnToSource: "Hitta betydelsen av det markerade ordet:",
        qSourceToTarget: "Hitta ordet som betyder:", qAudio: "Lyssna och hitta ordet",
        qScramble: "Översätt denna mening:", resTitleSuccess: "🎉 KAPITEL SLUTFÖRT!",
        resTitleFail: "💪 FORTSÄTT KÄMPA!", resAccuracy: "Noggrannhet", resXp: "XP Tjänat",
        resDuration: "Varaktighet", resSummaryPrefix: "Du fick", resSummarySuffix: "av", resSummaryMid: "ord rätt.",
        resBtn: "Tillbaka till Hem", errWrong: "Fel! Rätt är:",
        feedbackList: ["Utmärkt!","Bra!","Fortsätt!","Suveränt!","Till toppen!","Du är i elden!"],
        guideTipsTitle: "Dagens Läringstips", guideWordsTitle: "Avsnittsord",
        guideCloseBtn: "FÖRSTÅTT, LÅT OSS BÖRJA", unitLabel: "Enhet", startTooltip: "STARTA",
        questTitle: "Dagliga Mål", questDesc: "Slutför uppdrag för extra XP.",
        questXpTitle: "XP Jägare", questWordTitle: "Ordmästare",
        questClaimBtn: "HÄMTA BELÖNING", questReward: "DAGLIGT MÄRKE FÖRTJÄNAT!",
        questIncomplete: "Slutför mål för ditt märke!",
        heartsOutTitle: "Inga Hjärtan!", heartsOutDesc: "Öva eller vänta.",
        earnHeartsBtn: "TJÄNA HJÄRTAN", laterBtn: "SENARE",
        weekDays: ['SÖN','MÅN','TIS','ONS','TOR','FRE','LÖR'],
        promotionReady: "REDO FÖR BEFORDRAN!", promotionDesc: "Vinn slutprovet.",
        startExam: "STARTA PROV", weakPointsTitle: "Specialträning",
        weakPointsDesc: "Ord du hade fel", weakPointsEmptyTitle: "Bra jobbat!",
        weakPointsEmptyDesc: "Inga svagheter! Du har lärt dig allt!", weakPointsEmptyBtn: "ANDRA NIVÅER",
        optionPrefix: "Alternativ", setupWelcome: "Välkommen!", setupWelcomeDesc: "Låt oss anpassa din inlärningsväg",
        setupYourLang: "DITT SPRÅK", setupTargetLang: "MÅLSPRÅK", setupSaved: "Inställningar sparade!",
        setupSameLanguage: "Språken kan inte vara desamma!", setupSecurityTag: "Global Språkmotor",
        loginLoading: "LOGGAR IN...", loginError: "Ogiltigt användarnamn eller lösenord!", loginSuccess: "Inloggad!",
        loginFillAll: "Fyll i alla fält!", registerLoading: "SKAPAR KONTO...",
        registerSuccess: "Konto skapat!", registerFillAll: "Fyll i alla fält!",
        registerPasswordMismatch: "Lösenorden stämmer inte överens!",
        registerUsernameTaken: "Användarnamnet är redan taget!", registerUsernameShort: "Min. 3 tecken!",
        learningStatus: "LÄRANDE", preparingLangs: "Förbereder Språk...",
        resetConfirm: "Återställa alla framsteg?", passChanged: "Lösenord ändrat!",
        passShort: "Min. 3 tecken!", passChangeError: "Gammalt lösenord felaktigt!",
        logoutConfirm: "Logga ut?", genericError: "Ett fel uppstod!",
        xpSummary: "Tjäna XP", wordSummary: "Slutför Ord", allBtn: "ALLA",
        guestName: "Gäst", leaguesTitleView: "Ligor och Prestationer", settingsTitleView: "Inställningar",
        errorMapLoad: "Fel: Karta kunde inte laddas.", errorWordLoad: "Fel: Data kunde inte laddas.",
        guidebookBtn: "GUIDE", preparingMap: "Förbereder...", closeBtn: "STÄNG",
        rewardClaimed: "Belöning! +1 Hjärta", authDivider: "eller", comboLabel: "KOMBO",
        setupLanguage: "SPRÅK", viewAll: "ALLA", locale: "sv-SE",
        levels: { "Başlangıç": "Nybörjare", "Orta": "Mellannivå", "İleri": "Avancerad", "Zayıf Yönler": "Svaga Punkter" },
        levelDescs: { "Başlangıç": "A1-A2 Grundordförråd", "Orta": "B1-B2 Mellannivå", "İleri": "C1+ Avancerad" },
        leagues: ["BRONS","SILVER","GULD","PLATINA","LEGENDARISK"],
        promotionCongrats: "GRATTIS!", promotionSub: "Befordrad till %s Ligan!", promotionBonus: "+500 BONUS XP!",
        promotionBtn: "FORTSÄTT", promotionTestTitle: "%s LIGAN BEFORDRINGSPROV", heartPracticeTitle: "Hjärta Återhämtningstest",
        langSettingsUpdate: "Uppdaterar inställningar...", xpPopup: "+ %s XP", setupUILangLabel: "GRÄNSSNITTSSPRÅK",
        setupSourceLangLabel: "MODERSMÅL", setupTargetLangLabel: "INLÄRNINGSMÅL",
        qTargetToSource: "Vad betyder detta ord?",
        currentPassPrompt: "Nuvarande lösenord:",
        ttsUnavailable: "🔇 Talsyntes stöds inte på denna enhet. Audiofrågor inaktiverade.",
        emailPlc: "E-post",
        displayNamePlc: "Visningsnamn (Valfritt)",
        createPassPlc: "Skapa lösenord (min. 6 tecken)",
        googleLoginBtn: "Fortsätt med Google",
        emailNotVerified: "Din e-post är inte verifierad. Kontrollera din inkorg.",
        emailVerificationSent: "Verifieringsmail skickat! Verifiera och logga sedan in.",
        googlePopupClosed: "Google-inloggning avbröts.",
        googleAccountConflict: "Den här e-posten är registrerad med en annan inloggningsmetod."
    }
};

class LinguPro {
    constructor() {
        this.currentUser = localStorage.getItem('linguDeep_currentUser');
        const storageKey = this.currentUser ? `linguDeep_stats_${this.currentUser}` : 'linguDeep_pro_stats_v5';

        this.stats = JSON.parse(localStorage.getItem(storageKey)) || {
            isPromotionReady: false,
            hearts: 5,
            lastHeartRefill: Date.now()
        };

        // Detect browser language
        const browserLang = navigator.language.split('-')[0]; // e.g., 'en', 'tr', 'es'
        const supportedLangs = ['en', 'tr', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ko', 'ar', 'nl', 'hi', 'pl', 'sv', 'no', 'da', 'fi'];
        const detectedLang = supportedLangs.includes(browserLang) ? browserLang : 'en';

        console.log('Browser Language:', navigator.language, '→ Detected:', detectedLang);

        this.settings = JSON.parse(localStorage.getItem('linguDeep_pro_settings')) || {
            autoPlay: true,
            isDarkMode: true,
            uiLang: detectedLang,
            sourceLang: detectedLang,
            targetLang: detectedLang === 'en' ? 'es' : 'en' // If source is English, learn Spanish; otherwise learn English
        };

        // Initialize missing settings
        if (!this.settings.uiLang) this.settings.uiLang = detectedLang;
        if (!this.settings.sourceLang) this.settings.sourceLang = detectedLang;
        if (!this.settings.targetLang) this.settings.targetLang = detectedLang === 'en' ? 'es' : 'en';

        // Set locale based on uiLang (Default to English)
        this.locale = UI_LOCALES[this.settings.uiLang] || UI_LOCALES.en;

        // Session-based Cache for performance
        this.chapterCache = {};

        if (this.stats.hearts === undefined) this.stats.hearts = 5;
        if (!this.stats.lastHeartRefill) this.stats.lastHeartRefill = Date.now();
        if (!this.stats.courseProgress) this.stats.courseProgress = {};
        const courseId = `${this.settings.sourceLang}_${this.settings.targetLang}`;

        // AUTO-CLEAR CACHE IF LANGUAGE CHANGED
        const lastCourseId = localStorage.getItem('lastCourseId');
        if (lastCourseId && lastCourseId !== courseId) {
            console.log(`Language changed: ${lastCourseId} → ${courseId}. Clearing translation cache...`);

            // Clear memory cache
            if (this._translationCache) this._translationCache.clear();

            // Clear localStorage translation cache
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('trans_v')) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(k => localStorage.removeItem(k));
            console.log(`Cleared ${keysToRemove.length} cached translations.`);
        }
        localStorage.setItem('lastCourseId', courseId);

        if (!this.stats.courseProgress[courseId]) {
            this.stats.courseProgress[courseId] = {
                completedChapters: []
            };
        }

        // Migration: Move old global progress to current course if it exists
        if (this.stats.completedChapters && this.stats.completedChapters.length > 0) {
            if (this.stats.courseProgress[courseId].completedChapters.length === 0) {
                this.stats.courseProgress[courseId].completedChapters = [...this.stats.completedChapters];
            }
            // Clear legacy data so it doesn't "infect" other new courses
            delete this.stats.completedChapters;
            setTimeout(() => this.save(), 100); // Save after initialization
        }

        // Point this.completedChapters to the correct course
        this.completedChapters = this.stats.courseProgress[courseId].completedChapters;

        // Data Normalization for the current course
        this.completedChapters = [...new Set(this.completedChapters
            .map(id => Number(id))
            .filter(id => !isNaN(id)))];
        this.stats.courseProgress[courseId].completedChapters = this.completedChapters;
        if (!this.stats.xp) this.stats.xp = 0;
        if (!this.stats.streak) this.stats.streak = 1;
        if (!this.stats.lastVisit) this.stats.lastVisit = new Date().toDateString();
        if (!this.stats.currentLeague) this.stats.currentLeague = 0;
        if (!this.stats.dailyQuests) this.stats.dailyQuests = { xpEarned: 0, wordsCompleted: 0, claimed: false };
        if (!this.stats.mistakes) this.stats.mistakes = [];
        if (!this.stats.records) this.stats.records = [];
        if (!this.stats.dailyXp) this.stats.dailyXp = {};
        if (!this.stats.totalTime) this.stats.totalTime = 0;
        if (!this.stats.sentenceCache) this.stats.sentenceCache = {};

        this.current = {
            level: null,
            chapter: null,
            words: [],
            index: 0,
            correct: 0,
            isLocked: false,
            xpEarned: 0,
            startTime: null,
            combo: 0,
            isLeagueChallenge: false
        };

        this.isMapLoading = false;

        this.placement = {
            questions: [],
            currentIndex: 0,
            correct: 0
        };

        this.chapterCache = {};
        this.ttsAvailable = null; // null=unknown, true=ok, false=unavailable
        this._probeTTS();
        this.bootSemanticEngine(); // Dynamic Expansion
    }

    _probeTTS() {
        if (!window.speechSynthesis) { this.ttsAvailable = false; return; }
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) { this.ttsAvailable = true; return; }
        let probeCount = 0;
        const interval = setInterval(() => {
            probeCount++;
            const v = window.speechSynthesis.getVoices();
            if (v.length > 0) {
                clearInterval(interval);
                this.ttsAvailable = true;
            } else if (probeCount >= 40) {
                clearInterval(interval);
                this.ttsAvailable = false;
                console.warn('TTS unavailable: no voices found. Audio questions disabled.');
            }
        }, 100);
    }

    bootSemanticEngine() {
        if (!LinguPro.SEMANTIC_LISTS || !WORDS_DATA) return;
        console.log("Strategic Engine: Booting Semantic Mesh...");
        Object.entries(WORDS_DATA).forEach(([level, chapters]) => {
            chapters.forEach(ch => {
                const inferredType = this.getWordType(null, null, false, ch.title);
                if (inferredType && inferredType !== 'noun' && inferredType !== 'adjective') {
                    if (!LinguPro.SEMANTIC_LISTS[inferredType]) LinguPro.SEMANTIC_LISTS[inferredType] = [];
                    ch.words.forEach(w => {
                        const en = String(w.en || '').toLowerCase().trim();
                        const tr = String(w.tr || '').toLowerCase().trim();
                        if (en && !LinguPro.SEMANTIC_LISTS[inferredType].includes(en)) LinguPro.SEMANTIC_LISTS[inferredType].push(en);
                        if (tr && !LinguPro.SEMANTIC_LISTS[inferredType].includes(tr)) LinguPro.SEMANTIC_LISTS[inferredType].push(tr);
                    });
                }
            });
        });
        console.log("Strategic Engine: Mesh Ready.");
    }

    safeLowerCase(str, lang) {
        if (!str) return "";
        const l = lang || (this.settings ? this.settings.uiLang : 'en');
        return String(str).toLocaleLowerCase(l === 'tr' ? 'tr' : 'en');
    }

    safeUpperCase(str, lang) {
        if (!str) return "";
        const l = lang || (this.settings ? this.settings.uiLang : 'en');
        return String(str).toLocaleUpperCase(l === 'tr' ? 'tr' : 'en');
    }

    toTitleCase(str, lang) {
        if (!str) return "";
        const l = lang || (this.settings ? this.settings.uiLang : 'en');
        const s = String(str);
        return s.charAt(0).toLocaleUpperCase(l) + s.slice(1);
    }

    _upper(str) {
        return String(str || '').toLocaleUpperCase(this.settings ? (this.settings.uiLang || 'en') : 'en');
    }

    init() {
        // 1. Identify Elements
        this.elements = {
            learnedCount: document.getElementById('learnedCount'),
            totalProgress: document.getElementById('totalProgress'),
            streakCount: document.getElementById('streakCount'),
            totalXP: document.getElementById('totalXP'),
            welcomeView: document.getElementById('welcomeView'),
            levelView: document.getElementById('levelView'),
            chapterView: document.getElementById('chapterView'),
            navigationHeader: document.getElementById('navigationHeader'),
            viewTitle: document.getElementById('viewTitle'),
            learnModal: document.getElementById('learnModal'),
            resultsModal: document.getElementById('resultsModal'),
            guidebookModal: document.getElementById('guidebookModal'),
            guidebookContent: document.getElementById('guidebookContent'),
            closeGuidebookBtn: document.getElementById('closeGuidebookBtn'),
            questsModal: document.getElementById('questsModal'),
            leaguesView: document.getElementById('leaguesView'),
            settingsView: document.getElementById('settingsView'),
            bestXp: document.getElementById('bestXp'),
            totalSessions: document.getElementById('totalSessions'),
            leagueProgressFill: document.getElementById('leagueProgressFill'),
            leaguePercent: document.getElementById('leaguePercent'),
            questionText: document.getElementById('questionText'),
            optionsGrid: document.getElementById('optionsGrid'),
            resultsContent: document.getElementById('resultsContent'),
            courseSwitcher: document.getElementById('courseSwitcher'),
            totalProgressFill: document.getElementById('totalProgressFill'),
            quizProgressBar: document.getElementById('quizProgressBar'),
            backBtn: document.getElementById('backBtn'),
            ttsBtn: document.getElementById('ttsBtn'),
            autoPlayToggle: document.getElementById('autoPlayToggle'),
            themeToggle: document.getElementById('themeToggle'),
            sidebar: document.querySelector('.sidebar'),
            leagueTitle: document.getElementById('leagueTitle'),
            leagueStatusText: document.getElementById('leagueStatusText'),
            weekChart: document.getElementById('weekChart'),
            strongestLevel: document.getElementById('strongestLevel'),
            avgAccuracy: document.getElementById('avgAccuracy'),
            totalTime: document.getElementById('totalTime'),
            personalRecordsList: document.getElementById('personalRecordsList'),
            userLeagueXp: document.getElementById('userLeagueXp'),
            comboBadge: document.getElementById('comboBadge'),
            comboCount: document.getElementById('comboCount'),
            quizFeedback: document.getElementById('quizFeedback'),
            skipBtn: document.getElementById('skipBtn'),
            promotionModal: document.getElementById('promotionModal'),
            livesCount: document.getElementById('livesCount'),
            livesDisplay: document.getElementById('livesDisplay'),
            scrambleArea: document.getElementById('scrambleArea'),
            scrambleTarget: document.getElementById('scrambleTarget'),
            scrambleOptions: document.getElementById('scrambleOptions'),
            checkScrambleBtn: document.getElementById('checkScrambleBtn'),
            sourceLangSelect: document.getElementById('sourceLangSelect'),
            targetLangSelect: document.getElementById('targetLangSelect'),
            uiLangSelect: document.getElementById('uiLangSelect'),
            languageSetupModal: document.getElementById('languageSetupModal'),
            setupUILang: document.getElementById('setupUILang'),
            setupSourceLang: document.getElementById('setupSourceLang'),
            setupTargetLang: document.getElementById('setupTargetLang'),
            confirmLanguageBtn: document.getElementById('confirmLanguageBtn')
        };

        // 2. Prep Modals (Move to body and hide)
        const modalsToMove = ['learnModal', 'resultsModal', 'questsModal', 'guidebookModal', 'promotionModal', 'authModal', 'placementModal', 'languageSetupModal'];
        modalsToMove.forEach(id => {
            const modal = document.getElementById(id);
            if (modal) {
                document.body.appendChild(modal);
                modal.style.display = 'none';
            }
        });

        // SAFETY: Hide app shell by default until ready
        const appShell = document.getElementById('appShell');
        if (appShell) appShell.style.display = 'none';

        // GLOBAL DISTRACTOR HISTORY (Prevent repeats across entire session)
        this.globalSeenDistractors = new Set();

        // 3. MANDATORY LANGUAGE SETUP CHECK (Absolute Priority)
        this.languageSetupDone = localStorage.getItem('linguDeep_languageSetupDone') === 'true';
        if (!this.languageSetupDone) {
            this.setupLanguageSetupListeners();
            this.showLanguageSetup();
            return;
        }

        // 4. AUTH & SESSION
        this.applyLocalization();
        this.setupEventListeners();
        this.setupAccountListeners();
        this.setupAuthListeners();

        try {
            this.updateStatsUI();
            this.checkStreak();
            this.loadSettings();
            this.setupSettingsListeners();
            this.setupLanguageSetupListeners();
        } catch (e) {
            console.warn("Stats/Settings load failure:", e);
        }

        this.setupFirebaseAuthStateListener();
        // INJECT CRITICAL CSS FIXES (Force Load)
        this.injectCriticalFixes();
    }

    injectCriticalFixes() {
        const isMobile = window.innerWidth < 768; // Simple check

        const style = document.createElement('style');
        style.innerHTML = `
            /* GLOBAL FIXES */
            .option-btn, .placement-option-btn, .scramble-word {
                word-wrap: break-word !important;
                display: flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                text-align: left !important;
                font-size: 1.6rem !important;
                line-height: 1.3 !important;
                overflow: hidden !important;
                padding: 15px 20px !important;
                min-height: 75px !important;
                gap: 15px !important;
                border-radius: 15px !important;
            }

            .option-dot {
                width: 40px !important;
                height: 40px !important;
                min-width: 40px !important;
                font-size: 1.2rem !important;
                font-weight: bold !important;
                background: rgba(255, 255, 255, 0.15) !important;
                border-radius: 10px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
            }

            /* MOBILE NATIVE MODE */
            @media (max-width: 768px) {
                /* Font Size: Maximized for Mobile */
                .option-btn, .placement-option-btn, .scramble-word {
                    font-size: 1.5rem !important; 
                }

                /* LAYOUT RESET */
                #appShell { flex-direction: column !important; width: 100vw !important; height: 100vh !important; padding: 0 !important; background: #1a1a2e !important; }
                #sidebar, .sidebar, .left-panel, .user-panel, .daily-quests-panel { display: none !important; }

                /* TOP BAR (WIDGETS) VISIBLE */
                .widgets-area, .top-stats {
                    display: flex !important;
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 60px !important;
                    z-index: 9999 !important;
                    background: #1a1a2e !important;
                    padding: 5px 15px !important;
                    border-bottom: 2px solid rgba(255,255,255,0.1) !important;
                    flex-direction: row !important;
                    justify-content: space-between !important;
                    align-items: center !important;
                }
                
                /* MAIN CONTENT PADDING FOR BAR */
                .main-content {
                    width: 100% !important;
                    height: calc(100vh - 60px) !important;
                    margin-top: 60px !important; /* PUSH DOWN */
                    padding: 15px !important;
                    overflow-y: auto !important;
                    border-radius: 0 !important;
                }

                /* HIDE DUPLICATE HEADER INSIDE MAIN */
                #navigationHeader { display: none !important; }

                /* QUIZ OPTIONS - COMPACT 2x2 GRID */
                #optionsGrid, #placementOptions {
                    display: grid !important;
                    grid-template-columns: 1fr !important; /* FULL WIDTH MODE */
                    gap: 12px !important;
                    width: 100% !important;
                    margin-top: 10px !important;
                }

                .option-btn, .placement-option-btn, .scramble-word {
                    width: 100% !important;
                    min-height: 45px !important; /* Compact Height */
                    padding: 8px 4px !important;
                    font-size: 0.85rem !important; /* Compact Font */
                    margin: 0 !important;
                    line-height: 1.1 !important;
                    border-width: 1px !important; /* Thinner border */
                    box-shadow: 0 2px 0 rgba(0,0,0,0.2) !important; /* Smaller shadow */
                }
                
                /* EXCEPTION: If text is very long, maybe span full width? 
                   CSS Grid auto-flow dense can help but complex. 
                   Keeping 2x2 fixed is safer for uniformity. 
                */
            }
        `;
        document.head.appendChild(style);
        if (isMobile) document.body.classList.add('mobile-mode');
    }

    showLanguageSetup() {
        if (this.elements.languageSetupModal) {
            // Set dropdown values to detected language
            if (this.elements.setupUILang) this.elements.setupUILang.value = this.settings.uiLang;
            if (this.elements.setupSourceLang) this.elements.setupSourceLang.value = this.settings.sourceLang;
            if (this.elements.setupTargetLang) this.elements.setupTargetLang.value = this.settings.targetLang;

            // Update modal text to match UI language
            this.updateLanguageSetupModal(this.settings.uiLang);

            this.elements.languageSetupModal.style.display = 'flex';
            this.elements.languageSetupModal.style.opacity = '1';
        }
    }

    setupLanguageSetupListeners() {
        // Auto-sync UI language with source language
        if (this.elements.setupSourceLang && this.elements.setupUILang) {
            this.elements.setupSourceLang.onchange = (e) => {
                this.elements.setupUILang.value = e.target.value;
                this.updateLanguageSetupModal(e.target.value);
            };
        }

        // Update modal text when UI language changes manually
        if (this.elements.setupUILang) {
            this.elements.setupUILang.onchange = (e) => {
                this.updateLanguageSetupModal(e.target.value);
            };
        }

        if (this.elements.confirmLanguageBtn) {
            this.elements.confirmLanguageBtn.onclick = () => {
                const uiL = this.elements.setupUILang.value;
                const sL = this.elements.setupSourceLang.value;
                const tL = this.elements.setupTargetLang.value;
                this.updateLanguageSettings(uiL, sL, tL);
            };
        }

    }

    updateLanguageSetupModal(lang) {
        const L = UI_LOCALES[lang] || UI_LOCALES.en;

        // Update security tag
        const securityTag = document.querySelector('#languageSetupModal .security-tag');
        if (securityTag) {
            securityTag.innerHTML = `<i class="fas fa-globe"></i> ${L.setupSecurityTag}`;
        }

        // Update welcome text
        const welcomeTitle = document.querySelector('#languageSetupModal .auth-title');
        const welcomeDesc = document.querySelector('#languageSetupModal .auth-brand p');
        if (welcomeTitle) welcomeTitle.textContent = L.setupWelcome;
        if (welcomeDesc) welcomeDesc.textContent = L.setupWelcomeDesc;

        // Update labels
        const labels = document.querySelectorAll('#languageSetupModal label');
        if (labels[0]) labels[0].textContent = L.setupYourLang;
        if (labels[1]) labels[1].textContent = L.setupTargetLang;

        // Dynamically update dropdown options to only show ONE name (localized)
        const dropdowns = [this.elements.setupUILang, this.elements.setupSourceLang, this.elements.setupTargetLang];
        dropdowns.forEach(select => {
            if (!select) return;
            const currentVal = select.value;
            select.innerHTML = '';
            Object.entries(LANG_FLAGS).forEach(([code, data]) => {
                const opt = document.createElement('option');
                opt.value = code;
                opt.textContent = `${data.flag} ${lang === 'tr' ? data.nameTr : data.nameEn}`;
                select.appendChild(opt);
            });
            select.value = currentVal;
        });

        // Update button
        if (this.elements.confirmLanguageBtn) {
            this.elements.confirmLanguageBtn.innerHTML = `${L.setupBtn} <i class="fas fa-arrow-right" style="margin-left: 10px;"></i>`;
        }
    }

    updateLanguageSettings(uiL, sL, tL) {
        const L = UI_LOCALES[uiL] || UI_LOCALES.en;

        if (sL === tL) {
            this.showToast(L.setupSameLanguage, "error");
            return;
        }
        this.settings.uiLang = uiL;
        this.settings.sourceLang = sL;
        this.settings.targetLang = tL;
        this.languageSetupDone = true;
        localStorage.setItem('linguDeep_languageSetupDone', 'true');
        this.save();
        this.saveSettings();
        this.showToast(L.langSettingsUpdate || "Updating language settings...", "success");
        setTimeout(() => location.reload(), 800);
    }

    // --- UNIVERSAL WORD MAPPER (The Heart of Global Engine) ---
    async getProcessedChapter(chapter) {
        if (!chapter) return null;
        const sL = this.settings.sourceLang;
        const tL = this.settings.targetLang;

        // Session-based Cache for performance
        if (!this.chapterCache) this.chapterCache = {};
        const cacheKey = `chap_${chapter.id}_${sL}_${tL}`;
        if (this.chapterCache[cacheKey]) return this.chapterCache[cacheKey];

        // Clone chapter to avoid modifying original WORDS_DATA
        const processedChapter = JSON.parse(JSON.stringify(chapter));

        // If it's already EN->TR and settings match, return clone (Safety first)
        if (sL === 'tr' && tL === 'en') {
            this.chapterCache[cacheKey] = processedChapter;
            return processedChapter;
        }

        // 1. Translate Title & Tips if needed
        processedChapter.title = await this.quickTranslate(processedChapter.title, 'tr', sL);

        // 2. Translate Words — fire target + meaning translations in parallel per word
        const wordPromises = chapter.words.map(async (w) => {
            // Fire target word and meaning bridge translation in parallel (Round 1)
            const [finalTargetRaw, bridgeTransRaw] = await Promise.all([
                tL !== 'en' ? this.quickTranslate(w.en, 'en', tL) : Promise.resolve(w.en),
                sL !== 'tr' ? this.quickTranslate(w.en, 'en', sL) : Promise.resolve(null)
            ]);

            // Target Word
            let finalTarget = finalTargetRaw;
            if (tL !== 'en') {
                if (!finalTarget || finalTarget.toLowerCase().trim() === w.en.toLowerCase().trim()) return null;
            }

            // Meaning Word
            let finalMeaning = w.tr;
            if (sL !== 'tr') {
                const bridgeTrans = bridgeTransRaw;
                if (bridgeTrans && bridgeTrans.toLowerCase().trim() !== w.en.toLowerCase().trim()) {
                    finalMeaning = bridgeTrans;
                } else {
                    // Fallback: tr → sL (sequential only when bridge fails)
                    const trTrans = await this.quickTranslate(w.tr, 'tr', sL);
                    if (!trTrans || trTrans.toLowerCase().trim() === w.tr.toLowerCase().trim()) return null;
                    finalMeaning = trTrans;
                }
            }

            // 3. Handle Examples
            let finalExample = w.example;
            if (!finalExample && typeof SENTENCES_CURATED !== 'undefined') {
                const curated = SENTENCES_CURATED[w.en.toLowerCase().trim()];
                if (curated) finalExample = JSON.parse(JSON.stringify(curated));
            }

            if (finalExample) {
                finalExample = JSON.parse(JSON.stringify(finalExample));
                // Fire both example translations in parallel (Round 2)
                const [tE, sE] = await Promise.all([
                    tL !== 'en' ? this.quickTranslate(finalExample.en, 'en', tL) : Promise.resolve(finalExample.en),
                    sL !== 'tr' ? this.quickTranslate(finalExample.tr, 'tr', sL) : Promise.resolve(finalExample.tr)
                ]);
                if (tL !== 'en') {
                    if (!tE) finalExample = null; else finalExample.en = tE;
                }
                if (finalExample && sL !== 'tr') {
                    if (!sE) finalExample = null; else finalExample.tr = sE;
                }
            }

            return {
                en: finalTarget,
                tr: finalMeaning,
                original: w.en,
                originalTr: w.tr,
                example: finalExample
            };
        });

        const wordsResult = await Promise.all(wordPromises);
        processedChapter.words = wordsResult.filter(w => w !== null); // STRICT FILTER
        this.chapterCache[cacheKey] = processedChapter;
        return processedChapter;
    }

    async quickTranslate(text, from, to) {
        if (!text || from === to) return text;

        // SESSION MEMORY CACHE (ultra-fast!)
        if (!this._translationCache) this._translationCache = new Map();
        const memKey = `${text}_${from}_${to}`;
        if (this._translationCache.has(memKey)) return this._translationCache.get(memKey);

        // CACHE VERSION 6
        const cacheKey = `trans_v6_${text}_${from}_${to}`;
        const cached = localStorage.getItem(cacheKey);
        if (cached && !cached.includes("MYMEMORY WARNING")) {
            this._translationCache.set(memKey, cached);
            return cached;
        }

        // IN-FLIGHT COALESCING — reuse the same promise if already fetching
        if (!this._pendingTranslations) this._pendingTranslations = new Map();
        if (this._pendingTranslations.has(memKey)) return this._pendingTranslations.get(memKey);

        const promise = (async () => {
            try {
                const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`);
                const data = await res.json();
                let result = data.responseData ? data.responseData.translatedText : null;

                if (result && result.includes("MYMEMORY WARNING")) {
                    try {
                        const gRes = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`);
                        const gData = await gRes.json();
                        if (gRes.ok && gData && gData[0]?.[0]?.[0]) result = gData[0][0][0];
                        else return null;
                    } catch (e) { return null; }
                }

                if (result) {
                    const s = text.toLowerCase().trim();
                    const r = String(result).toLowerCase().trim();
                    const universals = ['taxi', 'pizza', 'hotel', 'internet', 'radio', 'video', 'sport', 'tennis', 'football'];

                    // 1. SCRIPT SANITY CHECK
                    if (!this.isValidForLanguage(result, to)) {
                        if (text.includes('%s')) return text;
                        return null;
                    }

                    // 2. ABSOLUTE LEAK PROTECTION
                    if (s === r && to !== 'en' && s.length > 2 && !universals.includes(s)) {
                        if (from === 'en' || from === 'tr') return null;
                    }

                    // Save to BOTH caches
                    localStorage.setItem(cacheKey, result);
                    this._translationCache.set(memKey, result);
                    return result;
                }
            } catch (e) { console.warn("Translate error:", e); }
            return null;
        })();

        this._pendingTranslations.set(memKey, promise);
        promise.finally(() => this._pendingTranslations.delete(memKey));
        return promise;
    }

    async fetchOnlineDistractors(word, lang = 'en') {
        if (!navigator.onLine) return [];

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000); // Increased to 15s

            const encodedWord = encodeURIComponent(word.toLowerCase());
            const candidates = [];
            const seen = new Set();
            seen.add(word.toLowerCase());

            // --- ULTRA-SEMANTIC API STRATEGY ---
            // We're maximizing semantic coverage by querying multiple relationships

            // 1. Meaning-Like (Core Semantic Similarity) - EXPANDED TO 100
            const meaningTask = fetch(`https://api.datamuse.com/words?ml=${encodedWord}&max=100`, { signal: controller.signal })
                .then(res => res.json()).catch(() => null);

            // 2. Synonyms + Related (Lexical Relations) - EXPANDED TO 100
            const lexicalTask = fetch(`https://api.datamuse.com/words?rel_syn=${encodedWord}&rel_trg=${encodedWord}&max=100`, { signal: controller.signal })
                .then(res => res.json()).catch(() => null);

            // 3. Taxonomy (Hypernyms + Hyponyms) - EXPANDED TO 100
            const taxonomyTask = fetch(`https://api.datamuse.com/words?rel_gen=${encodedWord}&rel_spc=${encodedWord}&max=100`, { signal: controller.signal })
                .then(res => res.json()).catch(() => null);

            const [meaningData, lexicalData, taxonomyData] = await Promise.all([
                meaningTask, lexicalTask, taxonomyTask
            ]);
            clearTimeout(timeoutId);

            // Process in order of semantic priority
            const processResults = (data, baseScore) => {
                if (data && Array.isArray(data)) {
                    data.forEach(item => {
                        const w = item.word.toLowerCase();
                        if (w !== word.toLowerCase() && w.length > 2 && !seen.has(w) && /^[a-z\s-]+$/.test(w)) {
                            const dmScore = item.score || 0;
                            const finalScore = baseScore + (dmScore > 50000 ? 2000 : dmScore > 10000 ? 1000 : 0);
                            candidates.push({ word: w, score: finalScore, verified: true });
                            seen.add(w);
                        }
                    });
                }
            };

            // Priority 1: Meaning-like (Most semantically similar)
            processResults(meaningData, 5000);

            // Priority 2: Lexical relations (Synonyms are gold)
            processResults(lexicalData, 4500);

            // Priority 3: Taxonomy (Same category)
            processResults(taxonomyData, 4000);



            return candidates.sort((a, b) => b.score - a.score);

        } catch (e) {
            console.warn("Global Intelligence Engine failed:", e);
            return [];
        }
    }

    detectScript(text) {
        if (!text) return 'unknown';
        const s = String(text);
        if (/[\u0600-\u06FF]/.test(s)) return 'arabic';
        if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(s)) return 'japanese';
        if (/[\u4E00-\u9FFF]/.test(s)) return 'chinese';
        if (/[\uAC00-\uD7AF]/.test(s)) return 'korean';
        if (/[\u0900-\u097F]/.test(s)) return 'devanagari';
        if (/[\u0400-\u04FF]/.test(s)) return 'cyrillic';
        if (/[a-zA-Z\u00C0-\u017F]/.test(s)) return 'latin';
        return 'unknown';
    }

    getExpectedScript(lang) {
        const scripts = {
            'ru': 'cyrillic', 'ar': 'arabic', 'ja': 'japanese', 'zh': 'chinese', 'ko': 'korean', 'hi': 'devanagari'
        };
        return scripts[lang] || 'latin';
    }

    sanitizeTranslation(text) {
        if (!text) return "";
        return String(text)
            .replace(/MyMemory/gi, '')
            .replace(/Machine Translation/gi, '')
            .replace(/Translated by/gi, '')
            .replace(/Translated with/gi, '')
            .replace(/Warning:/gi, '')
            .replace(/\[\d+\]/g, '') // Remove brackets like [1]
            .split('|')[0]
            .split('/')[0]
            .trim();
    }

    isValidForLanguage(text, lang) {
        if (!text) return false;
        const s = String(text);
        const norm = s.toLowerCase().trim();

        // AGGRESSIVE SPANISH DETECTION (prevent Spanish in non-Spanish courses)
        if (lang !== 'es') {
            const spanishPhrases = [
                'por favor', 'gracias', 'de nada', 'buenos días', 'buenas tardes',
                'buenas noches', 'hola', 'adiós', 'hasta luego', 'lo siento',
                'perdón', 'disculpe', 'muy bien', 'está bien', 'qué tal',
                'cómo estás', 'mucho gusto', 'encantado', 'señor', 'señora'
            ];

            for (const phrase of spanishPhrases) {
                if (norm.includes(phrase)) {
                    console.warn(`Spanish phrase blocked: "${phrase}" in "${text}" for lang: ${lang}`);
                    return false;
                }
            }
        }

        // 1. Numbers / Punctuation / Math signs are always allowed
        if (/^[\d\s.,!?;:%$€£()\-+*/=<>]+$/.test(s)) return true;

        const expected = this.getExpectedScript(lang);

        // 2. NON-LATIN TARGET (RU, AR, JA, etc.) 
        if (expected !== 'latin') {
            // LOOSENED FOR SENTENCES (v24): If there is significant non-latin content, allow occasional latin words
            const hasExpected = (this.detectScript(s) === expected);
            const wordCount = s.split(/\s+/).length;

            if (/[a-zA-Z]/.test(s)) {
                // v27: If it's a phrase/sentence with correct script chars, allow it 
                const hasExpectedChar = /[\u0400-\u04FF\u0600-\u06FF\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\uAC00-\uD7AF\u0900-\u097F]/.test(s);
                if (s.split(/\s+/).length > 2 && hasExpectedChar) return true;

                const universals = ['taxi', 'pizza', 'hotel', 'internet', 'video', 'radio', 'sport', 'tennis', 'football'];
                return universals.includes(norm);
            }
            // Must contain the expected script characters
            if (hasExpected) return true;
            if (expected === 'japanese' && (this.detectScript(s) === 'japanese' || this.detectScript(s) === 'chinese')) return true;
            return false;
        }

        // 3. LATIN TARGET (EN, TR, FR, ES, etc.) -> ABSOLUTELY NO NON-LATIN CHARS
        if (expected === 'latin') {
            const hasNonLatin = /[\u0400-\u04FF\u0600-\u06FF\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u4E00-\u9FFF\uAC00-\uD7AF\u0900-\u097F]/.test(s);
            return !hasNonLatin;
        }

        return true;
    }

    applyLocalization() {
        const L = this.locale;
        // Sync html lang so CSS text-transform:uppercase uses the correct locale
        document.documentElement.lang = this.settings.uiLang || 'en';
        // Navigation Icons/Text
        const navItems = {
            'navLearn': L.navLearn,
            'navPractice': L.navPractice,
            'navLeagues': L.navLeagues,
            'navSettings': L.navSettings
        };
        for (const [id, text] of Object.entries(navItems)) {
            const el = document.getElementById(id);
            if (el && el.querySelector('span')) el.querySelector('span').textContent = text;
        }

        // Welcome Hero
        const welcomeTitle = document.querySelector('#welcomeView h1');
        const welcomePara = document.querySelector('#welcomeView p');
        const startBtn = document.getElementById('bigStartBtn');
        if (welcomeTitle) welcomeTitle.textContent = L.welcomeTitle;
        if (welcomePara) welcomePara.textContent = L.welcomePara;
        if (startBtn) startBtn.textContent = L.startBtn;

        // View Titles
        if (document.getElementById('viewTitle')) document.getElementById('viewTitle').textContent = L.viewTitleLevels;
        const backBtn = document.getElementById('backBtn');
        if (backBtn) backBtn.innerHTML = `<i class="fas fa-chevron-left"></i> ${L.backBtn}`;

        // Milestone Labels
        const milestoneLabels = document.querySelectorAll('.milestone-label');
        if (milestoneLabels[0]) milestoneLabels[0].textContent = L.highScore;
        if (milestoneLabels[1]) milestoneLabels[1].textContent = L.completedSessions;

        // Stat titles
        const statItems = document.querySelectorAll('.stat-item');
        if (statItems[0]) statItems[0].title = L.streakLabel || "Streak";
        if (statItems[1]) statItems[1].title = L.totalXpLabel || "Total XP";
        if (statItems[2]) statItems[2].title = L.learnedLabel || "Learned";

        // League & Achievement Labels
        const leagueTitle = document.querySelector('.league-progression h3');
        if (leagueTitle) leagueTitle.textContent = L.leagueTitle;
        const achievementTitle = document.querySelector('#leaguesView .section-label');
        if (achievementTitle) achievementTitle.textContent = L.achievementSummaryTitle || L.navLeagues;

        // Analysis Grid
        const analysisGrid = document.querySelector('.analysis-grid');
        if (analysisGrid) {
            const labels = document.querySelectorAll('#leaguesView .section-label');
            if (labels[1]) labels[1].textContent = L.learningAnalysis;
            const h4s = analysisGrid.querySelectorAll('h4');
            if (h4s[0]) h4s[0].textContent = L.strongestLevel;
            if (h4s[1]) h4s[1].textContent = L.accuracy;
            if (h4s[2]) h4s[2].textContent = L.totalWork;
        }

        const prLabel = document.querySelectorAll('#leaguesView .section-label')[2];
        if (prLabel) prLabel.textContent = L.personalRecords;

        // Widgets
        const widgetHeaders = document.querySelectorAll('.widget-header h3');
        if (widgetHeaders[0]) widgetHeaders[0].textContent = L.questTitle;
        if (widgetHeaders[1]) widgetHeaders[1].textContent = L.progress;

        const allBtn = document.getElementById('viewAllQuests');
        if (allBtn) allBtn.textContent = L.allBtn;

        const widgetXpLabel = document.getElementById('questXpLabel');
        const widgetWordLabel = document.getElementById('questWordLabel');
        if (widgetXpLabel) widgetXpLabel.textContent = `50 ${L.xpSummary}`;
        if (widgetWordLabel) widgetWordLabel.textContent = `10 ${L.wordSummary}`;

        const claimQuestsBtn = document.getElementById('claimQuestsBtn');
        if (claimQuestsBtn) claimQuestsBtn.textContent = L.questClaimBtn;

        const widgetSpans = document.querySelectorAll('.progress-stat span');
        if (widgetSpans[0]) widgetSpans[0].textContent = L.totalAchievement;

        // Settings
        const settingsLabels = document.querySelectorAll('#settingsView .section-label');
        if (settingsLabels[0]) settingsLabels[0].textContent = L.settingsTitle;
        if (settingsLabels[1]) settingsLabels[1].textContent = L.accountManagement;
        if (settingsLabels[2]) settingsLabels[2].textContent = L.accountAndData;

        // Localize Setting Labels
        const h4Settings = document.querySelectorAll('#settingsView .setting-info h4');
        const pSettings = document.querySelectorAll('#settingsView .setting-info p');

        if (h4Settings[0]) h4Settings[0].textContent = L.autoPlay;
        if (pSettings[0]) pSettings[0].textContent = L.autoPlayDesc;

        if (h4Settings[1]) h4Settings[1].textContent = this.settings.isDarkMode ? L.settingsThemeDark : L.settingsThemeLight;
        if (pSettings[1]) pSettings[1].textContent = this.settings.isDarkMode ? L.settingsThemeDesc : L.settingsThemeLightDesc;

        if (h4Settings[2]) h4Settings[2].textContent = L.language;
        if (pSettings[2]) pSettings[2].textContent = L.setupDesc;

        // Localize Settings Sub-labels
        const settingsSubLabels = document.querySelectorAll('#settingsView .setting-sub-label');
        if (settingsSubLabels[0]) settingsSubLabels[0].textContent = L.setupUILangLabel || "INTERFACE LANGUAGE";
        if (settingsSubLabels[1]) settingsSubLabels[1].textContent = L.setupSourceLangLabel || "NATIVE LANGUAGE";
        if (settingsSubLabels[2]) settingsSubLabels[2].textContent = L.setupTargetLangLabel || "TARGET LANGUAGE";

        if (h4Settings[3]) h4Settings[3].textContent = L.session;
        if (h4Settings[4]) h4Settings[4].textContent = L.changePass;
        if (pSettings[4]) pSettings[4].textContent = L.changePassDesc;

        if (h4Settings[5]) h4Settings[5].textContent = L.clearProgress;
        if (pSettings[5]) pSettings[5].textContent = L.clearDesc;

        if (document.getElementById('logoutBtn')) document.getElementById('logoutBtn').innerHTML = `<i class="fas fa-sign-out-alt"></i> ${L.logout}`;
        if (document.getElementById('changePassBtn')) document.getElementById('changePassBtn').innerHTML = `<i class="fas fa-shield-alt"></i> ${L.changePass}`;
        if (document.getElementById('resetProgressBtn')) document.getElementById('resetProgressBtn').innerHTML = `<i class="fas fa-trash-alt"></i> ${L.resetBtn}`;

        // Language Setup Modal
        const setupBrandTitle = document.querySelector('#languageSetupModal .auth-title');
        const setupBrandDesc = document.querySelector('#languageSetupModal .auth-brand p');
        const setupConfirmBtn = document.getElementById('confirmLanguageBtn');
        const setupSectionLabels = document.querySelectorAll('#languageSetupModal label');

        if (setupBrandTitle) setupBrandTitle.textContent = L.setupWelcome;
        if (setupBrandDesc) setupBrandDesc.textContent = L.setupWelcomeDesc;
        if (setupConfirmBtn) setupConfirmBtn.innerHTML = `${L.setupBtn} <i class="fas fa-arrow-right" style="margin-left:10px;"></i>`;
        if (setupSectionLabels[0]) setupSectionLabels[0].textContent = L.setupYourLang;
        if (setupSectionLabels[1]) setupSectionLabels[1].textContent = L.setupTargetLang;

        // Auth Modal
        const authTag = document.querySelector('#authModal .security-tag');
        const authTitle = document.querySelector('#authModal .auth-title');
        const authDesc = document.querySelector('#authModal .auth-brand p');
        const loginBtnEl = document.getElementById('loginBtn');
        const registerBtnEl = document.getElementById('registerBtn');
        const showRegisterBtn = document.getElementById('showRegisterBtn');
        const backToLoginBtn = document.getElementById('backToLoginBtn');
        const authDivider = document.querySelector('#authModal .auth-divider span');

        if (authTag) authTag.innerHTML = `<i class="fas fa-shield-alt"></i> ${L.authTag}`;
        if (authTitle) authTitle.textContent = L.authTitle;
        if (authDesc) authDesc.textContent = L.authDesc;
        if (loginBtnEl) loginBtnEl.textContent = L.loginBtn;
        if (registerBtnEl) registerBtnEl.textContent = L.registerBtn;
        if (showRegisterBtn) showRegisterBtn.textContent = L.newAccount;
        if (backToLoginBtn) backToLoginBtn.textContent = L.alreadyAccount;
        if (authDivider) authDivider.textContent = L.authDivider || "or";

        // Placeholders
        if (document.getElementById('loginUsername')) document.getElementById('loginUsername').placeholder = L.usernamePlc;
        if (document.getElementById('loginPassword')) document.getElementById('loginPassword').placeholder = L.passwordPlc;
        if (document.getElementById('regUsername')) document.getElementById('regUsername').placeholder = L.usernamePlc;
        if (document.getElementById('regPassword')) document.getElementById('regPassword').placeholder = L.passwordPlc;
        if (document.getElementById('regPasswordConfirm')) document.getElementById('regPasswordConfirm').placeholder = L.passConfirmPlc;

        // Placement Modal
        const placementTitle = document.querySelector('#placementModal h2');
        const placementDesc = document.querySelector('#placementModal p');
        if (placementTitle) placementTitle.textContent = L.placementTitle;
        if (placementDesc) placementDesc.textContent = L.placementDesc;

        // Quiz Footer
        if (document.getElementById('skipBtn')) document.getElementById('skipBtn').textContent = L.skipBtn || 'SKIP';
        if (document.getElementById('checkScrambleBtn')) document.getElementById('checkScrambleBtn').textContent = L.checkBtn || 'CHECK';

        // Combo text
        if (document.getElementById('comboCount')) {
            const comboParent = document.getElementById('comboCount').parentNode;
            if (comboParent) {
                const fireIcon = comboParent.querySelector('i');
                comboParent.innerHTML = '';
                if (fireIcon) comboParent.appendChild(fireIcon);
                const countSpan = document.createElement('span');
                countSpan.id = 'comboCount';
                countSpan.textContent = this.current ? this.current.combo : '0';
                comboParent.appendChild(countSpan);
                comboParent.appendChild(document.createTextNode(' ' + (L.comboLabel || "COMBO")));
            }
        }

        this.renderCourseSwitcher();
    }

    renderCourseSwitcher() {
        if (!this.elements.courseSwitcher) return;

        const sL = this.settings.sourceLang || 'tr';
        const tL = this.settings.targetLang || 'en';
        const uiL = this.settings.uiLang || 'tr';

        const sFlag = LANG_FLAGS[sL] ? LANG_FLAGS[sL].flag : "🌐";
        const tFlag = LANG_FLAGS[tL] ? LANG_FLAGS[tL].flag : "🌐";

        // Get single name based on UI language
        const targetName = (LANG_FLAGS[tL]) ?
            (uiL === 'tr' ? LANG_FLAGS[tL].nameTr : LANG_FLAGS[tL].nameEn) :
            tL.toUpperCase();

        this.elements.courseSwitcher.innerHTML = `
            <div class="course-card" id="activeCourseCard">
                <div class="flag-pair">
                    <span class="source-flag">${sFlag}</span>
                    <span class="target-flag">${tFlag}</span>
                </div>
                <div class="course-info">
                    <span class="course-name">${targetName}</span>
                    <span class="course-status">${this.locale.learningStatus}</span>
                </div>
                <i class="fas fa-chevron-right"></i>
            </div>
        `;

        const card = document.getElementById('activeCourseCard');
        if (card) {
            card.onclick = () => this.openCourseSelectionModal();
        }
    }

    openCourseSelectionModal() {
        let overlay = document.getElementById('courseSelectionModal');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'courseSelectionModal';
            overlay.className = 'modal-overlay';
            overlay.style.zIndex = '999999';
            document.body.appendChild(overlay);
        }

        const languages = Object.entries(LANG_FLAGS).map(([code, data]) => ({
            id: code, flag: data.flag, name: data.nameTr, en: data.nameEn
        }));

        const uiL = this.settings.uiLang || 'tr';
        const L = this.locale;

        overlay.innerHTML = `
            <div class="glass animate-pop" style="max-width: 1000px; width: 95%; padding: 40px; border-radius: 40px; position: relative; max-height: 90vh; overflow-y: auto;">
                <button class="btn-icon" style="position: absolute; top: 25px; right: 25px; background: rgba(255,255,255,0.05); color: white; width: 45px; height: 45px; border-radius: 18px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.1); cursor: pointer;" onclick="document.getElementById('courseSelectionModal').style.display='none'">
                    <i class="fas fa-times"></i>
                </button>
                
                <h1 style="text-align: center; font-size: 2.2rem; font-weight: 800; margin-bottom: 30px; background: linear-gradient(135deg, #fff, #a0a0b0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    ${L.courseCustomTitle}
                </h1>

                <div style="margin-bottom: 40px;">
                    <h3 style="font-size: 1.1rem; color: var(--accent-blue); margin-bottom: 20px; letter-spacing: 1px; font-weight: 800;">
                        ${this._upper(L.courseNativeTitle)}
                    </h3>
                    <div class="course-selection-modal" style="grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));">
                        ${languages.map(lang => `
                            <div class="lang-option-card ${this.settings.sourceLang === lang.id ? 'active' : ''}" style="min-height: 120px; padding: 15px;" onclick="app.switchLanguage('source', '${lang.id}')">
                                <span class="lang-flag" style="font-size: 2.5rem;">${lang.flag}</span>
                                <span class="lang-name" style="font-size: 0.95rem;">${uiL === 'tr' ? lang.name : lang.en}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <h3 style="font-size: 1.1rem; color: var(--accent-green); margin-bottom: 20px; letter-spacing: 1px; font-weight: 800;">
                        ${this._upper(L.courseTargetTitle)}
                    </h3>
                    <div class="course-selection-modal" style="grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));">
                        ${languages.filter(l => l.id !== this.settings.sourceLang).map(lang => `
                            <div class="lang-option-card ${this.settings.targetLang === lang.id ? 'active' : ''}" style="min-height: 120px; padding: 15px;" onclick="app.switchLanguage('target', '${lang.id}')">
                                <span class="lang-flag" style="font-size: 2.5rem;">${lang.flag}</span>
                                <span class="lang-name" style="font-size: 0.95rem;">${uiL === 'tr' ? lang.name : lang.en}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <p style="text-align: center; margin-top: 30px; opacity: 0.5; font-size: 0.85rem;">
                    ${L.progressSavedInfo}
                </p>
            </div>
        `;

        overlay.style.display = 'flex';
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'all';
    }

    switchLanguage(type, langId) {
        if (type === 'source') {
            if (this.settings.sourceLang === langId) return;
            this.settings.sourceLang = langId;
            // Prevent source and target being the same
            if (this.settings.targetLang === langId) {
                this.settings.targetLang = langId === 'en' ? 'tr' : 'en';
            }
        } else {
            if (this.settings.targetLang === langId) return;
            this.settings.targetLang = langId;
        }

        // CRITICAL: Clear ALL translation caches when language changes
        if (this._translationCache) this._translationCache.clear();

        // Clear localStorage translation cache
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('trans_v')) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(k => localStorage.removeItem(k));

        this.saveSettings();

        const msg = this.locale.langSettingsUpdate || "Updating language settings...";
        this.showToast(msg, "success");

        setTimeout(() => location.reload(), 800);
    }

    hideAllModals() {
        const modalIds = ['learnModal', 'resultsModal', 'questsModal', 'guidebookModal', 'promotionModal', 'authModal', 'placementModal', 'languageSetupModal'];
        modalIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = 'none';
                el.style.opacity = '0';
                el.style.pointerEvents = 'none';
                el.style.zIndex = '';
                el.style.visibility = 'hidden';
            }
        });
    }

    setupEventListeners() {
        const bigStartBtn = document.getElementById('bigStartBtn');
        if (bigStartBtn) bigStartBtn.onclick = () => this.showLevelSelection();

        if (this.elements.backBtn) this.elements.backBtn.onclick = () => this.handleBack();

        if (this.elements.sidebar) {
            const sidebarItems = this.elements.sidebar.querySelectorAll('.nav-item');
            sidebarItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    sidebarItems.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');

                    if (item.id === 'navLearn') this.goHome();
                    else if (item.id === 'navPractice') this.showLevelSelection();
                    else if (item.id === 'navLeagues') this.showLeagues();
                    else if (item.id === 'navSettings') this.showSettings();
                });
            });
        }

        if (this.elements.ttsBtn) this.elements.ttsBtn.onclick = () => this.speakCurrentWord();

        const promoBtn = document.getElementById('startPromotionBtn');
        if (promoBtn) promoBtn.onclick = () => this.startPromotionChallenge();

        const viewAllQuests = document.getElementById('viewAllQuests');
        if (viewAllQuests) {
            viewAllQuests.onclick = (e) => {
                e.preventDefault();
                if (this.elements.questsModal) {
                    this.elements.questsModal.style.display = 'flex'; this.elements.questsModal.style.opacity = "1";
                    this.elements.questsModal.style.opacity = '1';
                    this.elements.questsModal.style.pointerEvents = 'all';
                }
            };
        }

        if (this.elements.autoPlayToggle) {
            this.elements.autoPlayToggle.onchange = (e) => this.toggleAutoPlay(e.target.checked);
        }
        if (this.elements.themeToggle) {
            this.elements.themeToggle.onchange = (e) => this.toggleTheme(e.target.checked);
        }

        const resetBtn = document.getElementById('resetProgressBtn');
        if (resetBtn) resetBtn.onclick = () => this.resetProgress();

        const closeQuests = document.getElementById('closeQuestsBtn');
        if (closeQuests) {
            closeQuests.onclick = () => {
                if (this.elements.questsModal) this.elements.questsModal.style.display = 'none';
            };
        }

        const closeLearn = document.getElementById('closeLearnBtn');
        if (closeLearn) closeLearn.onclick = () => this.hideLearn();

        const finishBtn = document.getElementById('finishResultsBtn');
        if (finishBtn) {
            finishBtn.onclick = () => {
                if (this.elements.resultsModal) this.elements.resultsModal.style.display = 'none';
            };
        }

        if (this.elements.closeGuidebookBtn) this.elements.closeGuidebookBtn.onclick = () => this.hideGuidebook();
        if (this.elements.skipBtn) this.elements.skipBtn.onclick = () => this.skipQuestion();

        window.addEventListener('resize', () => {
            if (this.elements.chapterView && this.elements.chapterView.style.display === 'flex') {
                this.drawPathLines();
            }
        });

        // Initialize quest UI
        this.updateQuestUI();
    }

    setupAccountListeners() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) logoutBtn.onclick = () => this.logout();

        const changePassBtn = document.getElementById('changePassBtn');
        if (changePassBtn) changePassBtn.onclick = () => this.changePassword();
    }

    setupFirebaseAuthStateListener() {
        if (typeof fbAuth === 'undefined') {
            // Firebase not configured yet — fall back to localStorage check
            console.warn('Firebase not configured. Using localStorage auth fallback.');
            this._handleAuthResult(this.currentUser ? { uid: this.currentUser, email: this.currentUser } : null);
            return;
        }

        let resolved = false;
        fbAuth.onAuthStateChanged(user => {
            if (!resolved) {
                resolved = true;
                this._handleAuthResult(user);
            } else {
                // State changed while app was running
                if (!user) { localStorage.removeItem('linguDeep_currentUser'); location.reload(); }
                else { this._handleAuthResult(user); } // login/register after initial load
            }
        });
    }

    async _handleAuthResult(user) {
        const authModal = document.getElementById('authModal');
        const appShell  = document.getElementById('appShell');

        if (user) {
            // Google users have emailVerified=true by default; skip check for them
            const isGoogleUser = user.providerData && user.providerData.some(p => p.providerId === 'google.com');

            if (!user.emailVerified && !isGoogleUser) {
                // Block unverified email users — show message and sign out
                const errEl = document.getElementById('loginError');
                if (errEl) { errEl.textContent = this.locale.emailNotVerified; errEl.style.display = 'block'; }
                if (authModal) { authModal.style.display = 'flex'; authModal.style.opacity = '1'; }
                fbAuth.signOut();
                return;
            }

            // Persist UID for storage key
            this.currentUser = user.uid || user;
            localStorage.setItem('linguDeep_currentUser', this.currentUser);

            // Reload stats from per-user storage key
            const storageKey = `linguDeep_stats_${this.currentUser}`;
            const saved = JSON.parse(localStorage.getItem(storageKey));
            if (saved) this.stats = Object.assign(this.stats, saved);

            // Cloud sync: load and merge Firestore data, then continue setup
            await this.loadFromCloud();

            // Update displayed name in Settings
            const nameEl = document.getElementById('currentUserName');
            if (nameEl) nameEl.textContent = user.displayName || user.email || this.currentUser;

            if (authModal) authModal.style.display = 'none';

            if (!this.stats.placementLevel) {
                setTimeout(() => this.startPlacementTest(), 800);
            } else {
                this.showLevelSelection();
                if (appShell) appShell.style.display = 'flex';
            }
        } else {
            this.currentUser = null;
            if (authModal) { authModal.style.display = 'flex'; authModal.style.opacity = '1'; }
        }
    }

    logout() {
        if (!confirm(this.locale.logoutConfirm)) return;
        const signOut = () => { localStorage.removeItem('linguDeep_currentUser'); location.reload(); };
        if (typeof fbAuth !== 'undefined') fbAuth.signOut().then(signOut).catch(signOut);
        else signOut();
    }

    async changePassword() {
        const user = typeof fbAuth !== 'undefined' ? fbAuth.currentUser : null;
        if (!user) { this.showToast(this.locale.genericError, 'error'); return; }

        const currentPass = prompt(this.locale.currentPassPrompt);
        if (!currentPass) return;
        const newPass = prompt(this.locale.newPassPrompt);
        if (!newPass) return;
        if (newPass.length < 6) { this.showToast(this.locale.passShort, 'error'); return; }
        const confirmPass = prompt(this.locale.confirmPassPrompt);
        if (newPass !== confirmPass) { this.showToast(this.locale.passMismatch, 'error'); return; }

        try {
            const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPass);
            await user.reauthenticateWithCredential(credential);
            await user.updatePassword(newPass);
            this.showToast(this.locale.passUpdateSuccess, 'success');
        } catch (e) {
            this.showToast(fbErrorMessage(e.code, this.locale), 'error');
        }
    }

    toggleAutoPlay(val) {
        this.settings.autoPlay = val;
        this.saveSettings();
    }

    toggleTheme(isDark) {
        this.settings.isDarkMode = isDark;
        this.saveSettings();
        this.applyTheme();
        if (this.elements.themeToggle) {
            this.elements.themeToggle.checked = isDark;
        }
    }

    resetProgress() {
        if (confirm(this.locale.resetConfirm)) {
            const storageKey = this.currentUser ? `linguDeep_stats_${this.currentUser}` : 'linguDeep_pro_stats_v3';
            localStorage.removeItem(storageKey);
            this.deleteCloudData();
            this.showToast(this.locale.setupSaved, 'success');
            location.reload();
        }
    }

    showLeagues() {
        this.hideAllViews();
        if (this.elements.leaguesView) this.elements.leaguesView.style.display = 'block';
        if (this.elements.navigationHeader) this.elements.navigationHeader.style.display = 'block';
        if (this.elements.viewTitle) this.elements.viewTitle.textContent = this.locale.leaguesTitleView || "Leagues";
        this.updateStatsUI();
        this.updateSidebar('navLeagues');
    }

    showSettings() {
        this.hideAllViews();
        if (this.elements.settingsView) this.elements.settingsView.style.display = 'block';
        if (this.elements.navigationHeader) this.elements.navigationHeader.style.display = 'block';
        if (this.elements.viewTitle) this.elements.viewTitle.textContent = this.locale.settingsTitleView || "Settings";

        const nameDisplay = document.getElementById('currentUserName');
        if (nameDisplay) nameDisplay.textContent = this.currentUser || this.locale.guestName || 'Guest';

        this.updateSidebar('navSettings');
    }

    async showLevelSelection() {
        this.hideAllViews();
        if (this.elements.levelView) this.elements.levelView.style.display = 'grid';
        if (this.elements.navigationHeader) this.elements.navigationHeader.style.display = 'block';
        if (this.elements.viewTitle) this.elements.viewTitle.textContent = this.locale.navPractice;
        await this.renderLevels();
        this.updateSidebar('navPractice');
    }

    hideAllViews() {
        if (this.elements.welcomeView) this.elements.welcomeView.style.display = 'none';
        if (this.elements.levelView) this.elements.levelView.style.display = 'none';
        if (this.elements.chapterView) {
            this.elements.chapterView.style.display = 'none';
            this.elements.chapterView.classList.remove('path-container-wrapper');
        }
        if (this.elements.leaguesView) this.elements.leaguesView.style.display = 'none';
        if (this.elements.settingsView) this.elements.settingsView.style.display = 'none';
    }

    updateSidebar(activeId) {
        if (this.elements.sidebar) {
            const sidebarItems = this.elements.sidebar.querySelectorAll('.nav-item');
            sidebarItems.forEach(i => i.classList.remove('active'));
        }
        const btn = document.getElementById(activeId);
        if (btn) btn.classList.add('active');
    }

    async renderLevels() {
        this.elements.levelView.innerHTML = '';
        const L = this.locale;
        const levelsRaw = [
            { id: "Başlangıç", name: (L.levels && L.levels["Başlangıç"]) || "Beginner", desc: (L.levelDescs && L.levelDescs["Başlangıç"]) || "A1-A2", icon: "fas fa-rocket", color: "#58cc02" },
            { id: "Orta", name: (L.levels && L.levels["Orta"]) || "Intermediate", desc: (L.levelDescs && L.levelDescs["Orta"]) || "B1-B2", icon: "fas fa-mountain", color: "#ffc800" },
            { id: "İleri", name: (L.levels && L.levels["İleri"]) || "Advanced", desc: (L.levelDescs && L.levelDescs["İleri"]) || "C1+", icon: "fas fa-dragon", color: "#ce82ff" },
            { id: "Zayıf Yönler", name: this.locale.weakPointsTitle, desc: this.locale.weakPointsDesc, icon: "fas fa-heart-broken", color: "#ff4b4b" }
        ];

        const levels = levelsRaw; // No longer need async map for these static levels

        levels.forEach(lvl => {
            const card = document.createElement('div');
            card.className = 'level-card animate-in';
            card.innerHTML = `
    <i class="${lvl.icon}" style="color: ${lvl.color}; filter: drop-shadow(0 0 15px ${lvl.color}66)"></i>
                <h3>${lvl.name}</h3>
                <p style="color: var(--text-secondary);">${lvl.desc}</p>
                <div class="btn-start">${this.locale.startBtn}</div>
`;
            card.onclick = () => this.showChapterSelection(lvl.id);
            this.elements.levelView.appendChild(card);
        });
    }

    async showChapterSelection(levelId) {
        if (this.isMapLoading) return;
        console.log(`Entering Level: ${levelId}`);
        this.current.level = levelId;
        this.hideAllViews();

        // Safety: Ensure App Shell is visible
        const appShell = document.getElementById('appShell');
        if (appShell) appShell.style.display = 'flex';

        if (this.elements.chapterView) {
            this.elements.chapterView.style.display = 'flex';
            this.elements.chapterView.classList.add('path-container-wrapper');
            // Unified Map Architecture: Always use one master SVG
            this.elements.chapterView.innerHTML = `
                <svg id="pathSvg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; overflow: visible;">
                    <g id="bridgeLayer"></g>
                </svg>
            `;
        }
        if (this.elements.navigationHeader) this.elements.navigationHeader.style.display = 'block';
        if (this.elements.viewTitle) this.elements.viewTitle.textContent = levelId;

        try {
            await this.renderPathNodes();
        } catch (e) {
            console.error("RenderPathNodes crashed:", e);
            if (this.elements.chapterView) {
                const errDiv = document.createElement('div');
                errDiv.style.cssText = "padding: 50px; text-align: center; color: #ff4b4b; width: 100%; position: relative; z-index: 10;";
                errDiv.textContent = `${this.locale.errorMapLoad} (${e.message})`;
                this.elements.chapterView.appendChild(errDiv);
            }
        }
    }

    async renderPathNodes() {
        if (!WORDS_DATA) {
            console.error("WORDS_DATA is missing!");
            this.elements.chapterView.innerHTML = `<div style="padding: 50px; text-align: center;">${this.locale.errorWordLoad}</div>`;
            return;
        }

        if (this.current.level === "Zayıf Yönler") {
            this.renderWeakPointsPath();
            return;
        }

        this.isMapLoading = true;

        // Clear previous content but PRESERVE the SVG if it exists
        const svgBackup = this.elements.chapterView.querySelector('#pathSvg');
        this.elements.chapterView.innerHTML = '';
        if (svgBackup) {
            this.elements.chapterView.appendChild(svgBackup);
            const bridgeLayer = svgBackup.querySelector('#bridgeLayer');
            if (bridgeLayer) bridgeLayer.innerHTML = ''; // Clear old lines
        } else {
            this.elements.chapterView.innerHTML = `
                <svg id="pathSvg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; overflow: visible;">
                    <g id="bridgeLayer"></g>
                </svg>
            `;
        }

        const loadingDiv = document.createElement('div');
        loadingDiv.id = "mapLoadingIndicator";
        loadingDiv.style.cssText = "padding: 100px 20px; text-align: center; width: 100%; color: var(--text-secondary); position: relative; z-index: 10;";
        loadingDiv.innerHTML = `
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; margin-bottom: 20px; color: var(--accent-blue);"></i>
            <h3>${this.locale.mapPreparing}</h3>
            <p>${this.locale.mapAdapting}</p>
        `;
        this.elements.chapterView.appendChild(loadingDiv);

        try {
            const levelId = this.current.level;
            let chaptersRaw = WORDS_DATA[this.current.level] || [];
            // Filter culture-specific chapters: Turkish culture only for Turkish learners
            const tLang = this.settings.targetLang;
            chaptersRaw = chaptersRaw.filter(ch => {
                if (!ch.title) return true;
                const isTurkishCulture = /kültür/i.test(ch.title) || ch.id === 45;
                if (isTurkishCulture && tLang !== 'tr') return false;
                return true;
            });
            // Inject language-specific culture chapter at the end of İleri level
            if (this.current.level === 'İleri' && CULTURE_CHAPTERS[tLang]) {
                chaptersRaw = [...chaptersRaw, CULTURE_CHAPTERS[tLang]];
            }

            // Dynamic Engine: Process all chapters of the level
            const chapters = await Promise.all(chaptersRaw.map(ch => this.getProcessedChapter(ch)));

            // Remove loading indicator immediately
            loadingDiv.remove();

            if (chapters.length === 0) {
                this.elements.chapterView.innerHTML += `
                    <div style="padding: 100px 20px; text-align: center; width: 100%; position: relative; z-index: 10;">
                        <i class="fas fa-search" style="font-size: 4rem; opacity: 0.2; margin-bottom: 20px;"></i>
                        <h2>${this.locale.levelNotReady}</h2>
                        <p style="color: var(--text-secondary);">"${levelId}" ${this.locale.levelNoContent}</p>
                        <button class="btn btn-primary" onclick="app.showLevelSelection()" style="margin-top: 30px;">${this.locale.backBtn}</button>
                    </div>
                `;
                return;
            }

            const completedCount = chapters.filter(c => this.completedChapters &&
                this.completedChapters.some(id => String(id) === String(c.id))).length;
            const totalCount = chapters.length;
            const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

            const banner = document.createElement('div');
            banner.className = 'unit-banner animate-in';
            banner.style.zIndex = "1000";
            banner.style.marginBottom = "60px";
            banner.innerHTML = `
        <div class="unit-info">
                    <h2>${this.locale.unitLevelPrefix} ${levelId === 'Başlangıç' ? '1' : (levelId === 'Orta' ? '2' : '3')}</h2>
                    <p>${this.locale.levels[levelId] || levelId} ${this.locale.unitLevelBasics} (${completedCount}/${totalCount})</p>
                    <div class="progress-bar-small" style="width: 100%; max-width: 200px; background: rgba(0,0,0,0.2); border: none;">
                        <div class="progress-fill" style="width: ${progressPercent}%; background: #fff; box-shadow: 0 0 10px rgba(255,255,255,0.5);"></div>
                    </div>
                </div>
        <button class="guidebook-btn"><i class="fas fa-book-open"></i> ${this.locale.guidebookBtn}</button>
    `;
            this.elements.chapterView.appendChild(banner);

            const guidebookBtn = banner.querySelector('.guidebook-btn');
            if (guidebookBtn) guidebookBtn.onclick = () => this.showGuidebook();

            const isMobile = window.innerWidth < 768;
            const xAmplitude = isMobile ? 40 : 75; // Smaller zig-zag on mobile
            const startLabel = (this.locale && this.locale.startTooltip) ? this.locale.startTooltip : 'START';

            // Force START on first node in every unit map
            const guaranteedStartIndex = chapters.length > 0 ? 0 : -1;

            chapters.forEach((ch, index) => {
                const isCompleted = this.completedChapters.some(id => String(id) === String(ch.id));
                const isLocked = index > 0 && !this.completedChapters.some(id => String(id) === String(chapters[index - 1].id));
                const isActive = (index === guaranteedStartIndex) && !isLocked;

                const node = document.createElement('div');
                let zIndex = 500 - index;
                if (isActive) zIndex = 9999;

                node.className = `path-node animate-in ${isCompleted ? 'mastered' : ''} ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''} `;
                node.style.zIndex = zIndex;
                node.style.overflow = "visible";

                const xOffset = Math.sin(index * 1.5) * xAmplitude;
                node.style.left = `${xOffset}px`;

                const iconClass = ch.icon || 'fa-star';
                let innerContent = ``;

                if (isActive) {
                    innerContent = `
                        <div class="start-tooltip"> ${startLabel}</div>
                        <i class="fas ${iconClass}"></i>
                    `;
                } else if (isCompleted) {
                    innerContent = `
                        <div class="completion-badge"> <i class="fas fa-check"></i></div>
                        <i class="fas ${iconClass}"></i>
                    `;
                } else {
                    innerContent = `<i class="fas ${iconClass}" style="opacity: 0.9; color: #4b4b52;"></i> <i class="fas fa-lock status-overlay" style="opacity: 1; background: #afafaf; color: #fff;"></i>`;
                }

                node.innerHTML = `
                    ${innerContent}
                    <div class="node-label" style="${isMobile ? 'position: absolute; left: 50%; transform: translateX(-50%); top: 105%; text-align: center; width: 140px;' : (xOffset > 0 ? 'right: 160%; text-align: right;' : 'left: 110%')}">
                        <div>${ch.title}</div>
                    </div>
                `;

                if (!isLocked || index === 0) node.onclick = () => this.startQuiz(ch);
                this.elements.chapterView.appendChild(node);
            });

            // Safety: always keep at least one visible playable start node
            let activeNode = this.elements.chapterView.querySelector('.path-node.active');
            if (!activeNode) {
                const fallbackNode =
                    this.elements.chapterView.querySelector('.path-node') ||
                    this.elements.chapterView.querySelector('.path-node:not(.locked):not(.mastered)') ||
                    this.elements.chapterView.querySelector('.path-node:not(.locked)');

                if (fallbackNode) {
                    fallbackNode.classList.add('active');
                    fallbackNode.style.zIndex = '9999';
                    if (!fallbackNode.querySelector('.start-tooltip')) {
                        fallbackNode.insertAdjacentHTML('afterbegin', `<div class="start-tooltip">${startLabel}</div>`);
                    }
                    activeNode = fallbackNode;
                }
            }

            // Force delay for layout settle before drawing lines
            // Increased delay to ensure nodes are fully painted
            setTimeout(() => {
                if (document.contains(this.elements.chapterView)) {
                    this.drawPathLines();

                    // Auto-focus first test node so START is always visible on mobile
                    const main = document.querySelector('.main-content');
                    const startNode = this.elements.chapterView.querySelector('.path-node.active') ||
                        this.elements.chapterView.querySelector('.path-node:not(.locked)');

                    if (main && startNode && window.innerWidth <= 1024) {
                        const mainRect = main.getBoundingClientRect();
                        const nodeRect = startNode.getBoundingClientRect();
                        const targetTop = (nodeRect.top - mainRect.top) + main.scrollTop - 86;
                        main.scrollTo({ top: Math.max(0, targetTop), behavior: 'auto' });
                    }
                }
            }, 300);
        } finally {
            this.isMapLoading = false;
        }
    }

    renderWeakPointsPath() {
        this.elements.chapterView.innerHTML = `
    <svg id = "pathSvg" style="position: absolute; top: 0; left: 0; width: 100%; height: 600px; z-index: 0; pointer-events: none;">
        <g id="bridgeLayer"></g>
            </svg>
    `;
        const levelId = this.locale.weakPointsTitle;

        const banner = document.createElement('div');
        banner.className = 'unit-banner animate-in';
        banner.style.background = 'linear-gradient(135deg, #ff4b4b, #d33c3c)';
        banner.style.boxShadow = '0 15px 35px rgba(255, 75, 75, 0.2), 0 8px 0 #b03030';
        const L = this.locale;
        banner.innerHTML = `
    <div class="unit-info">
                <h2>${L.weakPointsTitle}</h2>
                <p>${L.weakPointsDesc} (${(this.stats.mistakes ? this.stats.mistakes.length : 0)})</p>
            </div>
    <button class="guidebook-btn" id="weakPointsGuideBtn"><i class="fas fa-book-open"></i> ${L.guidebookBtn || 'GUIDEBOOK'}</button>
`;
        this.elements.chapterView.appendChild(banner);
        const guideBtn = document.getElementById('weakPointsGuideBtn');
        if (guideBtn) guideBtn.onclick = () => this.showGuidebook();

        if ((this.stats.mistakes ? this.stats.mistakes.length : 0) === 0) {
            const empty = document.createElement('div');
            empty.className = 'welcome-hero animate-in';
            empty.style.minHeight = '300px';
            empty.innerHTML = `
    <i class="fas fa-check-circle" style="font-size: 5rem; color: var(--accent-green); margin-bottom: 20px;"></i>
                <h1 > ${L.weakPointsEmptyTitle}</h1>
                <p>${L.weakPointsEmptyDesc}</p>
                <button class="btn btn-primary" onclick="app.showLevelSelection()" style="padding: 15px 40px; margin-top:20px;">${L.weakPointsEmptyBtn}</button>
`;
            this.elements.chapterView.appendChild(empty);
            return;
        }

        const ch = {
            id: 'mistakes_drill',
            title: this.locale.weakPointsTitle,
            icon: 'fa-bolt',
            words: this.stats.mistakes.slice(0, 10)
        };

        const node = document.createElement('div');
        node.className = `path-node active animate-in `;
        node.style.background = '#ff4b4b';
        node.style.borderBottom = '12px solid #b03030';
        node.style.margin = "100px auto";
        node.innerHTML = `
    <svg class="progress-ring"> <circle cx="92" cy="92" r="68" stroke-dasharray="427" stroke-dashoffset="0" style="stroke: #ff4b4b;"></circle></svg>
            <div class="start-tooltip" style="background: #ff4b4b; bottom: 180% !important;">${this.locale.startTooltip}</div>
            <i class="fas fa-bolt" style="color: white; font-size: 2.5rem;"></i>
            <div class="node-label" style="left: 180%">
                <div>${this.locale.weakPointsDesc}</div>
            </div>
`;
        node.onclick = () => this.startQuiz(ch);
        this.elements.chapterView.appendChild(node);
    }

    drawPathLines() {
        const container = this.elements.chapterView;
        if (!container) return;

        // ADD PERFORMANCE CSS TO CONTAINER
        container.style.willChange = 'scroll-position';
        container.style.transform = 'translate3d(0,0,0)';

        // Create or get canvas element
        let canvas = document.getElementById('pathCanvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'pathCanvas';
            // ABSOLUTE positioning relative to container
            canvas.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;z-index:0;will-change:transform;transform:translate3d(0,0,0);';
            container.insertBefore(canvas, container.firstChild);
        }

        // Set canvas dimensions to match container scrollable area
        const w = container.offsetWidth;
        const h = container.scrollHeight;
        canvas.width = w * window.devicePixelRatio;
        canvas.height = h * window.devicePixelRatio;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';

        const ctx = canvas.getContext('2d');
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.clearRect(0, 0, w, h);

        const nodes = container.querySelectorAll('.path-node');
        const isLight = document.body.classList.contains('light-mode');

        // Add performance to all nodes
        nodes.forEach(n => {
            n.style.willChange = 'transform';
            n.style.transform = 'translate3d(0,0,0)';
        });

        nodes.forEach((node, i) => {
            if (i === 0) return;

            const prevNode = nodes[i - 1];
            const isCompleted = prevNode.classList.contains('mastered');

            // Exact pixel positions (NO scroll offset - canvas is fixed, nodes are absolute)
            const x1 = prevNode.offsetLeft + (prevNode.offsetWidth / 2);
            const y1 = prevNode.offsetTop + (prevNode.offsetHeight / 2);
            const x2 = node.offsetLeft + (node.offsetWidth / 2);
            const y2 = node.offsetTop + (node.offsetHeight / 2);

            const dx = x2 - x1;
            const dy = y2 - y1;
            const angle = Math.atan2(dy, dx);

            const nodeRadius = prevNode.offsetWidth / 2;
            const gap = 15;

            const startX = x1 + Math.cos(angle) * (nodeRadius + gap);
            const startY = y1 + Math.sin(angle) * (nodeRadius + gap);
            const endX = x2 - Math.cos(angle) * (nodeRadius + gap);
            const endY = y2 - Math.sin(angle) * (nodeRadius + gap);

            // SMOOTH S-CURVE - elegant and flowing
            const midX = (startX + endX) / 2;
            const midY = (startY + endY) / 2;

            const perpAngle = angle + Math.PI / 2;
            const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
            const curveAmount = distance * 0.1; // Gentle 10% curve

            // Control points at 1/3 and 2/3 for smooth S
            const cp1X = startX + (endX - startX) * 0.33 + Math.cos(perpAngle) * curveAmount;
            const cp1Y = startY + (endY - startY) * 0.33 + Math.sin(perpAngle) * curveAmount;

            const cp2X = startX + (endX - startX) * 0.67 - Math.cos(perpAngle) * curveAmount;
            const cp2Y = startY + (endY - startY) * 0.67 - Math.sin(perpAngle) * curveAmount;

            // PREMIUM EXTRA THICK GRADIENT
            const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
            if (isCompleted) {
                gradient.addColorStop(0, '#7de500');
                gradient.addColorStop(0.5, '#58cc02');
                gradient.addColorStop(1, '#46a302');
            } else {
                if (isLight) {
                    gradient.addColorStop(0, '#f5f5f5');
                    gradient.addColorStop(1, '#d0d0d0');
                } else {
                    gradient.addColorStop(0, '#5f5f67');
                    gradient.addColorStop(0.5, '#4a4a52');
                    gradient.addColorStop(1, '#3c3c43');
                }
            }

            // OUTER GLOW for premium effect
            ctx.save();
            ctx.strokeStyle = isCompleted ? 'rgba(88, 204, 2, 0.4)' : (isLight ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.4)');
            ctx.lineWidth = 34;
            ctx.lineCap = 'round';
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY); // S-CURVE
            ctx.stroke();
            ctx.restore();

            // SHADOW LAYER - very thick
            ctx.save();
            ctx.strokeStyle = isCompleted ? '#46a302' : (isLight ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.35)');
            ctx.lineWidth = 28;
            ctx.lineCap = 'round';
            ctx.shadowColor = ctx.strokeStyle;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY); // S-CURVE
            ctx.stroke();
            ctx.restore();

            // MAIN GRADIENT LINE - extra thick and shiny
            ctx.save();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 22;
            ctx.lineCap = 'round';
            ctx.shadowColor = isCompleted ? 'rgba(88, 204, 2, 0.3)' : 'rgba(0,0,0,0.1)';
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY); // S-CURVE
            ctx.stroke();
            ctx.restore();

            // HIGHLIGHT for 3D effect
            ctx.save();
            ctx.strokeStyle = isCompleted ? 'rgba(125, 229, 0, 0.6)' : 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.globalCompositeOperation = 'overlay';
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY); // S-CURVE
            ctx.stroke();
            ctx.restore();
        });

        // Clean up old approaches
        const svg = document.getElementById('pathSvg');
        if (svg) svg.style.display = 'none';

        const styleEl = document.getElementById('dynamic-path-styles');
        if (styleEl) styleEl.remove();
    }

    handleBack() {
        if (this.elements.chapterView.style.display === 'flex') {
            this.showLevelSelection();
        } else {
            this.goHome();
        }
    }

    goHome() {
        this.hideAllViews();
        if (this.elements.welcomeView) this.elements.welcomeView.style.display = 'block';
        if (this.elements.navigationHeader) this.elements.navigationHeader.style.display = 'none';
        this.updateStatsUI();

        this.current.combo = 0;
        if (this.elements.comboBadge) this.elements.comboBadge.style.display = 'none';

        this.updateSidebar('navLearn');
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    async startQuiz(chapter) {
        try {
            // Heart check
            if (this.stats.hearts <= 0) {
                this.showOutOfHearts();
                return;
            }

            // CRITICAL: Full reset
            this.current.isLocked = false;
            this.current.chapter = chapter;

            // Validate words exist
            if (!chapter || !chapter.words || chapter.words.length === 0) {
                console.error("Critical: Chapter has no words", chapter);
                alert(this.locale.wordNotFoundError);
                return;
            }

            // Reset all state
            // MASTER SHUFFLE: Single set (removed duplication to fix repetition)
            let pool = [...chapter.words];
            this.shuffleArray(pool);

            // Basic sequential check
            for (let i = 0; i < pool.length - 1; i++) {
                if (pool[i].en === pool[i + 1].en) {
                    const swapWith = (i + 5) % pool.length; // Jump 5 ahead
                    [pool[i + 1], pool[swapWith]] = [pool[swapWith], pool[i + 1]];
                }
            }

            this.current.words = pool;
            this.current.index = 0;
            this.current.correct = 0;
            this.current.xpEarned = 0;
            this.current.combo = 0;
            this.current.startTime = Date.now();
            this.current.usedQTypes = {};
            this.current.sessionSeenDistractors = new Set();

            // FORCE PURGE: Fix "hala öyle" by ensuring old/buggy data is never used
            if (this.stats && this.stats.sentenceCache) {
                this.stats.sentenceCache = {};
            }

            // PERFORMANCE CACHE: Pre-calculate distractors to prevent freeze
            if (typeof WORDS_DATA !== 'undefined') {
                this.current.globalWordsCache = Object.values(WORDS_DATA).flat().flatMap(ch => ch.words);
            } else {
                this.current.globalWordsCache = [];
                console.warn("WORDS_DATA not found!");
            }

            this.elements.optionsGrid.innerHTML = '<div class="loader-container"><i class="fas fa-spinner fa-spin"></i></div>';
            this.elements.questionText.textContent = '';

            if (this.elements.comboBadge) this.elements.comboBadge.style.display = 'none';

            // Reset modal visibility
            this.hideAllModals();

            this.elements.learnModal.style.display = 'flex';
            this.elements.learnModal.style.opacity = '1';
            this.elements.learnModal.style.visibility = 'visible';
            this.elements.learnModal.style.pointerEvents = 'all';
            this.elements.learnModal.style.zIndex = '23000';

            // UI Reset for modes
            this.elements.optionsGrid.style.display = 'grid';
            this.elements.scrambleArea.style.display = 'none';

            this.updateHeartsUI();

            // LOCK SESSION during initial load
            this.current.isLocked = true;
            await this.nextQuestion();
        } catch (e) {
            console.error("Start Quiz Failed:", e);
            this.current.isLocked = false;
            alert(this.locale.quizStartError);
        }
    }

    hideLearn() {
        if (!this.elements.learnModal) return;

        // HEART EXPLOIT FIX: Revoke temp heart if practice not completed
        if (this.current && this.current.isPractice) {
            this.stats.hearts = 0;
            this.updateHeartsUI();
            this.current.isPractice = false;
        }

        this.elements.learnModal.style.display = 'none';
        this.elements.learnModal.style.opacity = '0';
        this.elements.learnModal.style.pointerEvents = 'none';
        this.current.isPractice = false;
    }

    async showGuidebook() {
        if (!this.elements.guidebookModal) return;
        this.hideAllModals(); // Close others

        const levelId = this.current.level || "Başlangıç";
        const chaptersRaw = WORDS_DATA[levelId] || [];
        const rawTips = LEVEL_TIPS[levelId] || LEVEL_TIPS["Başlangıç"];

        // Deep clone tips to avoid modifying original
        let tips = JSON.parse(JSON.stringify(rawTips));

        // Get language names for replacement
        const languageNames = {
            tr: this.settings.uiLang === 'tr' ? "Türkçe" : "Turkish",
            en: this.settings.uiLang === 'tr' ? "İngilizce" : "English",
            fr: this.settings.uiLang === 'tr' ? "Fransızca" : "French",
            de: this.settings.uiLang === 'tr' ? "Almanca" : "German",
            es: this.settings.uiLang === 'tr' ? "İspanyolca" : "Spanish",
            ru: this.settings.uiLang === 'tr' ? "Rusça" : "Russian",
            it: this.settings.uiLang === 'tr' ? "İtalyanca" : "Italian",
            pt: this.settings.uiLang === 'tr' ? "Portekizce" : "Portuguese",
            ja: this.settings.uiLang === 'tr' ? "Japonca" : "Japanese",
            zh: this.settings.uiLang === 'tr' ? "Çince" : "Chinese",
            ar: this.settings.uiLang === 'tr' ? "Arapça" : "Arabic",
            ko: this.settings.uiLang === 'tr' ? "Korece" : "Korean"
        };
        // Get language names for replacement
        const targetCode = this.settings.targetLang || 'en';
        const targetNameTr = (LANG_FLAGS[targetCode]) ? (this.settings.uiLang === 'tr' ? LANG_FLAGS[targetCode].nameTr : LANG_FLAGS[targetCode].nameEn) : "İngilizce";

        if (tips.title) tips.title = String(tips.title).replace(/İngilizce/g, targetNameTr);
        if (tips.desc) tips.desc = String(tips.desc).replace(/İngilizce/g, targetNameTr);

        // Translate tips to source language if not Turkish
        if (this.settings.sourceLang !== 'tr') {
            tips.title = await this.quickTranslate(tips.title, 'tr', this.settings.sourceLang);
            tips.desc = await this.quickTranslate(tips.desc, 'tr', this.settings.sourceLang);
            tips.tips = await Promise.all(tips.tips.map(t => this.quickTranslate(t, 'tr', this.settings.sourceLang)));
        }

        // Use the chapter currently being viewed or the first one in the level
        const rawCh = (this.current.chapter && this.current.chapter.id)
            ? this.current.chapter
            : (chaptersRaw[0] || { words: [], title: levelId, icon: 'fa-book' });

        if (!rawCh) return;

        // Ensure guidebook shows processed (translated) content
        const ch = await this.getProcessedChapter(rawCh);

        let tipsHtml = tips.tips.map(t => `
            <div style="display:flex; gap:12px; margin-bottom:10px; font-size:1rem; color:var(--text-primary); align-items: flex-start;">
                <i class="fas fa-check-circle" style="color:${tips.accent}; margin-top:4px; font-size: 0.9rem;"></i> 
                <span style="line-height: 1.4;">${t}</span>
            </div>
        `).join('');

        let wordsHtml = (ch.words || []).map(w => {
            let exampleHtml = '';
            if (w.example && w.example.en && w.example.tr) {
                exampleHtml = `
                    <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 10px; font-style: italic; background: rgba(28, 176, 246, 0.08); padding: 10px 15px; border-radius: 12px; border-left: 4px solid var(--accent-blue); position: relative;">
                        <i class="fas fa-certificate" style="position: absolute; right: 10px; top: 10px; font-size: 0.7rem; color: var(--accent-blue); opacity: 0.5;"></i>
                        <div style="color: var(--text-primary); margin-bottom: 4px; font-weight: 600;">"${w.example.en}"</div>
                        <div style="opacity: 0.8;">${w.example.tr}</div>
                    </div>
                `;
            }

            return `
                <div class="glass" style="display: flex; flex-direction: column; padding: 20px 25px; margin-bottom: 12px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); transition: all 0.2s;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.05)'" onmouseout="this.style.backgroundColor='transparent'">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: 800; color: var(--accent-blue); font-size: 1.1rem;">${w.en}</span>
                        <span style="color: var(--text-primary); font-weight: 500;">${w.tr}</span>
                    </div>
                    ${exampleHtml}
                </div>
            `;
        }).join('');

        const L = this.locale;
        this.elements.guidebookContent.innerHTML = `
            <div style="text-align: center; margin-bottom: 35px;">
                <div style="width: 80px; height: 80px; background: ${tips.accent}22; border-radius: 24px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; border: 1px solid ${tips.accent}44;">
                    <i class="fas ${ch.icon || 'fa-book'}" style="font-size: 2.5rem; color: ${tips.accent};"></i>
                </div>
                <h1 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 8px; letter-spacing: -1px;">${tips.title}</h1>
                <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.5; padding: 0 20px;">${tips.desc}</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); padding: 30px; border-radius: 28px; margin-bottom: 35px; border: 1px solid rgba(255,255,255,0.05); position: relative; overflow: hidden;">
                <div style="position: absolute; top:0; left:0; width:4px; height:100%; background:${tips.accent}; opacity:0.6;"></div>
                <h4 style="font-weight: 800; margin-bottom: 18px; font-size: 0.95rem; color: ${tips.accent}; letter-spacing: 1.5px;">${this._upper(L.guideTipsTitle)}</h4>
                ${tipsHtml}
            </div>

            <div class="words-list" style="margin-top: 10px;">
                <h4 style="font-weight: 800; margin-bottom: 18px; font-size: 0.95rem; color: var(--text-secondary); letter-spacing: 1.5px;">${this._upper(L.guideWordsTitle)} (${String(ch.title||'').toLocaleUpperCase('tr')})</h4>
                ${wordsHtml}
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-top: 40px; padding: 22px; font-weight: 800; border-radius: 22px; box-shadow: 0 10px 20px rgba(0,0,0,0.2);" onclick="app.hideGuidebook()">${L.guideCloseBtn}</button>
        `;

        this.elements.guidebookModal.style.display = 'flex';
        this.elements.guidebookModal.style.opacity = '1';
        this.elements.guidebookModal.style.visibility = 'visible';
        this.elements.guidebookModal.style.pointerEvents = 'all';
        this.elements.guidebookModal.style.zIndex = '50000'; // Top priority
    }

    hideGuidebook() {
        if (!this.elements.guidebookModal) return;
        this.elements.guidebookModal.style.opacity = '0';
        this.elements.guidebookModal.style.pointerEvents = 'none';
        setTimeout(() => {
            this.elements.guidebookModal.style.display = 'none';
        }, 300);
    }

    // Wikipedia Summary Fetcher REMOVED (Root cause of "Robotic" sentences)
    // Now using SENTENCES_CURATED local database for high-quality examples.

    async fetchSmartSentence(word, level = 'Başlangıç', forceRefresh = false) {
        const isAdvanced = level === 'İleri' || level === 'Orta';
        const wordClean = word.toLowerCase().trim();
        const sL = this.settings.sourceLang || 'tr';
        const tL = this.settings.targetLang || 'en';

        // 0. PRIORITY: Curated Local Database (Specialized High-Quality Database)
        if (typeof SENTENCES_CURATED !== 'undefined' && SENTENCES_CURATED[wordClean]) {
            console.log("Using curated high-quality sentence for:", wordClean);
            const curated = SENTENCES_CURATED[wordClean];

            // FETCH SEMANTIC DISTRACTORS EVEN FOR CURATED WORDS (More diverse - Max 30)
            let synonyms = [];
            try {
                // Use multiple relation types for deep variety: ml (means like), rel_trg (triggers), rel_adj (adjectives describing it)
                const relRes = await fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(word)}&rel_trg=${encodeURIComponent(word)}&max=30`);
                const relData = await relRes.json();
                synonyms = relData
                    .filter(d => d.word.toLowerCase() !== word.toLowerCase() && d.word.length > 2)
                    .map(d => d.word);
            } catch (e) { }

            let finalTr = String(curated.tr);
            if (this.settings.sourceLang !== 'tr') {
                finalTr = await this.quickTranslate(curated.tr, 'tr', this.settings.sourceLang);
            }

            let finalTargetEx = String(curated.en);
            if (this.settings.targetLang !== 'en') {
                finalTargetEx = await this.quickTranslate(curated.en, 'en', this.settings.targetLang);
            }

            return {
                originalEn: curated.en,
                en: finalTargetEx,
                tr: finalTr,
                synonyms: synonyms,
                source: 'Curated+DataMuse'
            };
        }

        if (!forceRefresh && !isAdvanced && this.stats && this.stats.sentenceCache && this.stats.sentenceCache[word]) {
            return this.stats.sentenceCache[word];
        }

        // Adjust target lengths based on level
        let minLen = 15, maxLen = 150, prefLen = 60;
        if (level === 'Başlangıç') { minLen = 8; maxLen = 30; prefLen = 18; }
        if (level === 'Orta') { minLen = 30; maxLen = 100; prefLen = 60; }
        if (level === 'İleri') { minLen = 50; maxLen = 250; prefLen = 120; }

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) return null;
            const data = await response.json();

            let candidates = [];
            let synonyms = [];
            let antonyms = [];

            if (data && data[0] && data[0].meanings) {
                for (const m of data[0].meanings) {
                    if (m.synonyms) synonyms = [...new Set([...synonyms, ...m.synonyms])];
                    if (m.antonyms) antonyms = [...new Set([...antonyms, ...m.antonyms])];

                    for (const d of m.definitions) {
                        if (d.synonyms) synonyms = [...new Set([...synonyms, ...d.synonyms])];
                        if (d.example && d.example.length >= minLen && d.example.length <= maxLen) {
                            if (!new RegExp(`\\b${word}\\b`, 'i').test(d.example)) continue;

                            // ROOT ABSURDITY PROTECTION (v4)
                            const forbidden = ["is a noun", "is a verb", "defined as", "meaning of", "refers to", "archaic", "slang", "vulgar"];
                            if (forbidden.some(f => d.example.toLowerCase().includes(f))) continue;

                            let score = 100 - Math.abs(d.example.length - prefLen);
                            const wordCount = d.example.split(' ').length;

                            // NATURALNESS SCORING
                            const boringVerbs = ["wrote", "said", "called", "named", "marked", "is a", "was a", "belongs to"];
                            if (boringVerbs.some(v => d.example.toLowerCase().includes(v))) score -= 40;

                            const metaWords = ["word", "noun", "verb", "adjective", "sentence", "plural", "singular", "type", "part"];
                            if (metaWords.some(m => d.example.toLowerCase().includes(m)) && !metaWords.includes(word.toLowerCase())) score -= 50;

                            if (level === 'Başlangıç') {
                                if (wordCount > 5) score -= 50;
                                if (d.example.includes(',') || d.example.includes(';')) score -= 30;
                            } else {
                                if (wordCount < 4) score -= 40;
                                if (wordCount >= 6 && wordCount <= 12) score += 15;
                            }

                            candidates.push({ text: d.example, score: score });
                        }
                    }
                }
            }

            if (candidates.length > 0) {
                candidates.sort((a, b) => b.score - a.score);
                const enEx = candidates[0].text;

                let translated = await this.quickTranslate(enEx, 'en', this.settings.sourceLang || 'tr');

                if (translated) {
                    let finalTranslated = this.sanitizeTranslation(translated);
                    let targetEx = enEx;

                    // INTERACTIVE IDIOM RESOLVER (v48) - Hub Translation Strategy
                    const lowercaseEn = enEx.toLowerCase();
                    for (const [idiom, meaningTr] of Object.entries(typeof IDIOMS_MAP !== 'undefined' ? IDIOMS_MAP : {})) {
                        if (lowercaseEn.includes(idiom)) {
                            // Hub-based Source Translation
                            let idiomSourceMeaning = meaningTr;
                            if (this.settings.sourceLang !== 'tr') {
                                idiomSourceMeaning = await this.quickTranslate(meaningTr, 'tr', this.settings.sourceLang);
                            }

                            // Hub-based Target Translation (Fixing literalism in all languages)
                            let idiomTargetSense = null;
                            if (tL !== 'en') {
                                // Translate from TR hub to avoid EN-EN literalism
                                idiomTargetSense = await this.quickTranslate(meaningTr, 'tr', tL);
                            }

                            if (lowercaseEn.replace(/[.,!?;:]/g, '').trim() === idiom) {
                                finalTranslated = idiomSourceMeaning;
                                if (idiomTargetSense) targetEx = idiomTargetSense;
                            } else {
                                // Context preservation: Keep the sentence but explain the idiom if needed
                                if (!finalTranslated.includes('(')) {
                                    finalTranslated = `${finalTranslated} (${idiomSourceMeaning})`;
                                }
                                // If target language translation looks literal, provide sense
                                if (idiomTargetSense && targetEx && !targetEx.toLowerCase().includes(idiomTargetSense.toLowerCase())) {
                                    // Optionally append sense to targetEx if it's too literal
                                }
                            }
                            break;
                        }
                    }

                    // FETCH SEMANTIC DISTRACTORS (Internet Fetch - Enhanced Max 30)
                    let internetDistractors = [];
                    try {
                        const relRes = await fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(word)}&rel_syn=${encodeURIComponent(word)}&max=30`);
                        const relData = await relRes.json();
                        internetDistractors = relData
                            .filter(d => d.word.toLowerCase() !== word.toLowerCase() && d.word.length > 2)
                            .map(d => d.word);
                    } catch (e) { console.warn("Datamuse distractor fetch failed"); }

                    // FILTER SYNONYMS: Reject definitions but allow relevant words
                    const filteredSynonyms = [...new Set([...synonyms, ...internetDistractors])]
                        .filter(s => {
                            const lowS = s.toLowerCase();
                            return lowS.length > 2 &&
                                lowS.split(' ').length <= 2 &&
                                !lowS.includes('type of') &&
                                !lowS.includes('part of') &&
                                !lowS.includes('grammatic');
                        });

                    // TARGET LANGUAGE TRANSLATION (The language being learned)
                    if (tL !== 'en') {
                        targetEx = await this.quickTranslate(enEx, 'en', tL);
                    }

                    const result = {
                        originalEn: enEx,
                        en: targetEx, // This is what's shown as the target language example
                        tr: finalTranslated, // This is the source language meaning
                        synonyms: filteredSynonyms.slice(0, 10),
                        antonyms: antonyms.slice(0, 3),
                        source: 'Dict+DataMuse'
                    };
                    if (this.stats) {
                        if (!this.stats.sentenceCache) this.stats.sentenceCache = {};
                        this.stats.sentenceCache[word] = result;
                    }
                    return result;
                }
            }
        } catch (e) {
            console.warn("Fetch failed:", e);
        }
        return null;
    }
    // --- GLOBAL SEMANTIC LISTS for Type Detection ---
    static SEMANTIC_LISTS = {
        'number': ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "million", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan", "yüz", "bin"],
        'color': ["red", "blue", "green", "yellow", "black", "white", "orange", "purple", "pink", "brown", "grey", "gray", "violet", "silver", "gold", "beige", "kırmızı", "mavi", "yeşil", "sarı", "siyah", "beyaz", "turuncu", "mor", "pembe", "kahverengi", "gri"],
        'time': ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "today", "tomorrow", "yesterday", "morning", "afternoon", "evening", "night", "pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi", "pazar", "ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"],
        'food': [
            "apple", "bread", "water", "milk", "coffee", "tea", "egg", "meat", "chicken", "fish", "cheese", "fruit", "vegetable", "sugar", "salt", "soup", "banana", "orange", "cake", "butter", "rice", "pasta", "salad", "pizza", "juice", "soda", "wine", "beer", "burger", "steak", "yogurt", "honey", "chocolate", "lemon", "strawberry", "grape", "peach", "pear", "cherry", "tomato", "potato", "onion", "garlic", "carrot", "cucumber", "corn", "bean", "pea", "nut", "oil", "pepper", "toast", "jam", "cookie", "ice cream", "sandwich",
            "elma", "ekmek", "su", "süt", "kahve", "çay", "yumurta", "et", "tavuk", "balık", "peynir", "meyve", "sebze", "şeker", "tuz", "çorba", "muz", "portakal", "kek", "tereyağı", "pirinç", "makarna", "salata", "pizza", "meyve suyu", "gazoz", "şarap", "bira", "burger", "biftek", "yoğurt", "bal", "çikolata", "limon"
        ],
        'animal': [
            "cat", "dog", "bird", "horse", "cow", "sheep", "lion", "tiger", "bear", "mouse", "elephant", "monkey", "rabbit", "duck", "snake", "fox", "wolf", "deer", "goat", "donkey", "goose", "turkey", "pig", "shark", "whale", "dolphin", "octopus", "crab", "shrimp", "ant", "bee", "fly", "mosquito", "spider", "butterfly", "ladybug", "cockroach", "worm", "caterpillar",
            "kedi", "köpek", "kuş", "at", "inek", "koyun", "aslan", "kaplan", "ayı", "fare", "fil", "maymun", "tavşan", "ördek", "yılan", "tilki", "kurt", "geyik", "keçi", "eşek", "kaz", "hindi", "domuz", "köpek balığı", "balina", "yunus", "ahtapot", "yengeç", "karides"
        ],
        'travel': [
            "car", "bus", "train", "plane", "ticket", "hotel", "airport", "passport", "bag", "map", "road", "tourist", "city", "luggage", "trip", "taxi", "bicycle", "station", "arrival", "departure", "delay", "passenger", "customs", "subway", "truck", "motorcycle", "ship", "boat", "ferry",
            "araba", "otobüs", "tren", "uçak", "bilet", "otel", "havalimanı", "pasaport", "çanta", "harita", "yol", "turist", "şehir", "bagaj", "gezi", "taksi", "bisiklet", "istasyon", "varış", "kalkış", "gecikme", "yolcu", "gümrük", "metro", "kamyon", "motosiklet", "gemi", "tekne"
        ],
        'school': [
            "book", "pen", "student", "teacher", "school", "class", "lesson", "paper", "desk", "exam", "homework", "board", "pencil", "rubber", "classroom", "computer", "ruler", "project", "library", "grade", "research", "university", "college", "notebook", "eraser",
            "kitap", "kalem", "öğrenci", "öğretmen", "okul", "sınıf", "ders", "kağıt", "sıra", "sınav", "ödev", "tahta", "kurşun kalem", "silgi", "bilgisayar", "cetvel", "proje", "kütüphane", "not", "araştırma", "üniversite", "kolej", "defter"
        ],
        'family': [
            "mother", "father", "sister", "brother", "grandma", "grandpa", "son", "daughter", "baby", "friend", "family", "child", "wife", "husband", "uncle", "aunt", "cousin", "parent", "grandmother", "grandfather",
            "anne", "baba", "kız kardeş", "erkek kardeş", "büyükanne", "büyükbaba", "oğul", "kız evlat", "bebek", "arkadaş", "aile", "çocuk", "eş", "karı", "koca", "amca", "dayı", "teyze", "hala", "kuzen"
        ],
        'body': [
            "head", "eye", "ear", "nose", "mouth", "hand", "arm", "leg", "foot", "hair", "face", "finger", "back", "stomach", "shoulder", "knee", "elbow", "wrist", "neck", "chest", "muscle", "bone",
            "baş", "göz", "kulak", "burun", "ağız", "el", "kol", "bacak", "ayak", "saç", "yüz", "parmak", "sırt", "mide", "omuz", "diz", "dirsek", "bilek", "boyun", "göğüs", "kas", "kemik"
        ],
        'clothes': [
            "shirt", "shoes", "hat", "pants", "dress", "jacket", "coat", "skirt", "socks", "glasses", "scarf", "gloves", "t-shirt", "boots", "belt", "tie", "uniform", "sweater", "shorts", "cap", "jeans",
            "gömlek", "ayakkabı", "şapka", "pantolon", "elbise", "ceket", "kaban", "etek", "çorap", "gözlük", "atkı", "eldiven", "tişört", "bot", "kemer", "kravat", "üniforma", "kazak", "şort", "kep", "kot pantolon"
        ],
        'home': [
            "table", "chair", "bed", "door", "window", "room", "kitchen", "bathroom", "house", "garden", "lamp", "sofa", "television", "computer", "fridge", "oven", "carpet", "mirror", "clock", "curtain", "floor", "wall", "roof", "balcony", "garage",
            "masa", "sandalye", "yatak", "kapı", "pencere", "oda", "mutfak", "banyo", "ev", "bahçe", "lamba", "koltuk", "televizyon", "bilgisayar", "buzdolabı", "fırın", "halı", "ayna", "saat", "perde", "zemin", "duvar", "çatı", "balkon", "garaj"
        ],
        'science': [
            "science", "space", "star", "planet", "galaxy", "universe", "atom", "energy", "cell", "dna", "gene", "virus", "bacteria", "robot", "code", "data", "lab", "experiment", "theory", "discovery", "gravity", "light", "sound", "force", "machine", "telescope",
            "bilim", "uzay", "yıldız", "gezegen", "galaksi", "evren", "atom", "enerji", "hücre", "dna", "gen", "virüs", "bakteri", "robot", "kod", "veri", "laboratuvar", "deney", "teori", "keşif", "yerçekimi", "ışık", "ses", "kuvvet"
        ],
        'health': [
            "health", "medicine", "pain", "sick", "doctor", "hospital", "nurse", "pharmacy", "drug", "fever", "cough", "emergency", "surgery", "cancer", "brain", "heart", "blood", "virus", "bacteria", "cure", "treatment", "bandage",
            "sağlık", "ilaç", "ağrı", "hasta", "doktor", "hastane", "hemşire", "eczane", "ateş", "öksürük", "acil", "ameliyat", "kanser"
        ],
        'nature': [
            "sun", "rain", "snow", "wind", "cloud", "tree", "flower", "forest", "river", "mountain", "sea", "ocean", "lake", "storm", "ice", "fire", "sky", "earth", "rock", "stone", "sand", "nature", "weather", "climate", "hot", "cold",
            "güneş", "yağmur", "kar", "rüzgar", "bulut", "ağaç", "çiçek", "orman", "nehir", "dağ", "deniz", "okyanus", "göl", "fırtına", "buz", "ateş", "gökyüzü", "dünya", "kaya", "taş", "kum", "doğa", "hava durumu", "iklim", "sıcak", "soğuk"
        ],
        'business': [
            "job", "office", "boss", "worker", "money", "price", "buy", "sell", "cost", "pay", "bank", "market", "economy", "company", "business", "manager", "meeting", "salary", "contract", "customer", "sale", "profit", "loss", "debt", "tax", "investment",
            "iş", "ofis", "patron", "çalışan", "para", "fiyat", "satın almak", "satmak", "maliyet", "ödemek", "banka", "market", "ekonomi", "şirket", "işletme", "yönetici", "toplantı", "maaş", "sözleşme", "müşteri", "satış", "kâr", "zarar", "borç", "vergi", "yatırım"
        ],
        'law': [
            "law", "court", "judge", "lawyer", "police", "crime", "prison", "justice", "rights", "rule", "government", "vote", "election", "president", "country", "state", "war", "peace", "democracy", "citizen", "guilty", "innocent",
            "kanun", "mahkeme", "hakim", "avukat", "polis", "suç", "hapishane", "adalet", "haklar", "kural", "hükümet", "oy", "seçim", "başkan", "ülke", "devlet", "savaş", "barış", "demokrasi", "vatandaş", "suçlu", "masum"
        ],
        'art': [
            "art", "music", "paint", "dance", "song", "cinema", "film", "movie", "book", "novel", "poem", "story", "picture", "photo", "camera", "draw", "design", "style", "theater", "show", "artist", "museum", "culture", "history",
            "sanat", "müzik", "resim", "dans", "şarkı", "sinema", "film", "kitap", "roman", "şiir", "hikaye", "resim", "fotoğraf", "kamera", "çizmek", "tasarım", "stil", "tiyatro", "gösteri", "sanatçı", "müze", "kültür", "tarih"
        ],
        'emotion': [
            "happy", "sad", "angry", "tired", "hungry", "thirsty", "scared", "bored", "excited", "surprised", "love", "hate", "fear", "joy", "hope", "stress", "feeling", "mood", "nervous", "shy", "rude", "kind", "funny", "serious",
            "mutlu", "üzgün", "kızgın", "yorgun", "aç", "susamış", "korkmuş", "sıkılmış", "heyecanlı", "şaşırmış", "aşk", "nefret", "korku", "sevinç", "umut", "stres", "his", "ruh hali", "gergin", "utangaç", "kaba", "kibar", "komik", "ciddi"
        ],
        'geography': [
            "world", "map", "north", "south", "east", "west", "city", "country", "village", "island", "desert", "mountain", "river", "lake", "ocean", "sea", "continent", "region", "border", "land", "earth", "capital",
            "dünya", "harita", "kuzey", "güney", "doğu", "batı", "şehir", "ülke", "köy", "ada", "çöl", "dağ", "nehir", "göl", "okyanus", "deniz", "kıta", "bölge", "sınır", "kara", "başkent"
        ],
        'sport': [
            "sport", "football", "basketball", "volleyball", "tennis", "game", "play", "win", "lose", "team", "player", "ball", "score", "goal", "match", "race", "run", "swim", "gym", "exercise", "medal", "cup",
            "spor", "futbol", "basketbol", "voleybol", "tenis", "oyun", "oynamak", "kazanmak", "kaybetmek", "takım", "oyuncu", "top", "skor", "gol", "maç", "yarış", "koşmak", "yüzmek", "spor salonu", "egzersiz", "madalya", "kupa"
        ],
        'verb': ["go", "make", "do", "see", "come", "look", "want", "give", "use", "find", "tell", "ask", "work", "seem", "feel", "try", "leave", "call", "swim", "run", "eat", "drink", "sleep", "sing", "dance", "read", "write", "speak", "listen", "cook", "wash", "buy", "sell", "win", "lose", "open", "close", "start", "stop", "finish", "gitmek", "yapmak", "görmek", "gelmek", "bakmak", "istemek", "vermek", "kullanmak", "bulmak", "anlatmak", "sormak", "çalışmak", "görünmek", "hissetmek", "denemek", "ayrılmak", "aramak", "yüzmek", "koşmak", "yemek", "içmek", "uyumak", "şarkı söylemek", "dans etmek", "okumak", "yazmak", "konuşmak", "dinlemek", "pişirmek", "yıkamak", "satın almak", "satmak", "kazanmak", "kaybetmek", "açmak", "kapatmak", "başlamak", "durmak", "bitirmek"],
        'phrase': ["hello", "hi", "goodbye", "please", "thanks", "yes", "no", "excuse me", "i am sorry", "good morning", "good night", "see you", "how are you", "what's up", "nice to meet you", "take care", "welcome", "merhaba", "selam", "hoşça kal", "lütfen", "teşekkürler", "evet", "hayır", "affedersiniz", "üzgünüm", "günaydın", "iyi geceler", "görüşürüz", "nasılsın", "ne haber", "tanıştığımıza memnun oldum", "kendine iyi bak", "hoş geldiniz"]
    };

    /**
     * Identifies the morphological form (plural, infinitive, tense) of a word.
     */
    getMorphology(str, lang) {
        if (!str) return 'root';
        const s = String(str).toLowerCase().trim();
        if (lang === 'tr') {
            if (s.endsWith('lar') || s.endsWith('ler')) return 'plural';
            if (s.endsWith('mak') || s.endsWith('mek')) return 'infinitive';
            if (s.endsWith('yor')) return 'continuous';
            if (s.endsWith('dı') || s.endsWith('di') || s.endsWith('du') || s.endsWith('dü') || s.endsWith('ti') || s.endsWith('tı')) return 'past';
        } else {
            if (s.endsWith('ing')) return 'continuous';
            if (s.endsWith('ed')) return 'past';
            if (s.endsWith('s') && s.length > 3 && !s.endsWith('ss') && !s.endsWith('us') && !s.endsWith('is')) return 'plural';
            if (s.startsWith('to ')) return 'infinitive';
        }
        return 'root';
    }

    /**
     * Identifies the semantic category of a word pair.
     * Prioritizes Chapter context, then global lists, then linguistic patterns.
     */
    getWordType(en, tr, ignoreContext = false, forceTitle = null) {
        const enLower = String(en || '').toLowerCase().trim();
        const trLower = String(tr || '').toLowerCase().trim();

        // 1. CONTEXT OVERRIDE (Highest Priority)
        const title = forceTitle || (this.current && this.current.chapter && this.current.chapter.title ? this.current.chapter.title : null);
        if (!ignoreContext && title) {
            const t = title.toLowerCase();
            if (t.includes("sıfatlar") || t.includes("duygular") || t.includes("emotion") || t.includes("adjective") || t.includes("karakter") || t.includes("kişilik")) return 'adjective';
            if (t.includes("sayılar") || t.includes("number") || t.includes("miktarlar")) return 'number';
            if (t.includes("renkler") || t.includes("color") || t.includes("görünüm")) return 'color';
            if (t.includes("fiiller") || t.includes("verb")) return 'verb';
            if (t.includes("selamlaşma") || t.includes("tanışma") || t.includes("greeting") || t.includes("selam")) return 'greeting';
            if (t.includes("phrase") || t.includes("deyimler") || t.includes("idiom") || t.includes("kalıplar")) return 'phrase';
            if (t.includes("yiyecek") || t.includes("food") || t.includes("içecek") || t.includes("meyve") || t.includes("sebze") || t.includes("tatlar") || t.includes("diyet")) return 'food';
            if (t.includes("hayvan") || t.includes("animal")) return 'animal';
            if (t.includes("seyahat") || t.includes("travel") || t.includes("tatil") || t.includes("macera")) return 'travel';
            if (t.includes("okul") || t.includes("eğitim") || t.includes("school") || t.includes("university") || t.includes("kolej")) return 'school';
            if (t.includes("aile") || t.includes("family") || t.includes("ilişkiler")) return 'family';
            if (t.includes("vücut") || t.includes("body") || t.includes("anatomy") || t.includes("sağlık")) return 'health';
            if (t.includes("kıyafet") || t.includes("clothes") || t.includes("moda") || t.includes("fashion")) return 'clothes';
            if (t.includes("ev") || t.includes("home") || t.includes("mobilya") || t.includes("sehir") || t.includes("şehir") || t.includes("yerler")) return 'home';
            if (t.includes("bilim") || t.includes("science") || t.includes("fizik") || t.includes("kimya") || t.includes("biyoloji") || t.includes("deniz") || t.includes("uzay")) return 'science';
            if (t.includes("iş") || t.includes("business") || t.includes("ofis") || t.includes("career") || t.includes("ekonomi") || t.includes("finans") || t.includes("borsa")) return 'business';
            if (t.includes("hukuk") || t.includes("law") || t.includes("mahkeme") || t.includes("justice") || t.includes("etik") || t.includes("felsefe")) return 'law';
            if (t.includes("doğa") || t.includes("nature") || t.includes("çevre") || t.includes("environment") || t.includes("iklim")) return 'nature';
            if (t.includes("sanat") || t.includes("art") || t.includes("müzik") || t.includes("resim") || t.includes("edebiyat") || t.includes("tiyatro")) return 'art';
            if (t.includes("spor") || t.includes("sport") || t.includes("egzersiz") || t.includes("basketbol") || t.includes("futbol")) return 'sport';
            if (t.includes("coğrafya") || t.includes("geography") || t.includes("dünya")) return 'geography';
            if (t.includes("teknoloji") || t.includes("tech") || t.includes("internet") || t.includes("bilgisayar") || t.includes("yazılım") || t.includes("dijital")) return 'tech';
            if (t.includes("din") || t.includes("religion") || t.includes("inanç")) return 'religion';
            if (t.includes("politika") || t.includes("politics") || t.includes("hükümet") || t.includes("government")) return 'politics';
            if (t.includes("matematik") || t.includes("math")) return 'math';
            if (t.includes("hava") || t.includes("weather")) return 'weather';
        }

        // 2. GLOBAL LIST CHECK
        if (LinguPro.SEMANTIC_LISTS) {
            for (const [type, words] of Object.entries(LinguPro.SEMANTIC_LISTS)) {
                if ((enLower && words.includes(enLower)) || (trLower && words.includes(trLower))) return type;
            }
        }

        // 3. LINGUISTIC PATTERNS
        const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "zero"];
        const numbersTr = ["bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz", "on", "sıfır"];
        if (numbers.includes(enLower) || numbersTr.includes(trLower) || /^\d+$/.test(enLower)) return 'number';

        if (trLower.endsWith('mak') || trLower.endsWith('mek') || trLower.includes(' etmek')) return 'verb';
        if (enLower.startsWith('to ')) return 'verb';

        if (enLower.split(' ').length > 1 || trLower.split(' ').length > 1) return 'phrase';

        return 'noun'; // Default fallback
    }



    async nextQuestion() {
        // Core Definitions (Moved outside try-catch for scope safety)
        const qText = this.elements.questionText;
        const word = this.current.words[this.current.index];

        if (!this.current.isPractice && this.stats.hearts <= 0) {
            this.showOutOfHearts();
            return;
        }

        if (!word) {
            this.showResults();
            return;
        }

        try {
            this.current.isLocked = true; // LOCK UI

            // CLEAR UI TO PREVENT GHOST CLICKS
            if (this.elements.optionsGrid) this.elements.optionsGrid.innerHTML = '<div class="loader-container"><i class="fas fa-spinner fa-spin"></i></div>';
            if (this.elements.quizFeedback) {
                this.elements.quizFeedback.innerHTML = '';
                this.elements.quizFeedback.style.display = 'none';
            }
            if (this.elements.ttsBtn) this.elements.ttsBtn.style.display = 'none'; // Hide until ready
            if (this.elements.scrambleArea) {
                this.elements.scrambleTarget.innerHTML = '';
                this.elements.scrambleOptions.innerHTML = '';
            }

            // SEMANTIC ANCHOR LOCK (Root Solution)
            // Identify the core "Domain Signature" of the entire quiz Session
            const domainAnchor = this.getWordType(null, null, false, (this.current.chapter ? this.current.chapter.title : null));
            console.log("Strategic Engine: Domain Lock =", domainAnchor);

            // Level-based Question Type Weighting (Unified Detection)
            const level = String(this.current.level || 'Başlangıç').toLowerCase();
            let weightedTypes = [0, 1, 2, 4, 4]; // Default pool with Scramble priority
            let qType;

            if (level.includes('başlangıç') || level.includes('beginner')) {
                weightedTypes = [0, 1, 2, 4, 4]; // 40% Scramble for beginners
            } else if (level.includes('orta') || level.includes('intermediate')) {
                weightedTypes = [0, 1, 2, 4, 4, 4]; // 50% Scramble for intermediate
            } else if (level.includes('ileri') || level.includes('advanced')) {
                weightedTypes = [0, 1, 4, 4, 4, 4]; // 66% Scramble for advanced
            } else {
                // For "Zayıf Yönler" (Weak Points) or any other mode
                weightedTypes = [0, 1, 2, 4, 4];
            }

            // Enhanced Variety Logic: Prioritize unused types even more strictly
            const wordRef = word.original || word.en;
            const used = (this.current.usedQTypes && this.current.usedQTypes[wordRef]) ? this.current.usedQTypes[wordRef] : [];
            let pool = weightedTypes.filter(t => !used.includes(t));

            // If all types have been used, reset or broaden the pool
            if (pool.length === 0) pool = weightedTypes;

            // Exclude audio questions (qType 2) when TTS is not available
            if (this.ttsAvailable === false) {
                pool = pool.filter(t => t !== 2);
                if (pool.length === 0) pool = weightedTypes.filter(t => t !== 2);
            }

            qType = pool[Math.floor(Math.random() * pool.length)];

            // SAFETY: Avoid Scramble Mode (4) for words that don't fit templates
            const bannedForScramble = [
                "hello", "hi", "bye", "goodbye", "good morning", "good night", "welcome",
                "yes", "no", "ok", "okay", "please", "thanks", "thank you", "sorry",
                "what", "where", "who", "when", "why", "how",
                "and", "or", "but", "because", "if",
                "i", "you", "we", "they", "he", "she", "it",
                "this", "that", "these", "those"
            ];

            if (qType === 4 && (bannedForScramble.includes(String(word.en).toLowerCase()) || String(word.en).length < 3)) {
                qType = 0;
            }

            this.current.qType = qType;
            // Track usage
            if (!this.current.usedQTypes) this.current.usedQTypes = {};
            if (!this.current.usedQTypes[wordRef]) this.current.usedQTypes[wordRef] = [];
            this.current.usedQTypes[wordRef].push(qType);

            qText.style.fontSize = "2.5rem";
            qText.innerHTML = "";

            // Reset visibility & ENSURE Scramble Mode is VISIBLE
            if (this.elements.optionsGrid) this.elements.optionsGrid.style.display = (qType === 4) ? 'none' : 'grid';
            if (this.elements.scrambleArea) this.elements.scrambleArea.style.display = (qType === 4) ? 'flex' : 'none';
            if (this.elements.checkScrambleBtn) this.elements.checkScrambleBtn.style.display = (qType === 4) ? 'block' : 'none';

            this.elements.scrambleTarget.innerHTML = '';
            this.elements.scrambleOptions.innerHTML = '';

            let correctOption, distractors = [];
            const strictTypes = ['number', 'color', 'time', 'verb', 'phrase', 'greeting', 'food', 'animal', 'travel', 'school', 'family', 'body', 'clothes', 'home', 'science', 'health', 'nature', 'business', 'law', 'art', 'emotion', 'geography', 'sport', 'philosophy', 'tech', 'religion', 'politics', 'math', 'weather', 'noun', 'adjective'];

            // 1. HARVEST & SCRUB (Root Affinity Engine)
            const targetType = this.getWordType(word.original || word.en, word.originalTr || word.tr, false, (this.current.chapter ? this.current.chapter.title : null));
            const currentChapterTitle = (this.current.chapter && this.current.chapter.title) ? this.current.chapter.title : "";
            const currentChapterIcon = (this.current.chapter && this.current.chapter.icon) ? this.current.chapter.icon : "";

            const strictChapterWords = (this.current.chapter && this.current.chapter.words) ? this.current.chapter.words : [];

            const harvestPool = [];
            let currentLevelName = "";
            Object.entries(WORDS_DATA).forEach(([levelName, levelData]) => {
                levelData.forEach(chapter => {
                    if (chapter.title === currentChapterTitle) currentLevelName = levelName;
                    const cType = this.getWordType(null, null, false, chapter.title);
                    chapter.words.forEach(w => {
                        if (w.en === word.en) return;
                        harvestPool.push({
                            ...w,
                            chapterTitle: chapter.title,
                            chapterType: cType,
                            chapterIcon: chapter.icon,
                            levelName: levelName
                        });
                    });
                });
            });

            // 2. SCORING MATRIX: Multi-Vector Affinity 
            const correctMorphEn = this.getMorphology(word.en, 'en');
            const correctMorphTr = this.getMorphology(word.tr, 'tr');
            const chapterTags = currentChapterTitle.toLowerCase().split(/[\s&,/]+/);

            const tTr = String(word.tr).toLowerCase();
            const tEn = String(word.en).toLowerCase();

            // === SEMANTIC FILTER: Use Icon Families for relevance ===
            const iconFamilies = {
                'food': ['fa-burger', 'fa-apple-whole', 'fa-carrot', 'fa-pizza-slice', 'fa-utensils', 'fa-glass-water', 'fa-sink', 'fa-bowl-food'],
                'animal': ['fa-paw', 'fa-dragon', 'fa-cow', 'fa-fish-fins', 'fa-bug', 'fa-cat'],
                'education': ['fa-graduation-cap', 'fa-pen-clip', 'fa-stapler', 'fa-book-open', 'fa-pencil', 'fa-school', 'fa-user-graduate'],
                'urban': ['fa-city', 'fa-landmark', 'fa-monument', 'fa-map-location-dot', 'fa-building', 'fa-road', 'fa-street'],
                'social': ['fa-users', 'fa-person-half-dress', 'fa-hand-peace', 'fa-language', 'fa-masks-theater', 'fa-quote-left'],
                'domestic': ['fa-house-chimney', 'fa-couch', 'fa-sink', 'fa-shirt', 'fa-bed', 'fa-kitchen'],
                'time': ['fa-clock', 'fa-hourglass', 'fa-calendar-days'],
                'nature': ['fa-cloud-sun', 'fa-temperature-high', 'fa-cloud-meatball', 'fa-compass', 'fa-mountain', 'fa-leaf', 'fa-bolt', 'fa-globe', 'fa-snowflake', 'fa-seedling', 'fa-water'],
                'abstract': ['fa-face-smile', 'fa-star-half-stroke', 'fa-child', 'fa-brain', 'fa-head-side-virus', 'fa-heart-pulse', 'fa-masks-theater', 'fa-heart-crack', 'fa-brain-circuit'],
                'travel': ['fa-suitcase', 'fa-plane', 'fa-hotel', 'fa-umbrella-beach', 'fa-map'],
                'medical': ['fa-heart-pulse', 'fa-hospital', 'fa-dna', 'fa-microscope', 'fa-stethoscope', 'fa-bone', 'fa-flask-vial'],
                'tech': ['fa-microchip', 'fa-code', 'fa-hubspot', 'fa-shield-halved', 'fa-mobile-screen-button', 'fa-laptop-code'],
                'business': ['fa-briefcase', 'fa-bag-shopping', 'fa-chart-line', 'fa-money-bill-trend-up', 'fa-gem', 'fa-scale-balanced']
            };
            const currentFamily = Object.keys(iconFamilies).find(k => iconFamilies[k].includes(currentChapterIcon)) || 'other';

            // === ULTIMATE SEMANTIC ANCHOR: Multi-Chapter context ===
            const anchorChapters = [];
            Object.values(WORDS_DATA).forEach(level => {
                level.forEach(chapter => {
                    if (chapter.words.some(w => w.en === word.en || w.tr === word.tr)) {
                        anchorChapters.push(chapter.title);
                    }
                });
            });

            const scoredDistractors = harvestPool
                .filter(w => {
                    // 1. Same word safety & Placeholder Guard
                    if (w.en === word.en || w.tr === word.tr) return false;
                    const dEnRaw = String(w.en || '');
                    const dTrRaw = String(w.tr || '');
                    if (dEnRaw.includes('...') || dTrRaw.includes('...') || dEnRaw.includes('____') || dTrRaw.includes('____')) return false;
                    if (dEnRaw.length < 2 || dTrRaw.length < 2) return false;

                    // --- 1.5 WORD BOUNDARY GUARD (Strictly prevent mix-ups) ---
                    const targetHasSpaces = (tTr.includes(' ') || tEn.includes(' '));
                    const distHasSpaces = (dTrRaw.includes(' ') || dEnRaw.includes(' '));
                    if (targetHasSpaces !== distHasSpaces) return false;

                    // 2. SAME CHAPTER or ANCHOR (Highest Priority)
                    if (w.chapterTitle === currentChapterTitle || anchorChapters.includes(w.chapterTitle)) return true;

                    // 3. ICON FAMILY (Strong Relevance)
                    if (currentFamily !== 'other' && iconFamilies[currentFamily].includes(w.chapterIcon)) return true;

                    // 4. Tight Type Filtering (Numbers, Colors, etc. - STRICT)
                    const distType = this.getWordType(w.en, w.tr, false, w.chapterTitle);
                    const tightTypes = ['number', 'color', 'time', 'food', 'animal', 'verb', 'adjective', 'phrase', 'greeting', 'health', 'travel', 'school', 'home', 'business'];

                    // --- THE SEMANTIC ANCHOR LOCK ---
                    // If target is a specialized type, strictly forbid mixing with other specialized types
                    if (tightTypes.includes(targetType) && distType !== targetType) return false;

                    // --- NUCLEAR TYPE PENALTY ---
                    // Never mix Verbs with Nouns or Adjectives in high-relevance phase
                    if ((targetType === 'verb' && distType !== 'verb') || (targetType === 'adjective' && distType !== 'adjective')) return false;

                    // 5. Broad Filter: If it's the same type, let it through for scoring
                    if (distType === targetType) return true;

                    // 6. Same level fallback (ONLY as a last resort in scoring phase)
                    if (w.levelName === currentLevelName) return true;

                    return false;
                })
                .map(w => {
                    let score = 0;
                    const distEn = String(w.en || '').toLowerCase().trim();
                    const distTr = String(w.tr || '').toLowerCase().trim();
                    if (!distTr || distTr.includes('...') || distTr.length < 2) return { word: w, score: -1000000 };

                    const distType = this.getWordType(w.en, w.tr, false, w.chapterTitle);

                    // --- 1. SEMANTIC DIMENSION ---
                    if (w.chapterTitle === currentChapterTitle) score += 500000; // Nuclear Boost: same chapter
                    if (anchorChapters.includes(w.chapterTitle)) score += 300000; // High: shared context
                    if (currentFamily !== 'other' && iconFamilies[currentFamily].includes(w.chapterIcon)) score += 150000; // Family

                    if (distType === targetType) score += 100000; // Type match
                    else score -= 100000; // Type mismatch penalty

                    // --- 1.5 NUCLEAR PHRASE GUARD ---
                    const targetHasSpaces = (tTr.includes(' ') || tEn.includes(' '));
                    const distHasSpaces = (distTr.includes(' ') || distEn.includes(' '));
                    if (targetHasSpaces !== distHasSpaces) score -= 250000; // Strong penalty for mixing formats

                    if (w.levelName === currentLevelName) score += 35000; // Level Consistency

                    // --- 2. VISUAL DIMENSION (The "Saçma" Fix) ---
                    const lenRatio = Math.min(distTr.length, tTr.length) / Math.max(distTr.length, tTr.length);
                    score += (lenRatio * 30000); // Higher ratio (closer length) = higher score
                    if (lenRatio < 0.75) score -= 60000; // Aggressive penalty for "nonsense" length mismatches
                    if (lenRatio < 0.5) score -= 200000; // Strictly ignore tiny vs huge words

                    // Morphology / Suffix matching (Turkish focus)
                    const distMorphTr = this.getMorphology(distTr, 'tr');
                    const distMorphEn = this.getMorphology(distEn, 'en');
                    if (distMorphTr === correctMorphTr && correctMorphTr !== 'root') score += 25000;
                    if (distMorphEn === correctMorphEn && correctMorphEn !== 'root') score += 10000;

                    // Levenshtein & Char overlap
                    const dTr = this.levenshteinDistance(distTr, tTr);
                    if (dTr <= 3) score += 20000;
                    if (dTr <= 2) score += 10000;

                    // --- 3. SESSION VARIETY ---
                    const normDist = this.normalize(distTr);
                    if (this.current.sessionSeenDistractors && this.current.sessionSeenDistractors.has(normDist)) {
                        score -= 70000; // Drastic penalty to prevent repetitions
                    }

                    return { word: w, score: score + Math.random() * 2000 };
                })
                .sort((a, b) => b.score - a.score);



            const sortedCandidateWords = scoredDistractors.filter(d => d.score > -50000).map(d => d.word);
            const lookupWord = word.original || word.en;
            let ctx = (this.stats && this.stats.sentenceCache && this.stats.sentenceCache[lookupWord]) ? this.stats.sentenceCache[lookupWord] : null;
            if (!ctx) {
                const isAdvanced = this.current.level === 'İleri' || this.current.level === 'Orta';
                const res = await this.fetchSmartSentence(lookupWord, this.current.level, isAdvanced);
                if (res) ctx = res;
            }

            // --- QUESTION TYPE SETUP ---
            const targetLang = this.settings.targetLang || 'en';
            const sourceLang = this.settings.sourceLang || 'tr';

            // 0. SCRAMBLE MODE (TOP PRIORITY FLOW CONTROL)
            if (qType === 4) {
                const setupScrambleGame = async (promptSent, buildSent) => {
                    if (!promptSent || !buildSent) return false;
                    const safePromptSent = String(promptSent);
                    const safeBuildSent = String(buildSent);

                    if (!this.isValidForLanguage(safeBuildSent, targetLang)) {
                        console.warn(`Scramble aborted: Script mismatch. Falling back.`);
                        return false;
                    }

                    qText.innerHTML = `<div style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 20px;">${this.locale.qScramble}</div>
                                     <div style="font-size: 1.8rem; font-weight: 600; line-height: 1.4; color: var(--text-primary);">"${safePromptSent}"</div>`;

                    let gameCorrect = safeBuildSent;
                    if (gameCorrect.includes('/')) gameCorrect = gameCorrect.split('/')[0].trim();
                    correctOption = String(gameCorrect);

                    if (this.elements.scrambleArea) this.elements.scrambleArea.style.display = 'flex';
                    if (this.elements.optionsGrid) this.elements.optionsGrid.style.display = 'none';

                    // 1. Tokenize and normalize to lowercase to fix case issues
                    const tokens = String(correctOption).split(/\s+/)
                        .map(t => String(t).replace(/[.,!?;:¿¡"''`´()]/g, ''))
                        .filter(t => t.length > 0 && !/^[-—–—]+$/.test(t))
                        .map(t => t === 'I' ? 'I' : t.toLowerCase()); // Keep 'I' uppercase

                    const gameTokens = [...tokens];

                    // 2. SMART DISTRACTORS (Common confusions)
                    const confusions = {
                        'he': 'she', 'she': 'he', 'him': 'her', 'her': 'him', 'my': 'your',
                        'is': 'are', 'are': 'is', 'was': 'were', 'do': 'does', 'go': 'goes',
                        'in': 'on', 'on': 'in', 'at': 'to', 'a': 'the', 'the': 'a',
                        'this': 'that', 'that': 'this', 'me': 'you', 'his': 'her', 'one': 'two',
                        'we': 'they', 'they': 'we', 'i': 'you', 'who': 'which', 'what': 'how'
                    };

                    let added = 0;
                    gameTokens.forEach(t => {
                        const lowT = String(t).toLowerCase();
                        if (added >= 6) return;
                        if (confusions[lowT] && !gameTokens.map(gt => gt.toLowerCase()).includes(confusions[lowT])) {
                            gameTokens.push(confusions[lowT]);
                            added++;
                        }
                    });

                    // Fallback using the high-quality scored list (Icon-Family Filtered)
                    if (added < 4) {
                        const others = scoredDistractors.filter(d => {
                            const w = String(d.word.en).toLowerCase();
                            return w.length > 2 && w.length < 8 && !gameTokens.map(gt => gt.toLowerCase()).includes(w);
                        }).slice(0, 10);
                        this.shuffleArray(others).slice(0, 4 - added).forEach(d => gameTokens.push(String(d.word.en).toLowerCase()));
                    }

                    this.shuffleArray(gameTokens);
                    this.elements.scrambleOptions.innerHTML = '';
                    this.elements.scrambleTarget.innerHTML = '';

                    // Capitalize function for display (Locale Aware)
                    const toTitleCase = (str) => {
                        const s = String(str);
                        const lang = (targetLang === 'tr' || sourceLang === 'tr') ? 'tr' : 'en';
                        return s.charAt(0).toLocaleUpperCase(lang) + s.slice(1).toLocaleLowerCase(lang);
                    };

                    gameTokens.forEach(token => {
                        const btn = document.createElement('button');
                        btn.className = 'scramble-word';
                        btn.textContent = String(token); // Use original case
                        btn.onclick = () => {
                            const clone = btn.cloneNode(true);
                            clone.onclick = () => {
                                clone.remove();
                                btn.classList.remove('used');
                                btn.style.opacity = '1';
                                btn.style.pointerEvents = 'auto';
                            };
                            this.elements.scrambleTarget.appendChild(clone);
                            btn.classList.add('used');
                            btn.style.opacity = '0.5';
                            btn.style.pointerEvents = 'none';
                        };
                        this.elements.scrambleOptions.appendChild(btn);
                    });

                    if (this.elements.checkScrambleBtn) {
                        this.elements.checkScrambleBtn.style.display = 'block';
                        this.elements.checkScrambleBtn.onclick = () => {
                            const selected = Array.from(this.elements.scrambleTarget.children)
                                .map(c => String(c.textContent)).join(' ').trim();

                            let target = String(correctOption);

                            // Pronoun Swap Safety (She/He/It/O)
                            // If user picked "She" but correct is "He", it should still pass if it's the only diff
                            const normSel = this.normalize(selected);
                            const normCor = this.normalize(target);

                            let scoreFix = (normSel === normCor);
                            if (!scoreFix) {
                                // Rule: If only one word differs and it's a pronoun swap (he/she/it), accept it.
                                const selWords = normSel.split(' ');
                                const corWords = normCor.split(' ');
                                if (selWords.length === corWords.length) {
                                    let diffs = 0;
                                    for (let i = 0; i < selWords.length; i++) {
                                        if (selWords[i] !== corWords[i]) {
                                            const pAlts = ['he', 'she', 'it', 'o'];
                                            if (pAlts.includes(selWords[i]) && pAlts.includes(corWords[i])) {
                                                diffs++;
                                            } else {
                                                diffs += 10; // Not a pronoun swap
                                            }
                                        }
                                    }
                                    if (diffs === 1) scoreFix = true;
                                }
                            }

                            this.checkAnswer(scoreFix ? target : selected, target, this.elements.scrambleTarget);
                        };
                    }
                    return true;
                };

                let scrambleStarted = false;
                if (ctx) {
                    if (this.current.level === 'Başlangıç' && (String(ctx.en).split(' ').length > 6 || String(ctx.en).length > 40)) {
                        // skip
                    } else {
                        let promptText = String(ctx.tr);
                        let buildText = String(ctx.en);

                        if (sourceLang !== 'tr') {
                            promptText = await this.quickTranslate(promptText, 'tr', sourceLang) || promptText;
                        }
                        if (targetLang !== 'en') {
                            buildText = await this.quickTranslate(buildText, 'en', targetLang) || buildText;
                        }

                        scrambleStarted = await setupScrambleGame(promptText, buildText);
                    }
                }

                if (!scrambleStarted && word.example && word.example.en && word.example.tr) {
                    let promptText = String(word.example.tr);
                    let buildText = String(word.example.en);
                    if (sourceLang !== 'tr') promptText = await this.quickTranslate(promptText, 'tr', sourceLang) || promptText;
                    if (targetLang !== 'en') buildText = await this.quickTranslate(buildText, 'en', targetLang) || buildText;
                    scrambleStarted = await setupScrambleGame(promptText, buildText);
                }

                if (scrambleStarted) {
                    this.current.isLocked = false;
                    return;
                }

                console.warn("Cümle kurma başarısız oldu, klasik teste dönülüyor.");
                qType = 0;
                this.current.qType = 0;
                if (this.elements.optionsGrid) this.elements.optionsGrid.style.display = 'grid';
                if (this.elements.scrambleArea) this.elements.scrambleArea.style.display = 'none';
                if (this.elements.checkScrambleBtn) this.elements.checkScrambleBtn.style.display = 'none';
            }

            // MULTIPLE CHOICE TYPES (0, 1, 2)
            if (qType === 0) {
                let displayWord = String(word.en);
                if (targetLang !== 'en') displayWord = await this.quickTranslate(displayWord, 'en', targetLang) || displayWord;
                qText.innerHTML = `<div style="font-size: 2.5rem; font-weight: 600;">${displayWord}</div>
                                 <div style="font-size: 1.1rem; color: var(--text-secondary); margin-top: 15px;">${this.locale.qTargetToSource}</div>`;
                let correctSrc = String(word.tr);
                if (sourceLang !== 'tr') correctSrc = await this.quickTranslate(correctSrc, 'tr', sourceLang) || correctSrc;
                correctOption = correctSrc;
                this.current.displayWord = displayWord;
                this.current.displayLang = this.settings.targetLang;
                if (this.settings.autoPlay) setTimeout(() => this.speakWord(displayWord, this.settings.targetLang), 500);

            } else if (qType === 1) {
                let displayWord = String(word.tr);
                if (sourceLang !== 'tr') displayWord = await this.quickTranslate(displayWord, 'tr', sourceLang) || displayWord;
                qText.innerHTML = `<div style="font-size: 2.5rem; font-weight: 600;">${displayWord}</div>
                                 <div style="font-size: 1.1rem; color: var(--text-secondary); margin-top: 15px;">${this.locale.qSourceToTarget}</div>`;
                this.current.displayWord = displayWord;
                this.current.displayLang = this.settings.sourceLang;
                if (this.settings.autoPlay) setTimeout(() => this.speakWord(displayWord, this.settings.sourceLang), 500);
                correctOption = String(word.en);
                if (targetLang !== 'en') {
                    const translated = await this.quickTranslate(correctOption, 'en', targetLang);
                    if (translated) correctOption = translated;
                }

            } else if (qType === 2) {
                qText.innerHTML = `<div style="margin-top:20px; color: var(--accent-color); cursor: pointer; animation: pulse 2s infinite;">
                                    <i class="fas fa-volume-up" style="font-size: 3rem;"></i>
                                    <div style="font-size: 1.3rem; opacity: 0.9; font-weight: 700;">${this.locale.qAudio}</div>
                                   </div>`;
                this.current.displayWord = String(word.en);
                this.current.displayLang = this.settings.targetLang;
                const speakAction = () => this.speakWord(String(word.en), this.settings.targetLang);
                qText.querySelector('div').onclick = speakAction;
                setTimeout(speakAction, 600);
                correctOption = String(word.tr);
                if (sourceLang !== 'tr') {
                    const translated = await this.quickTranslate(correctOption, 'tr', sourceLang);
                    if (translated) correctOption = translated;
                }
            }

            // --- ELITE DISTRACTOR ENGINE (The "Kökten" Selection) ---
            if (qType !== 4) {
                const displayKey = (qType === 1) ? 'en' : 'tr';
                // Expected language for distractor options
                const expectedDistractorLang = (displayKey === 'en') ? targetLang : sourceLang;
                const currentOrigEn = (String(word.original) || String(word.en) || "").toLowerCase();
                let finalDistractors = [];
                const currentAlts = String(correctOption || '').toLowerCase().split('/').map(s => s.trim());
                const seenNormInLoop = new Set();
                seenNormInLoop.add(this.normalize(correctOption));
                currentAlts.forEach(alt => seenNormInLoop.add(this.normalize(alt)));

                const processMatches = async (scoredItems, forceLevelMatch = false) => {
                    const pmTargetHasSpaces = (tTr.includes(' ') || tEn.includes(' '));
                    for (const itemWrapper of scoredItems) {
                        if (finalDistractors.length >= 3) break;
                        const m = itemWrapper.word || itemWrapper;

                        // Skip if same word
                        if (m.en === word.en || m.tr === word.tr) continue;

                        // PHRASE GUARD: never mix single-words with multi-word phrases
                        const mHasSpaces = (String(m.en || '').includes(' ') || String(m.tr || '').includes(' '));
                        if (mHasSpaces !== pmTargetHasSpaces) continue;

                        // Use database values
                        let val = (displayKey === 'en') ? String(m.en) : String(m.tr);
                        if (!val || val === '...' || val.length < 2) continue;

                        // MANDATORY TRANSLATION for non-EN/TR targets
                        // Do NOT fall back to original on failure — wrong-language word is worse than no distractor
                        if (displayKey === 'en' && targetLang !== 'en') {
                            val = await this.quickTranslate(val, 'en', targetLang);
                            if (!val) continue;
                        } else if (displayKey === 'tr' && sourceLang !== 'tr') {
                            val = await this.quickTranslate(val, 'tr', sourceLang);
                            if (!val) continue;
                        }

                        val = this.sanitizeTranslation(val);
                        if (!val || val.length < 2) continue;

                        // LANGUAGE MIXING FIX: skip distractors in wrong script/language
                        if (!this._scriptMatches(val, expectedDistractorLang)) continue;

                        const normVal = this.normalize(val);
                        if (seenNormInLoop.has(normVal)) continue;

                        // WE DO NOT HARD SKIP sessionSeenDistractors here. 
                        // It's already penalized in the Score. If it's the only relevant thing left, we use it.
                        // However, we still skip if it's the exact same as the question.

                        finalDistractors.push(val);
                        seenNormInLoop.add(normVal);
                    }
                };

                // --- 🤖 AI-FIRST DISTRACTOR ENGINE 🤖 ---
                // NO MORE LOCAL LOGIC. ONLY SEMANTIC API.

                let apiDistractors = [];

                // --- 🤖 AI SEMANTIC ENGINE (Datamuse) 🤖 ---
                if (navigator.onLine && displayKey === 'en') {
                    try {
                        console.log("🔍 Fetching semantic neighbors from Datamuse...");
                        const onlineCandidates = await this.fetchOnlineDistractors(word.en, 'en');

                        for (const candidate of onlineCandidates) {
                            if (finalDistractors.length >= 3) break;

                            let val = candidate.word;
                            if (!val || val.length < 2 || val.includes(' ') || val.includes('...')) continue;

                            // Translate if needed
                            if (targetLang !== 'en') {
                                val = await this.quickTranslate(val, 'en', targetLang);
                            }

                            if (!val) continue;

                            // --- ACCURACY BURST ---
                            const tSpaces = (correctOption.includes(' '));
                            const dSpaces = (val.includes(' '));
                            if (tSpaces !== dSpaces) continue;

                            // Linguistic Safety
                            if (/[\[\]{}<>@#$%^&*=+|\\0-9]/.test(val)) continue;
                            const currentTargetLang = (displayKey === 'en' ? targetLang : sourceLang);
                            if (!this.isValidForLanguage(val, currentTargetLang)) continue;
                            // Script check: reject wrong-script or untranslated Turkish words
                            if (!this._scriptMatches(val, currentTargetLang)) continue;

                            const normVal = this.normalize(val);
                            if (seenNormInLoop.has(normVal)) continue;

                            finalDistractors.push(this.toTitleCase(val));
                            seenNormInLoop.add(normVal);
                        }
                    } catch (e) {
                        console.warn("⚠️ AI Fetch Failed:", e);
                    }
                }

                // --- DISTRACTOR SELECTION PIPELINE ---

                // Stage 1: The Gold Standard (Same Chapter + High Scored Candidates)
                // We take from the TOP of the scored list which is already tuned for Chapter, Icon, and Type.
                console.log("🎯 Phase 1: High-relevance candidates...");
                await processMatches(scoredDistractors.slice(0, 50));

                // Stage 2: Semantic Backfill (Hardcoded topic-specific variety)
                if (finalDistractors.length < 3) {
                    console.log("🧩 Phase 2: Topical backfill...");
                    const builtInLists = {
                        'number': ["Zero", "One", "Two", "Three", "Four", "Five", "Ten", "Hundred", "First", "Second"],
                        'color': ["Red", "Blue", "Green", "Yellow", "Black", "White", "Orange", "Purple", "Pink"],
                        'family': ["Mother", "Father", "Sister", "Brother", "Cousin", "Aunt", "Uncle", "Grandpa"],
                        'time': ["Day", "Night", "Today", "Tomorrow", "Week", "Month", "Year", "Morning"],
                        'food': ["Apple", "Bread", "Water", "Coffee", "Tea", "Milk", "Cheese", "Fruit"],
                        'animal': ["Cat", "Dog", "Bird", "Horse", "Cow", "Tiger", "Lion", "Fish"]
                    };
                    const list = builtInLists[targetType];
                    if (list) {
                        for (const item of list) {
                            if (finalDistractors.length >= 3) break;
                            const found = harvestPool.find(w => w.en.toLowerCase() === item.toLowerCase());
                            if (found) await processMatches([found]);
                        }
                    }
                }

                // STAGE 3: SEMANTIC BACKFILL (Hardcoded Topic Lists)
                // If we are looking for a Number, Color, etc., and internet/local failed, use hardcoded lists!
                const backfillTypes = ['number', 'color', 'time', 'food', 'animal', 'travel', 'school', 'family', 'body', 'clothes', 'home', 'science', 'health', 'business', 'law', 'nature', 'art', 'emotion', 'geography', 'sport', 'tech', 'phrase', 'greeting'];
                if (finalDistractors.length < 3 && backfillTypes.includes(targetType) && targetType !== 'noun' && targetType !== 'verb' && targetType !== 'adjective') {
                    const builtInLists = {
                        'number': [
                            { en: "one", tr: "bir" }, { en: "two", tr: "iki" }, { en: "three", tr: "üç" }, { en: "four", tr: "dört" },
                            { en: "five", tr: "beş" }, { en: "six", tr: "altı" }, { en: "seven", tr: "yedi" }, { en: "eight", tr: "sekiz" },
                            { en: "nine", tr: "dokuz" }, { en: "ten", tr: "on" }, { en: "eleven", tr: "on bir" }, { en: "twelve", tr: "on iki" },
                            { en: "twenty", tr: "yirmi" }, { en: "thirty", tr: "otuz" }, { en: "fifty", tr: "elli" }, { en: "hundred", tr: "yüz" },
                            { en: "thousand", tr: "bin" }, { en: "zero", tr: "sıfır" }
                        ],
                        'color': [
                            { en: "red", tr: "kırmızı" }, { en: "blue", tr: "mavi" }, { en: "green", tr: "yeşil" }, { en: "yellow", tr: "sarı" },
                            { en: "black", tr: "siyah" }, { en: "white", tr: "beyaz" }, { en: "orange", tr: "turuncu" }, { en: "purple", tr: "mor" },
                            { en: "pink", tr: "pembe" }, { en: "brown", tr: "kahverengi" }, { en: "grey", tr: "gri" }, { en: "violet", tr: "eflatun" }
                        ],
                        'time': [
                            { en: "monday", tr: "pazartesi" }, { en: "tuesday", tr: "salı" }, { en: "wednesday", tr: "çarşamba" }, { en: "thursday", tr: "perşembe" },
                            { en: "friday", tr: "cuma" }, { en: "saturday", tr: "cumartesi" }, { en: "sunday", tr: "pazar" }, { en: "january", tr: "ocak" },
                            { en: "february", tr: "şubat" }, { en: "march", tr: "mart" }, { en: "april", tr: "nisan" }, { en: "may", tr: "mayıs" },
                            { en: "june", tr: "haziran" }, { en: "july", tr: "temmuz" }, { en: "today", tr: "bugün" }, { en: "tomorrow", tr: "yarın" },
                            { en: "yesterday", tr: "dün" }
                        ],
                        'verb': [
                            { en: "go", tr: "gitmek" }, { en: "make", tr: "yapmak" }, { en: "do", tr: "yapmak" }, { en: "see", tr: "görmek" },
                            { en: "come", tr: "gelmek" }, { en: "look", tr: "bakmak" }, { en: "want", tr: "istemek" }, { en: "give", tr: "vermek" },
                            { en: "use", tr: "kullanmak" }, { en: "find", tr: "bulmak" }, { en: "tell", tr: "anlatmak" }, { en: "ask", tr: "sormak" },
                            { en: "work", tr: "çalışmak" }, { en: "seem", tr: "görünmek" }, { en: "feel", tr: "hissetmek" }, { en: "try", tr: "denemek" },
                            { en: "leave", tr: "ayrılmak" }, { en: "call", tr: "aramak" }
                        ],
                        'phrase': [
                            { en: "piece of cake", tr: "çocuk oyuncağı" }, { en: "break a leg", tr: "iyi şanslar" }, { en: "once in a blue moon", tr: "kırk yılda bir" },
                            { en: "call it a day", tr: "paydos etmek" }, { en: "in a nutshell", tr: "özetle" }, { en: "bite the bullet", tr: "dişini sıkmak" },
                            { en: "better late than never", tr: "geç olsun da güç olmasın" }, { en: "get out of hand", tr: "kontrolden çıkmak" }
                        ],
                        'greeting': [
                            { en: "hello", tr: "merhaba" }, { en: "goodbye", tr: "hoşça kal" }, { en: "please", tr: "lütfen" }, { en: "thanks", tr: "teşekkürler" },
                            { en: "yes", tr: "evet" }, { en: "no", tr: "hayır" }, { en: "sorry", tr: "üzgünüm" }, { en: "welcome", tr: "hoş geldiniz" },
                            { en: "good morning", tr: "günaydın" }, { en: "good night", tr: "iyi geceler" }, { en: "see you", tr: "görüşürüz" },
                            { en: "excuse me", tr: "affedersiniz" }, { en: "pardon me", tr: "afedersiniz" }, { en: "nice to meet you", tr: "tanıştığımıza memnun oldum" },
                            { en: "how are you?", tr: "nasılsın?" }, { en: "take care", tr: "kendine iyi bak" }, { en: "have a nice day", tr: "iyi günler" }
                        ],
                        'food': [
                            { en: "apple", tr: "elma" }, { en: "bread", tr: "ekmek" }, { en: "water", tr: "su" }, { en: "milk", tr: "süt" },
                            { en: "coffee", tr: "kahve" }, { en: "tea", tr: "çay" }, { en: "egg", tr: "yumurta" }, { en: "meat", tr: "et" },
                            { en: "chicken", tr: "tavuk" }, { en: "fish", tr: "balık" }, { en: "cheese", tr: "peynir" }, { en: "fruit", tr: "meyve" },
                            { en: "vegetable", tr: "sebze" }, { en: "sugar", tr: "şeker" }, { en: "salt", tr: "tuz" }, { en: "soup", tr: "çorba" }
                        ],
                        'animal': [
                            { en: "cat", tr: "kedi" }, { en: "dog", tr: "köpek" }, { en: "bird", tr: "kuş" }, { en: "horse", tr: "at" },
                            { en: "cow", tr: "inek" }, { en: "sheep", tr: "koyun" }, { en: "fish", tr: "balık" }, { en: "lion", tr: "aslan" },
                            { en: "tiger", tr: "kaplan" }, { en: "bear", tr: "ayı" }, { en: "mouse", tr: "fare" }, { en: "elephant", tr: "fil" }
                        ],
                        'travel': [
                            { en: "car", tr: "araba" }, { en: "bus", tr: "otobüs" }, { en: "train", tr: "tren" }, { en: "plane", tr: "uçak" },
                            { en: "ticket", tr: "bilet" }, { en: "hotel", tr: "otel" }, { en: "airport", tr: "havalimanı" }, { en: "passport", tr: "pasaport" },
                            { en: "bag", tr: "çanta" }, { en: "map", tr: "harita" }, { en: "road", tr: "yol" }, { en: "tourist", tr: "turist" },
                            { en: "city", tr: "şehir" }, { en: "luggage", tr: "bagaj" }, { en: "trip", tr: "gezi" }
                        ],
                        'school': [
                            { en: "book", tr: "kitap" }, { en: "pen", tr: "kalem" }, { en: "student", tr: "öğrenci" }, { en: "teacher", tr: "öğretmen" },
                            { en: "school", tr: "okul" }, { en: "class", tr: "sınıf" }, { en: "lesson", tr: "ders" }, { en: "paper", tr: "kağıt" },
                            { en: "desk", tr: "sıra" }, { en: "exam", tr: "sınav" }, { en: "homework", tr: "ödev" }, { en: "board", tr: "tahta" }
                        ],
                        'family': [
                            { en: "mother", tr: "anne" }, { en: "father", tr: "baba" }, { en: "sister", tr: "kız kardeş" }, { en: "brother", tr: "erkek kardeş" },
                            { en: "grandma", tr: "büyükanne" }, { en: "grandpa", tr: "büyükbaba" }, { en: "son", tr: "oğul" }, { en: "daughter", tr: "kız evlat" },
                            { en: "baby", tr: "bebek" }, { en: "friend", tr: "arkadaş" }, { en: "family", tr: "aile" }, { en: "child", tr: "çocuk" }
                        ],
                        'body': [
                            { en: "head", tr: "baş" }, { en: "eye", tr: "göz" }, { en: "ear", tr: "kulak" }, { en: "nose", tr: "burun" },
                            { en: "mouth", tr: "ağız" }, { en: "hand", tr: "el" }, { en: "arm", tr: "kol" }, { en: "leg", tr: "bacak" },
                            { en: "foot", tr: "ayak" }, { en: "hair", tr: "saç" }, { en: "face", tr: "yüz" }, { en: "finger", tr: "parmak" }
                        ],
                        'clothes': [
                            { en: "shirt", tr: "gömlek" }, { en: "shoes", tr: "ayakkabı" }, { en: "hat", tr: "şapka" }, { en: "pants", tr: "pantolon" },
                            { en: "dress", tr: "elbise" }, { en: "jacket", tr: "ceket" }, { en: "coat", tr: "kaban" }, { en: "skirt", tr: "etek" },
                            { en: "socks", tr: "çorap" }, { en: "glasses", tr: "gözlük" }, { en: "scarf", tr: "atkı" }, { en: "gloves", tr: "eldiven" }
                        ],
                        'home': [
                            { en: "table", tr: "masa" }, { en: "chair", tr: "sandalye" }, { en: "bed", tr: "yatak" }, { en: "door", tr: "kapı" },
                            { en: "window", tr: "pencere" }, { en: "room", tr: "oda" }, { en: "kitchen", tr: "mutfak" }, { en: "bathroom", tr: "banyo" },
                            { en: "house", tr: "ev" }, { en: "garden", tr: "bahçe" }, { en: "lamp", tr: "lamba" }, { en: "sofa", tr: "koltuk" }
                        ],
                        'science': [
                            { en: "space", tr: "uzay" }, { en: "star", tr: "yıldız" }, { en: "planet", tr: "gezegen" }, { en: "galaxy", tr: "galaksi" },
                            { en: "atom", tr: "atom" }, { en: "energy", tr: "enerji" }, { en: "cell", tr: "hücre" }, { en: "dna", tr: "dna" },
                            { en: "virus", tr: "virüs" }, { en: "robot", tr: "robot" }, { en: "lab", tr: "laboratuvar" }, { en: "theory", tr: "teori" }
                        ],
                        'health': [
                            { en: "health", tr: "sağlık" }, { en: "medicine", tr: "ilaç" }, { en: "doctor", tr: "doktor" }, { en: "hospital", tr: "hastane" },
                            { en: "nurse", tr: "hemşire" }, { en: "pain", tr: "ağrı" }, { en: "fever", tr: "ateş" }, { en: "blood", tr: "kan" },
                            { en: "heart", tr: "kalp" }, { en: "brain", tr: "beyin" }, { en: "surgery", tr: "ameliyat" }, { en: "treatment", tr: "tedavi" }
                        ],
                        'business': [
                            { en: "job", tr: "iş" }, { en: "office", tr: "ofis" }, { en: "money", tr: "para" }, { en: "price", tr: "fiyat" },
                            { en: "bank", tr: "banka" }, { en: "market", tr: "market" }, { en: "company", tr: "şirket" }, { en: "manager", tr: "yönetici" },
                            { en: "salary", tr: "maaş" }, { en: "contract", tr: "sözleşme" }, { en: "profit", tr: "kâr" }, { en: "loss", tr: "zarar" }
                        ],
                        'law': [
                            { en: "law", tr: "kanun" }, { en: "court", tr: "mahkeme" }, { en: "judge", tr: "hakim" }, { en: "lawyer", tr: "avukat" },
                            { en: "police", tr: "polis" }, { en: "crime", tr: "suç" }, { en: "prison", tr: "hapishane" }, { en: "justice", tr: "adalet" },
                            { en: "rights", tr: "haklar" }, { en: "vote", tr: "oy" }, { en: "election", tr: "seçim" }, { en: "president", tr: "başkan" }
                        ],
                        'nature': [
                            { en: "sun", tr: "güneş" }, { en: "rain", tr: "yağmur" }, { en: "snow", tr: "kar" }, { en: "wind", tr: "rüzgar" },
                            { en: "tree", tr: "ağaç" }, { en: "flower", tr: "çiçek" }, { en: "forest", tr: "orman" }, { en: "river", tr: "nehir" },
                            { en: "sea", tr: "deniz" }, { en: "mountain", tr: "dağ" }, { en: "fire", tr: "ateş" }, { en: "sky", tr: "gökyüzü" }
                        ],
                        'art': [
                            { en: "art", tr: "sanat" }, { en: "music", tr: "müzik" }, { en: "dance", tr: "dans" }, { en: "song", tr: "şarkı" },
                            { en: "film", tr: "film" }, { en: "book", tr: "kitap" }, { en: "picture", tr: "resim" }, { en: "photo", tr: "fotoğraf" },
                            { en: "design", tr: "tasarım" }, { en: "style", tr: "stil" }, { en: "museum", tr: "müze" }, { en: "theater", tr: "tiyatro" }
                        ],
                        'emotion': [
                            { en: "happy", tr: "mutlu" }, { en: "sad", tr: "üzgün" }, { en: "angry", tr: "kızgın" }, { en: "tired", tr: "yorgun" },
                            { en: "scared", tr: "korkmuş" }, { en: "bored", tr: "sıkılmış" }, { en: "excited", tr: "heyecanlı" }, { en: "love", tr: "aşk" },
                            { en: "hate", tr: "nefret" }, { en: "joy", tr: "sevinç" }, { en: "stress", tr: "stres" }, { en: "hope", tr: "umut" }
                        ],
                        'geography': [
                            { en: "world", tr: "dünya" }, { en: "map", tr: "harita" }, { en: "city", tr: "şehir" }, { en: "country", tr: "ülke" },
                            { en: "island", tr: "ada" }, { en: "desert", tr: "çöl" }, { en: "ocean", tr: "okyanus" }, { en: "river", tr: "nehir" },
                            { en: "border", tr: "sınır" }, { en: "region", tr: "bölge" }, { en: "north", tr: "kuzey" }, { en: "south", tr: "güney" }
                        ],
                        'sport': [
                            { en: "sport", tr: "spor" }, { en: "football", tr: "futbol" }, { en: "basketball", tr: "basketbol" }, { en: "tennis", tr: "tenis" },
                            { en: "game", tr: "oyun" }, { en: "team", tr: "takım" }, { en: "player", tr: "oyuncu" }, { en: "ball", tr: "top" },
                            { en: "score", tr: "skor" }, { en: "goal", tr: "gol" }, { en: "win", tr: "kazanmak" }, { en: "lose", tr: "kaybetmek" }
                        ],
                        'noun': [
                            { en: "thing", tr: "şey" }, { en: "object", tr: "nesne" }, { en: "place", tr: "yer" }, { en: "person", tr: "kişi" },
                            { en: "way", tr: "yol" }, { en: "day", tr: "gün" }, { en: "part", tr: "parça" }, { en: "life", tr: "hayat" },
                            { en: "world", tr: "dünya" }, { en: "school", tr: "okul" }, { en: "state", tr: "durum" }, { en: "family", tr: "aile" }
                        ],
                        'adjective': [
                            { en: "good", tr: "iyi" }, { en: "bad", tr: "kötü" }, { en: "big", tr: "büyük" }, { en: "small", tr: "küçük" },
                            { en: "long", tr: "uzun" }, { en: "short", tr: "kısa" }, { en: "happy", tr: "mutlu" }, { en: "sad", tr: "üzgün" },
                            { en: "new", tr: "yeni" }, { en: "old", tr: "eski" }, { en: "hot", tr: "sıcak" }, { en: "cold", tr: "soğuk" }
                        ]
                    };

                    const list = builtInLists[targetType];
                    if (list) {
                        // PREPARE BACKFILL WITH HARDCODED BILINGUAL DATA
                        // Shuffle first to get random variety from the list
                        const shuffledList = this.shuffleArray([...list]);
                        const smartFallbacks = [];

                        const destLang = (displayKey === 'en') ? targetLang : sourceLang;

                        for (const item of shuffledList) {
                            if (smartFallbacks.length >= 10) break;

                            let finalEn = item.en;
                            let finalTr = item.tr;

                            // For 3rd languages (neither EN nor TR), pre-translate and store
                            // in the key that processMatches will actually READ based on displayKey
                            if (destLang !== 'en' && destLang !== 'tr') {
                                const translated = await this.quickTranslate(item.en, 'en', destLang);
                                if (!translated) continue; // skip if translation failed
                                if (displayKey === 'en') finalEn = translated; // processMatches reads m.en
                                else finalTr = translated;                      // processMatches reads m.tr
                            }

                            smartFallbacks.push({ en: finalEn, tr: finalTr, original: item.en });
                        }

                        await processMatches(smartFallbacks, false, false);
                    }
                }

                // STAGE 4: GLOBAL AFFINITY FALLBACK (The "Son Kökten" Solution)
                if (finalDistractors.length < 3) {
                    // Just take more from the scored list, excluding those already processed
                    const remainingCandidates = scoredDistractors.slice(200, 1000).map(d => d.word);
                    await processMatches(remainingCandidates, false, false);
                }

                // STAGE 5: FINAL SAFETY LOOP
                let safetyCounter = 0;
                while (finalDistractors.length < 3 && safetyCounter < 3) {
                    safetyCounter++;
                    // In safety loop, strictly prioritize same level + sanity filters
                    const anyWords = harvestPool.filter(w => {
                        const wTr = String(w.tr || '');
                        const wEn = String(w.en || '');
                        if (wTr.includes('...') || wEn.includes('...') || wTr.includes('____')) return false;
                        const distHasSpaces = (wTr.includes(' ') || wEn.includes(' '));
                        const targetHasSpaces = (tTr.includes(' ') || tEn.includes(' '));
                        if (distHasSpaces !== targetHasSpaces) return false;
                        return w.levelName === currentLevelName && !seenNormInLoop.has(this.normalize(w.en));
                    });
                    await processMatches(this.shuffleArray(anyWords).slice(0, 50), false);
                }

                // Stage 6: Last Resort (Any Level)
                if (finalDistractors.length < 3) {
                    const absoluteAny = harvestPool.filter(w => {
                        const wTr = String(w.tr || '');
                        const wEn = String(w.en || '');
                        if (wTr.includes('...') || wEn.includes('...') || wTr.includes('____')) return false;
                        const distHasSpaces = (wTr.includes(' ') || wEn.includes(' '));
                        const targetHasSpaces = (tTr.includes(' ') || tEn.includes(' '));
                        if (distHasSpaces !== targetHasSpaces) return false;
                        return !seenNormInLoop.has(this.normalize(w.en));
                    });
                    await processMatches(this.shuffleArray(absoluteAny).slice(0, 10), false);
                }

                distractors = finalDistractors.slice(0, 3).map(d => {
                    const str = String(d);
                    const lang = (targetLang === 'tr' || sourceLang === 'tr') ? 'tr' : 'en';
                    return str.charAt(0).toLocaleUpperCase(lang) + str.slice(1).toLocaleLowerCase(lang);
                });


                // Track these distractors GLOBALLY to prevent repeats
                distractors.forEach(d => {
                    const n = this.normalize(d);
                    this.current.sessionSeenDistractors.add(n);
                    if (this.globalSeenDistractors) this.globalSeenDistractors.add(n);
                });

                // --- NUCLEAR SCRIPT GUARD: If Correct Answer is Leaked English, ABORT QUESTION ---
                let correctScriptCheck = this.isValidForLanguage(correctOption, (displayKey === 'en' ? targetLang : sourceLang));

                if (!correctScriptCheck) {
                    console.warn(`LEAK FOUND: "${correctOption}" for ${displayKey}. Attempting emergency fix...`);
                    const from = (displayKey === 'en') ? 'tr' : 'en';
                    const to = (displayKey === 'en') ? targetLang : sourceLang;
                    const fixed = await this.quickTranslate(correctOption, from, to);
                    if (fixed && this.isValidForLanguage(fixed, to)) {
                        correctOption = fixed;
                        correctScriptCheck = true;
                    }
                }

                let rawOptions = [String(correctOption), ...distractors];
                let optionsSeenNorm = new Set();
                let options = this.shuffleArray(rawOptions).map(opt => {
                    if (!opt) return null;
                    const norm = this.normalize(String(opt));
                    if (opt === correctOption) {
                        optionsSeenNorm.add(norm);
                        return opt;
                    }
                    if (optionsSeenNorm.has(norm)) return null;
                    optionsSeenNorm.add(norm);
                    if (!this.isValidForLanguage(opt, (displayKey === 'en' ? targetLang : sourceLang))) return null;
                    return String(opt);
                }).filter(o => o !== null);

                // --- SMART NUCLEAR BACKFILL (v15 - Affinity Aware) ---
                if (options.length < 4) {
                    const fallbackPool = scoredDistractors.slice(3, 300).map(d => d.word);
                    for (const w of fallbackPool) {
                        if (options.length >= 4) break;
                        let val = (displayKey === 'en') ? String(w.en) : String(w.tr);
                        if (displayKey === 'en' && targetLang !== 'en') val = await this.quickTranslate(val, 'en', targetLang);
                        if (displayKey === 'tr' && sourceLang !== 'tr') val = await this.quickTranslate(val, 'tr', sourceLang);

                        if (val && this.isValidForLanguage(val, (displayKey === 'en' ? targetLang : sourceLang))) {
                            const normVal = this.normalize(val);
                            if (!optionsSeenNorm.has(normVal)) {
                                options.push(val);
                                optionsSeenNorm.add(normVal);
                            }
                        }
                    }
                }

                // FALLBACK: If not enough options, add random words from database
                if (options.length < 4) {
                    const targetHasSpacesFb = (tTr.includes(' ') || tEn.includes(' '));
                    const allWords = [];
                    Object.values(WORDS_DATA).forEach(chapters => {
                        chapters.forEach(chapter => {
                            chapter.words.forEach(w => {
                                if (w.en !== word.en && w.tr !== word.tr) {
                                    allWords.push(w);
                                }
                            });
                        });
                    });

                    const shuffled = this.shuffleArray(allWords);
                    for (const w of shuffled) {
                        if (options.length >= 4) break;
                        const wHasSpaces = (String(w.en).includes(' ') || String(w.tr).includes(' '));
                        if (wHasSpaces !== targetHasSpacesFb) continue;
                        const val = (displayKey === 'en') ? String(w.en) : String(w.tr);
                        if (val && val !== '...' && !val.includes('...') && val.length > 1) {
                            const norm = this.normalize(val);
                            if (!optionsSeenNorm.has(norm)) {
                                options.push(val);
                                optionsSeenNorm.add(norm);
                            }
                        }
                    }
                }
                options = this.shuffleArray(options);

                // TRACK ALL FINAL OPTIONS TO PREVENT REPEATS IN NEXT QUESTIONS
                options.forEach(opt => {
                    const norm = this.normalize(opt);
                    if (opt !== correctOption) {
                        this.current.sessionSeenDistractors.add(norm);
                    }
                });

                this.elements.optionsGrid.innerHTML = '';
                options.forEach((opt, idx) => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn animate-in';
                    btn.style.animationDelay = `${idx * 0.05}s`;
                    let optDisplay = String(opt); // Use original case from DB/API
                    btn.innerHTML = `<span class="option-index">${String.fromCharCode(65 + idx)}</span>
                        <span class="option-text">${optDisplay}</span>`;
                    btn.onclick = () => this.checkAnswer(String(opt), String(correctOption), btn);
                    this.elements.optionsGrid.appendChild(btn);
                });
            }

            const quizProgress = ((this.current.index) / this.current.words.length) * 100;
            if (this.elements.quizProgressBar) this.elements.quizProgressBar.style.width = `${quizProgress}%`;
            if (this.elements.ttsBtn) this.elements.ttsBtn.style.display = 'block';
            this.current.isLocked = false;

        } catch (e) {
            console.error("Next Question Critical Fallback:", e);
            // Emergency MC Generation if everything else exploded
            qText.innerHTML = `<div>${word.en}</div>`;
            correctOption = word.tr;
            this.current.isLocked = false;
        }
    }

    speakWord(text, lang = null) {
        if (!text) return;
        // Cancel any ongoing speech, then yield to browser before speaking
        window.speechSynthesis.cancel();

        const targetLang = lang || this.settings.targetLang || 'en';
        const shortLang = targetLang.split('-')[0].toLowerCase();

        const _doSpeak = (voiceList) => {
            const utterance = new SpeechSynthesisUtterance(String(text));
            utterance.lang = targetLang;
            utterance.rate = 0.9;
            utterance.onerror = (e) => console.warn('TTS error:', e.error, '| text:', text, '| lang:', targetLang);

            if (voiceList && voiceList.length > 0) {
                // Priority 1: Exact + Google
                let voice = voiceList.find(v => v.lang === targetLang && v.name.toLowerCase().includes('google'));
                // Priority 2: Language prefix match
                if (!voice) voice = voiceList.find(v => v.lang.toLowerCase().startsWith(shortLang));
                // Priority 3: Let the browser pick via utterance.lang — do NOT force a mismatched voice
                if (voice) {
                    utterance.voice = voice;
                } else {
                    console.warn(`TTS: no voice for "${targetLang}", relying on utterance.lang.`);
                }
            }

            try {
                // Chrome bug fix: speechSynthesis can get stuck in paused state after cancel()
                if (window.speechSynthesis.paused) window.speechSynthesis.resume();
                window.speechSynthesis.speak(utterance);
                // Chrome long-text bug fix: keep synthesis alive
                const keepAlive = setInterval(() => {
                    if (!window.speechSynthesis.speaking) { clearInterval(keepAlive); return; }
                    window.speechSynthesis.pause();
                    window.speechSynthesis.resume();
                }, 10000);
                utterance.onend = () => clearInterval(keepAlive);
                utterance.onerror = (e) => { clearInterval(keepAlive); console.warn('TTS error:', e.error, '| text:', text, '| lang:', targetLang); };
            } catch(e) {
                console.error('TTS speak() threw:', e);
            }
        };

        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            _doSpeak(voices);
        } else {
            // Voices not loaded yet — try onvoiceschanged + polling fallback
            let fired = false;
            window.speechSynthesis.onvoiceschanged = () => {
                if (fired) return;
                fired = true;
                window.speechSynthesis.onvoiceschanged = null;
                _doSpeak(window.speechSynthesis.getVoices());
            };
            // Polling fallback: onvoiceschanged doesn't fire on all browsers/Linux
            let polls = 0;
            const poll = setInterval(() => {
                polls++;
                const v = window.speechSynthesis.getVoices();
                if (v.length > 0 || polls >= 30) {
                    clearInterval(poll);
                    if (!fired) {
                        fired = true;
                        window.speechSynthesis.onvoiceschanged = null;
                        if (v.length > 0) {
                            this.ttsAvailable = true;
                            _doSpeak(v);
                        } else {
                            this.ttsAvailable = false;
                            console.warn('TTS: voices never loaded after 3s.');
                            this._showTTSToast();
                        }
                    }
                }
            }, 100);
        }
    }

    _showTTSToast() {
        const existing = document.getElementById('ttsToast');
        if (existing) return;
        const toast = document.createElement('div');
        toast.id = 'ttsToast';
        toast.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:10px 20px;border-radius:8px;font-size:0.9rem;z-index:9999;opacity:0;transition:opacity 0.3s;';
        toast.textContent = this.locale.ttsUnavailable;
        document.body.appendChild(toast);
        requestAnimationFrame(() => { toast.style.opacity = '1'; });
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    speakCurrentWord() {
        const word = this.current && this.current.words && this.current.words[this.current.index];
        if (!word) return;
        // Use the exact word+language that is currently displayed for correct accent
        if (this.current.displayWord && this.current.displayLang) {
            this.speakWord(this.current.displayWord, this.current.displayLang);
        } else if (this.current.qType === 1) {
            this.speakWord(String(word.tr), this.settings.sourceLang);
        } else {
            this.speakWord(String(word.en), this.settings.targetLang);
        }
    }

    _scriptMatches(text, lang) {
        if (!text || !lang) return true;
        const s = String(text);
        const shortLang = lang.split('-')[0].toLowerCase();
        const isCJK       = /[\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]/.test(s);
        const isArabic    = /[\u0600-\u06FF]/.test(s);
        const isCyrillic  = /[\u0400-\u04FF]/.test(s);
        const isDevanagari= /[\u0900-\u097F]/.test(s);
        // ğ (U+011F) and ı (U+0131) are exclusive to Turkish among common languages
        const hasTurkishSpecific = /[\u011F\u011E\u0131]/.test(s); // ğ Ğ ı

        if (shortLang === 'ja') return isCJK;
        if (shortLang === 'zh') return isCJK;
        if (shortLang === 'ko') return /[\uAC00-\uD7AF]/.test(s);
        if (shortLang === 'ar') return isArabic;
        if (shortLang === 'hi') return isDevanagari;
        if (shortLang === 'ru' || shortLang === 'uk') return isCyrillic;
        // Turkish: allow Turkish chars, reject non-Latin scripts
        if (shortLang === 'tr') return !isCJK && !isArabic && !isCyrillic && !isDevanagari;
        // All other Latin-script languages (en, fr, de, es, it, pt, nl, sv):
        // Reject Turkish-specific chars (means translation failed and returned Turkish)
        // and reject non-Latin scripts
        return !hasTurkishSpecific && !isCJK && !isArabic && !isCyrillic && !isDevanagari;
    }

    normalize(str) {
        if (!str) return "";
        let s = String(str)
            .toLocaleLowerCase('tr')
            .replace(/[.,!?;:"]/g, '')
            .replace(/\s+/g, ' ')
            .trim();

        // Digit to Word Mapping (TR fallback) to prevent "5" and "Beş" duplicates
        const trNumbers = { "0": "sıfır", "1": "bir", "2": "iki", "3": "üç", "4": "dört", "5": "beş", "6": "altı", "7": "yedi", "8": "sekiz", "9": "dokuz", "10": "on" };
        if (trNumbers[s]) return trNumbers[s];
        return s;
    }

    levenshteinDistance(a, b) {
        const s1 = String(a || '').toLowerCase();
        const s2 = String(b || '').toLowerCase();
        if (s1.length === 0) return s2.length;
        if (s2.length === 0) return s1.length;
        const matrix = [];
        for (let i = 0; i <= s2.length; i++) matrix[i] = [i];
        for (let j = 0; j <= s1.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= s2.length; i++) {
            for (let j = 1; j <= s1.length; j++) {
                if (s2.charAt(i - 1) === s1.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
                else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
        return matrix[s2.length][s1.length];
    }

    hasCyrillic(str) {
        return /[а-яА-ЯёЁ]/.test(String(str));
    }

    checkAnswer(selected, correct, card) {
        if (this.current.isLocked) return;
        this.current.isLocked = true;

        try {
            const cleanSelected = this.normalize(String(selected));
            const cleanCorrect = this.normalize(String(correct));

            // Support slash-separated alternative answers
            let isCorrect = (cleanSelected === cleanCorrect);
            if (!isCorrect && String(correct).includes('/')) {
                const alts = String(correct).split('/').map(a => this.normalize(a));
                if (alts.includes(cleanSelected)) isCorrect = true;
            }

            // === PRONOUN FLEXIBILITY FIX ===
            const pronounMap = {
                'o': ['he', 'she', 'it', 'they'],
                'he': ['o', 'she', 'it'], // Allow gender neutral swaps
                'she': ['o', 'he', 'it'],
                'it': ['o', 'he', 'she'],
                'they': ['o', 'onlar'],
                'onlar': ['they'],
                'ben': ['i'], 'i': ['ben'],
                'sen': ['you'], 'you': ['sen', 'siz'],
                'siz': ['you'], 'biz': ['we'], 'we': ['biz']
            };

            if (!isCorrect) {
                const selWords = cleanSelected.split(' ');
                const corWords = cleanCorrect.split(' ');
                if (selWords.length === corWords.length) {
                    let diffs = 0;
                    for (let i = 0; i < selWords.length; i++) {
                        if (selWords[i] !== corWords[i]) {
                            if (pronounMap[corWords[i]] && pronounMap[corWords[i]].includes(selWords[i])) {
                                diffs++;
                            } else {
                                diffs += 10;
                            }
                        }
                    }
                    if (diffs === 1) isCorrect = true;
                }
            }

            if (isCorrect) {
                this.current.correct++;
                this.current.combo++;
                this.current.xpEarned += 10 + (this.current.combo > 2 ? 5 : 0);
                if (card && card.classList) card.classList.add('correct');

                // Audio Feedback
                try {
                    const ctx = new (window.AudioContext || window.webkitAudioContext)();
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(500, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.1);
                    gain.gain.setValueAtTime(0.1, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.5);
                } catch (e) { console.warn("Audio Context Error", e); }

                this.showFeedback();
                this.updateComboUI();
            } else {
                // LOSE HEART
                this.stats.hearts = Math.max(0, this.stats.hearts - 1);
                this.updateHeartsUI();
                this.save();

                // Audio Feedback: Wrong
                try {
                    const ctx = new (window.AudioContext || window.webkitAudioContext)();
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(150, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
                    gain.gain.setValueAtTime(0.1, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.3);
                } catch (e) { console.warn("Audio Context Error", e); }

                this.current.combo = 0;
                if (card && card.classList) card.classList.add('wrong');

                const quizContainer = document.querySelector('.quiz-container');
                if (quizContainer) {
                    quizContainer.classList.add('shake-anim');
                    setTimeout(() => quizContainer.classList.remove('shake-anim'), 400);
                }
                this.updateComboUI();

                // Track Mistake
                const word = this.current.words[this.current.index];
                if (word && !this.stats.mistakes.find(m => m.en === word.en)) {
                    this.stats.mistakes.push({ en: word.en, tr: word.tr });
                    this.save();
                }

                // Highlight Correct (Skip for Scramble Mode)
                if (this.current.qType !== 4 && this.elements.optionsGrid) {
                    const normalize = (str) => String(str).toLocaleLowerCase('tr').replace(/[.,!?;:"]/g, '').trim();
                    const cleanCorrect = normalize(String(correct));

                    const options = this.elements.optionsGrid.querySelectorAll('.option-btn');
                    options.forEach(opt => {
                        const textSpan = opt.querySelector('.option-text');
                        if (textSpan && normalize(textSpan.textContent) === cleanCorrect) {
                            opt.classList.add('correct');
                        }
                    });
                } else if (this.current.qType === 4) {
                    // Scramble Mode Feedback
                    this.showToast(`${this.locale.errWrong} "${String(correct)}"`, 'error');
                }
            }
        } catch (e) {
            console.error("Check Answer Logic Error:", e);
            this.showToast(this.locale.genericError, 'error');
        }

        // ALWAYS ADVANCE
        setTimeout(() => {
            this.current.index++;
            if (this.current.index < this.current.words.length) {
                this.nextQuestion();
            } else {
                this.showResults();
            }
        }, 1500); // Slightly longer delay to read feedback
    }



    skipQuestion() {
        if (this.current.isLocked) return;
        this.current.combo = 0;
        this.updateComboUI();
        this.current.index++;
        if (this.current.index < this.current.words.length) {
            this.nextQuestion();
        } else {
            this.showResults();
        }
    }

    updateComboUI() {
        if (!this.elements.comboBadge) return;
        if (this.current.combo >= 2) {
            this.elements.comboBadge.style.display = 'block';
            this.elements.comboCount.textContent = this.current.combo;
        } else {
            this.elements.comboBadge.style.display = 'none';
        }
    }

    showFeedback() {
        if (!this.elements.quizFeedback) return;
        const messages = this.locale.feedbackList || ["Excellent!", "Great!", "Keep it up!"];
        const msg = messages[Math.floor(Math.random() * messages.length)];
        const div = document.createElement('div');
        div.className = 'feedback-msg';
        div.style.color = this.current.combo > 3 ? '#ff9600' : 'var(--accent-green)';
        div.textContent = msg;
        this.elements.quizFeedback.innerHTML = '';
        this.elements.quizFeedback.appendChild(div);
        setTimeout(() => div.remove(), 800);
    }

    awardXP(amount, element) {
        this.stats.xp += amount;
        this.save();
        this.updateStatsUI();

        const rect = element.getBoundingClientRect();
        const popup = document.createElement('div');
        popup.className = 'xp-popup';
        popup.textContent = (this.locale.xpPopup || "+ %s XP").replace('%s', amount);
        popup.style.left = `${rect.left + rect.width / 2}px`;
        popup.style.top = `${rect.top}px`;
        document.body.appendChild(popup);
        setTimeout(() => popup.remove(), 1200);
    }

    showResults() {
        try {
            // CRITICAL: Stop all speech and audio immediately
            window.speechSynthesis.cancel();

            this.elements.learnModal.style.display = 'none';

            const successRate = Math.round((this.current.correct / this.current.words.length) * 100);
            const duration = Math.round((Date.now() - this.current.startTime) / 60000);

            let bonus = 0;
            // LOWERED THRESHOLD: 70% is now enough to pass
            if (successRate >= 70) {
                bonus = 50;
                if (successRate === 100) bonus = 100;

                // Ensure ID type safety and ignore specialized drills
                const chIdRaw = this.current.chapter.id;
                if (chIdRaw && chIdRaw !== 'mistakes_drill') {
                    const chId = Number(chIdRaw);
                    if (!isNaN(chId) && !this.completedChapters.includes(chId)) {
                        this.completedChapters.push(chId);
                        this.save(); // Immediate local save
                        this.saveToCloud(true); // Immediate Firebase sync
                        // Refresh chapter map immediately to unlock next unit
                        if (this.current.level) {
                            setTimeout(() => {
                                this.renderPathNodes().catch(e => console.error("renderPathNodes after chapter completion failed:", e));
                            }, 0);
                        }
                    }
                }
            }

            const totalSessionXp = this.current.xpEarned + bonus;

            // Track daily quests
            if (!this.stats.dailyQuests) {
                this.stats.dailyQuests = {
                    lastReset: new Date().toDateString(),
                    xpEarned: 0,
                    wordsCompleted: 0
                };
            }

            // Reset quests if new day
            const today = new Date().toDateString();
            if (this.stats.dailyQuests.lastReset !== today) {
                this.stats.dailyQuests = {
                    lastReset: today,
                    xpEarned: 0,
                    wordsCompleted: 0
                };
            }

            // Update quest progress
            this.stats.dailyQuests.xpEarned += totalSessionXp;
            this.stats.dailyQuests.wordsCompleted += this.current.words.length;

            // Safe call to awardXP
            if (document.getElementById('learnedCount')) {
                this.awardXP(totalSessionXp, document.getElementById('learnedCount'));
            } else {
                this.stats.xp += totalSessionXp;
                this.save();
            }

            if (this.current.chapter.id === 'mistakes_drill') {
                const corrected = this.current.words.slice(0, this.current.correct);
                this.stats.mistakes = this.stats.mistakes.filter(m => !corrected.find(c => c.en === m.en));
            }

            // Practice recovery logic
            if (this.current.isPractice && successRate >= 80) {
                this.stats.hearts = Math.min(5, this.stats.hearts + 1);
                this.save();
                this.current.isPractice = false;
            }

            this.stats.dailyXp[today] = (this.stats.dailyXp[today] || 0) + totalSessionXp;
            this.stats.totalTime += duration;

            this.stats.records.push({
                date: new Date().toLocaleDateString(this.locale.locale || 'tr-TR'),
                level: this.current.level,
                chapter: this.current.chapter.title,
                xp: totalSessionXp,
                accuracy: successRate,
                duration: duration
            });

            this.stats.records.sort((a, b) => b.xp - a.xp);
            this.stats.records = this.stats.records.slice(0, 10);
            this.save();

            // TARGET THE NEW CONTAINER
            const contentDiv = document.getElementById('resultsContent');
            if (contentDiv) {
                const L = this.locale;
                contentDiv.innerHTML = `
    <div style="position: relative; z-index: 2;">
                    <div style="font-size:2rem; font-weight:900; margin-bottom: 20px; text-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                        ${successRate >= 70 ? L.resTitleSuccess : L.resTitleFail}
                    </div>
                    
                    <div class="result-stat-grid">
                        <div class="stat-card">
                            <div class="stat-value" style="color: #ffd700;">%${successRate}</div>
                            <div class="stat-label">${L.resAccuracy}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" style="color: var(--accent-green);">+${totalSessionXp}</div>
                            <div class="stat-label">${L.resXp}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" style="color: var(--accent-blue);">${duration}${L.minAbbr}</div>
                            <div class="stat-label">${L.resDuration}</div>
                        </div>
                    </div>

                    <div style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 20px;">
                        ${L.resSummaryPrefix} ${this.current.words.length} ${L.resSummarySuffix} ${this.current.correct} ${L.resSummaryMid}
                    </div>
                    
                    <button class="btn btn-primary" onclick="app.hideResults()" style="width: 100%;">${L.resBtn}</button>
                </div>
    `;
            }

            // FORCE DISPLAY: Violent ensure visible
            this.hideAllModals();
            const modal = this.elements.resultsModal;
            modal.style.display = 'flex';
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            modal.style.pointerEvents = 'all';
            modal.style.zIndex = '22000'; // Highest priority

            // Ensure hidden modal doesn't block clicks
            this.elements.learnModal.style.display = 'none';
            this.elements.learnModal.style.pointerEvents = 'none';

            if (this.current.isLeagueChallenge && successRate >= 90) {
                this.showPromotionSuccess();
            } else {
                this.checkPromotionEligibility();
            }

            this.updateStatsUI();
            this.updateQuestUI(); // Update quest display
        } catch (e) {
            console.error("Show Results Failed:", e);
            alert(this.locale.resultsError);
            // Even on error, force show
            this.elements.resultsModal.style.display = 'flex'; this.elements.resultsModal.style.opacity = "1";
            this.elements.resultsModal.style.zIndex = '22000';
        }
    }

    checkStreak() {
        const today = new Date().toDateString();
        if (this.stats.lastVisit !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (this.stats.lastVisit === yesterday.toDateString()) {
                this.stats.streak++;
            } else if (new Date(this.stats.lastVisit) < yesterday) {
                this.stats.streak = 1;
            }
            this.stats.lastVisit = today;
            this.save();
        }
    }


    showDailyQuests() {
        // Create or Reuse modal content
        const contentDiv = document.getElementById('resultsContent');
        const L = this.locale;
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div style="text-align: center; padding: 10px;">
                    <h2 style="font-size: 1.8rem; margin-bottom: 20px;">${L.questTitle}</h2>
                    
                    <div class="quest-card" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; margin-bottom: 10px; text-align: left;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                            <span><i class="fas fa-bolt" style="color: #ffd700;"></i> 50 ${L.xpSummary}</span>
                            <span style="color: #ffd700;">${this.stats.dailyQuests.xpEarned}/50</span>
                        </div>
                        <div class="progress-bar-small"><div class="progress-fill" style="width: ${Math.min((this.stats.dailyQuests.xpEarned / 50) * 100, 100)}%; background: #ffd700;"></div></div>
                    </div>

                    <div class="quest-card" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; margin-bottom: 20px; text-align: left;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                            <span><i class="fas fa-book" style="color: var(--accent-blue);"></i> 10 ${L.wordSummary}</span>
                            <span style="color: var(--accent-blue);">${this.stats.dailyQuests.wordsCompleted}/10</span>
                        </div>
                        <div class="progress-bar-small"><div class="progress-fill" style="width: ${Math.min((this.stats.dailyQuests.wordsCompleted / 10) * 100, 100)}%; background: var(--accent-blue);"></div></div>
                    </div>

                    <div id="questRewardArea">
                        <!-- Reward Button or Badge goes here -->
                    </div>

                    <button class="btn btn-secondary" onclick="app.hideResults()" style="width: 100%; margin-top: 10px;">${L.closeBtn}</button>
                </div>
            `;

            // Check Logic
            const isComplete = this.stats.dailyQuests.xpEarned >= 50 && this.stats.dailyQuests.wordsCompleted >= 10;
            const rewardArea = document.getElementById('questRewardArea');

            if (isComplete) {
                if (this.stats.dailyQuests.claimed) {
                    rewardArea.innerHTML = `
                            <div class="animate-pop" style="color: var(--accent-green); font-weight: bold; padding: 20px; border: 2px solid var(--accent-green); border-radius: 15px;">
                                <i class="fas fa-check-circle" style="font-size: 2rem;"></i><br>
                                ${L.questReward}
                            </div>
                        `;
                } else {
                    rewardArea.innerHTML = `
                            <button id="claimRewardBtn" class="btn btn-primary animate-pulse" style="width: 100%; padding: 15px; font-size: 1.1rem;">
                                <i class="fas fa-gift"></i> ${L.questClaimBtn}
                            </button>
                        `;
                    setTimeout(() => {
                        const btn = document.getElementById('claimRewardBtn');
                        if (btn) btn.onclick = () => {
                            this.stats.hearts = Math.min(5, this.stats.hearts + 1);
                            this.stats.dailyQuests.claimed = true;
                            this.save();
                            this.updateHeartsUI();
                            this.showToast(L.rewardClaimed, 'success');
                            this.showDailyQuests();
                        };
                    }, 0);
                }
            } else {
                rewardArea.innerHTML = `<div style="opacity: 0.5; font-style: italic;">${L.questIncomplete}</div>`;
            }
        }

        this.hideAllModals();
        this.elements.resultsModal.style.display = 'flex';
        this.elements.resultsModal.style.opacity = '1';
        this.elements.resultsModal.style.visibility = 'visible';
        this.elements.resultsModal.style.zIndex = '50000';
    }

    updateQuestUI() {
        if (!this.stats.dailyQuests) return;

        const xpProgress = Math.min((this.stats.dailyQuests.xpEarned / 50) * 100, 100);
        const wordsProgress = Math.min((this.stats.dailyQuests.wordsCompleted / 10) * 100, 100);

        // Attach Click Listener to Sidebar Items to open details
        const questBox = document.querySelector('.sidebar .quest-section'); // Assuming class
        if (questBox) {
            questBox.style.cursor = 'pointer';
            questBox.onclick = () => this.showDailyQuests();
        }

        const questItems = document.querySelectorAll('.quest-item');
        if (questItems[0]) {
            const xpBar = questItems[0].querySelector('.progress-fill');
            if (xpBar) xpBar.style.width = `${xpProgress}% `;
            questItems[0].parentElement.onclick = () => this.showDailyQuests(); // Fallback click
        }

        if (questItems[1]) {
            const wordsBar = questItems[1].querySelector('.progress-fill');
            if (wordsBar) wordsBar.style.width = `${wordsProgress}% `;
        }
    }

    updateStatsUI() {
        if (!this.elements || !this.stats) return;

        this.checkHeartRefill();
        const globalWordList = typeof getAllWords === 'function' ? getAllWords() : [];
        const totalWords = globalWordList.length || 1000;
        const masteredCount = (this.completedChapters ? this.completedChapters.length : 0) * 10;
        const progressPercent = Math.round((masteredCount / totalWords) * 100);

        if (this.elements.learnedCount) this.elements.learnedCount.textContent = masteredCount;
        if (this.elements.totalProgress) this.elements.totalProgress.textContent = `${progressPercent}% `;
        if (this.elements.totalProgressFill) {
            this.elements.totalProgressFill.style.width = `${progressPercent}% `;
        }
        if (this.elements.streakCount) this.elements.streakCount.textContent = this.stats.streak;
        if (this.elements.totalXP) this.elements.totalXP.textContent = this.stats.xp;

        if (this.elements.userLeagueXp) {
            this.elements.userLeagueXp.textContent = `${this.stats.xp} XP`;
        }

        if (this.elements.bestXp) {
            const best = (this.stats.records ? this.stats.records.length : 0) > 0 ? this.stats.records[0].xp : 0;
            this.elements.bestXp.textContent = best;
        }

        if (this.elements.totalSessions) {
            this.elements.totalSessions.textContent = (this.stats.records ? this.stats.records.length : 0);
        }

        const L = this.locale;
        const leagueNames = L.leagues || ["BRONZE", "SILVER", "GOLD", "PLATINUM", "LEGENDARY"];

        const leagues = [
            { name: leagueNames[0], min: 0, next: 1000, color: "#cd7f32" },
            { name: leagueNames[1], min: 1000, next: 3000, color: "#c0c0c0" },
            { name: leagueNames[2], min: 3000, next: 6000, color: "#ffd700" },
            { name: leagueNames[3], min: 6000, next: 10000, color: "#e5e4e2" },
            { name: leagueNames[4], min: 10000, next: Infinity, color: "#ce82ff" }
        ];

        const currentLeague = leagues[this.stats.currentLeague] || leagues[0];
        const nextLeague = leagues[this.stats.currentLeague + 1] || currentLeague;

        if (this.elements.leagueTitle) {
            const leagueText = `${this.locale.leagueInPrefix} ${currentLeague.name} ${this.locale.leagueInSuffix}`;
            this.elements.leagueTitle.textContent = leagueText.trim();
        }

        if (this.elements.leagueProgressFill) {
            const progressInLeague = this.stats.xp - currentLeague.min;
            const neededForNext = currentLeague.next - currentLeague.min;
            const leagueProgress = currentLeague.next === Infinity ? 100 : Math.min((progressInLeague / neededForNext) * 100, 100);

            this.elements.leagueProgressFill.style.width = `${leagueProgress}% `;
            this.elements.leagueProgressFill.style.background = currentLeague.color;

            if (this.elements.leaguePercent) {
                this.elements.leaguePercent.textContent = `${Math.round(leagueProgress)}% `;
            }

            if (this.elements.leagueStatusText) {
                if (this.stats.isPromotionReady) {
                    this.elements.leagueStatusText.innerHTML = `
                        <div style="background: rgba(88, 204, 2, 0.1); border: 1px dashed var(--accent-green); padding: 15px; border-radius: 15px; margin-top: 20px;">
                            <h4 style="font-size: 1.15rem; font-weight: 800; color: #ff9600; margin-bottom: 5px;">${L.promotionReady}</h4>
                            <p style="color: var(--text-primary); font-size: 0.85rem; margin-bottom: 10px;">${String(L.promotionDesc).replace('${nextLeague}', nextLeague.name)}</p>
                            <button id="startPromotionBtn" class="btn btn-primary" style="width: 100%; padding: 10px;">${L.startExam}</button>
                        </div>
                    `;
                    setTimeout(() => {
                        const btn = document.getElementById('startPromotionBtn');
                        if (btn) btn.onclick = () => this.startPromotionChallenge();
                    }, 0);
                } else {
                    if (currentLeague.next === Infinity) {
                        this.elements.leagueStatusText.textContent = L.leagueLegendaryTop;
                    } else {
                        this.elements.leagueStatusText.textContent = `${L.leagueNextReqPrefix} ${currentLeague.next - this.stats.xp} ${L.leagueNextReqMid} ${nextLeague.name} ${L.leagueNextReqSuffix}`.trim();
                    }
                }
            }
        }

        this.renderWeeklyChart();
        this.renderDeepAnalysis();

        if (this.elements.personalRecordsList) {
            this.elements.personalRecordsList.innerHTML = '';
            if ((this.stats.records ? this.stats.records.length : 0) === 0) {
                const emptyMsg = this.locale.noRecordsMsg;
                this.elements.personalRecordsList.innerHTML = `<p style="padding: 20px; color: var(--text-secondary); text-align: center;">${emptyMsg}</p>`;
            } else {
                this.stats.records.forEach((rec, idx) => {
                    const item = document.createElement('div');
                    item.className = 'leaderboard-item';
                    item.innerHTML = `
                        <div class="rank" style="${idx === 0 ? 'color: var(--accent-orange)' : ''}">${idx + 1}</div>
                        <div class="student-avatar" style="background: ${idx === 0 ? 'var(--accent-orange)33' : 'rgba(255,255,255,0.05)'}">
                            <i class="fas ${idx === 0 ? 'fa-crown' : 'fa-medal'}"></i>
                        </div>
                        <div class="student-name">
                            <div style="font-weight: 800">${rec.chapter}</div>
                            <div style="font-size: 0.75rem; color: var(--text-secondary)">${rec.date} • %${rec.accuracy} ${L.accuracySmall}</div>
                        </div>
                        <div class="total-xp-col">${rec.xp} XP</div>
                    `;
                    this.elements.personalRecordsList.appendChild(item);
                });
            }
        }
    }

    renderWeeklyChart() {
        if (!this.elements.weekChart) return;
        this.elements.weekChart.innerHTML = '';

        const L = this.locale;
        const days = L.weekDays || ['PAZ', 'PZT', 'SAL', 'ÇAR', 'PER', 'CUM', 'CTS'];
        const todayIdx = new Date().getDay();
        const sortedDays = [...days.slice(todayIdx + 1), ...days.slice(0, todayIdx + 1)];

        const last7Days = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            last7Days.push(d.toISOString().split('T')[0]);
        }

        const maxSessionXp = Math.max(...last7Days.map(date => this.stats.dailyXp[date] || 0), 100);

        last7Days.forEach((date, i) => {
            const xp = this.stats.dailyXp[date] || 0;
            const height = (xp / maxSessionXp) * 100;
            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            bar.style.height = `${Math.max(height, 5)}%`;
            bar.innerHTML = `<span>${sortedDays[i]}</span>`;
            if (xp > 0) bar.title = `${xp} XP`;
            this.elements.weekChart.appendChild(bar);
        });
    }

    renderDeepAnalysis() {
        // Strongest Level
        if (this.elements.strongestLevel && (this.stats.records ? this.stats.records.length : 0) > 0) {
            const levelCounts = {};
            this.stats.records.forEach(r => levelCounts[r.level] = (levelCounts[r.level] || 0) + 1);
            const strongest = Object.keys(levelCounts).reduce((a, b) => levelCounts[a] > levelCounts[b] ? a : b);
            this.elements.strongestLevel.textContent = strongest;
        }

        // Avg Accuracy
        if (this.elements.avgAccuracy && (this.stats.records ? this.stats.records.length : 0) > 0) {
            const avg = Math.round(this.stats.records.reduce((acc, curr) => acc + curr.accuracy, 0) / (this.stats.records ? this.stats.records.length : 0));
            this.elements.avgAccuracy.textContent = `%${avg}`;
        }

        // Total Time
        if (this.elements.totalTime) {
            this.elements.totalTime.textContent = `${this.stats.totalTime} ${this.locale.minAbbr}`;
        }
    }

    checkPromotionEligibility() {
        const leagues = [
            { total: 1000 },
            { total: 3000 },
            { total: 6000 },
            { total: 10000 },
            { total: Infinity }
        ];

        const currentLvl = leagues[this.stats.currentLeague];
        if (!currentLvl || currentLvl.total === Infinity) return;

        if (this.stats.xp >= currentLvl.total && !this.stats.isPromotionReady) {
            this.stats.isPromotionReady = true;
            this.save();
            this.updateStatsUI();
        }
    }

    // --- HEART MANAGEMENT ---

    updateHeartsUI() {
        if (this.elements.livesCount) {
            this.elements.livesCount.textContent = this.stats.hearts;
            if (this.stats.hearts === 0) {
                this.elements.livesDisplay.style.background = "rgba(255, 75, 75, 0.2)";
                this.elements.livesDisplay.style.border = "1px solid #ff4b4b";
            } else {
                this.elements.livesDisplay.style.background = "rgba(255, 255, 255, 0.1)";
                this.elements.livesDisplay.style.border = "1px solid rgba(255, 255, 255, 0.1)";
            }
        }
    }

    checkHeartRefill() {
        const now = Date.now();
        const refillInterval = 4 * 60 * 60 * 1000; // 4 hours
        if (this.stats.hearts < 5) {
            const timeDiff = now - (this.stats.lastHeartRefill || now);
            if (timeDiff >= refillInterval) {
                const heartsToAdd = Math.floor(timeDiff / refillInterval);
                this.stats.hearts = Math.min(5, this.stats.hearts + heartsToAdd);
                this.stats.lastHeartRefill = now;
                this.save();
                this.updateHeartsUI();
            }
        } else {
            this.stats.lastHeartRefill = now;
        }
    }

    showOutOfHearts() {
        const L = this.locale;
        const contentDiv = document.getElementById('resultsContent');
        if (contentDiv) {
            contentDiv.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-heart-broken" style="font-size: 4rem; color: #ff4b4b; margin-bottom: 20px;"></i>
                <h2 style="font-size: 2rem; margin-bottom: 10px;">${L.heartsOutTitle}</h2>
                <p style="opacity: 0.8; margin-bottom: 30px;">${L.heartsOutDesc}</p>
                <button class="btn btn-primary" id="startHeartPracticeBtn" style="width: 100%; padding: 15px;">
                    <i class="fas fa-dumbbell"></i> ${L.earnHeartsBtn}
                </button>
                <button class="btn btn-secondary" id="hideOutOfHeartsBtn" style="width: 100%; margin-top: 10px;">${L.laterBtn}</button>
            </div>
        `;
        }
        this.hideAllModals();
        this.elements.resultsModal.style.display = 'flex';
        this.elements.resultsModal.style.opacity = '1';
        this.elements.resultsModal.style.visibility = 'visible';
        this.elements.resultsModal.style.pointerEvents = 'all';

        document.getElementById('startHeartPracticeBtn').onclick = () => this.startHeartPractice();
        document.getElementById('hideOutOfHeartsBtn').onclick = () => this.endQuiz();
    }

    startHeartPractice() {
        this.elements.resultsModal.style.display = 'none';

        let practiceWords = (this.stats.mistakes && this.stats.mistakes.length >= 5) ? this.stats.mistakes : getAllWords().slice(0, 10);
        practiceWords = this.shuffleArray([...practiceWords]).slice(0, 10);

        const practiceChapter = {
            id: 'heart_practice',
            title: this.locale.heartPracticeTitle || 'Heart Recovery Test',
            words: practiceWords
        };

        // Temporarily give 1 heart for the practice session
        this.stats.hearts = 1;
        this.startQuiz(practiceChapter);

        this.current.isPractice = true;
    }

    hideResults() {
        this.elements.resultsModal.style.display = 'none';
        this.elements.resultsModal.style.opacity = '0';
        this.elements.resultsModal.style.pointerEvents = 'none';

        // CRITICAL: Refresh the view to show newly unlocked chapters
        if (this.current.level) {
            this.renderPathNodes();
        } else {
            this.showLevelSelection();
        }
    }

    startPromotionChallenge() {
        const leagues = this.locale.leagues || ["BRONZE", "SILVER", "GOLD", "PLATINUM", "LEGENDARY"];
        const nextLeague = leagues[this.stats.currentLeague + 1] || "Level Up";

        const allChapters = Object.values(WORDS_DATA).flat();
        const allWords = allChapters.flatMap(ch => ch.words);
        const challengeWords = this.shuffleArray([...allWords]).slice(0, 15);

        this.current.chapter = {
            id: 'promotion_boss',
            title: (this.locale.promotionTestTitle || "%s PROMOTION EXAM").replace('%s', nextLeague),
            icon: 'fa-crown',
            words: challengeWords
        };
        this.current.words = challengeWords;
        this.current.index = 0;
        this.current.correct = 0;
        this.current.isLocked = false;
        this.current.xpEarned = 0;
        this.current.combo = 0;
        this.current.isLeagueChallenge = true;
        this.current.startTime = Date.now();

        this.elements.learnModal.style.display = 'flex'; this.elements.learnModal.style.opacity = "1";
        this.nextQuestion();
    }

    showPromotionSuccess() {
        this.stats.currentLeague++;
        this.stats.isPromotionReady = false;
        this.save();

        const leagueList = this.locale.leagues || ["BRONZE","SILVER","GOLD","PLATINUM","LEGENDARY"];
        const leagues = [
            { name: leagueList[0], icon: "fa-medal", color: "#cd7f32" },
            { name: leagueList[1], icon: "fa-shield-alt", color: "#c0c0c0" },
            { name: leagueList[2], icon: "fa-crown", color: "#ffd700" },
            { name: leagueList[3], icon: "fa-gem", color: "#e5e4e2" },
            { name: leagueList[4], icon: "fa-fire", color: "#ce82ff" }
        ];

        const newLvl = leagues[this.stats.currentLeague];
        const L = this.locale;

        if (this.elements.promotionModal) {
            this.elements.promotionModal.innerHTML = `
                <div class="promotion-content animate-pop">
                    <div class="celebration-rays"></div>
                    <i class="fas ${newLvl.icon}" style="font-size: 6rem; color: ${newLvl.color}; margin-bottom: 20px;"></i>
                    <h1 > ${L.promotionCongrats || 'CONGRATULATIONS!'}</h1>
                    <p>${(L.promotionSub || 'You have been promoted to %s League!').replace('%s', newLvl.name)}</p>
                    <div style="margin: 30px 0; font-size: 1.2rem; font-weight: 800; color: var(--accent-green);">${L.promotionBonus || '+500 BONUS XP EARNED!'}</div>
                    <button class="btn btn-primary" onclick="this.parentElement.parentElement.style.display='none'">${L.promotionBtn || 'CONTINUE'}</button>
                </div>
            `;
            this.elements.promotionModal.style.display = 'flex';
            this.elements.promotionModal.style.opacity = "1";
            this.elements.promotionModal.style.pointerEvents = "all";
            this.awardXP(500, this.elements.learnedCount);
        }
        this.updateStatsUI();
    }

    endQuiz() {
        // Force Unlock
        if (this.current) this.current.isLocked = false;

        // Hide All Modals
        this.hideAllModals();

        // Restore App Shell Visibility if it was hidden
        const appShell = document.getElementById('appShell');
        if (appShell) appShell.style.display = 'flex';

        // Navigate Home (Fallback to 'Başlangıç' if level is undefined)
        this.showChapterSelection(this.current.level || 'Başlangıç');
    }

    // ============ AUTH SYSTEM ============
    _localizeAuthForm() {
        const L = this.locale;
        const set = (id, attr, val) => { const el = document.getElementById(id); if (el && val) el[attr] = val; };
        set('loginEmail',        'placeholder', L.emailPlc);
        set('loginPassword',     'placeholder', L.passwordPlc);
        set('loginBtn',          'textContent', L.loginBtn);
        set('showRegisterBtn',   'textContent', L.newAccount);
        set('regEmail',          'placeholder', L.emailPlc);
        set('regDisplayName',    'placeholder', L.displayNamePlc);
        set('regPassword',       'placeholder', L.createPassPlc);
        set('regPasswordConfirm','placeholder', L.passConfirmPlc);
        set('registerBtn',       'textContent', L.registerBtn);
        set('backToLoginBtn',    'textContent', L.alreadyAccount);
        set('googleLoginBtnText','textContent', L.googleLoginBtn);
        set('googleRegBtnText',  'textContent', L.googleLoginBtn);
    }

    setupAuthListeners() {
        this._localizeAuthForm();
        const showRegBtn      = document.getElementById('showRegisterBtn');
        const backToLogin     = document.getElementById('backToLoginBtn');
        const loginBtn        = document.getElementById('loginBtn');
        const registerBtn     = document.getElementById('registerBtn');
        const googleLoginBtn  = document.getElementById('googleLoginBtnEl');
        const googleRegBtn    = document.getElementById('googleRegBtnEl');

        if (showRegBtn) showRegBtn.onclick = () => {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'block';
            const e = document.getElementById('registerError'); if (e) { e.style.display = 'none'; e.textContent = ''; }
        };
        if (backToLogin) backToLogin.onclick = () => {
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
            const e = document.getElementById('loginError'); if (e) { e.style.display = 'none'; e.textContent = ''; }
        };
        if (loginBtn)    loginBtn.onclick    = () => this.login();
        if (registerBtn) registerBtn.onclick = () => this.register();
        if (googleLoginBtn) googleLoginBtn.onclick = () => this.googleLogin('login');
        if (googleRegBtn)   googleRegBtn.onclick   = () => this.googleLogin('register');

        // Enter key support
        [document.getElementById('loginEmail'), document.getElementById('loginPassword')]
            .forEach(inp => { if (inp) inp.addEventListener('keypress', e => { if (e.key === 'Enter') this.login(); }); });
        [document.getElementById('regEmail'), document.getElementById('regPassword'), document.getElementById('regPasswordConfirm')]
            .forEach(inp => { if (inp) inp.addEventListener('keypress', e => { if (e.key === 'Enter') this.register(); }); });
    }

    async googleLogin(formCtx = 'login') {
        const errId = formCtx === 'register' ? 'register' : 'login';
        this._setAuthError(errId, '');
        const btn = document.getElementById(formCtx === 'register' ? 'googleRegBtnEl' : 'googleLoginBtnEl');
        const origHTML = btn ? btn.innerHTML : '';
        if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; }
        try {
            const result = await fbAuth.signInWithPopup(fbGoogleProvider);
            console.log('Google Sign-In success:', result.user.email, '| UID:', result.user.uid);
            // onAuthStateChanged handles navigation
        } catch (e) {
            this._setAuthError(errId, fbErrorMessage(e.code, this.locale));
            if (btn) { btn.disabled = false; btn.innerHTML = origHTML; }
        }
    }

    _setAuthError(formId, msg) {
        const el = document.getElementById(formId === 'login' ? 'loginError' : 'registerError');
        if (!el) return;
        el.textContent = msg;
        el.style.display = msg ? 'block' : 'none';
    }

    async login() {
        const email    = (document.getElementById('loginEmail')    || {}).value?.trim();
        const password = (document.getElementById('loginPassword') || {}).value;
        const btn      = document.getElementById('loginBtn');
        this._setAuthError('login', '');

        if (!email || !password) { this._setAuthError('login', this.locale.loginFillAll); return; }

        const origHTML = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + this.locale.loginLoading;

        try {
            await fbAuth.signInWithEmailAndPassword(email, password);
            // onAuthStateChanged handles the rest — no reload needed
        } catch (e) {
            this._setAuthError('login', fbErrorMessage(e.code, this.locale));
            btn.disabled = false;
            btn.innerHTML = origHTML;
        }
    }

    async register() {
        const email       = (document.getElementById('regEmail')           || {}).value?.trim();
        const displayName = (document.getElementById('regDisplayName')     || {}).value?.trim();
        const password    = (document.getElementById('regPassword')        || {}).value;
        const passConfirm = (document.getElementById('regPasswordConfirm') || {}).value;
        const btn         = document.getElementById('registerBtn');
        this._setAuthError('register', '');

        if (!email || !password || !passConfirm) { this._setAuthError('register', this.locale.registerFillAll); return; }
        if (password !== passConfirm)             { this._setAuthError('register', this.locale.registerPasswordMismatch); return; }
        if (password.length < 6)                  { this._setAuthError('register', this.locale.passShort); return; }

        const origHTML = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + this.locale.registerLoading;

        try {
            const cred = await fbAuth.createUserWithEmailAndPassword(email, password);
            if (displayName) {
                await cred.user.updateProfile({ displayName });
            }
            // Send verification email, then sign out so user must verify before accessing app
            await cred.user.sendEmailVerification();
            await fbAuth.signOut();
            // Switch to login form and show success message
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
            const successEl = document.getElementById('loginError');
            if (successEl) {
                successEl.textContent = this.locale.emailVerificationSent;
                successEl.style.color = '#00c853';
                successEl.style.display = 'block';
            }
            btn.disabled = false;
            btn.innerHTML = origHTML;
        } catch (e) {
            this._setAuthError('register', fbErrorMessage(e.code, this.locale));
            btn.disabled = false;
            btn.innerHTML = origHTML;
        }
    }

    loadSettings() {
        if (this.elements.autoPlayToggle) this.elements.autoPlayToggle.checked = this.settings.autoPlay;
        if (this.elements.themeToggle) {
            this.elements.themeToggle.checked = this.settings.isDarkMode;
            if (this.settings.isDarkMode) document.body.classList.remove('light-mode');
            else document.body.classList.add('light-mode');
        }
        if (this.elements.sourceLangSelect) this.elements.sourceLangSelect.value = this.settings.sourceLang || 'tr';
        if (this.elements.targetLangSelect) this.elements.targetLangSelect.value = this.settings.targetLang || 'en';
        if (this.elements.uiLangSelect) this.elements.uiLangSelect.value = this.settings.uiLang || 'tr';
    }

    setupSettingsListeners() {
        if (this.elements.autoPlayToggle) {
            this.elements.autoPlayToggle.onchange = (e) => {
                this.settings.autoPlay = e.target.checked;
                this.saveSettings();
            };
        }
        if (this.elements.themeToggle) {
            this.elements.themeToggle.onchange = (e) => {
                this.settings.isDarkMode = e.target.checked;
                if (this.settings.isDarkMode) document.body.classList.remove('light-mode');
                else document.body.classList.add('light-mode');
                this.saveSettings();
            };
        }
        if (this.elements.sourceLangSelect) {
            this.elements.sourceLangSelect.onchange = (e) => {
                this.switchLanguage('source', e.target.value);
            };
        }
        if (this.elements.targetLangSelect) {
            this.elements.targetLangSelect.onchange = (e) => {
                this.switchLanguage('target', e.target.value);
            };
        }
        if (this.elements.uiLangSelect) {
            this.elements.uiLangSelect.onchange = (e) => {
                this.updateLanguageSettings(e.target.value, this.settings.sourceLang, this.settings.targetLang);
            };
        }
    }

    saveSettings() {
        this.settings._settingsSavedAt = Date.now();
        localStorage.setItem('linguDeep_pro_settings', JSON.stringify(this.settings));
        this.chapterCache = {}; // CLEAR CACHE
    }

    showToast(message, type = 'info') {
        const existing = document.querySelector('.premium-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'premium-toast';

        const bgColor = type === 'success' ? 'rgba(88, 204, 2, 0.9)' : type === 'error' ? 'rgba(255, 75, 75, 0.9)' : 'rgba(28, 176, 246, 0.9)';
        const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';

        toast.style.cssText = `
            position: fixed;
            top: 30px;
            right: 30px;
            padding: 20px 30px;
            background: ${bgColor};
            backdrop-filter: blur(10px);
            color: #000;
            font-weight: 800;
            border-radius: 20px;
            z-index: 1000000;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            animation: slideInRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex;
            align-items: center;
            gap: 15px;
            border: 1px solid rgba(255,255,255,0.2);
            min-width: 300px;
        `;

        toast.innerHTML = `
            <div style="width: 32px; height: 32px; background: rgba(0,0,0,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                <i class="fas ${icon}" style="font-size: 1.2rem;"></i>
            </div>
            <span style="font-size: 1rem;">${message}</span>
        `;

        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s ease-in forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    loadUserData() {
        if (!this.currentUser) return;
        const storageKey = `linguDeep_stats_${this.currentUser}`;
        this.stats = JSON.parse(localStorage.getItem(storageKey)) || {
            streak: 1,
            lastVisit: new Date().toDateString(),
            courseProgress: {},
            xp: 0,
            records: [],
            dailyXp: {},
            totalTime: 0,
            mistakes: [],
            currentLeague: 0,
            leagueProgress: 0,
            isPromotionReady: false,
            placementLevel: null,
            sentenceCache: {}
        };
        if (!this.stats.sentenceCache) this.stats.sentenceCache = {};
    }

    save() {
        const storageKey = this.currentUser ? `linguDeep_stats_${this.currentUser}` : 'linguDeep_pro_stats_v5';
        localStorage.setItem(storageKey, JSON.stringify(this.stats));
        this.saveToCloud();
    }

    saveToCloud(immediate = false) {
        if (!this.currentUser) return;
        if (immediate) {
            // Immediate sync for critical progress changes
            (async () => {
                try {
                    const payload = Object.assign({}, this.stats);
                    delete payload.sentenceCache;
                    payload._savedAt = Date.now();
                    payload._settings = Object.assign({}, this.settings);
                    await fbDb.collection('users').doc(this.currentUser).set(payload, { merge: true });
                } catch (e) {
                    console.warn('Immediate cloud save failed:', e.message);
                }
            })();
            return;
        }
        // Debounce: avoid a Firestore write on every keystroke/event
        clearTimeout(this._cloudSaveTimer);
        this._cloudSaveTimer = setTimeout(async () => {
            try {
                const payload = Object.assign({}, this.stats);
                delete payload.sentenceCache; // exclude large local-only cache
                payload._savedAt  = Date.now();
                payload._settings = Object.assign({}, this.settings); // sync settings too
                await fbDb.collection('users').doc(this.currentUser).set(payload, { merge: true });
            } catch (e) {
                console.warn('Cloud save failed:', e.message);
            }
        }, 5000);
    }

    async loadFromCloud() {
        if (!this.currentUser) return;
        try {
            const doc = await fbDb.collection('users').doc(this.currentUser).get();
            if (!doc.exists) return; // first time on this device — nothing in cloud yet
            const cloud = doc.data();
            // Restore settings from cloud
            if (cloud._settings) {
                const cloudS = cloud._settings;
                const localSettings = JSON.parse(localStorage.getItem('linguDeep_pro_settings'));
                const localSavedAt = (localSettings && localSettings._settingsSavedAt) || 0;
                const cloudSavedAt = cloud._savedAt || 0;
                // Only apply cloud language settings if cloud is NEWER than local save
                // This prevents a stale cloud from overwriting a freshly changed local language
                if (cloudSavedAt > localSavedAt) {
                    let langChanged = false;
                    ['sourceLang', 'targetLang', 'uiLang'].forEach(key => {
                        if (cloudS[key] && cloudS[key] !== this.settings[key]) {
                            this.settings[key] = cloudS[key];
                            langChanged = true;
                        }
                    });
                    if (!localSettings) {
                        this.settings.isDarkMode = cloudS.isDarkMode ?? this.settings.isDarkMode;
                        this.settings.autoPlay   = cloudS.autoPlay   ?? this.settings.autoPlay;
                    }
                    if (langChanged) {
                        localStorage.setItem('linguDeep_pro_settings', JSON.stringify(this.settings));
                        this.applyLocalization();
                        this.loadSettings();
                    }
                }
                delete cloud._settings;
            }
            delete cloud._savedAt;
            this.stats = this._mergeStats(this.stats, cloud);
            // Persist merged result to localStorage immediately
            const storageKey = `linguDeep_stats_${this.currentUser}`;
            localStorage.setItem(storageKey, JSON.stringify(this.stats));
        } catch (e) {
            console.warn('Cloud load failed (offline?):', e.message);
        }
    }

    _mergeStats(local, cloud) {
        const merged = Object.assign({}, local, cloud);
        // Numeric fields: take the higher value
        merged.xp            = Math.max(local.xp || 0, cloud.xp || 0);
        merged.totalTime     = Math.max(local.totalTime || 0, cloud.totalTime || 0);
        merged.streak        = Math.max(local.streak || 0, cloud.streak || 0);
        merged.currentLeague = Math.max(local.currentLeague || 0, cloud.currentLeague || 0);
        merged.leagueProgress= Math.max(local.leagueProgress || 0, cloud.leagueProgress || 0);
        // Hearts: take the MINIMUM to prevent cross-device exploit (lost hearts stay lost)
        merged.hearts         = Math.min(local.hearts ?? 5, cloud.hearts ?? 5);
        // lastHeartRefill: take the OLDEST timestamp so the cooldown timer is not reset
        merged.lastHeartRefill = Math.min(local.lastHeartRefill || Date.now(), cloud.lastHeartRefill || Date.now());
        // lastVisit: take the MOST RECENT date so today's visit is never overwritten by cloud's older date
        const localVisitMs = local.lastVisit ? new Date(local.lastVisit).getTime() : 0;
        const cloudVisitMs = cloud.lastVisit ? new Date(cloud.lastVisit).getTime() : 0;
        merged.lastVisit = (localVisitMs >= cloudVisitMs ? local.lastVisit : cloud.lastVisit) || new Date().toDateString();
        // courseProgress: union of completedChapters per course
        const cp = {};
        const allCourses = new Set([...Object.keys(local.courseProgress || {}), ...Object.keys(cloud.courseProgress || {})]);
        allCourses.forEach(courseId => {
            const localChaps  = (local.courseProgress  && local.courseProgress[courseId]  ? local.courseProgress[courseId].completedChapters  : []) || [];
            const cloudChaps  = (cloud.courseProgress  && cloud.courseProgress[courseId]  ? cloud.courseProgress[courseId].completedChapters  : []) || [];
            const union = [...new Set([...localChaps, ...cloudChaps].map(Number).filter(n => !isNaN(n)))];
            cp[courseId] = { completedChapters: union };
        });
        merged.courseProgress = cp;
        // records: merge and deduplicate by date+level
        const allRecords = [...(local.records || []), ...(cloud.records || [])];
        const seenRec = new Set();
        merged.records = allRecords.filter(r => {
            const key = `${r.date}-${r.level}-${r.xp}`;
            if (seenRec.has(key)) return false;
            seenRec.add(key);
            return true;
        }).slice(-100); // cap at last 100 records
        // dailyXp: merge by date, take max
        const dailyXp = Object.assign({}, local.dailyXp || {});
        Object.entries(cloud.dailyXp || {}).forEach(([d, v]) => {
            dailyXp[d] = Math.max(dailyXp[d] || 0, v || 0);
        });
        merged.dailyXp = dailyXp;
        // dailyQuests: same-day → take max progress; different day → take the more recent
        const localQ = local.dailyQuests || {};
        const cloudQ = cloud.dailyQuests || {};
        const today  = new Date().toDateString();
        if (localQ.lastReset === cloudQ.lastReset) {
            merged.dailyQuests = {
                lastReset:      localQ.lastReset || today,
                xpEarned:       Math.max(localQ.xpEarned || 0,       cloudQ.xpEarned || 0),
                wordsCompleted: Math.max(localQ.wordsCompleted || 0,  cloudQ.wordsCompleted || 0),
                claimed:        !!(localQ.claimed || cloudQ.claimed)
            };
        } else {
            const localReset = new Date(localQ.lastReset || 0).getTime();
            const cloudReset = new Date(cloudQ.lastReset || 0).getTime();
            merged.dailyQuests = (cloudReset >= localReset ? cloudQ : localQ);
        }
        // sentenceCache: always keep local (not synced)
        merged.sentenceCache = (local.sentenceCache) || {};
        return merged;
    }

    async deleteCloudData() {
        if (!this.currentUser) return;
        try {
            await fbDb.collection('users').doc(this.currentUser).delete();
        } catch (e) {
            console.warn('Cloud delete failed:', e.message);
        }
    }

    // ============ PLACEMENT TEST ============
    async startPlacementTest() {
        console.log("Starting Placement Test...");

        // Hide UI during test
        const appShell = document.getElementById('appShell');
        if (appShell) appShell.style.display = 'none';

        // SAFETY: Verify WORDS_DATA exists
        if (!WORDS_DATA || !WORDS_DATA["Başlangıç"] || !WORDS_DATA["Orta"] || !WORDS_DATA["İleri"]) {
            console.error("WORDS_DATA is corrupt or missing for placement test.");
            this.showToast(this.locale.wordDataError, "error");
            if (appShell) appShell.style.display = 'flex';
            return;
        }

        // Show a brief loading toast for translation
        if (this.settings.sourceLang !== 'tr' || this.settings.targetLang !== 'en') {
            this.showToast(this.locale.preparingLangs, "info");
        }

        // Structured placement test: 3 Beg, 3 Int, 4 Adv
        // USE PROCESSED WORDS ONLY
        const getTestPool = async (level) => {
            const chaps = await Promise.all(WORDS_DATA[level].slice(0, 8).map(ch => this.getProcessedChapter(ch)));
            const words = chaps.flatMap(ch => ch ? ch.words : []).filter(w => w && w.en && w.tr);
            // Ensure unique meanings in the pool to avoid duplicate options
            const uniqueWords = [];
            const seenNorm = new Set();
            for (const w of words) {
                const norm = this.normalize(w.tr);
                if (!seenNorm.has(norm)) {
                    uniqueWords.push(w);
                    seenNorm.add(norm);
                }
            }
            return uniqueWords;
        };

        const begWords = await getTestPool("Başlangıç");
        const intWords = await getTestPool("Orta");
        const advWords = await getTestPool("İleri");

        if (begWords.length < 3 || intWords.length < 3 || advWords.length < 4) {
            console.error("Not enough valid unique words for test.");
            this.showToast(this.locale.preparingLangsError, "error");
            if (appShell) appShell.style.display = 'flex';
            return;
        }

        const q1 = this.shuffleArray(begWords).slice(0, 3);
        const q2 = this.shuffleArray(intWords).slice(0, 3);
        const q3 = this.shuffleArray(advWords).slice(0, 4);

        this.placement.questions = [...q1, ...q2, ...q3];
        this.placement.currentIndex = 0;
        this.placement.correct = 0;
        this.placement.seenDistractors = new Set(); // TRACK SEEN ACROSS PLACEMENT TEST

        this.placement.distractorPool = this.shuffleArray([...begWords, ...intWords, ...advWords]);
        this.placement.isLocked = true; // LOCK FOR PREPARATION

        const pm = document.getElementById('placementModal');
        this.hideAllModals(); // Safe clear
        pm.style.display = 'flex';
        pm.style.opacity = '1';
        pm.style.visibility = 'visible';
        pm.style.pointerEvents = 'all';

        await this.showPlacementQuestion();
    }

    async showPlacementQuestion() {
        const q = this.placement.questions[this.placement.currentIndex];
        if (!q) return this.finishPlacementTest();

        const placementModal = document.getElementById('placementModal');
        if (!placementModal) return; // Safety check

        // CLEAR PREVIOUS CONTENT
        const optionsGrid = document.getElementById('placementOptions');
        if (optionsGrid) optionsGrid.innerHTML = '<div class="loader-container" style="padding: 40px;"><i class="fas fa-spinner fa-spin" style="font-size: 2rem;"></i></div>';

        const progress = ((this.placement.currentIndex) / 10) * 100;
        const progressEl = document.getElementById('placementProgress');
        if (progressEl) progressEl.style.width = `${progress}%`;

        // 1. QUESTION: Show in TARGET Language
        let qText = q.en;
        const targetLang = this.settings.targetLang || 'en';
        if (targetLang !== 'en') {
            // If learning something else, translate question to target
            const t = await this.quickTranslate(q.en, 'en', targetLang);
            if (t) qText = t;
        }
        document.getElementById('placementQuestionText').textContent = qText;

        // 2. ANSWER: Show in SOURCE Language
        let correctMeaning = q.tr;
        const sourceLang = this.settings.sourceLang || 'tr';
        if (sourceLang !== 'tr') {
            const t = await this.quickTranslate(q.tr, 'tr', sourceLang);
            if (t) correctMeaning = t;
        }

        const qNormalized = this.normalize(String(correctMeaning));
        const distractors = [];
        let seen = new Set([qNormalized]); // Track seen normalized values for options

        const targetType = this.getWordType(q.original || q.en, q.originalTr || q.tr);

        // --- 1. INTERNAL POOL (Strict Word Type + Level Proximity) ---
        const scoredPool = Array.from(this.placement.distractorPool)
            .filter(w => {
                const wTr = String(w.tr || '');
                const wEn = String(w.en || '');
                if (wTr.includes('...') || wEn.includes('...') || wTr.includes('____') || wEn.includes('____')) return false;
                if (wTr.length < 2 || wEn.length < 2) return false;
                return true;
            })
            .map(w => {
                let score = 0;
                const wType = this.getWordType(w.original || w.en, w.originalTr || w.tr);

                // Type Match (Major Priority)
                if (wType === targetType) score += 50000;
                else score -= 10000; // Increased penalty for type mismatch

                // --- NUCLEAR PHRASE GUARD (Enforced) ---
                const targetHasSpaces = (String(q.tr).includes(' ') || String(q.en).includes(' '));
                const wHasSpaces = (String(w.tr).includes(' ') || String(w.en).includes(' '));
                if (targetHasSpaces !== wHasSpaces) score -= 250000; // Drastic penalty for cross-format mixing

                // Level Match (Ensures A1 questions don't have C1 distractors)
                if (w.levelName === q.levelName) score += 5000;

                // Length Ratio (Aesthetic Similarity)
                const wTr = String(w.tr).toLowerCase();
                const qTr = String(q.tr).toLowerCase();
                const ratio = Math.min(wTr.length, qTr.length) / Math.max(wTr.length, qTr.length);
                score += (ratio * 3000);
                if (ratio < 0.6) score -= 15000; // Penalize "nonsense" length diffs (Increased)

                return { word: w, score: score + Math.random() * 500 };
            })
            .sort((a, b) => b.score - a.score);

        for (const entry of scoredPool) {
            if (distractors.length >= 3) break;
            const w = entry.word;

            let val = w.tr;
            if (sourceLang !== 'tr') {
                const translated = await this.quickTranslate(w.tr, 'tr', sourceLang);
                if (!translated) continue;
                val = translated;
            }

            val = this.sanitizeTranslation(String(val));
            if (!val || val.length < 2) continue;

            const norm = this.normalize(val);
            if (seen.has(norm) || this.placement.seenDistractors.has(norm)) continue;
            if (!this.isValidForLanguage(val, sourceLang)) continue;

            distractors.push(val);
            seen.add(norm);
            this.placement.seenDistractors.add(norm);
        }


        // --- 3. INTERNET SEMANTIC FETCH: REMOVED FOR SPEED ---
        // User reported slowness. We rely on internal pool only.

        // --- 4. FINAL SAFETY NET: REMOVED ---
        // Avoid generic words like "Evet/Hayır". If pool is empty, let it duplicate or fail gracefully.

        // Match count safety (Absolute Fallback)
        if (distractors.length < 3) {
            const safetyPool = this.shuffleArray(this.placement.distractorPool.filter(w => w.levelName === q.levelName));
            for (const w of safetyPool) {
                if (distractors.length >= 3) break;
                const val = (sourceLang === 'tr') ? w.tr : await this.quickTranslate(w.tr, 'tr', sourceLang);
                if (val && !seen.has(this.normalize(val))) {
                    distractors.push(val);
                }
            }
        }

        const allOptions = this.shuffleArray([correctMeaning, ...distractors.slice(0, 3)]);

        // Render options
        if (optionsGrid) {
            optionsGrid.innerHTML = ''; // Clear loader
            allOptions.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'placement-option-btn';
                btn.style.animationDelay = `${idx * 0.1}s`;

                // Capitalize for consistency (Locale Aware)
                const displayOpt = this.toTitleCase(opt);

                // Dynamic font size for long text
                let fontSize = '1.15rem';
                if (displayOpt.length > 25) fontSize = '0.85rem';
                else if (displayOpt.length > 18) fontSize = '0.95rem';
                else if (displayOpt.length > 12) fontSize = '1.05rem';

                btn.innerHTML = `
                    <div class="option-dot">${String.fromCharCode(65 + idx)}</div>
                    <div class="option-content">
                        <span style="display: block; font-weight: 700; font-size: ${fontSize}; word-break: break-word; line-height: 1.2;">
                            ${displayOpt}
                        </span>
                    </div>
                `;
                btn.onclick = () => this.checkPlacementAnswer(opt, correctMeaning);
                optionsGrid.appendChild(btn);
            });
        }

        this.placement.isLocked = false;
    }

    checkPlacementAnswer(selected, correct) {
        if (this.placement.isLocked) return;
        this.placement.isLocked = true;

        const optionsGrid = document.getElementById('placementOptions');
        if (optionsGrid) {
            Array.from(optionsGrid.children).forEach(btn => {
                const optionText = btn.querySelector('.option-content span').textContent;
                if (this.normalize(optionText) === this.normalize(correct)) {
                    btn.classList.add('correct-answer');
                } else if (this.normalize(optionText) === this.normalize(selected)) {
                    btn.classList.add('incorrect-answer');
                }
            });
        }

        if (this.normalize(selected) === this.normalize(correct)) {
            this.placement.correct++;
        }

        this.placement.currentIndex++;

        if (this.placement.currentIndex < 10) {
            setTimeout(() => {
                this.placement.isLocked = false;
                this.showPlacementQuestion();
            }, 1000); // Give user time to see feedback
        } else {
            this.placement.isLocked = false;
            this.finishPlacementTest();
        }
    }

    finishPlacementTest() {
        const score = this.placement.correct;
        let level;
        let levelName;

        if (score <= 3) { level = 'Başlangıç'; }
        else if (score <= 7) { level = 'Orta'; }
        else { level = 'İleri'; }

        this.stats.placementLevel = level;
        this.save();

        const pm = document.getElementById('placementModal');
        if (pm) {
            pm.style.opacity = '0';

            setTimeout(() => {
                pm.style.display = 'none';

                // CRITICAL: Restore App Shell
                const appShell = document.getElementById('appShell');
                if (appShell) appShell.style.display = 'flex';

                const localizedLevelName = this.locale.levels[level] || level;
                this.showToast(`${this.locale.testCompleted} ${localizedLevelName} (${score}/10)`, 'success');

                setTimeout(() => {
                    this.showChapterSelection(level);
                }, 500);
            }, 500);
        }
    }
}

const app = new LinguPro();

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Ready, initializing app...');
    try {
        try { app.init(); } catch (e) {
            console.error("INIT CRASH:", e);
            const errorMsg = UI_LOCALES[app.settings.uiLang]?.initError || "App failed to start:";
            alert(errorMsg + " " + e.message);
        }
        console.log('App initialized successfully');
        // Fade in the page to prevent background flash
        setTimeout(() => document.body.classList.add('loaded'), 50);
    } catch (e) {
        console.error('App init failed:', e);
        document.body.classList.add('loaded'); // Show page even if init fails
    }
});
console.log('APP.JS LOADED - VERSION 2.0');
