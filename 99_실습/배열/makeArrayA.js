// 2차원 배열 생성 후 순차적으로 값 입력
function makeArrayA(){
  let arrayA = [];
  let count = 0;

  for(let i = 0; i < 5; i++){
    arrayA[i] = [];

    for(let j = 0; j < 5; j++){
      count += 1;
      arrayA[i][j] = count;
    }
  }
  return arrayA;
}

exports.arrayA = makeArrayA();