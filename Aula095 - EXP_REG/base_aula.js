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
];

const cpfs = `os CPFs são: 123.456.789-78 087.792.246-46
547.123.456-39
553-222.555-11


977.561.780-00
551.453.12a-55
654.891.548-87`

const ips = `Os ips são: 
0.0.0.0
255.255.255.255
10.10.5.12
10.10.10-5`

const ceps = `
    Os CEPs são:
    29130276 29168-125
    28-140-85 14785b-552
    25265-89545265-123
`;


//            <*>    *    </*> <*>        *        </*> 
const html = '<p>Olá mundo</p> <p>Olá mundo de novo</p>';

const alfabeto = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ atenção 0123456789 ! § ©'

module.exports = { texto, arquivos, html, alfabeto, ips, cpfs, ceps };