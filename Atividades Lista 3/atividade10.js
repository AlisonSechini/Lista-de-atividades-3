let tempoAcidentes = document.querySelector("#tempoAcidentes");
let btResultado = document.querySelector("#btResultado");
let h3resultado1 = document.querySelector("#h3resultado1");
let h3resultado2 = document.querySelector("#h3resultado2");
let h3resultado3 = document.querySelector("#h3resultado3");


function conversaoDias(){
    let diaAcidentes = tempoAcidentes.value;
    let resultadoAnos = diaAcidentes / 365;
    let resultadoMeses = diaAcidentes / 30;
    let resultadoDias = diaAcidentes / 24;
    h3resultado1.textContent = "A quantidade de dias sem acidente convertida para anos é de " + resultadoAnos + " anos";
    h3resultado2.textContent = "A quantidade de dias sem acidentes convertida para meses é de " + resultadoMeses + " meses";
    h3resultado3.textContent = "A quantidade de dias sem acidentes convertida para dias é de " + resultadoDias + " dias";
}

btResultado.onclick = function(){
    conversaoDias();
}