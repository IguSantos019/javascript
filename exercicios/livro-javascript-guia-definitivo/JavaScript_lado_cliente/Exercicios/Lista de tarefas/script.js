
(()=>{
    let tarefasInp = document.querySelector('#inputTarefas');
    tarefasInp.focus();
    let ulTarefas = document.querySelector('ul');
    const button = document.querySelector('button');
    button.addEventListener('click', function(){
        ulTarefas.innerHTML = `<li> ${tarefasInp.value}</li>`
        
    });
    
})();