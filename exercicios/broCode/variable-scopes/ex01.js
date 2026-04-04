// variable scope = where a variable is recognized and accessible (local vs global)

// Escopo da variável = onde uma variável é reconhecida e acessível (local vs global)

// Escopo local
function function1(){
    let x = 1;
    console.log(x)
}
function1()
function function2(){
    let x = 2;
    console.log(x)
}
function2()