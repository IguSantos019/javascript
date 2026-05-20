var book = {
    "main title": "JavaScript",
    'sub-title': "The Definitive Guide",
    "for": "all audiences",
        author: {
            firstname: "David",
            surname: "flanagan"
        }
}

var o1 = Object.create({x:1, y:2});
console.log(o1)
var o2 = Object.create(null)
console.log(o2)
var o3 = Object.create(Object.prototype)
console.log(o3)


function inherit(p){
    if(p == null) throw Error('iguinho');
    if(Object.create){
        return Object.create(p);
    }
    var t = typeof(p)
    if(t !== "object" && t !== "function") throw Error('iguinho');
    function f(){}
    f.prototype = p
    return new f();
}
var obj = ;
//{trabalho: "Garçom", local: "JK Iguatemi"}
console.log(inherit(obj));
console.log(obj)