(function(){
    const btnAnt = document.querySelector("#ant")
    const btnProx = document.querySelector("#prox")

    var contador = 0;
    
    var pixelsHr = 125;
    var backHr = document.querySelector(".backHr");
    
    var step = document.querySelectorAll('.step')
    
    

    btnProx.addEventListener('click', function(){
        contador++



        if(contador <= step.length - 1){
            backHr.style.transform += `translateX(${pixelsHr}px)`
        }else{
            contador = step.length - 1;
        }
        if(contador == step.length - 1){
            btnProx.disabled = true;
        }
        step[contador].classList.add('checked');
        
        if(contador > 0){
            btnAnt.disabled = false;
        }
        console.log(step.length)
        
    })
    btnAnt.addEventListener('click', function(){
        contador--
        if(contador == 0){
            btnAnt.disabled = true;
        }
        if(contador < step.length - 1){
            btnProx.disabled = false;
            
        }
        if(contador >= 0){
            backHr.style.transform += `translateX(-${pixelsHr}px)`
        }else{
            contador = 0;
            
        }
        step[contador + 1].classList.remove('checked');
    })
})();