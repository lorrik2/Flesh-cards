const readlineSync = require('readline-sync');
const Question = require('./question');
const Answer = require('./answers');
const c = require('ansi-colors');

const q = new Question();
const a = new Answer();

const topics = ['Наши студенты', 'Преподаватели', 'Кухня'];
const index = readlineSync.keyInSelect(topics, 'Добрый вечер! Выберите тему и наслаждайся');
const arr = a.answer(topics[index]).sort();

let count = 0;
for (let i = 0; i < q.question(topics[index]).length; i += 1) {
  const r = readlineSync.keyInSelect(arr, q.question(topics[index])[i]);
  // console.log(r);
  if (topics[index] === 'Наши студенты') {
    if (i === 0 && r === 2) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else if (i === 1 && r === 4) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else if (i === 2 && r === 5) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else if (i === 3 && r === 3) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else if (i === 4 && r === 1) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else if (i === 5 && r === 0) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else {
      console.log(c.red('Ты не прав...'));
    }
  } else if (topics[index] === 'Преподаватели') {
    if (i === 0 && r === 0) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else if (i === 1 && r === 1) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else if (i === 2 && r === 2) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else if (i === 3 && r === 4) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    } else if (i === 4 && r === 3) {
      console.log(c.green('Молодец! Верно мыслишь!'));
      count += 1;
    }
  } else if (topics[index] === 'Кухня') {
    console.log('Иди поешь...');
  } else {
    console.log(c.red('Ты не прав...'));
  }
  // if (i === r) {
  //   count += 1;
  //   console.log('Молодец! Верно мыслишь!');
  // } else {
  //   console.log('Ты не прав...');
  // }
}

console.log(
  `\n✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ \n\nСпасибо за игру 👍 !!! правиьных ответов: ${count}\n\n✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ \n`
);
