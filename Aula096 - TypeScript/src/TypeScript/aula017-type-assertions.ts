/* Recomendado */
// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red'; // Se o body for nulo, aparece uma msg de erro e se realmente existir, faz uma checagem colocando o -> if(body) no começo

// Type assestion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';

/* Não recomendado */
// Type assestion
const body4 = document.querySelector('body') as unknown as number; // Se precisar que o body seja um number, primeiro tem que colocar: as unknown

// Non-null assertion (!)
const body2 = document.querySelector('body')!; // Usando o ponto de interrogação informa que o body não pode ser nulo
body2.style.background = 'red';
