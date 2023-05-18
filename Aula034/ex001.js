const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const bgColorBody = estilosBody.backgroundColor; 

console.log(bgColorBody) //mostra no console a cor do fundo do site em rgb

for (let p of ps){
     p.style.background = bgColorBody
     p.style.color = 'red'
     p.style.fontWeight = 'bold'
     p.style.padding = '5px'
     
}