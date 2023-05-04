/* const pessoal = { //array é [] e objeto é {}
    nome: 'Rodrigo', //separa por virgula
    sobrenome: 'Costa',
    idade: 38 //numero não precisa por aspas ''
};

const pessoal2 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 55
}

console.log(pessoal)
console.log(pessoal2.idade) */

/* function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoal = criaPessoa('Rodrigo', 'Costa', 38)
const pessoal2 = criaPessoa('Roberto', 'Olinda', 15)
const pessoal3 = criaPessoa('Maria', 'Moreira', 55)
const pessoal4 = criaPessoa('Jian', 'Silva', 88)
const pessoal5 = criaPessoa('Arlindo', 'Cruz', 33)

console.log(pessoal, pessoal2)
 */

const pessoal = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 55, // se tiver outra coisa abaixo da idade,por virgula

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta faltando com respeito e sua idade é: ${this.idade}`); //this = este objeto neste contexto, relacionado a esta argumento
    },
    incrementaIdade(){
        this.idade++; //faz com que a idade seja somada mais 1 // se é 55 + 1 = 56
    }
};

pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();