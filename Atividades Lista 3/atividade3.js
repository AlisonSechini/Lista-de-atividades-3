let paoFrances = document.querySelector("#paoFrances");
let paoBroa = document.querySelector("#paoBroa");
let btResultado = document.querySelector("#btResultado");
let h3Resultado = document.querySelector("#h3Resultado");
let resultado2 = document.querySelector("#resultado2");

function quantiaPao(){
    let frances = paoFrances.value;
    let broa = paoBroa.value;
    let contaFrances = frances * 0.12;
    let contaBroa = broa * 1.50
    h3Resultado.textContent = "A total em reais de pão francês e de broas vendidas é de " + (contaBroa + contaFrances) + " reais";
    let contaReajuste = (contaBroa + contaFrances) / 10;
    resultado2.textContent = "A quantidade que deve ser depositada na poupança é de " + contaReajuste + " reais"; 
}  

btResultado.onclick = function(){
    quantiaPao();
}



