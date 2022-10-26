const precioRemeras = 1000;
const precioBuzos = 1500;
const precioGorras = 800;

const precioLocal = 0;
const precioDomicilio = 500;
const precioPuntomedio = 300;

let flag;
let remeras = "remeras";
let enviodomicilio = "envio a domicilio"

let total = 0;
let opcionErrorRopa = false;
let opcionErrorEnvio = false;

function saludar(nombre) {
    alert("Hola, Bienvenido a keniweers")
} 
saludar("Bienvenido a Keniweers")



do {
    let ropaAcomprar;
 if (!opcionErrorEnvio) {
    const ropaAcomprar = prompt (`ingrese la opcion de productos que quiere comprar
     1. ${remeras}
     2. Buzos
     3. Gorras
     4. nada
    `); 
switch (ropaAcomprar) {
    case `1`:
     total = total + precioRemeras;
         break;

    case `2`:
     total = total + precioBuzos;
        break;

    case `3`:
     total = total + precioGorras;
        break;

    case `4`:
        break;
    
    default:
     opcionErrorRopa = true;
        break;
 }
  opcionErrorEnvio = false
  if (opcionErrorRopa){
    alert("ingrese una opcion valida")
    opcionErrorRopa = false;
    flag = `N`;
    continue;
 }
} 
 
 
   
const metodoEnvio = 
prompt ("como va a querer recibir su producto \n1. Retiro en local \n2. "+
 enviodomicilio+ 
" \n3. Punto medio del local y mi domicilio \n4. nada"
);

switch (metodoEnvio) {
    case `1`:
     total = total + precioLocal;
         break;

    case `2`:
     total = total + precioDomicilio;
        break;

    case `3`:
     total = total + precioPuntomedio;
        break;

    case `4`:
        break;
    
    default:
     opcionErrorEnvio = true;
        break;
}
if (opcionErrorEnvio){
    alert("ingrese una opcion valida")
    flag = `N`;
    continue; 
}

console.log ("ropaAcomprar", ropaAcomprar);
console.log ("metodoEnvio", metodoEnvio);
if (ropaAcomprar == 4 && metodoPago == 4){
    break;
}
flag = prompt ("quiere pedir otra prenda? Y/N");
console.log ("flag", flag);

} while (flag != `N` );


console.log("total", total);















