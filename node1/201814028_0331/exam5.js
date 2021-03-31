// space5 함수는 파라미터 문자열 s 에서, 모든 공백(space) 문자를 제거하여 리턴한다.

// 출력
// abc
// onetwo

function space5(s) {
    for(let i = 0; i < s.length; ++i){
        return s.replace(/ /g,"");
    }
}

console.log(space5("a b c"));
console.log(space5("one  two"));
