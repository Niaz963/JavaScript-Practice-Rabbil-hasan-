// স্ট্যাটিক প্রপার্টি কিভাবে কাজ করে



class Father {

    static greetParent(){
        return 'Hello, I am the Father';
    }

}


class Son extends Father{

    greetChild(){
        return 'Hello, I am the Son';
    }

}

console.log(Father.greetParent());
console.log(Son.greetParent());




