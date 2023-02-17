/* eslint-disable class-methods-use-this */
const fs = require('fs');
const { EOL } = require('os');

class Question {
  // constructor(num) {
  //   this.num = num;
  // }

  question(theme) {
    const arr = fs
      .readFileSync(`${__dirname}/topics/${theme}.txt`, 'utf-8')
      .split(EOL);
    const arrQ = [];
    for (let i = 0; i < arr.length; i += 3) {
      arrQ.push(arr[i]);
    }
    return arrQ;
  }
}

module.exports = Question;
