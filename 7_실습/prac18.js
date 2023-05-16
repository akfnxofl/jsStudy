// 별찍기 심화

for(let i = 5; i >= 1; i--){
  for(let j = 1; j <= i; j++){
    process.stdout.write(`*`);
  }

  for(let l = 5; l > i; l--){
    for(let m = 1; m <= 2; m++){
      process.stdout.write(` `);
    }
  }
  for(let k = 1; k <= i; k++){
    process.stdout.write(`*`);
  }
  console.log();
}

// **********
// ****  ****
// ***    ***
// **      **
// *        *