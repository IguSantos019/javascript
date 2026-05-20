/* 
5.1 Intruções de expressão
Os tipos mais simples de intruções em JavaScript são as expressões que têm efeitos colaterais. As instruções de atribuição são uma importante categoria de instrução de expressão. Por exemplo:

    greeting = "Hello " + name;
    i *= 3;

Os operadores de incremento e decremento, ++ e --, são relacionados às intruções de atribuição. Eles têm o efeito colateral de alterar o valor de uma variável, exatamente como se fosse feita uma atribuição:
    
    counter++;

O operador delete tem o importante efeito colateral de excluir uma propriedade de um objeto. Assim, ele é quase sempre utilizado como uma instrução e nâo como parte de uma expressão maior:

    delete o.x;

As chamadas de função são outra categoria importante de instrução de expressão. Por exemplo:

    alert(greeting);
    window.close();

Essas chamadas de função no lado do cliente são expresões, mas têm efeitos colaterais que afetam o navegador Web e são utilizadas aqui como instruções. Se uma função não tem qualquer efeito colateral, não tem sentido chamá-la, a não ser que faça parte de uma expressão maior ou de uma instrução de atribuição. Por exemplo, você não calcularia um cosseno e simplesmente descartaria o resultado:

    Math.cos(x);

Mas poderia calcular o valor e atribuí-lo a uma variável para uso futuro:

    cx = Math.cos(x);



*/

/*
var i;
var a = [1, 2, 3, 4, 5];
for( i = 0; i < a.length ; a[i++]){
    console.log(a)
}

*/

//pequeno exercicio de do/while
/*
var array = ['igor', 'fodinha', 'silva', 'santos'];

function printArray(a){
    
    var i = 0;
    if(a.length == 0){
        console.log('Empty Array');
    }else{
        do{
            console.log(a[i]);
        }while(++i < a.length);
    }
}

console.log(array);
printArray(array);
*/

/*
var o = ['igor', 22, 'fodinha']

for(var p in o){
    console.log(o[p])
}
*/


/*
var o = {x:1, y:2, z:3};
var a = [], i = 0;
for(a[i++] in o){
    console.log(i)
}
for(i in a){
    console.log(i)
}

*/

//teste de matrix
/*
var matrix = Date();
var sum = 0, success = false;
compute_sum: if(matrix){
    for(var x = 0; x < matrix.length; x++){
        var row = matrix[x];
        if(!row) break compute_sum;
        for( var y = 0; y < row.length; y++){
            var cell = row[y];
            sum += cell;
        }
    }
    success = true;
}
console.log(matrix)

*/

/*
var a = [1, 2, 3], total = 0
for(var i = 0; i < a.length; i++){
    if(!a[i]) continue;
    total += a[i]
    console.log(a[i])
    console.log(total)

}
*/

//teste prático de continue;
/*
var i = 0, n = 0;
while(i < 5){
    i++
    if(i === 3){
        continue;
    }
    n += i
    console.log(n)
}

*/
//teste de continue;
/*
var i = 0, j = 8;

checkj: while(j > 0){
    console.log(j)
    j--
    if( j % 2 == 0) continue checkj;
        console.log('j: ' + j + ' is odd.');
}
*/

//aprendendo break e continue;
/*
for(var i = 0; i < 4; i++){console.log(i)}

for(var i = 0; i < 4; i++){
    if(i == 2) break;
    console.log(i)
}


for(var i = 0; i < 10; i++){
    
    if(i == 0)continue;
    
    if(i == 5) break;
    console.log(i)
    if(i == 4) continue;
    
}

for(var i = 0; i < 10; i++){
    if(i % 2 == 1) continue;
        console.log('i: ' + i + ' é par.')
    
}
for(var j = 0; j < 10; j++){
        if(j % 2 == 0) continue;
            console.log('i: ' + j + ' é impar.')
    }

*/

//exemplo de return;
/*
function square(x){
    return x * x;
}
console.log(square(4))

var o = 1
function display_objeto(o){
    if(!o) return 'vazio';
    else return 'cheio';

}
console.log(display_objeto(o))
*/
var num = 10
function fatorial(x){
    if(x < 0) throw new Error('x must not be negative');
    var res = 1;
    for(i = 2; i <= x; i++){
        res *= i;
    }
    return res;
}
console.log(fatorial(num))