export class Empresa {
  public readonly nome: string; //public não necessário, pois se não tiver, já se torna public
  private readonly colaboradores: Colaborador[] = [];
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

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {} // constructor (public readonly nome: string) já substitui a linha 2, 6 e 7
}

const empresa1 = new Empresa('Costa', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Rodrigo', 'Costa');
const colaborador2 = new Colaborador('Jefferson', 'Silva');
const colaborador3 = new Colaborador('Magnus', 'Jota');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.mostrarColaboradores();
console.log(empresa1);
