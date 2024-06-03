let quantiaCavalos = document.querySelector("#quantiaCavalos");
let quantidadeFerraduras = document.querySelector("#quantidadeFerraduras");
let h3resultado = document.querySelector("#h3resultado");

function quantasFerraduras(){
    let numeroCavalos = quantiaCavalos.value;
    let conta = numeroCavalos * 4;
    h3resultado.textContent = "A quantidade de ferraduras necessária é de: " + conta;
}

quantidadeFerraduras.onclick = function(){
    quantasFerraduras();
}