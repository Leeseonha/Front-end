// (1) sum 함수를 구현하라.  
// sum 함수의 파라미터는 배열이다. sum 함수는 배열의 원소의 합을 리턴한다.

// (2) test_sum 함수를 구현하라.
// test_sum 함수의 파라미터는 콜백 함수이다.
// test_sum 함수는, 
//   랜덤 값이 5개 들어있는 배열을 생성하고, 그 배열을 출력하고,  (랜덤값 범위 0~10 정수)
//   콜백 함수를 호출하면서 그 배열을 파라미터로 전달하고,
//   콜백 함수의 리턴값을 출력한다.

// (3) test_sum 함수를 5회 반복 호출하라.
// test_sum 함수를 호출할 때, sum 함수를 파라미터로 전달하라.

function sum(a) {
    return a.reduce((a, b) => a + b);
}
  
function test_sum(callback) {
    let a = [];
    for (let i = 0; i < 5; ++i)
        a.push(Math.floor(Math.random() * 11));
    console.log(a);
    console.log(callback(a));
}
  
test_sum(sum);  