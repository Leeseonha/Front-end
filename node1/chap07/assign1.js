// Object.assign 메소드
// Object.assign(to, from) : from 객체의 모든 멤버 변수 값을, to 객체에 복사한다.
let person = { name: "홍길동", age: 16 };
let info = { age: 20, department: "소프", year: 2 };

Object.assign(person, info);
console.log(person);


// 출력
// { name: '홍길동', age: 20, department: '소프', year: 2 }