// doSomething 함수는 파라미터로 전달된 두 배열이 결합된 새 배열을 만들고,
// 그 새 배열을 오름차순으로 정렬하여 리턴한다.

// 출력
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

function doSomething(a, b) {
    let result= [];
    for(let i = 0; i < a.length; i++){
        result[i] = a[i];
    }
    for(let i = 0; i < b.length; i++){
        result[i + 3] = b[i];
    }
    return result.sort();
}

let a = [3, 5, 8], b = [2, 1, 6, 4, 7];
console.log(doSomething(a, b));
