let str1 = prompt("Escribe una palabra");
let str2 = prompt("Escribe otra palabra");

compare(str1, str2);

function compare(str1,str2){
    if(str1.toLowerCase()===str2.toLowerCase()){
        alert(true);
    }else{
        alert(false);
    }
}

