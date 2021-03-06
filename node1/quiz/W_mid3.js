// (1) 비어있는 a1 배열을 생성한다.
// (2) for 문에서 배열을 생성하여 a1 배열의 원소에 대입하시오.
//   for 문의 실행 결과 배열의 값은 다음과 같아야 한다.
//   [[0, 1], [2, 3], [4, 5]]
// (3) a1 배열을 깊은 복사하여 a2 배열을 생성한다.
//    즉 a1 배열만 복제되는 것이 아니고, 배열의 원소들도 복제되어야 한다.
//    a1 배열의 원소는 3 배열이다. ([0,1], [2,3], [4,5])
// (4) a1[0][0] = 100; 을 실행한다.
// (5) a1 배열을 출력한다.
// (6) a2 배열을 출력한다.

let a1 = [];

for (let i = 0; i < 3; i += 2)
  a1.push([i, i+1]);

let a2 = [];
for (let i = 0; i < a1.length; ++i)
  a2.push(a1[0].slice(0));

a1[0][0] = 100;
console.log(a1);
console.log(a2);