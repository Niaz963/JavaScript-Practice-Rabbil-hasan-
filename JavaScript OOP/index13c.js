// ইনহেরিটেন্স কি | কিভাবে কাজ করে
// Constructor inside only parent class
// Constructor inside only parent class pass parameters

// Constructor inside only child class
// Constructor inside only child class pass parameters

// Constructor inside only parent & child class
// Constructor inside only parent & child class pass parameters


class Father {


}


class Son extends Father{

    constructor() {
        super();
        console.log('I am a constructor of Son Class');
    }

}


new Son();




