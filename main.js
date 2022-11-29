
let mensajeBienvenida = "Encontra el Plan de Salud ideal para vos!";
alert(mensajeBienvenida);

let nombreCliente = prompt("Ingrese por favor su nombre:");
console.log(nombreCliente);

let edad = parseInt(prompt("ingrese por favor su edad"));

if(edad < 18) {
    alert("Debes ingresar a la cobertura con un mayor de edad");
}else if (edad >= 18 && edad <= 59) {
    alert("Contanos más sobre quienes tendrian el servicio!");
}else while (edad >= 60  ) { 

alert("Lo sentimos por el momento no contamos con opciones disponibles!")  
    ;
}
console.log (edad)

let sumaConyugue = parseInt(prompt("queres agregar a tu pareja? indicanos su edad Aquí"))
while (sumaConyugue>=60){
    alert("lo sentimos no tenemos opciones disponibles")
}
let sumaHijos= parseInt(prompt("Tenes Hijos a tu cargo? cuantos?"))

const precioHijogenesis= 1000
let  precioTitular= (edad<=25)==2000
let  precioTitular2grupo= (edad<=26)==3000


function pagaxHijos(){
    return precioHijogenesis * sumaHijos
}

let valorPagar=pagaxHijos();
console.log (valorPagar)

alert(valorPagar)






