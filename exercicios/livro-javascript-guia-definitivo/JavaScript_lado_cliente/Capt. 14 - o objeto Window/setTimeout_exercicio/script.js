
document.getElementById("buttonStart").onclick = function iniciarContagem(){

    var contagemIniciada = setInterval(function(){
        const valueTime = document.getElementById("time").innerHTML;
        const showTime = document.getElementById("time");

        var soma = Number(valueTime) + 1;
        showTime.innerHTML = soma;

        var prfg_contando = document.getElementById("contando").innerHTML += " " + soma; 
        prfg_contando.innerHTML = 0;
        document.getElementById("buttonReset").onclick = function resetarContagem(){
            showTime.innerHTML = 0;
        }
    }, 1000);

    document.getElementById("buttonStop").onclick = function paraContagem(){
        clearInterval(contagemIniciada);
        document.getElementById("contando").innerHTML += "! |Você parou a contagem|";
    }
}


