const fs = require('./makeArrayA.js');

function reverseA() {
  let arrayB = [];

  for(let i = 0; i < 5; i++) {
    arrayB[i] = [];
    for(let j = 0; j < 5; j++) {
      arrayB[i][j] = fs.arrayA[j][i];
    }
  }
  return arrayB;
}

exports.arrayB = reverseA();