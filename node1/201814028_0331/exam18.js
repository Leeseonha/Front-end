// doSomething 함수는 파라미터로 전달된 문자열에서,
//   쉼표 문자를 기준으로 구분하여 index 위치의 단어를 제거한 새 문자열을 리턴한다.

// 힌트:
//  split, splice, toString 메소드를 활용하여 구현하면 간단하다.
//  위 메소드를 이용하지 않고 구현할 수도 있지만 더 복잡하다.

// 출력
// one,two,three
// zero,two,three
// zero,one,three
// zero,one,two

function doSomething(s, index) {
    let result = s.split(",")
    result.splice(index, 1);
    return result.toString();
}

let s = "zero,one,two,three";
console.log(doSomething(s, 0));
console.log(doSomething(s, 1));
console.log(doSomething(s, 2));
console.log(doSomething(s, 3));
