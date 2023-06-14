class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' Ligado')
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) { //!this.ligado = diferente de ligado
            console.log(this.nome + ' Desligado')
            return;
        }
        this.ligado = false;
    }
}

class Televisao extends DispositivoEletronico { //televisão extends = herda tudo do dispositivo eletronico
    constructor(nome, cor, modelo) {
        super(nome); //chama o nome que foi feito na classe pai no constructor acima
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temBluetooth) {
        super(nome);
        this.temBluetooth = temBluetooth;
    }
    ligar(){
        console.log('Você ligou o Tablet.')
    }
}

const s1 = new Televisao('Samsung', 'Cinza', 'UR - União Soviética')
s1.ligar()
s1.ligar()
console.log(s1)

const t1 = new Tablet('iPdad', true);
t1.ligar()
t1.ligar()