//declaração/criando função tocaSomPom
function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}
//chamando/invocando a função TocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//referência constante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('tecla');

//chamando a função tocaSomPom pelo item "0" da listaDeTecla
listaDeTeclas[0].onclick = TocaSomPom;

let contador = 0;
while(contador < listaDeTeclas.lenght){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTecla[contador].onclick = function(){

    }; 
    contador = contador + 1;
    console.log(contador);
}