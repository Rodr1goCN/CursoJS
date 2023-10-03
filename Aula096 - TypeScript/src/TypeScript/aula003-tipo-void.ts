function semRetorno(...args: string[]): void {
  // void é quando uma função ou método não retorna nada
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Costa',

  showName(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Rodrigo', 'Costa');
pessoa.showName();

export { pessoa }; // Usamos o export pois a 'pessoa' já foi declarado anteriormente
