let btCalculo = document.getElementById("btCalculo");
let dataIni = document.getElementById("dataIni");
let dataFim = document.getElementById("dataFim");
let h3Result = document.getElementById("h3Result")

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function contdorDeDias() {
  let date_ini1 = new Date(dataIni.value);
  let date_end1 = new Date(dataFim.value);

  let calculoDias = date_end1.getTime() - date_ini1.getTime();

  let divisaoDias = Math.floor(calculoDias / day);

  h3Result.textContent = divisaoDias + "dias";
}


btCalculo.onclick = function (){
    contdorDeDias()
}