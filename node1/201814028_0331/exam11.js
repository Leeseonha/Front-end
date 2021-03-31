// doSomething 함수는 파라미터로 전달된 a 배열을 복제하여 새 배열을 만들고,
// 새 배열의 순서를 뒤집어서 리턴한다.
// 파라미터 a 배열의 내용은 변화하지 말아야 한다.

// 출력
// [ 1, 2, 3 ] [ 3, 2, 1 ]

function doSomething(a) {
    let arr = a.slice(0);
    for(let i =0; i < arr.length; ++i){
        arr.slice(0);
        arr.reverse();
    }
    return arr;
}

let a1 = [1, 2, 3];
let a2 = doSomething(a1);
console.log(a1, a2);
