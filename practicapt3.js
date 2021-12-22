let num1 = parseInt(prompt("Dame el primer precio"));
let num2=  parseInt(prompt("Dame el segundo precio"));
let num3=  parseInt(prompt("Dame el tercer precio"));

comparar(num1, num2, num3);

function comparar(num1, num2, num3){
    if(num1>num2 && num1>num3) {
        alert(num2+" "+num3);
    }
    if(num2>num1 && num2>num3) {
        alert(num1+" "+num3);
    }
    if(num3>num1 && num3>num2) {
        alert(num1+" "+num2);
    }
}
