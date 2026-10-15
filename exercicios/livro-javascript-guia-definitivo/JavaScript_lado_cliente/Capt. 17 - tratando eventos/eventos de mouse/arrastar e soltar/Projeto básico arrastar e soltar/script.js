
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
        div.ondragstart = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.tagName !== 'LI') return false

            var dt = e.dataTransfer;
            dt.setData('Text', target.innerText || target.textContent);
            dt.effectAllowed = 'move';

            
        };


        div.ondragenter = function(e){
            div.style.border = '2px dashed black';

            var from = e.relatedTarget;
            console.log(from);
            
        }
        div.ondragleave = function(){
            div.style.border = 'none';
        }
        div.ondragover = function(e){
            e.preventDefault();
        }
        div.ondrop = function(e){            
            div.style.border = 'none';
            
            var dt = e.dataTransfer;
            var text = dt.getData('text');

             if(text){
                var item = document.createElement('li');
                item.draggable = true;
                
                item.appendChild(document.createTextNode(text));
                div.appendChild(item);
                
                // div.className = originalClass;
                // entered = 0;
                return false;
            }
            var itemsNaLista = div.getElementsByTagName('li');
            for(var i = 0; i < itemsNaLista.length; i++){
                itemsNaLista[i].draggable = true;
                itemsNaLista[i].contentEditable = true;
            }
            

        }

        div.ondragend = function(e){
            var target = e.target;

            if(e.dataTransfer.dropEffect === 'move'){
                target.parentNode.removeChild(target);
            }
        }
    })
})();