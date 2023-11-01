// Encadeamento opcional e Operador de coalescência nula

// Encadeamento opcional
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texot',
  //data: new Date(),
};

console.log(documento.data?.toDateString()); // (data?) -> ignora o toDateString() se caso ele for undefined

// Operador de coalescência nula
console.log(documento.data?.toDateString() ?? 'EPA, não há dados');
console.log(null ?? '3 - EPA, não há dados');
console.log(false ?? '4 - EPA, não há dados');
console.log(0 ?? '5 - EPA, não há dados');
console.log('' ?? '6 - EPA, não há dados');
