// spreading operator
let name = "홍길동";
let age = 16;
let scores = { english: 90, math: 85, history: 95 };

let person1 = { name, age, scores };
console.log(person1);

let person2 = { name, age, ...scores };
console.log(person2);


// 출력
// { name: '홍길동', age: 16, scores: { english: 90, math: 85, history: 95 } }
// { name: '홍길동', age: 16, english: 90, math: 85, history: 95 }