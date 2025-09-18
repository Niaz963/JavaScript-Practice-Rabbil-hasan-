function FunOne(){
  
    
    return 20;
}

function FunTwo(){
  
    
    return FunOne();
}

console.log(FunTwo());