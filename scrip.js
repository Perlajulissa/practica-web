function valida(){
    let nombre =document.getElementById("nombre").value;
    let direccion =document.getElementById("direccion").value;
    let telefono =document.getElementById("telefono").value;
    let tipo_comida =document.getElementById("tipocomida").value;
    let radios =document.getElementsByName("pedido");
    let valoradio  ="";

    for (let a=0; a<radios.length;a++){
        if (radios[a].checked){
            valoradio=radios[a].value;
        
        }
    console.log("Nombre : " + nombre + "+" + "Direccion : " + direccion + "+" + "telefono : " + telefono + "+" + "Tipo_comida : " + tipo_comida + "+" + "Confimacion_pedido : " + valoradio);
    }
}

function limpiar(){
    document.getElementById("nombre").value ="";
    document.getElementById("direccion").value ="";
    document.getElementById("telefono").value ="";
    document.getElementById("tipocomida").value ="";
    let radios =document.getElementsByName("pedido");
   

    for (let a=0; a<radios.length;a++){
        if (radios[a].checked){
            radios[a].checked =false;
           
        
        }
    
    }
}