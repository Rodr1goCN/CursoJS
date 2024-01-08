import { MyDataStructure } from './my-data-structure';
import { MyReversetIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');
//console.log(dataStructure);

// Se retirarmos o Symbol.itarator, pede para fazer.
const [a, b] = dataStructure;

console.log('ROUBEI:', a, b);
console.log('EXECUTEI VÁRIAS COISAS E DEPOIS USEI O ITERATOR');
const [c, ...rest] = dataStructure;
console.log(c, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}

console.log();
dataStructure.changeIterator(new MyReversetIterator(dataStructure));
for (const data of dataStructure) {
  console.log(data);
}

console.log();

console.log('AQUI PRECISO ZERAR O ITERATOR');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
