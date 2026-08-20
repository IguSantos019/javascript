
const meuParagrafo = document.createElement('p');
const meuTexto = document.createTextNode("Hello World!");
meuParagrafo.appendChild(meuTexto);

document.body.appendChild(meuParagrafo);

const minhaImagem = document.createElement("img");
minhaImagem.src = "https://i.pinimg.com/736x/9b/de/2f/9bde2f9b104902dcc74a44a78805a608.jpg";
//var width = parseInt(minhaImagem.getAttribute("WIDTH"));
minhaImagem.width = 300;
minhaImagem.setAttribute("class", "bmwPreta"); //para adicionar ou modificar uma propriedade de uma tag
const classOfMinhaImagem = minhaImagem.getAttribute("class");//para obter o valor dessa propriedade
console.log(classOfMinhaImagem)
console.log(minhaImagem.getAttribute("id"));//null porque minhaImage.id não existe;
minhaImagem.setAttribute("id", "minhaBmw");
console.log(minhaImagem.getAttribute("id"));

document.body.appendChild(minhaImagem);

const firstIframe = document.createElement("iframe");
firstIframe.src = "https://www.youtube.com/embed/5FTq_-OJpck?si=_ISoRr-GLokquYE2";
firstIframe.width = 400;
firstIframe.height = 400;
document.body.appendChild(firstIframe);

//meuTexto.textContent = "Igu é foda";
minhaImagem.setAttribute("id", "bmw")
var totalAtributosImagem;

console.log(minhaImagem.hasAttribute("height"))
