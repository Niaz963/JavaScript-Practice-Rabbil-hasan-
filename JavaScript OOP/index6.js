// ক্লাস রি-ডিক্লেয়ার করার খুটি-নাটি
// A class can be declared once only. if we try to declare class more than one time, it throws an error.

/*
class Person{

    num1=100
    num2=20;

    addTowNum(){
        return this.num1+this.num2;
    }
}

class Person{

    num1=10
    num2=20;

    addTowNum(){
        return this.num1+this.num2;
    }
}

let PersonObj= new Person();

console.log(PersonObj.num1);

*/

//Another way to define a class is by using a class expression.


let Person = class {

    num1=100
    num2=200;

    addTowNum(){
        return this.num1+this.num2;
    }
}

let Person = class {

    num1=1
    num2=2;

    addTowNum(){
        return this.num1+this.num2;
    }
}

let PersonObj= new Person();

console.log(PersonObj.num1);