
function enclose(content, framewidth, frameheight, contentX, contentY){
    
    framewidth = Math.max(framewidth, 50);
    frameheight = Math.max(frameheight, 50);
    contentX = Math.min(contentX, 0);
    contentY = Math.min(contentY, 0);

    var frame = document.createElement('div');
    frame.className = 'enclosure';

    frame.style.width = framewidth + 'px';
    frame.style.height = frameheight + 'px';
    frame.style.overflow = 'hidden';

    frame.style.boxSizing = 'border-box';
    frame.style.webkitBoxSizing = 'border-box';
    frame.style.MozBoxSizing = 'border-box';

    content.parentNode.insertBefore(frame, content);
    frame.appendChild(content);

    content.style.position = 'relative';
    content.style.left = contentX + 'px';
    content.style.top = contentY + 'px';


    function wheelHandler(){
        
    }
}