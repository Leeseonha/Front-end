// 비어있는 persons 배열을 생성한다.
// for 루프의 본문에서 
// persons 배열의 끝에 { name: "홍길동", age: 16 + i } 객체를 추가한다.
// for 루프를 10번 반복한다.
// persons 배열을 출력한다.

let persons = [];

for(let i=0; i<10; i++) {
   persons.push({ name: "홍길동", age: 16 + i });
}
console.log(persons);


// 출력
// [
//     { name: '홍길동', age: 16 },
//     { name: '홍길동', age: 17 },
//     { name: '홍길동', age: 18 },
//     { name: '홍길동', age: 19 },
//     { name: '홍길동', age: 20 },
//     { name: '홍길동', age: 21 },
//     { name: '홍길동', age: 22 },
//     { name: '홍길동', age: 23 },
//     { name: '홍길동', age: 24 },
//     { name: '홍길동', age: 25 }
//   ]