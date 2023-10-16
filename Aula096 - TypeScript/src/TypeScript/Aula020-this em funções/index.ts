export function funcao(this: Date, nome: string, age: number): void {
  // O date não é um tipo
  console.log(this); // Este erro no this nã permite que compile o código // Não foi definido um tipo na função
  console.log(nome, age);
}
// Para a função funcionar, tem que 'chamar' ela com o .call()
funcao.call(new Date(), 'Rodrigo', 38);
funcao.apply(new Date(), ['Rodrigo', 38]); // apply também funciona, porem tem que por o []
