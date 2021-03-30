// contains 함수를 구현하시오. 
// 이 함수는 파라미터 배열 a 에 value 값이 들어있는지 여부(true/false)를 리턴한다.

// 출력
// true
// false
// false

function contains(a, value) {
    for(let i = 0; i < a.length; i++){
        if(a[i] === value){
            return true;
        }
    }
    return false;
}

let a = [1, 3, 5, 6];
console.log(contains(a, 3));
console.log(contains(a, 4));
console.log(contains(a, "3"));