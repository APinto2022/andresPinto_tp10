const prompt = require("prompt-sync")({ sigint: true });


console.log("* * * Bienvenido a la aplicación calculadora * * *")
console.log("Què operaciòn quieres realizar? ");

let operacion = parseInt(prompt("Escribe 1 para suma, 2 para resta, 3 para multiplicaciòn y 4 para divisiòn  ")
);

switch (operacion) {
  case 1:
    console.log(
      "Has elegido suma. A continuaciòn escribe los numeros que quieres sumar "
    );
    break;
  case 4:
    console.log(
      "Has elegido resta. A continuaciòn escribe los numeros que quieres restar "
    );
    break;
  case 3:
    console.log(
      "Has elegido multiplicacion. A continuaciòn escribe los numeros que quieres multiplicar "
    );
    break;
  case 4:
    console.log(
      "Has elegido Divisiòn. A continuaciòn escribe los numeros que quieres dividir "
    );
    break;
    
  default:
    console.log("No has elegido una opción valida. Por favor intenta nuevamente")
    return
}
let num1 = parseInt(prompt(" Ingrese un numero "));
let num2 = parseInt(prompt(" Ingrese otro numero "));

function suma(num1, num2) {
  console.log("El resultado es ", +(num1 + num2));
}

function resta(num1, num2) {
  console.log("El resultado es ", +(num1 - num2));
}

function multiplicacion(num1, num2) {
  console.log("El resultado es ", +(num1 * num2));
}

function division(num1, num2) {
  if (num2 != 0) {
    console.log("El resultado es ", +(num1 / num2));
  } else {
    console.log(
      " No es posible dividir por cero, por favor vuelva a intentar e ingrese un numero diferente a cero"
    );
  }
}

switch (operacion) {
  case 1:
    suma(num1, num2);
    break;
    case 2:
      resta(num1, num2);
      break;
  case 3:
    multiplicacion(num1, num2);
    break;
  case 4:
    division(num1, num2);
    break;
  default:
    console.log(" No he comprendido tu consulta, por favor intenta nuevamente ")
    break;
}



console.log(" * * * Fin del programa * * * ");