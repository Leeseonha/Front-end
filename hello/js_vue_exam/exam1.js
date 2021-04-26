// getPropertyValue 메소드를 구현하시오.
//    obj 객체의 속성값을 한 개 리턴해야 한다.
//    그 속성의 이름은 propertyName 파라미터 변수에 들어있다.

// 출력
// 홍길동
// 16
// 11
// 22

function getPropertyValue(obj, propertyName) {
    return obj[propertyName];
}

let p1 = { name: '홍길동', age: 16 };
console.log(getPropertyValue(p1, "name")); // p1 객체의 name 속성값이 출력된다.
console.log(getPropertyValue(p1, "age")); // p1 객체의 age 속성값이 출력된다.

let r1 = { width: 11, height: 22 };
console.log(getPropertyValue(r1, "width")); // r1 객체의 width 속성값이 출력된다.
console.log(getPropertyValue(r1, "height")); // r1 객체의 height 속성값이 출력된다.