import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './Modules/Login';
import Contato from './Modules/contato';

const contato = new Contato('.form-contato');
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();
contato.init();
//import './assets/css/style.css';

