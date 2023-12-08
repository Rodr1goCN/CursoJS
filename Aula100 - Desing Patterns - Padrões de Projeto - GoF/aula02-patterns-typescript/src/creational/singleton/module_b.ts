import { MyDataBaseFunction } from './db/my-database-function';
import { myDataBaseClassic as myDataBaseFromModuleA } from './module_a';

const myDataBaseClassic = MyDataBaseFunction;
myDataBaseClassic.add({ name: 'Maria', age: 38 });
myDataBaseClassic.add({ name: 'Joana', age: 20 });
myDataBaseClassic.add({ name: 'Carla', age: 25 });
myDataBaseClassic.show();

console.log(myDataBaseClassic === myDataBaseFromModuleA);
