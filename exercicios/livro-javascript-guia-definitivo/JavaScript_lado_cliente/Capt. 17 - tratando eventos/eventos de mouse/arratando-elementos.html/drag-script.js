function getScrollOffsets(w){
    w = w || window;

    if(w.pageXOffset != null) return {x: w.pageXOffset, y: w.pageYOffset};

    var d = w.document;
    if(document.compatMode === 'CSS1Compat')  
        return {x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop};

    return {x: d.body.scrollLeft, y: d.body.scrollTop};

}

function drag(elementToDrag, event){
    //Posição do mouse convertida em coordenadas
    var scroll = getScrollOffsets();
    var startX = event.clientX + scroll.x;
    var startY = event.clientY + scroll.y;

    var origX = elementToDrag.offsetLeft;
    var origY = elementToDrag.offsetTop;

    var deltaX = startX - origX
    var deltaY = startY - origY

    document.addEventListener('mousemove', moveHandler, true);
    document.addEventListener('mouseup', upHandler, true);

    event.stopPropagation();
    event.preventDefault();


    function moveHandler(e){

        var scroll = getScrollOffsets();
        elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + 'px';
        elementToDrag.style.top = (e.clientY + scroll.y - deltaY) + 'px';

        e.stopPropagation();

    }
    function upHandler(e){
        

        document.removeEventListener('mouseup', upHandler, true);
        document.removeEventListener('mousemove', moveHandler, true);

        e.stopPropagation();
    }
}