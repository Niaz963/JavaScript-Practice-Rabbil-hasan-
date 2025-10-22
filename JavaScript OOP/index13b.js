// ইনহেরিটেন্স কি | কিভাবে কাজ করে
// Constructor inside only parent class
// Constructor inside only parent class pass parameters--->Done

// Constructor inside only child class
// Constructor inside only child class pass parameters

// Constructor inside only parent & child class
// Constructor inside only parent & child class pass parameters


class Father {

    constructor(msg) {
        console.log(msg)
    }


}


class Son extends Father{

}

new Father("This is  Constructor params from Father Class");
new Son("This is Constructor params from Son Class");




