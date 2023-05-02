        const nome = prompt('Digite o seu nome completo:');
        const numeroLetras = nome.length;
        const segLetra = nome[1]; // começa a contar no 0
        const primIndice = nome.indexOf('R');
        const ultIndice = nome.lastIndexOf('o'); // termina em 0
        const ultLetras = nome.slice(-3);
        const arrayLetra = nome.match(/[a-z,A-Z]/g) 
        const letrasMaiu = nome.toLocaleUpperCase()
        const letrasMinus = nome.toLocaleLowerCase()


        document.body.innerHTML += `O seu nome é <strong>${nome}</strong>.<br />` // document.body.innerHTML += 'texto'    /   += concatena(junta) e recebe
        document.body.innerHTML += `Seu nome têm <strong>${numeroLetras}</strong> letras.<br />`
        document.body.innerHTML += `A segunda letra do seu nome é: <strong>${segLetra}</strong>.<br />`
        document.body.innerHTML += `Qual o primeiro índice da letra R no seu nome? <strong>${primIndice}</strong><br />`
        document.body.innerHTML += `Qual o último índice da letra O no seu nome? <strong>${ultIndice}</strong><br />`
        document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${ultLetras}</strong> <br />`
        document.body.innerHTML += `As palavras do seu nome são: <strong>${arrayLetra}</strong> <br />`
        document.body.innerHTML += `Seu nome com letras MAIÚSCULAS: <strong>${letrasMaiu}</strong><br />`
        document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${letrasMinus}</strong><br />`