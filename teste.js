class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes() {
        return `${this.ano} ${this.marca} ${this.modelo}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroDePortas) {
        super(marca, modelo, ano);
        this.numeroDePortas = numeroDePortas;
    }

    detalhes() {
        return `${super.detalhes()} com ${this.numeroDePortas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    detalhes() {
        return `${super.detalhes()} com ${this.cilindradas} cilindradas`;
    }
}

const carro1 = new Carro('Toyota', 'Corolla', 2020, 4);
const carro2 = new Carro('Honda', 'Civic', 2019, 4);
const moto1 = new Moto('Yamaha', 'YZF-R3', 2021, 321);

console.log(carro1.detalhes()); 
console.log(carro2.detalhes()); 
console.log(moto1.detalhes());
