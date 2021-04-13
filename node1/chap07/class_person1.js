// 클래스 정의
class Person {
    constructor(s, i) {
      this.name = s;
      this.age = i;
    } 
}
  
let person = new Person("홍길동", 16);
console.log(person);  


// 출력
// Person { name: '홍길동', age: 16 }