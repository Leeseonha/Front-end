// this 문제
let obj = {
    count: 0,
    startTimer: function() {
        console.log(this.count);
        let callback = () => { console.log(this.count++); };
        setInterval(callback, 1000)
    }
}
  
obj.startTimer();
  

// 출력
// 0
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// ... 생략 ...