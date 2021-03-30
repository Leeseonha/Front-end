// createArray 함수는, count 개의 숫자가 들어있는 배열을 리턴한다.
// 이 배열에 들어있는 값은 min 이상 max 이하의 난수(random number)이어야 한다.

// 출력
// [ 15, 13, 13, 11 ]
// [ 21, 25, 25, 22, 25 ]
// [ 34, 31, 33, 35, 34, 33 ]

function createArray(count, min, max) {
    let arr = [];

    for(let i = 0; i < count; i++){
        let num = Math.floor(Math.random() * (max - min + 1) + min);
        arr[i] = num;
    }
    return arr;
}

console.log(createArray(4, 11, 15));
console.log(createArray(5, 21, 25));
console.log(createArray(6, 31, 35));