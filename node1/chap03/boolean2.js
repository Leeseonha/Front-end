// false에 해당하는 값
// <조건식에 사용된 값이 boolean 타입이 아닌 경우>
// - 그 값이 NaN, 0, null, undefined 이면, false로 취급된다.
// - 그외 나머지 값은 true로 취급된다.

let a = undefined, b = null, c = 0, d = NaN;

console.log(a ? "true" : "false");
console.log(b ? "true" : "false");
console.log(c ? "true" : "false");
console.log(d ? "true" : "false");