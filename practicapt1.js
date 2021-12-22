let entregadas = prompt("Introduce el numero de tareas completadas");

function puntuacion(entragadas){
    if(entregadas>=0&&entregadas<=15){
        if(entregadas<=6){
            alert("Failed");
        }
        if(entregadas>6&&entragadas<=9){
            alert("Insufficient");
        }
        if(entregadas>9&&entregadas<=14){
            alert("Good");
        }
        if(entragadas==15){
            alert("Excellent");
        }
    } else{
        alert("Error");
    }

}