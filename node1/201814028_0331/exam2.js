// space2 함수는 파라미터 문자열 s 에서, 두번째 공백문자(space)의 위치를 리턴한다.

// 힌트:
//   먼저 첫번째 공백문자의 위치를 찾아서 변수 i 에 대입한 후,
//   i + 1 위치에서부터 다시 공백 문자를 찾아야 한다.

// 출력
// 3
// 7

function space2(s) {
    let a = s.indexOf(" ");
    return s.indexOf(" ", a + 1);
}

console.log(space2("a b c d"));
console.log(space2("one two three four"));
