

function tocaSom(seletorAudio){
  
    
    const elemento = document.querySelector(seletorAudio);


    if (elemento === null){
        alert('Elemento não existe :(')

   
}
    if (elemento != null){
        if (elemento.localName === 'audio'){

        elemento.play();
    }
    else{
        alert('isso nem tem audio amigo, ficou doido?')
    }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];



//template sting
const idAudio = `#som_${instrumento}`;

tecla.onclick = function(){
    tocaSom(idAudio);
}

//contador += 1;
console.log(contador);

tecla.onkeydown = function(event) {
    console.log(event.code)

   

if  (event.code == 'Space' || event.code == 'Enter'){
      tecla.classList.add('ativa');
}

}
    
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');


}


}
