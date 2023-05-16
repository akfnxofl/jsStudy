// 역삼각형 출력하기

for(let i = 5; i >= 1; i--){
  for(let j = 5; j > i; j--){
    process.stdout.write(` `);
  }
  for(let k = 1; k <= (i * 2) - 1; k++){
    process.stdout.write(`*`);
  }
  console.log();
}

// *********
//  *******
//   *****
//    ***
//     *