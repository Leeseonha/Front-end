// doSomething 함수는, 파라미터 배열 a의 원소 각각에 대해서,
// 다음과 같은 내용을 출력해야 한다.

// index=인덱스, type=자료형, value=값

// 출력
// index=0, type=number, value=3
// index=1, type=string, value=hello
// index=2, type=boolean, value=true
// index=3, type=object, value=[]

function doSomething(a) {
    for(let i = 0; i < a.length; i++){
        console.log("index=" + i + ", " + "type=" + typeof a[i] +", " + "value=" + a[i]);
    }
}

let a = [3, "hello", true, []];
doSomething(a);
