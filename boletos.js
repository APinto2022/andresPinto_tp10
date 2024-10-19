const prompt = require("prompt-sync")({ sigint: true });

console.log(
  "* * * * * Bienvenido al Sistema de informaciòn de Boletos  * * * * *"
);
// Este programa ingresa sus datos al sistema, y le permite hacer consultas

//variable de tipo String
let nombre = prompt("Por favor ingrese su nombre ");

//variable de tipo String
let apellido = prompt("Por favor ingrese su apellido ");

//variable de tipo String (aunque sea un numero, no se operarà con èl)
let edad = prompt("Por favor ingrese su edad en numeros ");

//variable de tipo String (aunque sea un numero, no se operarà con èl)
let numTelefono = prompt("Por favor ingrese su numero de telèfono ");

//variable de tipo booleana, inicia en false, para que deba validarse el true.
let esSocio = false;

//variable de tipo String (aunque sea un numero, no se operarà con èl)
let fechaDelPartido = " ";

//variable de tipo String (aunque sea un numero, no se operarà con èl)
let horaDelPartido = " ";

//variable de tipo String (aunque sea un numero, no se operarà con èl)
let numSilla = 90;

//variable de tipo Float
let precioDelBoleto =10;

// Aqui se listan las principales variables usadas y se declara su tipo
console.log("La variable ", nombre, "es de tipo ", typeof nombre);
console.log("La variable ", apellido, "es de tipo ", typeof apellido);
console.log("La variable ", parseInt(edad), "es de tipo ", typeof (parseInt(edad)));
console.log("La variable ", parseInt(numTelefono), "es de tipo ", typeof parseInt(numTelefono));
console.log(`La variable  ${numSilla} es de tipo ` + typeof (parseInt(numSilla)));
console.log(`La variable  ${precioDelBoleto} es de tipo ` + typeof (parseInt(precioDelBoleto)));
console.log("Su nombre es * *", nombre, "* * y su apellido es * *", apellido," * *");

//Aqui se le pregunta al usuario si tiene alguna consulta
let ofrecerInfo = prompt("Quieres consultar algun dato? si/no ");
let consulta;
//Con un operador ternacio, si el usuario tiene alguna consulta, le pregunto "Cual"
ofrecerInfo == "si"
  ? (consulta = prompt("Cual dato? "))
  : console.log("* Gracias por su consulta *");
//En caso negativo, lo despido
if (ofrecerInfo === "no") return;

//Aqui el usuario elije su consulta en una lista de opciones y recibe una respùesta segùn el caso
switch (consulta) {
  case nombre:
    console.log(`Su nombre es ${nombre}`);
    break;

  case apellido:
    console.log(`Su apellido es ${apellido}`);
    break;

  case edad:
    console.log(`Su edad es ${edad}`);
    break;

  case numTelefono:
    console.log(`Su telefono es ${numTelefono}`);
    break;

  default:
    console.log("No he entendido su consulta. Por favor intente nuevamente");
    break;
}
//fin del programa
console.log(" * * * Fin del Programa * * * ");

/*
No funcionò
let datos = [
  nombre,
  apellido,
  edad,
  numTelefono,
  esSocio,
  fechaDelPartido,
  horaDelPartido,
  numSilla,
  precioDelBoleto,
];

console.log("Aqui tienes un resumen de la informaciòn de las variables de este programa: ")
for (let i = 0; i < datos.length; i++) {
    console.log(`La variable ${datos[i]} es de tipo`)
    console.log(typeof(datos[i]))
}
*/
