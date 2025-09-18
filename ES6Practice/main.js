class parent{

    hello1(){
        console.log('Hello 1 Function');
    }

    hello2(){
        console.log('Hello 2 Function');
    }

    
}

 
class child extends parent{

     demo(){
        super.hello1();
        super.hello2();
    }

}

var obj=new child();
obj.demo();


