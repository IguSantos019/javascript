


const btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", function(){
    var textNum01 = document.querySelectorAll("input")[0].value;
    var number01 = Number(textNum01);
    var textNum02 = document.querySelectorAll("input")[1].value;
    var number02 = Number(textNum02);

    
    var btnMult = document.getElementsByTagName("button")[0];
    let a = "";
    btnMult.addEventListener("click", function(event){
        a = event.target.value;
        console.log(a);
    })

    
    document.getElementById("result").innerText = result;
})


