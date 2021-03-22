// 함수를 리턴
function factory() {
    return function (msg) {
      console.log(msg)
    }
  }
  
  factory()("hello")  