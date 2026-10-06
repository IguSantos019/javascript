(function(){
    var clock = document.getElementById('clock');
    // var icon = new Image();
    // icon.src = 'clock-icon.png';

    console.log(clock)
    function displayTime(){
        var now = new Date();
        var hrs = now.getHours()
        var mins = now.getMinutes();
        var seconds = now.getSeconds();
        if(mins < 10) mins = '0' + mins;
        if(seconds < 10) seconds = '0' + seconds;
        clock.innerHTML = hrs + ':' + mins + ":" + seconds;
        setTimeout(displayTime, 1000);
    }
    displayTime();
    const textarea = document.querySelector('textarea');

    clock.draggable = true;
    clock.ondragstart = function(event){
        var event = event || window.event;
        var dt = event.dataTransfer;
        textarea.focus();
        textarea.style.backgroundColor = '#ddf';
        textarea.style.border = 'none';
        textarea.style.outline = '1px dashed black';
        dt.setData('text/plain', Date() + '\n');
        if(dt.setDragImage) dt.setDragImage(icon, 0, 0);
        
    }
    textarea.addEventListener('drop', function(){
        textarea.style.backgroundColor = '#fff'
        textarea.style.border = '1px solid black';
        textarea.style.outline = 'none';
    })

})();