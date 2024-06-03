let nomePessoa = document.querySelector("#nomePessoa");
let idadePessoa = document.querySelector("#idadePessoa")
let btResultado = document.querySelector("#btResultado");
let h3Resultado = document.querySelector("#h3Resultado");

function tempoVida(){
    let nome1 = nomePessoa.value;
    let idade1 = idadePessoa.value;
    let resultado = idade1 * 365;
    h3Resultado.textContent = nome1 + "," + " você já viveu " + resultado + " dias";
}

btResultado.onclick = function(){
    tempoVida();
}