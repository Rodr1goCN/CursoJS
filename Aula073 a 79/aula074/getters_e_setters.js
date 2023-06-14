const _velocidade = Symbol('velocidade')//um Symbol sempre sera diferente do outro
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0; //inicia sempre zerado
    }

    set velocidade(valor){
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('GETTER');
        return this[_velocidade]
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')

/* for (let i = 0; i <= 200; i++){
    c1.acelerar();
} */

c1.velocidade = 99;
console.log(c1.velocidade);
console.log('############');






class Pessoa{
    constructor (nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

     get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){ //sempre o set ira receber um valor
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
      }
}

const p1 = new Pessoa('Rodrigo', 'Costa');
p1.nomeCompleto = 'Rodrigo da Costa Nascimento'
console.log(p1.nome) //podemos também usar o p1.nomeCompleto() para ver o nome e sobrenome, porem não pode ter o get
console.log(p1.sobrenome)