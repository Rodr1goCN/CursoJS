const nome ='Rodrigo';
const sobrenome = 'Costa'
const idade = 38;
const peso = 70;
const alturaEmCm = 1.72;
let imc;
let anoNascimento;
const dataAtual = new Date();

imc = peso / (alturaEmCm*alturaEmCm);
anoNascimento =  2023 - idade;

console.log(`Hoje ${dataAtual}`)
console.log(`${nome} ${sobrenome} tem ${idade} anos, nascido em ${anoNascimento} e pesa ${peso}kg`)
console.log(`tem ${alturaEmCm} cm e seu IMC é de ${imc}`)

//podemos usar template strings com crase ``