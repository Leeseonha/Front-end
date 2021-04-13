// this 문제
let obj = {   //구현은 obj객체내부에서 구현되었지만
    count: 0,
    startTimer: function() {
        console.log(this.count);    // 여기있는 this는 호출된 문맥에서의 this
        let callback = function() { console.log(this.count++); };   //여기있는 this는 setInterval내부에서의 this 
        setInterval(callback, 1000);   // 호출은 setInterval함수내부에서 호출됨
    }
}
  
obj.startTimer();


// 출력
// 0
// NaN
// NaN
// NaN
// NaN
// ... 생략 ...