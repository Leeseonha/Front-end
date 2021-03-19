// random - 난수 메소드
// Math.random 메소드는, 0 보다 크거나 같고, 1보다 작은 난수를 리턴한다. (0 <= 리턴값 < 1)
// Math.random() * (MAX - MIN + 1) + MIN    => 이 계산식의 값은 MIN 보다 크거나 같고, MAX 보다 작거나 같은 정수들 중의 하나이다.

const MAX = 5, MIN = 2;

for (let i = 0; i < 20; ++i) {
  let a = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  console.log(a);
}