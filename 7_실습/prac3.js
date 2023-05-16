// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

for(let i = 0; i < 10; i++) {
  if(i % 2 == 0) {
    process.stdout.write(`${i}`);
  }
}

// console.log()를 사용하여 출력할 수 있지만, 문제의 결과값 출력은 1행으로 출력해야 하기 때문에
// process.stdout.write를 사용하여 출력을 시도하였다. 다만, process.stdout.write는 문자열만 출력 가능하기에
// 변수 i의 값을 number에서 string 타입으로 변환하여 출력하였다.
// 위에서 사용한 방법 말고도 process.stdout.write(String(i)); 와 같은 방법이 존재한다.