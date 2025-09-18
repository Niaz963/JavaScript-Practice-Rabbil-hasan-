function Calculation(a,b,...numbers){
    let sum=0;
    
    for(let i of numbers){
        sum=sum+i;
    }

    console.log(sum);
}

Calculation(10,20,1,2,3,4)