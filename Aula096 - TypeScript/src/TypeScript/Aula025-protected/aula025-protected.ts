export class Empresa {
  public readonly nome: string; //public não necessário, pois se não tiver, já se torna public // Public acessível dentro da classe e fora também
  protected readonly colaboradores: Colaborador[] = []; // Protected é possível acessar na classe e na sub classe

  /*
  // PRIVATE, só será possível acessar dentro da classe, fora da classe não é possível
  */
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Costa extends Empresa {
  // sub classe
  constructor() {
    super('Costa', '11.111.111/0001-11');
  }
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string, // só é necessário usar o public nesses atalhos
    public readonly sobrenome: string,
  ) {} // constructor (public readonly nome: string) já substitui a linha 2, 6 e 7
}

const empresa1 = new Costa();
const colaborador1 = new Colaborador('Rodrigo', 'Costa');
const colaborador2 = new Colaborador('Jefferson', 'Silva');
const colaborador3 = new Colaborador('Magnus', 'Jota');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
//empresa1.colaboradores.pop(); // Com o pop é possível 'apagar' a listagem dos colaboradores mas só acessível se não tiver o private
//empresa1.colaboradores = []; // também é possível 'apagar' a listagem dos colaboradores usando um array, mas só pode usar se tirar o readonly
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
empresa1.popColaborador();
console.log(empresa1);
