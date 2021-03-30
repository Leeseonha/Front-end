// countNumber 함수는, 파라미터 배열 a 에서 number type 값의 수를 리턴한다.

// 출력
// 3
// 2
// 3

function countNumber(a) {
    let count = 0;
    for(let i = 0; i < a.length; i++){
        if(typeof(a[i]) == "number"){
            count++;
        }
    }
    return count;
}

console.log(countNumber([1, 2, 3]));
console.log(countNumber(["1", 2, 3]));
console.log(countNumber(["1", 2, 3, 4, true]));