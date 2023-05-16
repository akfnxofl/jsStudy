// 다이아몬드 출력하기

for(let i = 1; i <= 5; i++){
  for(let j = 1; j <= 5-i; j++){
    process.stdout.write(` `);
  }
  for(let k = 1; k <= (2 * i) - 1; k++){
    process.stdout.write(`*`);
  }
  console.log();
}
for(let i = 4; i >= 1; i--){
  for(let j = 5; j > i; j--){
    process.stdout.write(` `);
  }
  for(let k = 1; k <= (i * 2) - 1; k++){
    process.stdout.write(`*`);
  }
  console.log();
}

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *