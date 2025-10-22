
// Constructor inside only parent & child class pass parameters


class Father {
    constructor(msg_Father) {

        console.log(msg_Father);
    }

}


class Son extends Father{

    constructor(msg_Son) {
        super();
        console.log(msg_Son);
    }

}

new Father("I am parent class constructor");




