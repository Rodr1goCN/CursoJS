const sectionContainer = document.querySelector('.container'); //seleciona dentro do body a 'section' com a class .container

const divNova = document.createElement('div'); //cria uma div

const paragrafo = document.createElement('p'); //cria um p (paragrafo)

const footer1 = document.createElement('footer'); //cria um footer

const section1 = document.createElement('section'); //cria uma section


section1.textContent = 'frase gerada automaticamente'
footer1.textContent = 'frase gerada automaticamente';
paragrafo.textContent = "frase gerada automaticamente";
//paragrafo.classList.add('a'); //cria um nome para a classe

divNova.appendChild(section1)
divNova.appendChild(footer1)
divNova.appendChild(paragrafo)
sectionContainer.appendChild(divNova); 
//appendChild é usado para conectar nós entre si tornando um nó filho do outro na estrutura do DOM (Document Object Model - Modelo de Objeto de Documento)

/*      Outro jeito de resolver 
   const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'}
   ]

   const container = document.querySelector('.container')
   const div = document.createElement('div')

   for (let i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i];
        let tagCriada = document.createElement(tag);
        tagCriada.innerHTML = texto;
        div.appendChild(tagCriada);
   }

   container.appendChild(div)
  */  

