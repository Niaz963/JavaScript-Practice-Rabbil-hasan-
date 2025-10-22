// অবজেক্ট তৈরি করা- By creating instance of Object

let person= Object();

    person.first_name="Rabbil"
    person.last_name="Hasan"
    person.age=34
    person.city="Dhaka"
    person.isBangladeshi=true


    person.getName=()=>{
            return `My full name is ${person.first_name} ${person.last_name}`;
        }


console.log(person);

