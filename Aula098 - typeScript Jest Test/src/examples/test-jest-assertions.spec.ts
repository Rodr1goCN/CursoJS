describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); // Mais restrito, funciona igual ao ===. Tem que ser exatamente igual // Mais usados em VALORES PRIMITIVOS

    expect(number).toEqual(10); // Mais flexível, pois se usarmos o '10' (string) vai passar // Mais usado em OBJETOS

    expect(number).not.toBeFalsy(); //Iguao ao toBeTruthy
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9); // Maior que o 9
    expect(number).toBeGreaterThanOrEqual(10); // Maior ou igual a 10
    expect(number).toBeLessThan(11); // Menor que o 11
    expect(number).toBeLessThanOrEqual(11); // Menor ou igual a 11

    expect(number).toBeCloseTo(10.001); // Valores aproximados
    expect(number).toBeCloseTo(9.996); // Valores aproximados

    expect(number).not.toBeNull(); // Não é nullo?

    expect(number).toHaveProperty('toString'); // Verifica se tem uma string dentro de number
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { nome: 'Rodrigo', idade: '38' };
    const anotherPerson = { ...person }; // ...person (shallow copy)

    //expect(person).toBe(anotherPerson); // Falha (só funciona com o .toEqual)
    expect(person).toEqual(anotherPerson);

    expect(person).toHaveProperty('idade'); // Tem uma propriedade 'idade' dentro de person?
    expect(person).not.toHaveProperty('sobrenome'); // Não tem uma propriedade 'sobrenome' dentro de person?
    expect(person).toHaveProperty('idade', '38'); // Tem uma propriedade 'idade' e 38 dentro de person?

    expect(person.nome).toBe('Rodrigo');
  });
});
