const { cpfs, ips } = require('./base_aula');

console.log(cpfs)
console.log(cpfs.match(/[\d+.-]+/g))
console.log(cpfs.match(/[\d{3}.\d{3}.\d{3}-]+/g))
console.log(cpfs.match(/[(\d{3}.){2}\d{3}-]+/g));

console.log(ips);
console.log(ips.match(/[\d+.]+/g));
console.log()


//250 - 255 -> 25[0-5]
//200 - 249 -> 2[0-4][0-9]
//100 - 199 -> 1\d{2}
//10 - 99 -> [1-9]\d
//0 - 9 -> \d 

// ^ no começo da expressão indica que 'COMEÇA COM'
// $ -> 'TERMINA COM'
const ipExpReg = /((25[0-5](\.)|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5](\.)|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

/* for (let i = 0; i <= 300; i++){
    const ip = `${i}.${i}.${i}.${i}`;
    console.log(ip, ip.match(ipExpReg));
} */

console.log(ips.match(ipExpReg))