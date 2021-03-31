// doSomething 함수는 파라미터 배열 a 에서, 선두 위치의 항목 한개와, 후미 위치의 항목 한 개를 제거한다.

// 출력
// [ 4, 5 ]

function doSomething(a) {
    a.shift();
    a.pop();
    return a
}

let a = [3, 4, 5, 6];
doSomething(a);
console.log(a);
