let precoGasolina = document.querySelector("#precoGasolina");
let valorPago = document.querySelector("#valorPago");
let btResultado = document.querySelector("#btResultado");
let h3resultado = document.querySelector("#h3resultado");

function litrosGasolina(){
    let valorGasolina = precoGasolina.value;
    let quantiaReais = valorPago.value;
    let resultado =  quantiaReais / valorGasolina;
    h3resultado.textContent = "Com os valores informados, é possível abastecer " + resultado + " litros";
}

btResultado.onclick = function(){
    litrosGasolina();
}