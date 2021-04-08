// spreading operator
let person1 = { name: "홍길동", age: 16 };
console.log(person1);

let name = "홍길동";
let age = 16;

let person2 = { name: name, age: age };
console.log(person2);

let person3 = { name, age };
console.log(person3);


// 출력
// { name: '홍길동', age: 16 }
// { name: '홍길동', age: 16 }
// { name: '홍길동', age: 16 }