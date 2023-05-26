//Factory Function (Função Fábrica)
function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        },

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ') // cria um array separado por '' com o nome
            this.nome = valor.shift() //remove do array o primeiro valor (no caso o nome)
            //this.sobrenome = valor.pop() // remove do array o último sobrenome 
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        altura: altura,
        peso: peso,
        //Getter
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p2 = criaPessoa('Rodrigo', 'Costa', 1.8, 80);
p2.nomeCompleto = 'Rodrigo da Costa Nascimento'//criaPessoa('Maria', 'Silva', 1.60, 50);
const p3 = criaPessoa('Lucas', 'Costa', 1.70, 70);
console.log(p2.nomeCompleto);
console.log(p2.imc()); // se usar no imc a palavra get (ex.: get img(){}) não é necessário usar o () do console.log, ficando assim: console.log(p2.imc)