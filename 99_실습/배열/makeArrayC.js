const fs = require('./reverseRow.js')

function makeArrayC(){
  let arrayC = [];
  let count = 0;

  for(let i = 0; i < 5; i++){
    arrayC[i] = [];
    for(let j = 0; j < 5; j++) {
      count += 1;
      arrayC[i][j] = count;
      }
    if (i % 2 == 1) {
      fs.reverse(arrayC, i);
    }
  }
  return arrayC;
}

exports.arrayC = makeArrayC();