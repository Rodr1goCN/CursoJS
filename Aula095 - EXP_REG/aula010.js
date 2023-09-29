const { naoNumerosExpReg, palavrasExpReg } = require('./base_aula');

//Encontra todas as palavras
//palavrasExpReg = /([\wÀ-ú]+)/gm;
console.log(palavrasExpReg.match(/([\wÀ-ú]+)/gm));

// Não retorna número
// naoNumerosExpReg = /\D/;
console.log(naoNumerosExpReg.match(/\D+/g));

// Valida IP
ipExpReg = /((25[0-5](\.)|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5](\.)|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valida CPF
cpfExpReg = /^(\d{3}.){2}\d{3}\-\d{2}$/gm;

// Valida telefones
telExpReg = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/gm;

// Validar senhas fortes
senhaForteExpReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/gm;

// Validar e-mails
// Permissiva = /[^\s]+@[^\s]+\.[^\s]+(\w)*/gm;
// Permissiva = /[^\s]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+/gm;
validarEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;