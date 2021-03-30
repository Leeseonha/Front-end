// sort 함수는 파라미터 배열을 내림차순으로 정렬한다.

// 출력
// [ 'two', 'three', 'one', 'four', 'five' ]

function sort(a) {
    a.sort((a, b) => b.localeCompare(a));
}

let a = [ "one", "two", "three", "four", "five" ];
sort(a);
console.log(a);