export class Empresa {
  public readonly nome: string; //public não necessário, pois se não tiver, já se torna public // Public acessível dentro da classe e fora também
  private readonly colaboradores: Colaborador[] = []; // Se tiver private, só será possível acessar dentro da classe, fora da classe não é possível
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
    public readonly nome: string, // só é necessário usar o public nesses atalhos
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
//empresa1.colaboradores.pop(); // Com o pop é possível 'apagar' a listagem dos colaboradores mas só acessível se não tiver o private
//empresa1.colaboradores = []; // também é possível 'apagar' a listagem dos colaboradores usando um array, mas só pode usar se tirar o readonly
empresa1.mostrarColaboradores();
console.log(empresa1);
