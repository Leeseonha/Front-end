// space1 함수는 파라미터 문자열 s 에서, 첫번째 공백문자(space)의 위치를 리턴한다.

// 출력
// 1
// 3

function space1(s) {
    for(let i = 0; i < s.length; ++i){
        return s.indexOf(" ");
    }
}

console.log(space1("a b c"));
console.log(space1("one two three"));
