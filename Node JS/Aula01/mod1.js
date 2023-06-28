class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}
const nome = 'Rodrigo';
const sobrenome = 'Costa';

module.exports = {//não podemos usar somente exports para definir: nome, sobrenome e etc
    nome, sobrenome, Pessoa
}









/* const nome = 'Rodrigo';
const sobrenome = 'Costa';

const falaNome = () => nome + ' ' + sobrenome;

/* module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; */

//jeito curto
/* exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que você quiser exportar' */ //funciona também com this */
