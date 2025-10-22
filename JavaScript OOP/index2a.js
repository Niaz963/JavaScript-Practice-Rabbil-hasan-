// অবজেক্ট তৈরি করা- By object literal
//What is Object
//How to write object using object literal


let person={
    first_name:"Rabbil",
    last_name:"Hasan",
    age:34,
    city:"Dhaka",
    isBangladeshi:true,
    getName:()=>{
        return `My full name is ${person.first_name} ${person.last_name}`;
    }
}

console.log(person.getName());

