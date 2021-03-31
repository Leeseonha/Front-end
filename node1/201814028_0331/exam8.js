// call8 함수는 파라미터로 전달된 f 함수를 호출하고, f 함수의 리턴값을 화면에 출력한다.
// f 함수를 호출할 때, 적절한 파라미터 값을 한 개 전달해야 한다.

// 출력
// 108

function call8(f) {
    console.log(add(8));
}

function add(i) {
    return i + 100;
}

call8(add);
