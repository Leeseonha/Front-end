// 메소드
let rectangle = { 
  width: 5, 
  height: 7
};
  
rectangle.area = function () {
  return this.width * this.height;
}
  
console.log(rectangle.area());  


// 출력
// 35