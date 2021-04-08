// 멤버 변수 제거
let person = { name: "홍길동", age: 16, department: "소프" };
console.log(person);

delete person.department;
console.log(person);


// 출력
// { name: '홍길동', age: 16, department: '소프' }
// { name: '홍길동', age: 16 }