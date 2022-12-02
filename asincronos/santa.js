//Llamados con timeouts

function leerCarta(carta, callback) {
  return setTimeout(() => {
    callback(carta.split("").reverse().join(""));
  }, 2000);
}

function construirJuguete(instruccion, callback) {
  return setTimeout(() => {
    const juguete = instruccion.split("").reverse().join("");
    if (juguete.includes("madera"))
      return callback(`${juguete} de madera fina`);
    else if (juguete.includes("xbox"))
      return callback(`No te puedo amndar tu ${juguete}`);
    else return callback(`Aqui tienes tu cosa esa ${juguete}`);

    callback(juguete);
  }, 5000);
}

function envolverRegalo(juguete, callback) {
  return setTimeout(() => {
    callback(`${juguete} envuelto.`);
  }, 3000);
}

//Callback Hell
/* leerCarta("Carrito de madera", (instruccion) => {
  construirJuguete(instruccion, (juguete) => {
    envolverRegalo(juguete, console.log);
  });
}); */

//Solucion a un Callback Hell
//modularizando las llamadas haciendo funciones a parte para las llamadas

function construirJ(juguete) {
  envolverRegalo(juguete, console.log);
}

function leerC(instruccion) {
  construirJuguete(instruccion, construirJ);
}

leerCarta("carrito de madera", leerC);
