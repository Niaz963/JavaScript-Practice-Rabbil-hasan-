// ওভার-রাইডিং কি | কিভাবে কাজ করে



class Father {

    addNumber(){
        let num1=10;
        let num2=20;
        console.log(num1+num2);
    }

}


class Son extends Father{

    addNumber(){
        let num1=100;
        let num2=200;
        console.log(num1+num2);
    }

}

let SonObj = new Son();
SonObj.addNumber();




