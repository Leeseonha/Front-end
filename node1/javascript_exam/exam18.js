// path 함수는 파라미터 s 문자열에서 / 문자를 구분 문자로하여 index 위치의 부분 문자열을 리턴한다.
// 예:
// "c:/pj/frontend/chap05/substring1.js"
// index    부분 문자열
// 0	    c:
// 1	    pj
// 2	    frontend
// 3	    chap05
// 4	    substring1.js

// 출력
// c:
// pj
// frontend
// chap05
// substring1.js

function path(s, index) {
    let arr = s.split("/");
    return arr[index];
}

let s = "c:/pj/frontend/chap05/substring1.js";
for (let index = 0; index <= 4; ++index)
    console.log(path(s, index));