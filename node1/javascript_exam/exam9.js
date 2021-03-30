// createArray 함수는 count 크기의 배열을 생성하여 리턴한다.
// 이 배열에는 1 이상의 홀수가 순서대로 들어있어야 한다.

// 출력
// [ 1, 3, 5, 7 ]
// [ 1, 3, 5, 7, 9 ]
// [ 1, 3, 5, 7, 9, 11 ]

function createArray(count) {
    let arr = [];
    let odd = 1;
    for(let i = 0; i < count; ++i){
        arr[i] = odd;
        odd += 2;
    }
    return arr;
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));