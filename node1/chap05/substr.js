// substr 메소드
// substr 메소드는 slice 메소드와 유사하다.
// 차이점은, substr 메소드의 두 번째 파라미터는 부분 문자열의 길이라는 점이다.

let s = "abcdefgh";
console.log(s.substr(2, 2));
console.log(s.substr(2));
console.log(s.substr(-3));