
window.onload = function mudarCor(){
    document.getElementsByClassName("buttonsCollors")[0].addEventListener("click", function(){
        document.body.style.backgroundColor = "blue";
    })
    document.getElementsByClassName("buttonsCollors")[1].addEventListener("click", function(){
        document.body.style.backgroundColor = "green";
    })
    document.getElementsByClassName("buttonsCollors")[2].addEventListener("click", function(){
        document.body.style.backgroundColor = "red";
    })
}
