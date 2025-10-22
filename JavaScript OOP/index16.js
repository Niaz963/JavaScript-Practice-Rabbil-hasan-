// ওভারলোডিং কি | কিভাবে কাজ করে

/*
- OOP like Java or C++, method overloading allows.
- JavaScript has no direct support for method overloading.
- Yet, you can simulate method overloading by examining the number of arguments
 */


class MyClass {

    myMethod(p1,p2,p3){
       if (arguments.length===1){
           console.log('Received one argument:', p1);
       }
       else if (arguments.length===2){
           console.log('Received two arguments:', p1 , p2);
       }
       else if (arguments.length===3){
           console.log('Received two arguments:', p1 , p2 , p3);
       }
    }

}


let Obj = new MyClass();
Obj.myMethod(1)
Obj.myMethod(1,2)
Obj.myMethod(1,2,3)




