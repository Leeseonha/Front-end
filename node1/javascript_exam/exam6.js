// insert 함수는, 파라미터 a 배열의 index 위치에 value 값을 삽입한다.
// index 위치와 그 뒤에 있던 값들은 한 칸씩 뒤로 밀려야 하고, 배열의 크기는 1 증가해야 한다.

// 출력
// [ 1, 2, 33, 3 ]
// [ 1, 22, 2, 33, 3 ]
// [ 11, 1, 22, 2, 33, 3 ]

function insert(a, index, value) {
    let arr = a.splice(index, 0, value);
    return arr;
}

let a = [1, 2, 3];

insert(a, 2, 33);
console.log(a);

insert(a, 1, 22);
console.log(a);

insert(a, 0, 11);
console.log(a);