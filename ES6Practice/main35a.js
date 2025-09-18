class MyClass{

    constructor(a,b){
        this.firstNum=a
        this.secondNum=b
     
    }

    add(){
        let result = this.firstNum + this.secondNum;
           console.log(result);
    }
}

var obj = new MyClass(10,20);

obj.add();