
let mensajeBienvenida = "Encontra el Plan de Salud ideal para vos!";
alert(mensajeBienvenida);

let nombreCliente = prompt("Ingrese por favor su nombre:");
console.log(nombreCliente);

let edadTitular = parseInt(prompt("ingrese por favor su edad"));

if(edadTitular < 18) {
    alert("Debes ingresar a la cobertura con un mayor de edad");
}else if (edadTitular >= 18 && edadTitular <= 59) {
    alert("Contanos más sobre quienes tendrian el servicio!");
}// si es mayor de 59 años no podemos cotizarlo y se bloquea la pagina//
while (edadTitular >= 60  ) { 

alert("Lo sentimos por el momento no contamos con opciones disponibles!")  
    ;
}
console.log ("edad del titular" + edadTitular)

let edadConyugue = parseInt(prompt("queres agregar a tu pareja? indicanos su edad Aquí"))
// si es mayor de 59 años no podemos cotizarlo y se bloquea la pagina//
while (edadConyugue>=60){
    alert("lo sentimos no tenemos opciones disponibles")
}
console.log("edad de conyugue" + edadConyugue)
let agregaHijos= parseInt(prompt("tenes hijos a tu cargo? coloca la cantidad o en caso contrario colocá 0"))

/*  const precioHijogenesis= 1000

 

function pagaxHijos(){
    return precioHijogenesis * sumaHijos
}

let valorPagar=pagaxHijos();
console.log (valorPagar)

let Mensaje= ("el valor de la cobertura para tu flia es de" + valorPagar)
alert (Mensaje)*/
 


// difinicion del velor por  rango etario para el plan genesis//

let primerGrupo= (edadTitular <=25)
let segundoGrupo= (edadTitular  <=35)
let tercerGrupo = (edadTitular =36 <=54)
let cuartoGrupo = (edadTitular >=55)

class rangoEtarioAdultos {
    constructor(edades, precio ) {
    this.edades= edades;
    this.valor=precio
}
 }

 const jovenes = new rangoEtarioAdultos (primerGrupo, 11482)
 const adultos= new rangoEtarioAdultos (segundoGrupo, 16432)
 const mayores= new rangoEtarioAdultos (tercerGrupo, 19408)
 const muyMayores= new rangoEtarioAdultos (cuartoGrupo,32879)
  
 const listaPrecioGenesis=[ jovenes, adultos, mayores, muyMayores];

 console.log(listaPrecioGenesis);



 const rangoEtitular = listaPrecioGenesis.find(rangoEtarioAdultos=> rangoEtarioAdultos.edades === edadTitular)
 console.log(rangoEtitular);

 let primerGrupoC= (edadConyugue <=25)
let segundoGrupoC= (edadConyugue  <=35)
let tercerGrupoC = (edadConyugue =36 <=54)
let cuartoGrupoC = (edadConyugue >=55)

class rangoEtarioConyugue {
    constructor(edades, precio ) {
    this.edades= edades;
    this.valor=precio
}
 }

 const jovenesC = new rangoEtarioConyugue (primerGrupoC, 11482)
 const adultosC= new rangoEtarioConyugue (segundoGrupoC, 16432)
 const mayoresC= new rangoEtarioConyugue (tercerGrupoC, 19408)
 const muyMayoresC= new rangoEtarioConyugue (cuartoGrupoC,32879)
  
 const listaPrecioGenesisC=[ jovenesC, adultosC, mayoresC, muyMayoresC];

 const rangoEconyugue = listaPrecioGenesisC.find(rangoEtarioConyugue=> rangoEtarioConyugue.edades === edadConyugue)
 console.log(rangoEconyugue);

 const precioHijoGenesis= 9981


 function pagaxHijos(){
     return precioHijoGenesis * agregaHijos
 }
 
 let valorPagarHijos=pagaxHijos();
 console.log (valorPagarHijos)







 












