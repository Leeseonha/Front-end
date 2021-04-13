// getter / setter
class Rectangle {
    constructor(x1, y1, x2, y2) {
      this.x1  = x1;
      this.y1  = y1;
      this.x2  = x2;
      this.y2  = y2;
    }
  
    get width() {
      return Math.abs(this.x2 - this.x1);
    }
  
    set width(width) {
      this.x2 = this.x1 + width;
    }
  
    get height() {
      return Math.abs(this.y2 - this.y1);
    }
  
    set height(height) {
      this.y2 = this.y1 + height;
    }
}
  
let rectangle = new Rectangle(5, 5, 20, 25);
rectangle.width = 30;
rectangle.height = 30;
console.log(rectangle);
console.log("%d %d", rectangle.width, rectangle.height);


// 출력
// Rectangle { x1: 5, y1: 5, x2: 35, y2: 35 }
// 30 30