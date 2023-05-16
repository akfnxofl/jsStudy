// 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

// form을 주고 출력하는 방법

for(let i = 1; i <= 6; i++) {
  for(let j = 1; j <= 6; j++) {
    if(i + j == 6) {
      console.log(`[ ${i}, ${j} ]`);
    }
  }
}

console.log(`------------------------`);
// 배열에 값을 넣어 출력하는 방법

let arr = [];
for(let i = 1; i <= 6; i++) {
  for(let j = 1; j <= 6; j++) {
    if(i + j == 6) {
      arr[i-1] = [i, j];
    }
  }
}
console.log(arr);