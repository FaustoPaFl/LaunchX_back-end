const parrafoInicial = document.getElementById("parrafoInicial");

parrafoInicial.onclick = function(){
    cambiaColorAleatorio()
};

function cambiaColorAleatorio(){

    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ]

    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length) ];
};