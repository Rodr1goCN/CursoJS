import { MyDataStructure } from './my-data-structure';
import { MyReversetIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');
//console.log(dataStructure);

// Se retirarmos o Symbol.itarator, pede para fazer.
const [a, b, c] = dataStructure;

console.log('ROUBEI:', a, b, c);

for (const data of dataStructure) {
  console.log(data);
}

console.log();
dataStructure.changeIterator(new MyReversetIterator(dataStructure));
for (const data of dataStructure) {
  console.log(data);
}

console.log();
