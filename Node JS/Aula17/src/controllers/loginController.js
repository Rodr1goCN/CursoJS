const Login = require('../models/loginModel');

exports.index = (requesição, resposta) => {
   resposta.render('login');
};

exports.register = async (requesicao, resposta) => {
   try{
      const login = new Login(requesicao.body)
      await login.register()
   
      if (login.errors.length > 0) {
         requesicao.flash('errors', login.errors);
         requesicao.session.save(() => {
            return resposta.redirect('/login/index');
         });
         return;
      };
      
      requesicao.flash('success', 'Seu usuário foi criado com sucesso.');
         requesicao.session.save(() => {
            return resposta.redirect('/login/index');
         });
         
   }catch(e){
      console.log(e);
      return resposta.render('404')
   }
 };
   



