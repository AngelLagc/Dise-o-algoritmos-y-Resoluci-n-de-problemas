let a = parseInt(prompt("Dame un numero:"));
let b = parseInt(prompt("Dame otro numero"));
operaciones(a,b);

function operaciones(a,b){
    suma=a+b;
    alert("Suma="+suma);
    
    resta=a-b;
    alert("Resta="+resta);

    division=a/b;
    alert("Division ="+division);

    multiplicacion=a*b;
    alert("Multipicacion="+multiplicacion);

    resto=a%b;
    alert("Resuido="+resto);
   

}
