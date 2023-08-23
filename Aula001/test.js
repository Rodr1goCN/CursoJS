const frases = 'como voce esta hoje a noite';

const vogais = 'aeiou';

let totalVogais = 0;
for(let f = 0; f < frases.length; f++){
  for(let v = 0; v < vogais.length; v++){
    if(frases[f] === vogais[v]){
      totalVogais++;
    }
  }
}

console.log(totalVogais);