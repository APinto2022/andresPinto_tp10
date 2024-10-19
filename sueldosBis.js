const prompt = require("prompt-sync")({ sigint: true });

// Este código le permite calcular el nuevo sueldo a un trabajador
console.log("* * * Bienvenido al sistema de calculo de su nuevo sueldo * * *");


let nombre = prompt("Por favor ingrese su nombre ");

let apellido = prompt("Por favor ingrese su apellido ");


let sueldoActual = parseInt(prompt("Por favor ingrese su Sueldo Actual "));


(sueldoActual<33000)? porcentajeAumento=25: porcentajeAumento=15;

let calculoAumento=(sueldoActual*porcentajeAumento)/100;
let nuevoSueldo=(`${sueldoActual+(sueldoActual*(porcentajeAumento/100))}`);
console.log(`Hola estimado ${nombre} ${apellido}, su sueldo actual es de $ ${sueldoActual}, has recibido un aumento del ${porcentajeAumento} %: $ ${calculoAumento}, y su nuevo sueldo es de $ ${nuevoSueldo}`)


console.log("* * * Fin Del Programa * * *");
/*
Hola, estimad@ Fulano Mengano
En base a su sueldo actual: $20000
Ha recibido un aumento del 25%: $5000
y su nuevo sueldo es de: $25000
*/

