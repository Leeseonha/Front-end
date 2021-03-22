// template literal
// ` 따옴표를 사용한 문자열에  ${ 표현식 } 형태로 구현하여, 표현식의 값이 문자열에 삽입된다.
let first = 'Jane';
let last = 'Doe';

let s = `Hello ${first} ${last}!`
console.log(s);