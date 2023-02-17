const fs = require('fs');

//async function isTrueFalse() {
//  try {
//    const file = await fs.readFile(`${__dirname}/topics/isTrueAnswer.txt`, 'utf-8');
//    return file.split('\n').map((el) => el);
//  } catch (err) {
//    console.log(err.message);
//  }
//}

//isTrueFalse().then((res) => console.log(res));

class IsFalseTrue {
  questionsTrueFalse() {
    const file = fs.readFileSync(`${__dirname}/topics/isTrueAnswer.txt`, 'utf-8');
    return file.split('\n').map((el) => el);
  }
}

const test = new IsFalseTrue();

console.log(test.questionsTrueFalse());

module.exports = IsFalseTrue;
