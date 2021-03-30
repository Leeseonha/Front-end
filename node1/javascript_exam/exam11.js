// remove 함수는 파라미터 배열에서 value 값을 찾아서 제거한다.
// 제거된 값의 뒤에 있던 값들은 한 칸씩 앞으로 당겨져야 하고, 배열의 크기는 1 감소해야 한다.
// a 배열에 value 값이 여러 개 들어있는 경우, 제일 앞의 값 한 개만 제거한다.

// 출력
// [ 1, 5, 5, 3, 6 ]
// [ 1, 5, 3, 6 ]

function remove(a, value) {
    let arr = [];
    for(let i = 0; i < a.length; ++i){
        if(a[i] === value){
            a.splice(i,1);
            return arr;
        }
    }
}

let a = [1, 3, 5, 5, 3, 6];

remove(a, 3);
console.log(a);

remove(a, 5);
console.log(a);