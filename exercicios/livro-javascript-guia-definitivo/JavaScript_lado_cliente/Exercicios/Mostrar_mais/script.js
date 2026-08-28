const btnShowMore = document.querySelector("button");
var article = document.querySelector("#content");

btnShowMore.addEventListener("click", showMore)
function showMore(){
    if(article.className == "open"){
        //ler menos
        article.className = "";
        btnShowMore.innerHTML = "Show More";

    }else{
        //ler mais
        article.className = "open";
        btnShowMore.innerHTML = "Show Less";
    }
}