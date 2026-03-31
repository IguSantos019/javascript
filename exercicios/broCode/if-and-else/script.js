let input = document.getElementById('subscribe')
let resul = document.getElementById('resul')
document.getElementById('botao').onclick = function(){
    if (input.checked){
        resul.textContent = 'Valeu meu truta'
    }else {
        resul.textContent = 'Se inscreve porra'
    }
}