
// Constructor inside only child class pass parameters



class Father {


}


class Son extends Father{

    constructor(msg) {
        super();
        console.log(msg);
    }

}


new Son("This is constructor params from Son Class");
new Father("This is constructor params from Father Class");




