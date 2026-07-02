const SENTENCES_CURATED = {
    // -- BASICS --
    "hello": { en: "Hello, how are you today?", tr: "Merhaba, bugün nasılsın?" },
    "goodbye": { en: "It is time to say goodbye.", tr: "Veda etme vakti geldi." },
    "please": { en: "Can you help me, please?", tr: "Lütfen bana yardım edebilir misin?" },
    "thanks": { en: "Thanks for your help.", tr: "Yardımın için teşekkürler." },
    "yes": { en: "Yes, I can do it.", tr: "Evet, bunu yapabilirim." },
    "no": { en: "No, I don't think so.", tr: "Hayır, öyle düşünmüyorum." },
    "sorry": { en: "I am sorry for the mistake.", tr: "Hata için üzgünüm." },
    "how are you": { en: "Hello! How are you?", tr: "Merhaba! Nasılsın?" },
    "how are you?": { en: "How are you? I am fine.", tr: "Nasılsın? Ben iyiyim." },
    "good morning": { en: "Good morning! Have a nice day.", tr: "Günaydın! İyi günler." },
    "good night": { en: "Good night! Sleep well.", tr: "İyi geceler! İyi uykular." },
    "what is your name?": { en: "What is your name? My name is Ali.", tr: "Adın ne? Benim adım Ali." },
    "thank you": { en: "Thank you for the gift.", tr: "Hediye için teşekkür ederim." },

    // -- NUMBERS --
    "zero": { en: "The score is zero.", tr: "Skor sıfır." },
    "one": { en: "I have only one apple.", tr: "Sadece bir elmam var." },
    "two": { en: "There are two books on the table.", tr: "Masada iki kitap var." },
    "three": { en: "He has three sisters.", tr: "Onun üç kız kardeşi var." },
    "four": { en: "A square has four sides.", tr: "Bir karenin dört kenarı vardır." },
    "five": { en: "I have five fingers on my hand.", tr: "Elimde beş parmak var." },
    "six": { en: "She wakes up at six.", tr: "O saat altıda uyanır." },
    "seven": { en: "There are seven days in a week.", tr: "Bir haftada yedi gün vardır." },
    "eight": { en: "Octopuses have eight legs.", tr: "Ahtapotların sekiz bacağı vardır." },
    "nine": { en: "The cat has nine lives.", tr: "Kedinin dokuz canı vardır." },
    "ten": { en: "Count from one to ten.", tr: "Birden ona kadar say." },

    // -- COLORS --
    "red": { en: "The apple is bright red.", tr: "Elma parlak kırmızıdır." },
    "blue": { en: "The sky is blue today.", tr: "Bugün gökyüzü mavidir." },
    "green": { en: "The grass is very green.", tr: "Çimler çok yeşildir." },
    "yellow": { en: "The sun is yellow.", tr: "Güneş sarıdır." },
    "black": { en: "He is wearing a black coat.", tr: "Siyah bir kaban giyiyor." },
    "white": { en: "The snow is pure white.", tr: "Kar saf beyazdır." },

    // -- FAMILY --
    "mother": { en: "My mother is a teacher.", tr: "Annem bir öğretmendir." },
    "father": { en: "My father loves coffee.", tr: "Babam kahveyi sever." },
    "sister": { en: "My sister is younger than me.", tr: "Kız kardeşim benden küçüktür." },
    "brother": { en: "My brother plays football.", tr: "Erkek kardeşim futbol oynar." },

    // -- ANIMALS --
    "cat": { en: "The cat is sleeping on the sofa.", tr: "Kedi kanepede uyuyor." },
    "dog": { en: "The dog is barking at the stranger.", tr: "Köpek yabancıya havlıyor." },
    "bird": { en: "The bird is flying in the sky.", tr: "Kuş gökyüzünde uçuyor." },
    "fish": { en: "The fish is swimming in the water.", tr: "Balık suda yüzüyor." },

    // -- VERBS --
    "wake up": { en: "I wake up early every morning.", tr: "Her sabah erken uyanırım." },
    "sleep": { en: "I need to sleep now.", tr: "Şimdi uyumam gerekiyor." },
    "eat": { en: "What do you want to eat?", tr: "Ne yemek istersin?" },
    "drink": { en: "Drink some water.", tr: "Biraz su iç." },
    "walk": { en: "Let's walk to the park.", tr: "Hadi parka yürüyelim." },
    "run": { en: "He can run very fast.", tr: "O çok hızlı koşabilir." },
    "work": { en: "I work in an office.", tr: "Bir ofiste çalışıyorum." },
    "study": { en: "I must study for the exam.", tr: "Sınav için ders çalışmalıyım." },

    // -- ADJECTIVES --
    "happy": { en: "She looks very happy today.", tr: "Bugün çok mutlu görünüyor." },
    "sad": { en: "Don't be sad, everything will be fine.", tr: "Üzülme, her şey güzel olacak." },
    "big": { en: "That is a big house.", tr: "Bu büyük bir ev." },
    "small": { en: "I lived in a small village.", tr: "Küçük bir köyde yaşadım." },
    "fast": { en: "This car is very fast.", tr: "Bu araba çok hızlı." },
    "slow": { en: "The turtle is slow.", tr: "Kaplumbağa yavaştır." },

    // -- PLACES --
    "city": { en: "Istanbul is a beautiful city.", tr: "İstanbul güzel bir şehirdir." },
    "school": { en: "Children go to school to learn.", tr: "Çocuklar öğrenmek için okula gider." },
    "hospital": { en: "The doctor is in the hospital.", tr: "Doktor hastanededir." },

    // -- ADVANCED / TECHNICAL --
    "artificial intelligence": { en: "Artificial intelligence is changing the world.", tr: "Yapay zeka dünyayı değiştiriyor." },
    "algorithm": { en: "The algorithm sorts the data quickly.", tr: "Algoritma veriyi hızlıca sıralar." },
    "philosophy": { en: "Philosophy explores the meaning of life.", tr: "Felsefe hayatın anlamını araştırır." },
    "economy": { en: "The economy is growing this year.", tr: "Ekonomi bu yıl büyüyor." },
    "law": { en: "Everyone must obey the law.", tr: "Herkes kanuna uymalıdır." },
    "justice": { en: "We fight for justice.", tr: "Adalet için savaşıyoruz." },
    "water": { en: "I need to drink some water.", tr: "Biraz su içmem gerekiyor." },
    "bread": { en: "Can you buy some bread?", tr: "Biraz ekmek alabilir misin?" },
    "sun": { en: "The sun is shining today.", tr: "Güneş bugün parlıyor." },
    "movie": { en: "I want to watch a movie.", tr: "Bir film izlemek istiyorum." },
    "book": { en: "This is my favorite book.", tr: "Bu benim en sevdiğim kitap." },
    "friend": { en: "He is my best friend.", tr: "O benim en iyi arkadaşım." },
    "home": { en: "I am going home now.", tr: "Şimdi eve gidiyorum." },
    "eat": { en: "What do you want to eat?", tr: "Ne yemek istersin?" },
    "help": { en: "Can you help me with this?", tr: "Bana bu konuda yardım edebilir misin?" },
    "beautiful": { en: "The weather is beautiful.", tr: "Hava çok güzel." },
    "car": { en: "My father has a new car.", tr: "Babamın yeni bir arabası var." },
    "time": { en: "I don't have much time.", tr: "Çok fazla vaktim yok." },
    "look": { en: "Look at that bird!", tr: "Şu kuşa bak!" },
    "money": { en: "Do you have any money?", tr: "Hiç paran var mı?" },
    "bag": { en: "Put the books in the bag.", tr: "Kitapları çantaya koy." },
    "door": { en: "Please close the door.", tr: "Lütfen kapıyı kapat." }
};
