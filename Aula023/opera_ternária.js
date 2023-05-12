// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal' //Faz mesma coisa se utilizar if / else

const corUsuario = null
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)

/* 
if (pontuacaoUsuario >= 1000) { // verificar se é VIP ou não
    console.log('Usuário VIP') 
} else {
    console.log('Usuário normal')
}
 */


