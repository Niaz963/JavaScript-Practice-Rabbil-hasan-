class parent{

    hello1(){
        console.log('Hello 1 Function');
    }

    hello2(){
        console.log('Hello 2 Function');
    }

    
}

 
class child extends parent{

}

var obj=new parent();
obj.hello1();
obj.hello2();

