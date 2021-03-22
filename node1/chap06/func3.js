// 지역 함수
function outterFunc() {   // outterFunc는 전역변수
    print("hello")
  
    function print(msg) {  // print는 지역변수
      console.log(msg)
    }
}
  
outterFunc()
// print("world")  여기서 호출할 수 없다. 여기서 print는 변수이므로  