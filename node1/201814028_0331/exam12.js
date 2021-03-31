// doSomething 함수는 파라미터로 전달된 배열의 순서를 뒤집는다.

// 출력
// [ [ 6, 7, 8, 9 ], [ 3, 4, 5 ], [ 1, 2 ] ]

function doSomething(a) {
    for(let i =0; i < a.length; ++i){
        a.slice(0);
        a.reverse();
    }
    return a;
}

let a = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
doSomething(a);
console.log(a);
