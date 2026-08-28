

(()=> {
    const buttonsProducts = document.querySelectorAll(".products button");
    var somaTotal = 0;
    buttonsProducts.forEach(button => {button.addEventListener('click', function(){
        const product = button.dataset.produto;
        const preco = parseFloat(button.dataset.preco);

        document.querySelector('#adcPecas').innerHTML += `<br> * ${product}  `;

        
        somaTotal += preco;

        var total = document.querySelector("#total");
        total.innerHTML = `Total: R$${somaTotal.toFixed(1)}`;
    })})


    const buttonCompra = document.querySelector('#comprar');

    buttonCompra.addEventListener('click', function(){
        var p = document.getElementById("agradecimento");

        esconderConteudo = ()=>{
            var containerProducts = document.querySelector("#containerProducts");
            containerProducts.classList.remove('ativa');
            containerProducts.classList.add('hide');

            document.querySelector('#comprar').classList.add('hide');
        }

        mostrarAgradecimento = ()=>{
            var p = document.querySelector('#agradecimento');
            p.style.fontWeight = 'bold';
            p.classList.remove('hide');
        }


        esconderConteudo();
        mostrarAgradecimento();
    })







    // buttonsProducts.forEach(btnProduct => {btnProduct.addEventListener('click', function(){
    //     const product = btnProduct.dataset.produto;
    //     console.log(product);
    // })})
})()