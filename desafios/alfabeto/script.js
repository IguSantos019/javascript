focarInput = ()=>{document.querySelector('input').focus()};
focarInput();

const btnEnviar = document.querySelector('button');
const prgfAlfabeto = document.querySelector('.alfabeto');

document.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        btnEnviar.click();
    }
})

function resetar(){
    prgfAlfabeto.textContent = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
    document.querySelector('input').value = '';
}

btnEnviar.addEventListener('click', function(){
    focarInput();
    
    const divEscondido = document.querySelector('.escondido');
    const input = document.querySelector('input').value;
    if(input > 26){
        
        resetar();
        focarInput();
        divEscondido.textContent = 'Não pode ser maior do que 26'
        divEscondido.classList.add('validacaoAtivo')
        setTimeout(function(){
            divEscondido.classList.remove('validacaoAtivo')
        }, 2000)
    }else if(input <= 0){
        resetar();
        focarInput();
        divEscondido.textContent = 'Não pode ser 0 ou número negativo';
        divEscondido.classList.add('validacaoAtivo')
        setTimeout(function(){
            divEscondido.classList.remove('validacaoAtivo')
        }, 2000)
        
    }else{
        prgfAlfabeto.textContent = '';
    }
    const alfabetoArray = [null, "A", "B", "C", "D", 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var contador = 0;
    for(num in alfabetoArray){
        if(input == num){
            while(contador < input){
                contador++
                prgfAlfabeto.innerHTML += alfabetoArray[contador] + " ";
            }
        }
    }
})