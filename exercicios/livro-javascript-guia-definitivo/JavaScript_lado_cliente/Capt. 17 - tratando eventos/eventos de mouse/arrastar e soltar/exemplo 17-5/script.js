(function(){
    var lists = document.getElementsByTagName('ul');
    var regexp = /\bdnd\b/;
    for(var i = 0; i < lists.length; i++){
        if(regexp.test(lists[i].className)) dnd(lists[i]);
    }

    function dnd(list){
        var originalClass = list.className;
        var entered = 0;

        list.ondragenter = function(e){
            e = e || window.event;
            var from = e.relatedTarget;
            entered++
            if((from && !ischild(from, list)) || entered ==1){
                
                var dt = e.dataTransfer;

                var types = dt.types;

                if(!types ||
                    (types.contains && types.contains("text/plain")) ||
                    (types.indexOf && types.indexOf("text/plain")!= -1)
                ){
                    list.className = originalClass + "droppable"
                    return false;
                }
                return;
            }
            
        
        }
    }
})();