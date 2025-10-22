// স্ট্যাটিক কি-ওয়ার্ড কি | কিভাবে ব্যাবহার করে | কেন ব্যাবহার করে
//Shared Properties, Utility Functions, Memory Efficiency, Performance


class Person {

    static first_name="John"
    static last_name="Smith"


    static getName(){
        return `My name is ${this.first_name} ${this.last_name}`
    }

}

console.log(Person.first_name);
console.log(Person.last_name);
console.log(Person.getName());



