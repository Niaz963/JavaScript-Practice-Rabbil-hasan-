
// Constructor inside only parent & child class


class Father {
    constructor() {

        console.log("I am Father Constructor");
    }

}


class Son extends Father{

    constructor() {
        super();
        console.log("I am son Constructor");
    }

}

new Son();




