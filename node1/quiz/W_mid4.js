// (1) 배열을 만든다.
// (2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
// (3) 배열에서 짝수의 갯수를 구해서 출력하라. (반복문 없이, 전역변수 없이, reduce 메소드를 사용하여 구현하라)

let a = [];

for (let i = 0; i < 100; ++i)
  a[i] = Math.floor(Math.random() * 100 + 1);

let count = a.reduce((count, b) => b % 2 == 0 ? count + 1 : count, 0);
console.log(count);