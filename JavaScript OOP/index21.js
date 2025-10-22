// Encapsulation Using ES6 Classes


class createCounter{

        #count = 0

        increment(){
            this.#count++
        }

        decrement(){
            this.#count--
        }
        getCount(){
            return this.#count
        }

}

let counter=new createCounter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.getCount())







