// sum 함수는, 파라미터 배열에 들어있는 숫자들의 합계를 리턴한다.

// 출력
// 10
// 12
// 41

function sum(a) { 
    let sum = 0;
    for(let i  = 0; i < a.length; ++i){
        sum += a[i];
    }
    return sum;

    // return a.reduce((a, b) => a + b );   =>이렇게 해도 실행됨
} 

console.log(sum([1, 2, 3, 4]));
console.log(sum([3, 4, 5]));
console.log(sum([20, 21]));