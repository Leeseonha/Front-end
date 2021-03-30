// sum 함수는, 파라미터 배열에 들어있는 문자열을 숫자로 변환한 값의 합계를 리턴한다.
// 합계만 리턴하면되고, 파라미터 배열을 수정할 필요는 없다.

// 출력
// 10
// 12
// 41

function sum(a) { 
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += parseInt(a[i]);
    }
    return sum;
} 

console.log(sum(["1", "2", "3", "4"]));
console.log(sum(["3", "4", "5"]));
console.log(sum(["20", "21"]));