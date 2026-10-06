let container = document.getElementById('container');

let x = 0;
let y = 0;
const scrollPixels = 10;

let teclaAtual = null



window.addEventListener('keydown', function(event){
    teclaAtual = event.key;
    container.textContent = '😠';
    container.style.backgroundColor = 'rgb(252, 104, 104)';

    if(teclaAtual.startsWith('Arrow')){
        
        switch(teclaAtual){
            case 'ArrowUp':
                y -= scrollPixels;
                break;
            case 'ArrowDown':
                y += scrollPixels;
                break;
            case 'ArrowRight':
                x += scrollPixels;
                break;
            case 'ArrowLeft':
                x -= scrollPixels;
                break;
        }
        container.style.top = `${y}px`;
        container.style.left = `${x}px`;
        console.log(teclaAtual)
    }
})
window.addEventListener('keyup', function(){
    container.textContent = '😁';
    container.style.backgroundColor = 'lightblue';


    teclaAtual = null
})