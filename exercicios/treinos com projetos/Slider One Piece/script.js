
//pegar os botoes
const btnAnt = document.querySelector('#ant');
const bntProx = document.querySelector('#prox');


let listaImagens = document.querySelectorAll('img');
console.log(listaImagens)
let contador = 0;
bntProx.addEventListener('click', function(){
    //pegar as imagens
    document.querySelector('img.ativo').classList.remove('ativo');
    
    if(contador < 2){
        contador++
    }else{
        contador = 0;
    }
    
    // listaImagens[contador - 1].classList.remove('ativo');
    listaImagens[contador].classList.add('ativo');
})

btnAnt.addEventListener('click', function(){
    //pegar as imagens
    document.querySelector('img.ativo').classList.remove('ativo');
    
    if(contador > 0){
        contador--;
    }else{
        contador = 2;
    }
    // listaImagens[contador + 1].classList.remove('ativo');
    listaImagens[contador].classList.add('ativo');


})