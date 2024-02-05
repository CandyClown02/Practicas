let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreo es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p", "Ya se sortearon todos los números posibles");
    } else {
    //Si el número generado está incluido en la lista hacemos una operación y si no hacemos otra
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número Secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar Caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    //Generar números aleatorios
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");



}

condicionesIniciales();
