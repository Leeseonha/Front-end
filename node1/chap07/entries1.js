// Object.entries

// Object.entries(객체)
// 객체의 모든 멤버 변수 값이 들어있는 2차원 배열을 리턴한다.
// 리턴되는 배열은 다음과 같은 형태이다.
// [ [ 멤버변수이름1: 값], [ 멤버변수이름2: 값], [ 멤버변수이름3: 값], ... ]
let person = { name: "홍길동", age: 16 };

console.log(Object.entries(person));


// 출력
// [ [ 'name', '홍길동' ], [ 'age', 16 ] ]