const fs = require('fs');
const { EOL } = require('os');

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
    function arrayFind() {
      const file = fs.readFileSync(`${__dirname}/topics/isTrueAnswer.txt`, 'utf-8').split(',');
      const arrQ = [];
      for (let i = 0; i < file.length; i += 1) {
        arrQ.push(file[i]);
      }
      return arrQ;
    }
    const arr1 = arrayFind();
    console.log(arr1);

    function convertArr(arr, cols = 3) {
      let resultArr = [];
      while (arr.length > 0) {
        resultArr.push(arr.slice(0, cols));
        arr.splice(0, cols);
      }
      return resultArr;
    }

    const arr2 = convertArr(arr1, 3);
    return arr2;
  }
}

const test = new IsFalseTrue();

console.log(test.questionsTrueFalse());

module.exports = IsFalseTrue;
//gfut
