export function isNumber(value: unknown): value is number {
  // Sempre que o boolean for true, ele retorna um number. (se for falso ele não é um number)
  return typeof value === 'number';
}

/* console.log(isNumber('123'));
console.log(isNumber(123)); */

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(5, 6, 8, 7));
console.log(soma<number | string>(...[5, 6, 8, 7, 'a', 'b', 15])); // para funcionar number e string junto, tem que utilizar o ...[1, 2, 3, 'a', 'b', 'c'] (typescript nao suporta mais fazer isso) // Para funcionar, tem que definir o number e a string no console.log
console.log(soma('a', 'b', 'c')); // saída: 0
