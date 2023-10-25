export abstract class Personagem {
  // ABSTRACT - não pode instanciar a classe ou criar outro (new Personagem)
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}
  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + 'GUERREIRAAAAAAA ATACANDO');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + 'MONNNNNSTEEEERR');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
