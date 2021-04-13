// sort
let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
];
  
persons.sort((p1, p2) => p1.age - p2.age); //p1-p2이면 오름차순 정렬, p2-p1이면 내림차순
console.log(persons);
  

// 출력
// [
//   { name: '홍길동', age: 16 },
//   { name: '임꺽정', age: 18 },
//   { name: '전우치', age: 19 }
// ]