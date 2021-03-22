// substring 메소드
//substring 메소드는 slice 메소드와 유사하다.
// 차이점은, substring 메소드는 음수 파라미터를 사용할 수 없다는 점이다.

let s = "abcdefgh";
console.log(s.substring(2, 4));
console.log(s.substring(2));
console.log(s.substring(s.length - 3));