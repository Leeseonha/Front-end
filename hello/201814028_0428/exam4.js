// sortPersons 함수를 구현하시오.
//    이 함수는 persons 객체 배열을 이름 내림차순으로 정렬해야 한다.

// 출력
// [
//   { name: '홍길동', age: 16 },
//   { name: '전우치', age: 19 },
//   { name: '임꺽정', age: 18 },
//   { name: '이몽룡', age: 17 },
//   { name: '연흥부', age: 31 }
// ]

function sortPersons(persons) {
    return persons.sort((a , b) => String(b.name).localeCompare(String(a.name)))
}

let persons = [
  { name: "홍길동", age: 16 },
  { name: "연흥부", age: 31 },
  { name: "임꺽정", age: 18 },
  { name: "전우치", age: 19 },
  { name: "이몽룡", age: 17 }
];

sortPersons(persons);
console.log( persons );