let numA = parseInt(prompt("Ingresa numero"));

divisible(numA);

function divisible(a){
    if(a%9==0||a%4==0){
      alert("verdadero");
    }else{
      alert("Falso");
    }
  }
