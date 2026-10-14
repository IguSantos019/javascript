
(function(){
    
    const divLista01 = document.querySelector('#lista01');
    const button01 = divLista01.querySelector('button');    
    button01.addEventListener('click', criarItem);

    function criarItem(){
        var ul01 = divLista01.querySelector('ul');
        var item = document.createElement('li');
        item.contentEditable = true;
        item.draggable = true;
        ul01.appendChild(item);
        item.focus();
    }


    const divsListas = document.querySelectorAll('.lista');
    divsListas.forEach(div => {
        div.ondragenter = function(event){
            div.style.border = '2px dashed black';
        }
        div.ondragleave = function(){
            div.style.border = 'none';
        }
        div.ondragover = function(event){
            event.preventDefault();
        }
        div.ondrop = function(event){
            
            div.style.border = 'none';
            event.preventDefault();
            div.appendChild(item);
        }
    })
})();