// 가변 파라미터 옛날 문법
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; ++i)
        result += arguments[i];
    return result; 
}

console.log(sum(1, 2, 3, 4));
console.log(sum(4));
console.log(sum());