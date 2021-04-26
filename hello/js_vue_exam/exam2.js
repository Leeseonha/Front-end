// compareIdentity 함수를 구현하시오.
// 이 함수는 p1 객체와 p2 객체가 동일한 객체인지 비교해서 (참조 비교)
// true/false를 리턴한다.

// 출력
// false
// true

function compareIdentity(p1, p2) {
    return p1 == p2;
}

let p1 = { name: '홍길동', age: 16 };
let p2 = { name: '홍길동', age: 16 };
let p3 = p1;

console.log( compareIdentity(p1, p2) );
console.log( compareIdentity(p1, p3) );