// doSomething 함수는 파라미터 배열 a 에서 선두 위치의 항목을 제거하고, 그 제거한 값을 후미에 추가한다.

// 출력
// [ 'a', 'b', 'c' ]
// [ 'b', 'c', 'a' ]
// [ 'c', 'a', 'b' ]
// [ 'a', 'b', 'c' ]

function doSomething(a) {
    let str = a.shift();
    a.push(str);
    return a;
}

let a = ["a", "b", "c"];

console.log(a);
doSomething(a);

console.log(a);
doSomething(a);

console.log(a);
doSomething(a);

console.log(a);
doSomething(a);
