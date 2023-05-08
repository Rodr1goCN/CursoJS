/* 
** Entre 0 - 11 - Bom dia
** Entre 12 - 17 - Boa tarde
** Entre 18 - 23 - Boa noite
** 
** REGRAS
** 
** If pode ser usado sozinho
** Sempre que utilizar a palavra else, preciso de um if antes
** Pode ter quantos vários else if 
** Só pode ter um else para checar
** Podemos usar condições sem else if, utilizando apenas if e else
*/

const hora = 20;

if (hora >= 0 && hora <= 11) {

    console.log("Bom dia!");

} else if (hora >= 12 && hora <= 17) {

    console.log('Boa tarde!')

} else if (hora >= 18 && hora <= 23) {

    console.log('Boa noite!')

} else {
    console.log('Perdeu mané!')
}





const tenhoGrana = '';

if (tenhoGrana) {
    console.log('Vou sair de casa')
} else {
    console.log('Não vou sair de casa')
}