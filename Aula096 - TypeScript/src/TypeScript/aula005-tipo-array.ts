// Array<T> - T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const results = multiplicaArgs(1, 2, 3, 4, 5, 6, 7);
const results2 = concatenaStrings('rodrigo ', 'Costa');
const results3 = toUpperCase('rodrigo ', 'costa');

console.log(results, results2, results3);
