type Veiculo = {
  marca: string;
  ano: number;
};
// Espelho de cima
type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Fiat',
  year: 2023,
  name: 'Uno',
};

console.log(carro);
