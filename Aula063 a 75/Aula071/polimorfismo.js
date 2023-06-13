//superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c.: ${this.agencia}/${this.conta} | ` + `Saldo: R$ ${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente; //para funcionar o sacar teve que reescrever o prórprio sacar

ContaCorrente.prototype.sacar = function(valor){
    if((this.limite + this.saldo) < valor){
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

const conta1 = new ContaCorrente(11, 22, 10, 50);
conta1.depositar(100)
conta1.sacar(120)

const contaP = new ContaPoupanca(11,13, 10, 20)
contaP.depositar(30)
contaP.sacar(40)
contaP.sacar(40)



