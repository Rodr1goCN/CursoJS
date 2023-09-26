const { cpfs } = require('./base_aula');

// ^ -> Começa com (bom para validar campos de formulários)
// $ -> Termina com
// [^] -> Negação ex.: [^0,9]
// m -> Multiline (Os números não podem ficar na mesma linha (no caso o cpf) e sim na linha abaixo e sem espaço no final)

const cpf = '111.222.333-55';

const cpfExpReg = /^(\d{3}.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs.match(cpfExpReg));
console.log(cpfs);