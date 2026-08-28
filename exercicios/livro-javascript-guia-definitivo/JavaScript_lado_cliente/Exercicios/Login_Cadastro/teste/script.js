
(() => {
    // const buttons = document.querySelectorAll("[data-mensagem]");
    // buttons.forEach(button => {button.addEventListener("click", function(){
    //     const valor = button.dataset.mensagem;
    //     var p = document.querySelector("#result");
    //     p.textContent = valor;        
    // })})

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {button.addEventListener('click', function(event){
        const valor = button.dataset.mensagem;
        const valorBtn = event.target.textContent;
        document.querySelector('p').textContent = `Você clicou no ${valorBtn}, a mensagem é: ${valor}`;
    })})

})()