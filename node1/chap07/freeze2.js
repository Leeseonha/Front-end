// Object.freeze 메소드

// Object.isFrozen(객체)
// 객체가 freeze 되었는지 여부를 리턴한다.

let person = { name: "홍길동", age: 16 };
console.log(Object.isFrozen(person));

Object.freeze(person);
console.log(Object.isFrozen(person));