const { Quiz } = require('enquirer');

let arrOfAnswers = ['165', '175', '185', '195', '205'];
let arrOfQuestions = 'How many countries are there in the world?';
let arrOfTrueAnswers = 3;

const prompt = new Quiz({
  name: 'countries',
  message: arrOfQuestions,
  choices: arrOfAnswers,
  correctChoice: arrOfTrueAnswers,
});

prompt
  .run()
  .then((answer) => {
    if (answer.correct) {
      console.log('Correct!');
    } else {
      console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
    }
  })
  .catch(console.error);
