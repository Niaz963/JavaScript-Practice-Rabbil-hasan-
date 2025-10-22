// কনস্ট্রাক্টর প্যারামিটার দিয়ে কিভাবে ক্লাস প্রপার্টি চেঞ্জ করা যায়


class Person {

    num1=10;
    num2=20;

    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;

    }

    addTwoNumber(){
        return this.num1 + this.num2;
    }

}


let PersonObj= new Person(450,550);
console.log(PersonObj.addTwoNumber());

