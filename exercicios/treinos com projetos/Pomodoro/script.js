

button = document.querySelector('.startStop')

timer = null;
minutos = 24;
segundos = 60;

button.addEventListener('click', function(){
    if(timer === null){
        iniciarPomodoro();
        button.textContent = "Stop";
    }else{
        clearInterval(timer);
        timer = null;
        button.textContent = "Start";
    }
    
})
const buttonSelecionarTempo = document.querySelector('.ChoicePomodoroTime button');
select = document.querySelector('select');
buttonSelecionarTempo.addEventListener('click', function(){
    minutos = select.value - 1;
    segundos = 60
    document.querySelector('p').innerHTML = minutos + 1 + ':00';
    
})

function iniciarPomodoro(){
    
    const p = document.querySelector('.numberPomodoro');
    
    if(timer !== null) return;
    
    timer = setInterval(() => {
        segundos--
        if(segundos < 0){
            segundos = 59;
            minutos = minutos - 1;
        }
        if(segundos <= 9 ){
            p.innerHTML = `${minutos}:0${segundos}`
        }else{
            p.innerHTML = `${minutos}:${segundos}`
            
        }
    }, 1000);
}

const buttonReset = document.querySelector('.reset');
buttonReset.addEventListener('click', function(){
    clearInterval(timer)
    if(timer === null){

    }else{
        clearInterval(timer);
        timer = null;
        button.textContent = "Start";
    }
    segundos = 60
    document.querySelector('p').innerHTML = minutos + 1 + ":00"
})



const buttonSettings = document.querySelector('.settings');
buttonSettings.addEventListener('click', function(){
    const card = document.querySelector('.card');

    if(card.classList.contains('ativo') === true){
        card.classList.remove('ativo');
    }else{
        card.classList.add('ativo');
        
    }

})



document.querySelector(('.buttonCloseSettings')).onclick = ()=>{
    const card = document.querySelector('.card');
    card.classList.remove('ativo');
    
}
