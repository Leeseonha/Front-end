// createArray 함수는 다음과 같은 구조의 2차원 배열을 리턴해야 한다.

// 출력
// [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]
// [ [ 10, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]

function createArray() {
    let a = [];
    for(let i = 0; i < 3; ++i){
        a[i] = [1,2,3];
    }
    return a;
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);