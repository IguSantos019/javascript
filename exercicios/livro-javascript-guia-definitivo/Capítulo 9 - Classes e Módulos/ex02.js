



class Carros{
    constructor(cor, modelo, ano){
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano

    }  
    exibirInfo(){
        console.log(this.cor, this.modelo, this.ano)
    }
}

var celta = new Carros;

celta.cor = 'preto', celta.modelo = `Hatch`, celta.ano = "2002";

console.log(celta.ano)       

const fusca = new Carros(`Fusca`, "Azul", 1980)
fusca.exibirInfo();


class FazerCalculos{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    exibirSoma(){
        let res = this.num1 + this.num2;
        console.log(res);
    }
    ExibirMult(){
        let res = this.num1 * this.num2;
        console.log(res);
    }
    
}

const calc01 = new FazerCalculos(5, 5);
console.log(calc01)
calc01.exibirSoma();
calc01.ExibirMult();



class Livros{
    constructor(nome, autor, assunto){
        this.nome = nome;
        this.autor = autor;
        this.assunto = assunto;
    }

    exibirLivro(){
        console.log(this.nome, this.autor, this.assunto);
    }
}

const livro01 = new Livros("Javascript o guia definitivo", "David Flanagan", "Programação com JavaScript");
livro01.exibirLivro();
