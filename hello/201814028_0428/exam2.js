// countProperty 함수를 구현하시오.
//    이 함수는 파라미터 객체의 파라미터의 수를 리턴한다. (멤버 변수의 수)

//    출력
// 2
// 4

function countProperty(obj) {
    return Object.keys(obj).length;
}

let p1 = { name: '홍길동', age: 16 };
console.log( countProperty(p1) );

let r1 = { x: 10, y: 20, width: 30, height: 40 };
console.log( countProperty(r1) );