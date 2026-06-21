var book = {
    "main title": "JavaScript",
    'sub-title': "The Definitive Guide",
    "for": "all audiences",
        author: {
            firstname: "David",
            surname: "flanagan"
        }
}

//Criação de objetos com Object.create()
/*
var o1 = Object.create({x:1, y:2});
console.log(o1)
var o2 = Object.create(null)
console.log(o2)
var o3 = Object.create(Object.prototype)
console.log(o3)

*/
function inherit(p){
    if(p == null) throw Error('iguinho');
    if(Object.create){
        return Object.create(p);
    }
    var t = typeof(p)
    if(t !== "object" && t !== "function") throw Error('iguinho zika');
    function f(){}
    f.prototype = p
    return new f();
}


/*
var addr = '';
var customer = {address: 'address'};
for(i = 0; i < 4; i++){
    addr += customer[`address`] + '\n';
}
console.log(addr)
var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
var total = q.x + q.y
console.log(total)
inherit(p)

console.log(o)

var ob = {x:1, y:2, z:3, atum: '', seiva: '', arvore:""};
console.log(ob.propertyIsEnumerable("toString"))
for(p in ob){
    console.log(p)
}
var unitcircle = {r: 1};
var c = inherit(unitcircle);

ob = c

for(p in ob){
    if(!ob.hasOwnProperty(p)) continue;
    console.log(p)
}

*/

var p = Object.defineProperties({}, {
    x: {value: 1, writable: true, enumerable: true, configurable: true},
    y: {value: 2, writable: true, enumerable: true, configurable: true},
    r: {
        get:function(){return Math.sqrt(this.x*this.x + this.y*this.y)},
        enumerable: true,
        configurable: true
    }
})

console.log(p)


class Retangulo{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }else{
            console.error('Largura tem que ser maior que zero!')
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }else{
            console.error('Altura tem que ser maior que zero!')
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}

const ret = new Retangulo();
ret.width = 5;
ret.height = 4;
console.log(ret.width);
console.log(ret.height);

