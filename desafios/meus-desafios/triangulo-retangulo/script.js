let numrt = document.getElementById('numrt').value
//let botao = document.getElementById('botao')
let result = document.getElementById('result')

/*
function retanguloTriangulo(number){
    const asteristico = '*'
    for(let c = 1; c < number; c++){
            
        for(let i = 0; i < c; i++){
            result.innerHTML += `${asteristico}`
        }
        result.innerHTML += `${asteristico}<br>`
    }

}
*/
function retanguloTriangulo(altura){
    const asteristico = "I"
    result.innerHTML = ''
    for(let c = 1; c <= altura; c++){
        result.innerHTML += `${asteristico.repeat(c)}<br>`
    }
}

document.getElementById('botao').addEventListener('click', function(){
    var numDigitado = document.getElementById('numrt').value

    //passar para a função o seu parâmetro que é "numDigitado"
    retanguloTriangulo(numDigitado)
    
})






