import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lesson, Question } from '../services/db';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { X, Heart, ShieldAlert, CheckCircle2, Award, Coins, Flame } from 'lucide-react';
import { localizePrompt, getTranslation } from '../services/i18n';
import { audioEffects } from '../services/audio';

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

function generateQuestionsForLesson(lang: any, tier: number, lessonIndex: number, vocab: any): Question[] {
  const langName = lang.name;
  const categoryIndex = (lessonIndex - 1) % 7;

  if (tier === 1) {
    if (categoryIndex === 0) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Hello" in ${langName}?`, options: [vocab.hello, vocab.goodbye, vocab.please, vocab.thankYou], correctAnswer: vocab.hello },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "Hello"`, correctAnswer: vocab.hello },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Goodbye" in ${langName}?`, options: [vocab.goodbye, vocab.hello, vocab.please, vocab.thankYou], correctAnswer: vocab.goodbye },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "Goodbye"`, correctAnswer: vocab.goodbye },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Hello, ..." (Hello, goodbye)`, options: [vocab.goodbye, vocab.please, vocab.thankYou, vocab.friend], correctAnswer: vocab.goodbye },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `How do you say "Goodbye, hello" in ${langName}?`, options: [`${vocab.goodbye}, ${vocab.hello}`, `${vocab.hello}, ${vocab.please}`, `${vocab.please}, ${vocab.thankYou}`, vocab.friend], correctAnswer: `${vocab.goodbye}, ${vocab.hello}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "Hello, goodbye"`, correctAnswer: `${vocab.hello}, ${vocab.goodbye}` },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete the greeting: "${vocab.hello.substring(0, 2)}..." (Hello)`, options: [vocab.hello, vocab.goodbye, vocab.please, vocab.friend], correctAnswer: vocab.hello },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "Please" in ${langName}?`, options: [vocab.please, vocab.hello, vocab.goodbye, vocab.thankYou], correctAnswer: vocab.please },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match the greetings', options: [vocab.hello, 'Hello', vocab.goodbye, 'Goodbye', vocab.please, 'Please', vocab.thankYou, 'Thank you'], correctAnswer: `${vocab.hello}:Hello,${vocab.goodbye}:Goodbye,${vocab.please}:Please,${vocab.thankYou}:Thank you` }
      ];
    } else if (categoryIndex === 1) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Please" in ${langName}?`, options: [vocab.please, vocab.hello, vocab.goodbye, vocab.thankYou], correctAnswer: vocab.please },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "Please"`, correctAnswer: vocab.please },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Thank you" in ${langName}?`, options: [vocab.thankYou, vocab.please, vocab.goodbye, vocab.hello], correctAnswer: vocab.thankYou },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "Thank you"`, correctAnswer: vocab.thankYou },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Please, ..." (Please, thank you)`, options: [vocab.thankYou, vocab.hello, vocab.goodbye, vocab.friend], correctAnswer: vocab.thankYou },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `How do you say "Please, thank you" in ${langName}?`, options: [`${vocab.please}, ${vocab.thankYou}`, `${vocab.hello}, ${vocab.goodbye}`, `${vocab.please}, ${vocab.goodbye}`, vocab.friend], correctAnswer: `${vocab.please}, ${vocab.thankYou}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "Please, thank you"`, correctAnswer: `${vocab.please}, ${vocab.thankYou}` },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "Hello, please (... ${vocab.please})"`, options: [vocab.hello, vocab.goodbye, vocab.thankYou, vocab.friend], correctAnswer: vocab.hello },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "Hello" in ${langName}?`, options: [vocab.hello, vocab.please, vocab.goodbye, vocab.thankYou], correctAnswer: vocab.hello },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match the polite words', options: [vocab.please, 'Please', vocab.thankYou, 'Thank you', vocab.hello, 'Hello', vocab.goodbye, 'Goodbye'], correctAnswer: `${vocab.please}:Please,${vocab.thankYou}:Thank you,${vocab.hello}:Hello,${vocab.goodbye}:Goodbye` }
      ];
    } else if (categoryIndex === 2) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Friend" in ${langName}?`, options: [vocab.friend, vocab.mother, vocab.father, vocab.brother], correctAnswer: vocab.friend },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "Friend"`, correctAnswer: vocab.friend },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Hello friend" in ${langName}?`, options: [`${vocab.hello} ${vocab.friend}`, `${vocab.goodbye} ${vocab.friend}`, `${vocab.please} ${vocab.friend}`, vocab.friend], correctAnswer: `${vocab.hello} ${vocab.friend}` },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "Hello friend"`, correctAnswer: `${vocab.hello} ${vocab.friend}` },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Hello ..." (Hello friend)`, options: [vocab.friend, vocab.mother, vocab.father, vocab.please], correctAnswer: vocab.friend },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `Translate: "Goodbye friend"`, options: [`${vocab.goodbye} ${vocab.friend}`, `${vocab.hello} ${vocab.friend}`, `${vocab.please} ${vocab.friend}`, vocab.friend], correctAnswer: `${vocab.goodbye} ${vocab.friend}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "Goodbye friend"`, correctAnswer: `${vocab.goodbye} ${vocab.friend}` },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "Please, my ... " (Please, my friend)`, options: [vocab.friend, vocab.mother, vocab.father, vocab.hello], correctAnswer: vocab.friend },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "Please" in ${langName}?`, options: [vocab.please, vocab.friend, vocab.mother, vocab.father], correctAnswer: vocab.please },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match communication words', options: [vocab.friend, 'Friend', vocab.please, 'Please', vocab.thankYou, 'Thank you', vocab.hello, 'Hello'], correctAnswer: `${vocab.friend}:Friend,${vocab.please}:Please,${vocab.thankYou}:Thank you,${vocab.hello}:Hello` }
      ];
    } else if (categoryIndex === 3) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Water" in ${langName}?`, options: [vocab.water, vocab.bread, vocab.book, vocab.one], correctAnswer: vocab.water },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "Water"`, correctAnswer: vocab.water },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Bread" in ${langName}?`, options: [vocab.bread, vocab.water, vocab.book, vocab.two], correctAnswer: vocab.bread },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "Bread"`, correctAnswer: vocab.bread },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Bread & ..." (Bread & water)`, options: [vocab.water, vocab.book, vocab.hello, vocab.friend], correctAnswer: vocab.water },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `Translate: "Water, please"`, options: [`${vocab.water}, ${vocab.please}`, `${vocab.bread}, ${vocab.please}`, `${vocab.water}, ${vocab.thankYou}`, vocab.hello], correctAnswer: `${vocab.water}, ${vocab.please}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "${vocab.water}, ${vocab.please}"`, correctAnswer: 'Water, please' },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "Bread, please (... ${vocab.please})"`, options: [vocab.bread, vocab.water, vocab.book, vocab.friend], correctAnswer: vocab.bread },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `Translate: "Thank you for the water"`, options: [`${vocab.thankYou}, ${vocab.water}`, `${vocab.please}, ${vocab.water}`, vocab.one, vocab.two], correctAnswer: `${vocab.thankYou}, ${vocab.water}` },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match food terms', options: [vocab.water, 'Water', vocab.bread, 'Bread', vocab.please, 'Please', vocab.thankYou, 'Thank you'], correctAnswer: `${vocab.water}:Water,${vocab.bread}:Bread,${vocab.please}:Please,${vocab.thankYou}:Thank you` }
      ];
    } else if (categoryIndex === 4) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Book" in ${langName}?`, options: [vocab.book, vocab.water, vocab.bread, vocab.three], correctAnswer: vocab.book },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "Book"`, correctAnswer: vocab.book },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `Translate: "A book and water"`, options: [`${vocab.book} & ${vocab.water}`, `${vocab.bread} & ${vocab.water}`, `${vocab.book} & ${vocab.bread}`, vocab.one], correctAnswer: `${vocab.book} & ${vocab.water}` },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${vocab.book} & ${vocab.water}"`, correctAnswer: 'Book & water' },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "Read the ..." (Read the book)`, options: [vocab.book, vocab.water, vocab.bread, vocab.friend], correctAnswer: vocab.book },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'multiple-choice', prompt: `Translate: "Friend, a book please"`, options: [`${vocab.friend}, ${vocab.book} ${vocab.please}`, `${vocab.friend}, ${vocab.water} ${vocab.please}`, `${vocab.mother}, ${vocab.book} ${vocab.please}`, vocab.one], correctAnswer: `${vocab.friend}, ${vocab.book} ${vocab.please}` },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "${vocab.friend}, ${vocab.book} ${vocab.please}"`, correctAnswer: 'Friend, book please' },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "Water and book (... & ${vocab.book})"`, options: [vocab.water, vocab.bread, vocab.please, vocab.friend], correctAnswer: vocab.water },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'multiple-choice', prompt: `Translate: "Water, bread, book"`, options: [`${vocab.water}, ${vocab.bread}, ${vocab.book}`, `${vocab.water}, ${vocab.please}, ${vocab.book}`, vocab.one, vocab.two], correctAnswer: `${vocab.water}, ${vocab.bread}, ${vocab.book}` },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match study words', options: [vocab.book, 'Book', vocab.water, 'Water', vocab.friend, 'Friend', vocab.please, 'Please'], correctAnswer: `${vocab.book}:Book,${vocab.water}:Water,${vocab.friend}:Friend,${vocab.please}:Please` }
      ];
    } else if (categoryIndex === 5) {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "One" in ${langName}?`, options: [vocab.one, vocab.two, vocab.three, vocab.book], correctAnswer: vocab.one },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "${vocab.one}"`, correctAnswer: 'One' },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Two" in ${langName}?`, options: [vocab.two, vocab.one, vocab.three, vocab.water], correctAnswer: vocab.two },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "${vocab.two}"`, correctAnswer: 'Two' },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'multiple-choice', prompt: `How do you say "Three" in ${langName}?`, options: [vocab.three, vocab.one, vocab.two, vocab.bread], correctAnswer: vocab.three },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'translate', prompt: `Translate: "${vocab.three}"`, correctAnswer: 'Three' },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'multiple-choice', prompt: `Translate: "One, two, three"`, options: [`${vocab.one}, ${vocab.two}, ${vocab.three}`, `${vocab.three}, ${vocab.two}, ${vocab.one}`, `${vocab.one}, ${vocab.book}, ${vocab.three}`, vocab.please], correctAnswer: `${vocab.one}, ${vocab.two}, ${vocab.three}` },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'translate', prompt: `Translate: "${vocab.one}, ${vocab.two}, ${vocab.three}"`, correctAnswer: 'One, two, three' },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'fill-blank', prompt: `Complete counting: "${vocab.one}, ${vocab.two}, ..."`, options: [vocab.three, vocab.book, vocab.water, vocab.please], correctAnswer: vocab.three },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match numbers', options: [vocab.one, 'One', vocab.two, 'Two', vocab.three, 'Three', vocab.book, 'Book'], correctAnswer: `${vocab.one}:One,${vocab.two}:Two,${vocab.three}:Three,${vocab.book}:Book` }
      ];
    } else {
      return [
        { id: `q_${lang.id}_1_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Red" in ${langName}?`, options: [vocab.red, vocab.blue, vocab.green, vocab.one], correctAnswer: vocab.red },
        { id: `q_${lang.id}_1_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "Red"`, correctAnswer: vocab.red },
        { id: `q_${lang.id}_1_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Blue" in ${langName}?`, options: [vocab.blue, vocab.red, vocab.green, vocab.two], correctAnswer: vocab.blue },
        { id: `q_${lang.id}_1_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "Blue"`, correctAnswer: vocab.blue },
        { id: `q_${lang.id}_1_${lessonIndex}_5`, type: 'multiple-choice', prompt: `How do you say "Green" in ${langName}?`, options: [vocab.green, vocab.red, vocab.blue, vocab.three], correctAnswer: vocab.green },
        { id: `q_${lang.id}_1_${lessonIndex}_6`, type: 'translate', prompt: `Translate: "Green"`, correctAnswer: vocab.green },
        { id: `q_${lang.id}_1_${lessonIndex}_7`, type: 'multiple-choice', prompt: `How do you say "Red, blue, green" in ${langName}?`, options: [`${vocab.red}, ${vocab.blue}, ${vocab.green}`, `${vocab.green}, ${vocab.blue}, ${vocab.red}`, `${vocab.red}, ${vocab.one}, ${vocab.green}`, vocab.please], correctAnswer: `${vocab.red}, ${vocab.blue}, ${vocab.green}` },
        { id: `q_${lang.id}_1_${lessonIndex}_8`, type: 'translate', prompt: `Translate: "${vocab.red}, ${vocab.blue}, ${vocab.green}"`, correctAnswer: 'Red, blue, green' },
        { id: `q_${lang.id}_1_${lessonIndex}_9`, type: 'fill-blank', prompt: `Complete: "Red, blue, ..."`, options: [vocab.green, vocab.one, vocab.two, vocab.three], correctAnswer: vocab.green },
        { id: `q_${lang.id}_1_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match colors', options: [vocab.red, 'Red', vocab.blue, 'Blue', vocab.green, 'Green', vocab.one, 'One'], correctAnswer: `${vocab.red}:Red,${vocab.blue}:Blue,${vocab.green}:Green,${vocab.one}:One` }
      ];
    }
  }

  // Tier 2 or 3 local fallbacks
  const list: Question[] = [
    { id: `q_${lang.id}_${tier}_${lessonIndex}_1`, type: 'multiple-choice', prompt: `How do you say "Mother" in ${langName}?`, options: [vocab.mother, vocab.father, vocab.friend, vocab.brother], correctAnswer: vocab.mother },
    { id: `q_${lang.id}_${tier}_${lessonIndex}_2`, type: 'translate', prompt: `Translate: "Father"`, correctAnswer: vocab.father },
    { id: `q_${lang.id}_${tier}_${lessonIndex}_3`, type: 'multiple-choice', prompt: `How do you say "Mother & Father" in ${langName}?`, options: [`${vocab.mother} & ${vocab.father}`, `${vocab.brother} & ${vocab.sister}`, `${vocab.friend} & ${vocab.mother}`, `${vocab.father} & ${vocab.brother}`], correctAnswer: `${vocab.mother} & ${vocab.father}` },
    { id: `q_${lang.id}_${tier}_${lessonIndex}_4`, type: 'translate', prompt: `Translate: "Mother & Father"`, correctAnswer: `${vocab.mother} & ${vocab.father}` },
    { id: `q_${lang.id}_${tier}_${lessonIndex}_5`, type: 'fill-blank', prompt: `Complete: "My ..." (My mother)`, options: [vocab.mother, vocab.father, vocab.friend, vocab.one], correctAnswer: vocab.mother },
    { id: `q_${lang.id}_${tier}_${lessonIndex}_6`, type: 'multiple-choice', prompt: `How do you say "Brother, sister" in ${langName}?`, options: [`${vocab.brother}, ${vocab.sister}`, `${vocab.father}, ${vocab.mother}`, `${vocab.brother}, ${vocab.mother}`, vocab.friend], correctAnswer: `${vocab.brother}, ${vocab.sister}` },
    { id: `q_${lang.id}_${tier}_${lessonIndex}_7`, type: 'translate', prompt: `Translate: "Brother, sister"`, correctAnswer: `${vocab.brother}, ${vocab.sister}` },
    { id: `q_${lang.id}_${tier}_${lessonIndex}_8`, type: 'fill-blank', prompt: `Complete: "Father & sister (... & ${vocab.sister})"`, options: [vocab.father, vocab.mother, vocab.brother, vocab.friend], correctAnswer: vocab.father },
    { id: `q_${lang.id}_${tier}_${lessonIndex}_9`, type: 'multiple-choice', prompt: `How do you say "Hello mother" in ${langName}?`, options: [`${vocab.hello} ${vocab.mother}`, `${vocab.goodbye} ${vocab.mother}`, `${vocab.please} ${vocab.mother}`, vocab.friend], correctAnswer: `${vocab.hello} ${vocab.mother}` },
    { id: `q_${lang.id}_${tier}_${lessonIndex}_10`, type: 'tap-pairs', prompt: 'Match relatives', options: [vocab.mother, 'Mother', vocab.father, 'Father', vocab.brother, 'Brother', vocab.sister, 'Sister'], correctAnswer: `${vocab.mother}:Mother,${vocab.father}:Father,${vocab.brother}:Brother,${vocab.sister}:Sister` }
  ];
  return list;
}

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
};

const translatePhrase = (phrase: string, toLang: string): string => {
  const clean = phrase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
  
  if (VOCAB_MAP[clean]?.[toLang]) {
    return VOCAB_MAP[clean][toLang];
  }
  
  if (phrase.includes(', ')) {
    return phrase.split(', ').map(p => translatePhrase(p, toLang)).join(', ');
  }
  if (phrase.includes(' & ')) {
    return phrase.split(' & ').map(p => translatePhrase(p, toLang)).join(' & ');
  }
  if (phrase.includes(' and ')) {
    return phrase.split(' and ').map(p => translatePhrase(p, toLang)).join(' and ');
  }
  
  return phrase;
};

const localizeQuestionsForUser = (questions: Question[], _targetLang: string, nativeLang: string): Question[] => {
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
    
    // For translate questions, translate the English word in the prompt to native language
    const transMatch = q.prompt.match(/Translate: "([^"]+)"/);
    if (transMatch) {
      const englishWord = transMatch[1];
      const nativeWord = translatePhrase(englishWord, nativeLang);
      return {
        ...q,
        prompt: `Translate: "${nativeWord}"`
      };
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
      const localizedOptions = (q.options || []).map(opt => {
        const clean = opt.toLowerCase().trim();
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
              questions: localizedQuestions
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
          questions: localizedQuestions
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
                ? "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300" 
                : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm";
                
              if (isSelected) {
                btnClass = "border-indigo-500 bg-indigo-500/10 text-indigo-400 border-b-4";
              }

              return (
                <button
                  key={option}
                  onClick={() => !isAnswered && setSelectedOption(option)}
                  disabled={isAnswered}
                  className={`w-full text-left font-outfit font-extrabold p-4 rounded-2xl shadow-playful-inner transition-all flex items-center justify-between border-2 ${btnClass}`}
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
                ? "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300" 
                : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm";
                
              if (isSelected) {
                btnClass = "border-indigo-500 bg-indigo-500/10 text-indigo-400 border-b-4";
              }

              return (
                <button
                  key={option}
                  onClick={() => !isAnswered && setSelectedOption(option)}
                  disabled={isAnswered}
                  className={`w-full text-left font-outfit font-extrabold p-4 rounded-2xl shadow-playful-inner transition-all flex items-center justify-between border-2 ${btnClass}`}
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
                    ? "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-350" 
                    : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm";
                    
                  if (isMatched) {
                    btnClass = "border-emerald-500 bg-emerald-500/15 text-emerald-450 opacity-40 cursor-not-allowed border-b-0";
                  } else if (isSelected) {
                    btnClass = "border-indigo-500 bg-indigo-500/10 text-indigo-400 border-b-4";
                  }

                  return (
                    <button
                      key={word}
                      disabled={isMatched || isAnswered}
                      onClick={() => setTapLeftSelected(word)}
                      className={`w-full font-outfit font-bold p-3.5 rounded-xl text-center shadow-playful-inner text-sm md:text-base border-2 transition-all ${btnClass}`}
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
                    ? "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-355" 
                    : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm";
                    
                  if (isMatched) {
                    btnClass = "border-emerald-500 bg-emerald-500/15 text-emerald-450 opacity-40 cursor-not-allowed border-b-0";
                  } else if (isSelected) {
                    btnClass = "border-indigo-500 bg-indigo-500/10 text-indigo-400 border-b-4";
                  }

                  return (
                    <button
                      key={word}
                      disabled={isMatched || isAnswered}
                      onClick={() => setTapRightSelected(word)}
                      className={`w-full font-outfit font-bold p-3.5 rounded-xl text-center shadow-playful-inner text-sm md:text-base border-2 transition-all ${btnClass}`}
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
