// doSomething 함수는 파라미터 값 a, b, c 중에서 최대값을 찾아서 리턴한다.

// 출력
// 3
// 3
// 3

function doSomething(a, b, c) {
    let max = Math.max(a, b, c);

    return max;

    // return (Math.max(a,b,c));    =>이렇게 한줄로 써도됨
}

console.log(doSomething(3, 1, 2));
console.log(doSomething(1, 2, 3));
console.log(doSomething(1, 3, 2));