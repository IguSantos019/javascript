

var divCircle = document.querySelector('.circle');
const p = document.querySelector('p');
let teclaAtual = null;

window.addEventListener('keydown', function(event){
    teclaAtual = event.key
})
window.addEventListener('keyup', function(){
    teclaAtual = null;
})

divCircle.addEventListener('click', function(){
    if(teclaAtual){
        p.textContent = `Clicou apertando ${teclaAtual}`;

    }else{
        p.textContent = 'Clicou';
    }
})

divCircle.addEventListener('click', function(event){
    if(event.shiftKey){
        console.log(event.shiftKey);
    }
})