// 객체 배열
let persons = [
  { name: "홍길동", age: 16 },
  { name: "임꺽정", age: 18 },
  { name: "전우치", age: 19 }
];
  
console.log(persons);
  
for (let i = 0; i < persons.length; ++i)
  console.log(persons[i]);


// 출력
// [
//   { name: '홍길동', age: 16 },
//   { name: '임꺽정', age: 18 },
//   { name: '전우치', age: 19 }
// ]
// { name: '홍길동', age: 16 }
// { name: '임꺽정', age: 18 }
// { name: '전우치', age: 19 }