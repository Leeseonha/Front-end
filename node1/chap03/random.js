// random - 난수 메소드
// Math.random 메소드는, 0 보다 크거나 같고, 1보다 작은 난수를 리턴한다. (0 <= 리턴값 < 1)
// Math.floor(Math.random() * 6 + 1)    => 이 계산식의 값은 1, 2, 3, 4, 5, 6 중의 하나이다.

for (let i = 0; i < 20; ++i) {
    let a = Math.floor(Math.random() * 6 + 1);
    console.log(a);
  }  