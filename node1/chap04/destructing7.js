// 구조 분해 할당(destructing assignment)
let i = 3, j = 4;
let a = [5, 6, 7]

let a1 = [i, j, a];
console.log(a1);

let a2 = [i, j, ...a];
console.log(a2);