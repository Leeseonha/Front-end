// 구조 분해 할당(destructing assignment)
let a = [];
[a[0], a[1]] = [3, 4];
console.log(a);

[a[0], a[1]] = [a[1], a[0]];
console.log(a);