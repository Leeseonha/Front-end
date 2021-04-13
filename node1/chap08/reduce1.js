// reduce - 합계 계산
function callback(a, b) { 
    console.log(a + ", " + b); 
    return a + b; 
}
  
let a1 = [10, 20, 30, 40, 50];
let sum = a1.reduce(callback);
console.log(sum);  


// 출력
// 10, 20
// 30, 30
// 60, 40
// 100, 50
// 150