const initApp = () => {
    var contents = document.querySelectorAll('.contents');
    const regexp = /\bdnd\b/;
    for(var i = 0; i < contents.length; i++){
        if(regexp.test(contents[i].className)){
            dragAndDrop(contents[i]);
        }
    }

    

    function dragAndDrop(content){
        var cards = content.querySelectorAll('.card');

        for(var i = 0; i < cards.length; i++){
            if(cards[i] === cards[0]){
                cards[i].style.marginTop = '15px';
            }
            cards[i].draggable = true;
            
        }
        cards.forEach(card => {
            card.addEventListener('click', function(){
                card.contentEditable = true;
            })
        })

        
        console.log(content);
        const prevents = e => e.preventDefault();
        const active = () => {content.classList.add('dropActive')};
        const inactive = () => {content.classList.remove('dropActive')};


        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evtName => {
            content.addEventListener(evtName, prevents);
        });
        ['dragenter', 'dragover'].forEach(evtName => {
            content.addEventListener(evtName, active);
        });
        ['dragleave', 'drop'].forEach(evtName => {
            content.addEventListener(evtName, inactive);
        });

        
        const handleStart = (e) => {
            const dt = e.dataTransfer;
            const target = e.target;
            if(target.className !== "card") return false;
            dt.setData('Text/plain', target.innerText || target.textContent);
            dt.effectAllowed = 'move';
        };

        const handleDrop = (e) => {
            const dt = e.dataTransfer;
            const target = e.target;
            var text = dt.getData('text');

            if(text){
                var card = document.createElement('div');
                card.classList.add('card');
                card.appendChild(document.createTextNode(text));
                
                target.appendChild(card);                

                card.draggable = true;
                textCard.addEventListener('click', function(){
                    card.contentEditable = true;
                })

            }
            
            
            const addBtns = document.querySelectorAll('.btnAdd');
            addBtns.forEach(btn => {
                btn.addEventListener('click', function(e){
                    const card = document.createElement('div');
                })
            })
        };


        const handleEnd = (e) => {
            const dt = e.dataTransfer;
            const target = e.target;
            if(dt.dropEffect == 'move'){
                target.parentNode.removeChild(target);
            }

        }



        content.addEventListener('dragstart', handleStart);
        content.addEventListener('drop', handleDrop);
        content.addEventListener('dragend', handleEnd);

    }
    

}
document.addEventListener('DOMContentLoaded', initApp);