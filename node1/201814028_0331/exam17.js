// doSomething 함수는 파라미터 배열 a 에서, 선두 위치의 항목 한개와, 후미 위치의 항목 한 개가 제거된, 새 배열을 만들어 리턴한다.
// 파라미터 배열 a의 내용은 변경되지 않는다.

// 출력
// [ 3, 4, 5, 6 ] [ 4, 5 ]

function doSomething(a) {
    let result= a.slice(0);
    result.shift();
    result.pop();
    return result;
}

let a1 = [3, 4, 5, 6];
let a2 = doSomething(a1);
console.log(a1, a2);
