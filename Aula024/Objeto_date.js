/* 
const tresHoras = 60 * 60 * 3 * 1000; // acrescenta 3 horas

const umDia = 60 * 60 * 24 * 1000; //acrescenta um dia

const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix 
*/
//const data = new Date(2023, 5, 20, 20, 30); // ano, mês(0-11), dia, hora, min, segundo e milésimo 

/* 
const data = new Date()
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+1); //Mes no javascript começa pelo 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay() + 1); // 0 - Domingo, 1 - Segunda, 2 - Terça... e 6 - Sábado
console.log(data.toString());
 */
function zeroAEsq(num){
    return num >= 10 ? num : `0${num}`
}


function formataData(data){
   const dia = zeroAEsq(data.getDate());
   const mes = zeroAEsq(data.getMonth() +1);
   const ano = zeroAEsq(data.getFullYear());
   const hora = zeroAEsq(data.getHours());
   const min = zeroAEsq(data.getMinutes());
   const seg = zeroAEsq(data.getSeconds()); //não adiciona o zero a esquerda
   const ms = zeroAEsq(data.getMilliseconds());

    return `${dia}/${mes}/${ano} T${hora}:${min}:${seg}:${ms}`
    
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)