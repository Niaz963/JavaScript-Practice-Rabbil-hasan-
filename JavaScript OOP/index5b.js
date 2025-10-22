// ক্লাস তৈরি করা | ভেরিয়েবল লেখা | ফাংশন লেখা | ক্লাস থেকে অবজেক্ট তৈরি করা | প্রোপার্টি ব্যাবহার

class Person{

    first_name="Rabbil"
    last_name="Hasan"
    age=34
    city="Dhaka"
    isBangladeshi=true

    getName(){
        return `My name is ${this.first_name} ${this.last_name}`;
    }
}

let PersonObj= new Person();

console.log(PersonObj.getName());


