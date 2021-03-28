// let a = [ "hello.html", "world.js", "readme.txt" ];
// a 배열의 원소는 파일명이다.
// 파라미터로 전달된 파일명에서 확장자 부분을 찾아서 리턴하는 getExtension(fileName) 함수를 구현하고,
// a 배열의 원소들에 대해서 이 함수를 반복 호출하고 그 리턴값을 출력하라.
// <출력>
// .html
// .js
// .txt

let a = [ "hello.html", "world.js", "readme.txt" ];

function getExtension(s) {
  let index = s.indexOf(".");
  return s.substr(index);
}

for (let i = 0; i < a.length; ++i) 
  console.log(getExtension(a[i]));