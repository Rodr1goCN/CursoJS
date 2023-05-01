alert('olá mundo'); //Gera um alerta para o usuário da página // windows.alert('mensagem') é o modo longo
window.confirm('deseja apagar esta mensagem?') //Gera um alerta para o usuário com um botão OK e CANCELAR (onde o botão OK = True e CANCELAR = False)
window.prompt('Digite o seu nome') // Gera um alerta para o usuário digitar o que foi pedido

/* 
** Podemos ver o valor True ou False do comando confirm, executado no console do navegador:
** const confirmar = confirm('mensagem')
** console.log(confirmar)
** sera mostrado se foi True ou False dado pelo usuário
*/


/* 
** Podemos também usar o let para ser executado no console do navegador
** let num1 = prompt('Digite um número')
** num1
** sera mostrado o valor do número (só que o valor sera uma string (texto))
**
*/

/* 
** Para virar um Number devera executar o seguinte código:
** num1 = Number(num1)
** Com isso de string o num1 vira Number (número) // para verifcar se é realmente um número, podemos executar o seguinte: typeof num1 e a resposta sera 'number'
**
*/