// 1부터 20미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

// while문

/* let count = 0;
let i = 0;

while (i < 20) {
  if (!(i % 2 == 0 || i % 3 == 0)) {
    count += i;
  }
  i++;
}

console.log(count); */

// for문
let count = 0;

for(let i = 0; i < 20; i++) {
  if (!(i % 2 == 0 || i % 3 == 0)) {
    count += i;
  }
}

console.log(count);
