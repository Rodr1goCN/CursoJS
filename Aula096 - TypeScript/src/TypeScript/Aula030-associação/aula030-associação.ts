export class Escritor {
  private _ferramenta: Ferramenta | null = null; // Ferramenta pode existir ou não existir
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando...`);
  }
}

const escritor = new Escritor('Rodrigo');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Godrej');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);
escritor.ferramenta = caneta;
escritor.escrever();
