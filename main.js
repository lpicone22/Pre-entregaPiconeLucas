let mensajeBienvenida = "Encontra el Plan de Salud ideal para vos!";
alert(mensajeBienvenida);

let nombreCliente = prompt("Ingrese por favor su nombre:");
console.log(nombreCliente);

let edad = parseInt(prompt("ingrese por favor su edad"));

if(edad < 18) {
    alert("Debes ingresar a la cobertura con un mayor de edad");
}else if (edad >= 18 && edad <= 59) {
    alert("Contanos más sobre quienes tendrian el servicio!");
}else if(edad > 60 ) {
    alert("Lo sentimos por el momento no contamos con opciones disponibles!");
}
console.log (edad)
