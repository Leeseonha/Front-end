// even 함수는 파라미터 배열에서 홀수를 모두 제거한다.

// 출력
// [ 2, 4, 6 ]

function even(a) {
    for(let i = 0; i < a.length; ++i){
        if(a[i] % 2 !== 0){
            a.splice(i, 1);
            i--;
        }
    }
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];
even(a);
console.log(a);