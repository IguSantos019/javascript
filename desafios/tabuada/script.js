
document.getElementById("botao").onclick = function() {
    let num;
    let contador = 0;
    let res;
    num = document.getElementById('num').value
    if (num.length == 0) {
        window.alert('[ERRO]Por favor digite um número para a tabuada')
    }else {
        num = Number(num)
        document.getElementById('tabuada').innerHTML = ''
        tabuada = document.getElementById('tabuada')
        tabuada = Number(tabuada)
        while (contador < 10) {
            contador++
            res = num * contador
            document.getElementById("tabuada").innerHTML += `${num} x ${contador} = ${res} <br>`
    }
    }
    
}
