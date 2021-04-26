// deepCopy 함수를 구현하시오.
//  deepCopy 함수는 파라미터 배열을 복제하여 만든 새 배열을 리턴해야 한다.
//  이 복제는 deep copy 이어야 한다.

// 출력
// [ { name: '홍길동', age: 16 }, { name: '임꺽정', age: 18 } ]

function deepCopy(persons) {
  let copy = [];
  for (let i = 0; i < persons.length; ++i) {
    copy.push(Object.assign({}, persons[i]));
  }
  return copy;
}

let persons1 = [
  { name: "홍길동", age: 16 },
  { name: "임꺽정", age: 18 }
];
let persons2 = deepCopy(persons1);
persons1[0].age = 20;
console.log(persons2);