//                 EXPRESSÕES REGULARES
const texto = `João era um homem de princípios sólidos, cuja bondade era conhecida por todos na pequena cidade de Santa Clara. Ele era filho de Maria e José, nomes que também eram respeitados na comunidade. Desde jovem, João demonstrava uma paixão por ajudar os outros.

Seu amigo mais próximo, Pedro, sempre o admirava por sua generosidade e empatia. João também tinha uma irmã, Ana, que compartilhava seu espírito altruísta. Eles frequentemente se uniam para realizar obras de caridade na cidade.

João conheceu Maria, uma mulher igualmente compassiva, e os dois se apaixonaram profundamente. Juntos, construíram uma família sólida e criaram seus filhos com os mesmos valores que os guiaram ao longo da vida.

Hoje em dia, a memória de joão perdura na cidade, e seu nome é frequentemente associado à compaixão e solidariedade. Sua influência positiva continua a inspirar as gerações futuras, deixando um legado de bondade que jamais será esquecido.

Mas Maria chamou joão gritando: JoooooãoooooooooOOooOOOOOO, venha logo que o café esta pronto.`

const arquivos = [
    'Atenção.jpg',
    'FOTO.jpeg',
    'Meu gatinho.jpg',
    'Meu gatinho.JPG',
    'Meu gatinho.JPEG',
    'Meu gatinho.JPEeeeeeeeEEeeeeEG',
    'Marido.png',
    'Lista de compras.txt',
]

//            <*>    *    </*> <*>        *        </*> 
const html = '<p>Olá mundo</p> <p>Olá mundo de novo</p>';

const alfabeto = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ atenção 0123456789 ! § ©'

module.exports = { texto, arquivos, html, alfabeto };