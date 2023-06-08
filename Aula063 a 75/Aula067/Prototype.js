/* Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro. 
// 
// Defenição de protótipo
// Protótipo é o termo usado para ser referir ao que foi criados pela primeira vez, servindo de modelo ou molde para futuras produções.
// 
// Todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-lo.
// Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada o top (null) até encontrar (ou não) tal membro.
*/

//função construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

//Instância
const pessoa1 = new Pessoa('Rodrigo', 'Costa'); //<- Pessoa = função construtora
const pessoa2 = new Pessoa('Maria', 'Lina'); //<- Pessoa = função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data)