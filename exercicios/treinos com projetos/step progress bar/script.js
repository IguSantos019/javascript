
const btnPrev = document.querySelector('#prev')
const btnNext = document.querySelector('#next')

contador = 0
linhaVerde = document.querySelector('.linhaVerde');

steps = document.querySelectorAll('.step');
btnNext.addEventListener('click', function(){
    contador++
    if(contador > 4){
        contador = 4;
    }
    if(contador >= 1){
        btnPrev.removeAttribute('disabled')
    }
    if(contador == 1){
        linhaVerde.style.transform = 'translateX(150px)'
        steps[contador].classList.add('checked');
    }else if(contador == 2){
        linhaVerde.style.transform = 'translateX(250px)'
        steps[contador].classList.add('checked');
        
    }else if(contador == 3){
        linhaVerde.style.transform = 'translateX(350px)'
        steps[contador].classList.add('checked');
    }else if(contador == 4){
        linhaVerde.style.transform = 'translateX(500px)'
        steps[contador].classList.add('checked');
    }
})

btnPrev.addEventListener('click', function(){
    contador--
    if(contador < 0){
        contador = 0;
    }
    
    if(contador >= 3){
        linhaVerde.style.transform = 'translateX(350px)'
        steps[contador + 1].classList.remove('checked');
    }else if(contador >= 2){
        linhaVerde.style.transform = 'translateX(250px)'
        steps[contador + 1].classList.remove('checked');
        
    }else if(contador >= 1){
        linhaVerde.style.transform = 'translateX(150px)'
        steps[contador + 1].classList.remove('checked');
    }else if(contador == 0){
        linhaVerde.style.transform = 'translateX(0px)'
        steps[contador + 1].classList.remove('checked');
        btnPrev.disabled = true;
    }
})