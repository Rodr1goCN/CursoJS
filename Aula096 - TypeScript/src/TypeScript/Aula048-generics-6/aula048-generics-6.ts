// Unir objetos
export function unirObjetos<O1, O2, O3>(obj1: O1, obj2: O2, obj3: O3): O1 & O2 & O3 {
  //return { ...obj1, ...obj2 }; // Funciona tanto desse jeito quanto o debaixo
  return Object.assign({}, obj1, obj2, obj3);
}

const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };
const obj3 = { chave3: 38 };
const uniao = unirObjetos(obj1, obj2, obj3);

console.log(uniao);
