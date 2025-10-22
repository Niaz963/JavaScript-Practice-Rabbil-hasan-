// ওভার-রাইডিং কি | কিভাবে কাজ করে



class Father {

    addNumber(){
        let num1=10;
        let num2=20;
        console.log(num1+num2);
    }

}


class Son extends Father{



}

let FatherObj = new Father();
FatherObj.addNumber();




