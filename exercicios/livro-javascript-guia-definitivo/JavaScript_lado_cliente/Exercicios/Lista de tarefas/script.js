

const input = document.querySelector('input');
input.focus();
const button = document.querySelector('button');
const ul = document.querySelector('ul');
const validacao = document.querySelector('.validacao');
const listaVazia = document.querySelector('.listaVazia');

button.onclick = function(){
    
    const inputValue = input.value;
    if(input.value !== ""){
        let newLi = document.createElement("li");     
        newLi.textContent = inputValue;
        newLi.classList.add('buttonsStyle');
        ul.appendChild(newLi);
        validacao.classList.remove('ativo');
        input.value = '';
        input.focus();
        
    }else{
        validacao.classList.add('ativo');
    }
    
    
    renderizarLista();
}


function renderizarLista(){
    const arrayItens = document.querySelectorAll('li');
    arrayItens.forEach(item => {item.onclick = ()=>{
        
        item.remove();
        renderizarLista();

    }})
    if(arrayItens.length <= 1){
        listaVazia.classList.add('ativo');
    }else{
        listaVazia.classList.remove('ativo');
    }    
    
}
renderizarLista();



