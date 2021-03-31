// space4 함수는 파라미터 문자열 s 에서, 모든 공백(space) 문자를 - 문자로 치환하여 리턴한다.

// 출력
// a-b-c
// one--two

function space4(s) {
    for(let i =0; i < s.length; ++i){
        return s.replace(/ /g,"-");
    }
}

console.log(space4("a b c"));
console.log(space4("one  two"));
