//If...Else

function validarEdad(edad) {
  if (confirm("¿Estas de acuerdo con continuar?")) {
    console.log("Sigue bajo tu propio riesgo");
    if (edad >= 18 && edad <= 150) {
      console.log("Puedes entrar al putero");
    } else if (edad > 150) {
      console.log("Saludame a cepillin");
    } else if (edad >= 0) {
      console.log("Tas chiquito...");
    } else {
      console.log("Ah caray no existes!");
    }
  } else {
    console.log("Que miedoso ...🤣");
  }
}

let edad = prompt("Introduce tu edad");
if (edad && !isNaN(edad)) {
  validarEdad();
} else {
  alert("Debes introducir tu edad");
  location.reload();
}

//===========================================

//Switch
edad = Number(edad);
switch (edad) {
  case 13:
    console.log("Deberias estar en la secundaria.");
    break;
  case 17:
    console.log("Amo tu inocencia.");
    break;
  default:
    console.log("Nice!");
}

//===========================================

//While
let boletosDisponibles = 100;

while (boletosDisponibles > 0) {
  console.log("Boleto comprado.");
  boletosDisponibles--;
  console.log("Quedan: " + boletosDisponibles);
  console.log("______________________________________");
}

//Do While
do {
  console.log("Boleto comprado.");
  boletosDisponibles--;
  console.log("Quedan: " + boletosDisponibles);
  console.log("______________________________________");
} while (boletosDisponibles > 0);


//===========================================

//try catch finally */

/* try{
    balidaredad(edad);
    throw                                        //crea uyna excepcion
}catch(error){                                  //obtiene los errores del try
    console.error(error);   //da el error
    console.info("Validar edad no existe");    //da un mensaje en consola con error personalizado
}finally{                                       //AUN CON ERROR CORRE este codigo
    console.warn('Holi!!! =)');
}        */                                 