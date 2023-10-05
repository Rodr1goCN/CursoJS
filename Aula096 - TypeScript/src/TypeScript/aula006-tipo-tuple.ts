// Tuple
const dadosCliente: /* readonly */ [number, string] = [1, 'Rodrigo'];
const dadosCliente2: [number, string, string, number] = [1, 'Rodrigo', 'Costa', 7];
const dadosCliente3: [number, string, string?] = [1, 'Rodrigo']; // string? = opcional,pode ter um valor ou não
const dadosCliente4: [number, string, ...string[]] = [1, 'Rodrigo', 'Costa'];

dadosCliente[0] = 5;
dadosCliente[1] = 'Costa';
dadosCliente.pop(); // 'corta' o segundo valor, no caso (string)... se adicionar o  readonly[number, string] = [1, 'rodrigo'] o pop não funciona mais

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly
const array1: readonly string[] = ['Rodrigo', 'Cosata'];
const array2: ReadonlyArray<string> = ['Rodrigo', 'Cosata'];

console.log(array1);
console.log(array2);
