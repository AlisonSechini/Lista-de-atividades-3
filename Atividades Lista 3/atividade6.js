let pesoPrato = document.querySelector("#pesoPrato");
let btResultado = document.querySelector("#btResultado");
let h3resultado = document.querySelector("#h3resultado");

function precoFinal(){
    let preçoKg = 12.00
    let peso = pesoPrato.value;
    let resultado = preçoKg * peso;
    h3resultado.textContent = "O valor do almoço será de " + resultado + " reais";
}

btResultado.onclick = function(){
    precoFinal();
}