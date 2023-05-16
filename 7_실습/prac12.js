// 삼각형 출력하기 - pattern 2

for(let i = 1; i <= 5; i++) {
  for(let j = 1; j < i; j++) {
    process.stdout.write(` `);
  }
  for(let k = 5; k >= i; k--){
    process.stdout.write(`*`);
  }
  console.log();
}

// *****
//  ****
//   ***
//    **
//     *