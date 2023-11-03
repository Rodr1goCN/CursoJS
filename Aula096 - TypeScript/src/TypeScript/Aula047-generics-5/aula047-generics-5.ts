export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}
const pessoa1 = new Pessoa('Rodrigo', 38);
const pessoa2 = new Pessoa(['Rodrigo'], 38); // Array de string
const pessoa3 = new Pessoa(['Rodrigo'], { idade: 38 }); // A idade é um objeto

console.log(pessoa1, pessoa2, pessoa3);

// Adicionar em uma pilha de livros, um livro no começo
export class Pessoa2<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

export class Pilha<V> {
  private contador = 0; // quando adicionar um elemento, o indice é zero
  private elementos: { [k: number]: V } = {}; // para adicionar elementos = PUSH e para remover elementos = POP

  push(elemento: V) {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): V | void {
    if (this.estaVazia()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number | string>();
pilha.push('1');
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push('Rodrigo');
pilha.push('Cosata');

while (!pilha.estaVazia()) {
  console.log(pilha.pop());
}
