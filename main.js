//declaração/criando função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}


//referência constante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0;contador < listaDeTeclas.lenght;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(){
        if(evento.code === 'Space' || evento.code === 'Enter'){
           tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}