// 삼각형 출력하기 - pattern 1

for(let i = 1; i <= 5; i++){
  for(let j = 0; j < i; j++){
    process.stdout.write(`*`);
  }
  console.log();
}

// *
// **
// ***
// ****
// *****