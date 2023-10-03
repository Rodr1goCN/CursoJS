// utilize any apenas em último caso
function showMessage(msg /* string */) {
  // Se não definir algo com o 'msg' (tipo: number, boolean, string e etc) irá ficar any (qualquer coisa)
  return msg;
}

console.log(showMessage([1, 2, 3])); // Não aceitou pos o msg esta definido como string
console.log(showMessage('olá'));
console.log(showMessage([1])); // Não aceitou pos o msg esta definido como string
