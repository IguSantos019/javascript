var cont = Number(0)
document.getElementById('somar').onclick = function() {
    cont++
    document.getElementById('contLabel').textContent = cont

}

document.getElementById('sub').onclick = function() {
    cont--
    document.getElementById('contLabel').textContent = cont
}

document.getElementById('limpar').onclick = function() {
    cont = 0
    document.getElementById('contLabel').textContent = cont
    console.log
}