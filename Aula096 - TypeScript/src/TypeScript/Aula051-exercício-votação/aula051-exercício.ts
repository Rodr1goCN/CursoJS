type OpcaoVotacao = {
  numeroDeVotos: number;
  opcao: string;
};

export class Votacao {
  private _opcaoVotacoes: OpcaoVotacao[] = [];
  constructor(public detalhes: string) {}

  adcOpcaoVotacao(opcaoVotacao: OpcaoVotacao): void {
    this._opcaoVotacoes.push(opcaoVotacao);
  }

  voto(indexVotacao: number): void {
    if (!this._opcaoVotacoes[indexVotacao]) return;
    this._opcaoVotacoes[indexVotacao].numeroDeVotos += 1;
  }

  get opcaoVotacoes(): OpcaoVotacao[] {
    return this._opcaoVotacoes;
  }
}

export class AppVotacao {
  private votacoes: Votacao[] = [];
  adcVotacao(votacao: Votacao): void {
    this.votacoes.push(votacao);
  }

  verVotacoes(): void {
    for (const votacao of this.votacoes) {
      console.log(votacao.detalhes);
      for (const opcaoVotacao of votacao.opcaoVotacoes) {
        console.log(opcaoVotacao.opcao, opcaoVotacao.numeroDeVotos);
      }
      console.log('#####');
      console.log('');
    }
  }
}

const votacao1 = new Votacao('Qual sua linguagem de programação favorita?');
votacao1.adcOpcaoVotacao({ opcao: 'Python', numeroDeVotos: 1 });
votacao1.adcOpcaoVotacao({ opcao: 'Typescript', numeroDeVotos: 2 });
votacao1.adcOpcaoVotacao({ opcao: 'Javascript', numeroDeVotos: 0 });

const votacao2 = new Votacao('Qual a sua cor preferida?');
votacao2.adcOpcaoVotacao({ opcao: 'Vermelho', numeroDeVotos: 0 });
votacao2.adcOpcaoVotacao({ opcao: 'Azul', numeroDeVotos: 2 });
votacao2.adcOpcaoVotacao({ opcao: 'Verde', numeroDeVotos: 1 });

votacao2.voto(1);
votacao2.voto(1);
votacao2.voto(2);
votacao2.voto(1);
votacao2.voto(0);

const appVotacao = new AppVotacao();
appVotacao.adcVotacao(votacao1);
appVotacao.adcVotacao(votacao2);

appVotacao.verVotacoes();

/* Qual a sua cor preferida?
vermelho
azul
verde */
