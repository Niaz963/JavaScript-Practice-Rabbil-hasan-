// অবজেক্ট তৈরি করা- By using an Object constructor

function Person(){

    this.first_name="Rabbil"
    this.last_name="Hasan"
    this.age=34
    this.city="Dhaka"
    this.isBangladeshi=true

    this.getName=()=>{
        return `My name is ${this.first_name} ${this.last_name}`;
    }
}

let PersonInstance= new Person();

console.log(PersonInstance.getName());


