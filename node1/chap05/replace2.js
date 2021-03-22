// replace 메소드
// 문자열.replace(부분_문자열, 치환할_문자열)
// /정규식/g    : g는, 일치하는 부분 문자열들을 전부 치환하라는 옵션이다

let s = "hello world";
console.log(s.replace(/o/g, "O"));
console.log(s);