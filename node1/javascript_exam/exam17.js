// even 함수는 파라미터 배열에서 짝수만 골라서 만든 새 배열을 리턴한다.
// 파라미터 배열은 변경되지 않는다.

// 출력
// [ 2, 4, 6 ]

function even(a) {
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 !== 0){
            a.splice(i, 1);
            i--;
        }
    }
    let arr = a.splice(0);
    return arr;
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];
console.log(even(a));