function Celular(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}
Celular.prototype = {
    exibirInfo(){
        console.log(`${this.marca} ${this.modelo} ${this.ano}`)
    }
}
const cel01 = new Celular("Xiaomi", "Xiaomi Redmi Note 13 pro", 2024);
cel01.exibirInfo()