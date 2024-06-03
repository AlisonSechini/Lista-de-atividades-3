let diametroPizza = document.querySelector("#diametroPizza");
let btRaio = document.querySelector("#btRaio");
let h3resultado = document.querySelector("#h3resultado");

function raioPizza(){
    let diaPizza = diametroPizza.value;
    let resultado = diaPizza / 2;
    h3resultado.textContent = "O raio da pizza é de " + resultado + " centímetros"
}

btRaio.onclick = function(){
    raioPizza();
}