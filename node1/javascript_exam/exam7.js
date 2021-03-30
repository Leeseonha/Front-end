// clone 함수는 파라미터 배열 a를 복제해서 만든 새 배열을 리턴한다.

// 출력
// [ 11, 2, 3 ]
// [ 1, 2, 3 ]

function clone(a) {
    let arr = [];
    for(let i = 0; i < a.length; ++i){
        arr[i] = a[i];
    }
    return arr;

    // return a.slice(0);   =>이렇게 한줄로 써도 실행됨
}

let a = [1, 2, 3];
let b = clone(a);
a[0] = 11;
console.log(a);
console.log(b);