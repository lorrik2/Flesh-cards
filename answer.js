const fs = require("fs");

function questions() {
  const arrayQuestions = fs.readdirSync(`${__dirname}/topics/`);
  const arrayReadFiles = arrayQuestions
    .map((el) => fs.readFileSync(`${__dirname}/topics/${el}`, "utf-8"))
    .map((line) => line.split("\n"));
  const realQuestions = [];
  for (let i = 0; i < arrayReadFiles.length; i += 1) {
    for (let k = 0; k < arrayReadFiles[i].length; k += 3) {
      console.log(arrayReadFiles[i][k]);
    }
  }
}
questions();
