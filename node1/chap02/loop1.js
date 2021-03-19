// 반복문에서 break, continue는 java 문법과 동일하다
let i = 0;

for (;;) {
    ++i;
    if (i % 2 == 1) continue;
    console.log(i);
    if (i >= 20) break;
}