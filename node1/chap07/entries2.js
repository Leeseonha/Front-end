// Object.entries

// for문에서 of가 아니고 in이면 배열의 인덱스 순서로 꺼내진다. of이면 값이 꺼내진다.
let person = { name: "홍길동", age: 16 };

for (let [key, value] of Object.entries(person)) 
  console.log("%s: %s", key, value);