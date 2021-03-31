// word6 함수는 파라미터 문자열 s 에서, 쉼표와 공백 문자를 기준으로 index 위치의 단어를 리턴한다.

// 출력
// [zero]
// [one]
// [two]
// [three]

function word6(s, index) {
    s.split(/[, ]+/);
    let a = s.split(",");
    return a[index].trim();
}

let s = "zero, one, two, three";
console.log("[" + word6(s, 0) + "]");
console.log("[" + word6(s, 1) + "]");
console.log("[" + word6(s, 2) + "]");
console.log("[" + word6(s, 3) + "]");
