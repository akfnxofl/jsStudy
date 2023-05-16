const fs = require('./makeArrayC.js');

function reverseC() {
  let arrayD = [];

  for(let i = 0; i < 5; i++) {
    arrayD[i] = [];
    for(let j = 0; j < 5; j++) {
      arrayD[i][j] = fs.arrayC[j][i];
    }
  }
  return arrayD;
}

exports.arrayD = reverseC();