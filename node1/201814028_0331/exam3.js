// number1 함수는 파라미터 문자열 s 에서, 첫번째 숫자의 위치를 리턴한다.

// 출력
// 1
// 2
// 3

function number1(s) {
    return s.indexOf(s.match(/[0-9]+/));
}

console.log(number1("a123a"));
console.log(number1("  345"));
console.log(number1("bbb9a8b"));
