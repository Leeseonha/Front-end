// Object.freeze 메소드

// Object.freeze(객체)
// 객체를 수정할 수 없는 상태로 변경한다.
// 객체 내부 값을 변경할 수 없게 된다.
let person1 = { name: "홍길동", age: 16 };
person1.age = 20;
person1.department = "소프";
console.log(person1);

let person2 = { name: "홍길동", age: 16 };
Object.freeze(person2);
person2.age = 20;
person2.department = "소프";
console.log(person2);


// 출력
// { name: '홍길동', age: 20, department: '소프' }
// { name: '홍길동', age: 16 }