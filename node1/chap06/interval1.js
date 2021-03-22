// setInteraval 함수
function printTime(msg) {
    console.log(msg, new Date());
  }
  
  setInterval(printTime, 1000, "1초 간격");  