// ইনহেরিটেন্স কি | কিভাবে কাজ করে
// Constructor inside only parent class--->Done
// Constructor inside only parent class pass parameters

// Constructor inside only child class
// Constructor inside only child class pass parameters

// Constructor inside only parent & child class
// Constructor inside only parent & child class pass parameters


class Father {

    constructor() {
        console.log("I am a Constructor Father Class")
    }


}


class Son extends Father{

}

new Son();




