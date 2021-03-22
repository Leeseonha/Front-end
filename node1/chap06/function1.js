// 함수 자료형
function add(a, b) {
    return a + b;
  }
  
  let a = add(3, 4);
  console.log(a);
  
  let f = add;
  console.log(typeof f);
  
  let b = f(3, 4);
  console.log(b);  