const initApp = function(){
    const contents = document.querySelectorAll('.contents');
    const regexp = /\bdnd\b/;
    for(var i = 0; i < contents.length; i++){
        if(regexp.test(contents[i].className)){
            dnd(contents[i]);
    }

    function dnd(contents){
        const prevents = e => e.preventDefault();
        const active = () => {column.classList.add('dropActive')};
        const inactive = () => {column.classList.remove('dropActive')};

        const cards = contents.querySelectorAll('.card');
        cards[0].style.marginTop = '15px';

        for(var i = 0; i < cards.length; i++){
            cards[i].draggable = true;
        }

        


    }
    }
}

document.addEventListener('DOMContentLoaded', initApp);