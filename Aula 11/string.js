let string = "uma aspa em um \"texto\"" //adicionar uma aspas em uma string ou você pode de um jeito mais fácil adicionar uma aspas simples: 'uma aspa em um "texto"' e se quiser adicionar uma barra invertida, coloca: duas \\

console.log(string)



//           01234567                    
let texto = "um texto"

console.log(texto[0]) //se adicionarmos [3] com um número dentro irá mostrar a letra ou espaço vazio do "um texto" ou usar também o texto.charAt(5) 


//Concatena o texto
console.log(texto.concat(' uma palavra')) 
console.log(texto + ' uma palavra')
console.log(`${texto} uma palavra`)


//.indexOf()
console.log(texto.indexOf('um')) // retorna o índice do primeiro elemento igual ao elemento especificado, ou -1 se o elemento não estiver presente
console.log(texto.indexOf('o', 3)) // ele busca no texto escrito ou na palavra a posição do elemento, que neste caso ele vai pesquisar da terceira letra o "o" (maiuscula e minúscala são diferentes)
console.log(texto.lastIndexOf('m',7)) // igual ao indexOf porem ele começa de tras para frente (direita para esquerda)


//Expressão Regular
console.log(texto.match(/[a-z]/g)) //ele separa todas a letras da palavra

console.log(texto.search(/e/)) // Vai procurar a letra x dentro do texto e retorna em qual posição esta / -1 a letra não foi encontrada

console.log(texto.replace('um', 'uma')) // troca a palavra desejada por outra

console.log(texto.replace(/t/g, 'r')) // ele subtitui a letra t do texto por a letra r (adicionando o g na string, ele faz em todas as letras (se tiver mais de uma))

console.log(texto.length) // na string o length começa no número 1

console.log(texto.slice(3, 7)) // 'recorta' uma posição do texto / se adicionarmos números negativos ele irar fazer a subração do total de letras do texto.
console.log(texto.slice(-5,-1))

console.log(texto.split(' ', 1)) // split('') separa todas a letras e split(' ') separa as palavras e se adicionarmos (' ', 3) ele ira separar 3 palavras da frase (funciona também sem espaço na aspa simples)

console.log(texto.toLocaleUpperCase()) // deixa tudo maiúsculo