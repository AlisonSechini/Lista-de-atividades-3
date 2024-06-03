let medidaUm = document.querySelector("#medidaUm");
let medidaDois = document.querySelector("#medidaDois");
let btCalculo = document.querySelector("#btCalculo");
let h3resultado = document.querySelector("#h3resultado");

function calculoRetangulo(){
    let m1 = medidaUm.value;
    let m2 = medidaDois.value;

    let resultado = (m1 * 2) + (m2 *2);
    h3resultado.textContent = "A área do terreno é de: " + resultado;
}

btCalculo.onclick = function(){
    calculoRetangulo();
}