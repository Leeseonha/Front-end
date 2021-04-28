// countEvent 함수를 구현하시오.
//   이 함수의 파라미터는 숫자 배열이다.
//   이 배열에 들어있는 짝수의 수를 리턴해야 한다.

// 주의사항: for 문을 사용하지 말고, 구현하라.

// 출력
// 3

function countEven(a) {
    return a.filter( odd => odd % 2 === 0 ).length;
}

let a = [7, 1, 9, 4, 15, 23, 2, 11, 5, 12, 3];
console.log( countEven(a) );