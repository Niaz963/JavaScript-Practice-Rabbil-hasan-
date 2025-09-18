class parent{

    hello1(){
        console.log('Hello 1 Function');
    }

    hello2(){
        console.log('Hello 2 Function');
    }

    
}

 
class child extends parent{

     hello1(){
        console.log('Hello 1 Function Hello 1 Function Hello 1 Function child');
    }

}

var obj=new child();
obj.hello1();


