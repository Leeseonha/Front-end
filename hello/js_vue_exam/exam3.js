// Order 클래스 구현을 완성하시오.
//   생성자 파라미터는 제품, 가격, 수량이다.
//   amount 속성값은 주문 금액(가격 * 수량) 이어야 한다.

// 출력
// 900 3 2700
// 900 2 1800

class Order {
    constructor(s,i1,i2){
        this.name = s;
        this.price =i1;
        this.quantity =i2;
    }
    get amount(){
        return this.price * this.quantity;
    }

    set amount(amount){
        this.quantity = amount / this.price;
    }
}

let order1 = new Order("우유", 900, 3);
console.log(order1.price, order1.quantity, order1.amount);

order1.amount = 1800; // 주문 금액을 1800원으로 수정한다.
console.log(order1.price, order1.quantity, order1.amount);