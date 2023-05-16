// 삼각형 출력하기 = pattern 3

for(let i = 5; i >= 1; i--){
  for(let j = 1; j <= i; j++){
    process.stdout.write(`*`);
  }
  console.log();
}

// *****
// ****
// ***
// **
// *