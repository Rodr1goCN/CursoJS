let x;
if (typeof x === 'undefined') x = 20;

console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTowNumber = squareOf(4);
const squareOfTowString = squareOf('2');

if (squareOfTowNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTowNumber * 100);
}
