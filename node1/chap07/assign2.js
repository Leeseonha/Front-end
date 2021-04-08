// Object.assign 메소드
// Object.assign(to, from) : from 객체의 모든 멤버 변수 값을, to 객체에 복사한다.

// 이 코드는 객체 복제
let person1 = { name: "홍길동", age: 16 };

let person2 = Object.assign({ }, person1);
console.log(person2);