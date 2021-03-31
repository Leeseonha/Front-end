// concat7 함수는 파라미터로 전달된 문자열들을, 모두 모아서 만들어진 문자열 한 개를 리턴한다.

// 출력
// abcd
// efg
// hi

function concat7(...a) {
    let arr = "";
    for(let i = 0; i < a.length; i++){
        arr = arr.concat(a[i]);
    }
    return arr;
}

console.log(concat7("a", "b", "c", "d"));
console.log(concat7("e", "f", "g"));
console.log(concat7("h", "i"));
