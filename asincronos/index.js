//Ejemplo de proceso asincrono

https = require("http");

console.log("Hola");
https.get("http://httpstat.us/200", (res) => {
  console.log(`La API devolvio: ${res.statusCode}`);
});

console.log("Adios");
 

//ejemplo de proceso con tiempo de esperao ,hilo asincrono (o timeout )

/* setTimeout(()=> {
    console.log('Me has esperado <3');
}, 2000); */