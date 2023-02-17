const { EOL } = require('os');
const fs = require('fs');

class TrueAnswers {
  // constructor(num) {
  //   this.num = num;
  // }

  getarrTrueAnswers(theme) {
    const allOfAnswers = fs.readFileSync(`${__dirname}/topics/${theme}.txt`, 'utf-8').split(EOL);
    // console.log(allOfAnswers)
    const arrOfAnswers = [];
    for (let i = 0; i < allOfAnswers.length; i += 3) {
      arrOfAnswers.push(allOfAnswers[i]);
    }
    return arrOfAnswers;
  }
  getarrTrueAnswers(){console.log('nighthawk_flashcard_data')}
}

// TrueAnswers.getarrTrueAnswers('nighthawk_flashcard_data');

module.exports = TrueAnswers;

const a = new TrueAnswers();
console.log(a.getarrTrueAnswers())
