const lampadaApagada = document.getElementById("lampadaApagada")
const btnLigar = document.getElementById("ligar")
const btnDesligar = document.getElementById("desligar")
let lampadaQuebrada = false;

function quebrar(){
    lampadaApagada.src = "img/lampada-quebrada.jpg";
    lampadaQuebrada = true;
}

function ligar(){
    if (!lampadaQuebrada) {
        lampadaApagada.src = "/projeto-lampada/img/lampada-acesa.jpg";
    }
}

function desligar(){
    if (!lampadaQuebrada) {
    lampadaApagada.src = "/projeto-lampada/img/lampada-apagada.jpg";
    }
}

lampadaApagada.addEventListener("dblclick", quebrar);
btnLigar.addEventListener("click", ligar);
btnDesligar.addEventListener("click", desligar);
