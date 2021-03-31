// swap 함수는 파라미터로 전달된 a 배열에서, i 위치의 값과 j 위치의 값을 서로 교환(swap) 한다.

// 출력
// [ 456, 123 ]

function swap(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
}

let a = [123, 456];
swap(a, 0, 1);
console.log(a);
