let camisaPequena = document.querySelector("#camisaPequena")
let camisaMedia = document.querySelector("#camisaMedia");
let camisaGrande = document.querySelector("#camisaGrande");
let btResultado = document.querySelector("#btResultado");
let h3resultado = document.querySelector("#h3resultado")

function quantiaArrecadada(){
    let valorPequena = 10
    let valorMedia = 12
    let valorGrande = 15

    let camPequena = camisaPequena.value;
    let camMedia = camisaMedia.value;
    let camGrande = camisaGrande.value;

    let arrecadacao = (valorPequena * camPequena) + (valorMedia * camMedia) + (valorGrande * camGrande);
    h3resultado.textContent = "O valor arrecadado com a venda das camisa é de " + arrecadacao + " reais";
}

btResultado.onclick = function(){
    quantiaArrecadada();
}