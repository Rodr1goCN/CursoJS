import { MyDataBaseFunction } from './db/my-database-function';

const myDataBaseClassic = MyDataBaseFunction;
myDataBaseClassic.add({ name: 'Rodrigo', age: 38 });
myDataBaseClassic.add({ name: 'Costa', age: 20 });
myDataBaseClassic.add({ name: 'Silva', age: 25 });

export { myDataBaseClassic };
