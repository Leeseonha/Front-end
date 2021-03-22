// 파라미터 값이 전달되었는지 확인
function add(a, b) {
    if (!b) b = 0;
    return a + b;
}

console.log(add(3, 4))
console.log(add(3));