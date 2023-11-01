type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<TIPOGENERICO>(
  array: TIPOGENERICO[],
  callbackfn: FilterCallback<TIPOGENERICO>,
): TIPOGENERICO[] {
  const novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
