class Conta {
    numerodDaConta: number;
    saldo: number = 0;

    constructor (numeroDaConta: number){
        this.numerodDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar (valor:number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir (valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true
    };
    
    taxaTransferencia: number = 0;
    
}