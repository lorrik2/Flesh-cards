const fs = require('fs');
const { EOL } = require('os');

class Answer {
  // constructor(num) {
  //   this.num = num;
  // }

  // eslint-disable-next-line class-methods-use-this
  answer(theme) {
    const arr = fs
      .readFileSync(`${__dirname}/topics/${theme}.txt`, 'utf-8')
      .split(EOL);
    const arrA = [];
    for (let i = 0; i < arr.length; i += 3) {
      arrA.push([arr[i + 1]]);
    }
    return arrA;
  }
}

// const a = new Answer();
// console.log(a.answer('otter'));

module.exports = Answer;
