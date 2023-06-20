const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); //primeiro método, segundo url e terceiro se é assincrono ou sincrono (assincrono sempre true)
        xhr.send();//dados do formulário que é pego, pode deixar em branco ou colocar (null)

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);//success pode ser qualquer nome
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        });
    })
};

document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase()

    if (tag === 'a') {//o 'a' é o link no html
        e.preventDefault()//não deixa a página carregar (não entra no link clicado)
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento) {
    const href = elemento.getAttribute('href');

    const objConfig = {
        method: 'get',
        url: href,
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e){
        console.log(e)
    }



        /* success(response) { //vai pegar do xhr.responseText (mas no caso só ira pagar o response)
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText); 
        }*/
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}