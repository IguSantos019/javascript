const initCreateCards = () => {
    
    
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        const btnsAdds = column.querySelectorAll('.btnAdd');
        btnsAdds.forEach(btn => {
            btn.addEventListener('click', handleClick);
        })
        
        function handleClick(e){
            const target = e.target;
            if(target){
                var card = document.createElement('div');
                card.classList.add('card');
                card.draggable = true;

                card.addEventListener('click', () => card.contentEditable = true);
                card.focus();

                const content = column.querySelector('.contents');
                content.prepend(card);
            }
        }
        
    })
}
document.addEventListener('DOMContentLoaded', initCreateCards);