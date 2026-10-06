
window.onload = function(){
    const hrBack = document.querySelector('.hr-back');
    hrBack.classList.add('ativa');

    const p = document.querySelector('p');
    let percentStage = 0;
    loadingPercent = setInterval(function(){
        percentStage++
        p.innerHTML = percentStage + '%';
        if(percentStage == 100){
        clearInterval(loadingPercent);
    }
    }, 30)
    
    
}