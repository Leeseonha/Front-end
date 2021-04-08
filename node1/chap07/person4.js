// 객체 생성
function createPerson(s, i) {
    return { name: s, age: i };  //리턴문에 ; 붙이면 문장, ; 안붙이면 표현식
  }
  
  let person1 = createPerson("홍길동", 16);
  let person2 = createPerson("임꺽정", 18);
  
  console.log(person1);
  console.log(person2);  