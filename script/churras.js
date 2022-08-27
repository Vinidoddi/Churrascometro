// Carne -400 gr por pessoa +de 6 hrs - 650 gr
// Cerveja -1200 ml por pessoa + de 2000 ml
// Refirgerante/Água -1000 ml por pessoa + 6 1500ml

//Crianças valem por 0,5
 let inputAdultos = document.getElementById("adultos");
 let inputCrianças = document.getElementById("criancas");
 let inputDuração = document.getElementById("duracao");

 let resultado = document.getElementById("resultado");

 function calcular(){
    console.log("Calculando...")
 }
 function linguicaPP (duracao){
    if (duracao >=6){
        return 200;
    }
    else{
        return 300;
    }
 }


function carnePP (duracao){
   if (duracao >= 6) {
       return 650;
   }
   else {
       return 400;
   }
}
function cervejaPP (duracao){
   if (duracao >= 6) {
       return 2000;
   }
   else {
       return 1200;
   }
}
function bebidasPP (duracao){
   if (duracao >= 6) {
       return 1500;
   }
   else {
       return 1000;
   }
}   

 function calcular() {
   let adultos = inputAdultos.value;
   let criancas = inputCrianças.value;
   let duracao = inputDuração.value;
        



    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    let qtdTotalLinguica = linguicaPP(duracao) * adultos + (linguicaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalLinguica / 1000}kg de Linguiça</p>`
    resultado.innerHTML += `<p>${qtdTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)}Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)}pet's de 2lt de Bebidas</p>`  

 }
 
