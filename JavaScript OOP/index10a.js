// গেটার সেটার কি | কিভাবে কাজ করে


class Product {

    set SetPrice(value){
        this.price = value;
    }


    get GetPrice(){
        return this.price;
    }


}

let Productobj=new Product();
Productobj.SetPrice=100;
console.log(Productobj.GetPrice);



