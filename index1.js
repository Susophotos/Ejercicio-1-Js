function funcion () {
    let años = document.getElementById("edad").value ;
    if (años >= 18) {
        document.getElementById("respuesta").innerHTML= "Puede conducir";
    } else {
        document.getElementById("respuesta").innerHTML= " No Puede conducir";
        
    }
    return false;
}