const Login = require('../models/loginModel');

exports.index = (requesição, resposta) => {
   if(requesição.session.user) return resposta.render('login-logado')
     return resposta.render('login');
};

exports.register = async (requesicao, resposta) => {
   try {
      const login = new Login(requesicao.body);
      await login.register();

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

   } catch (e) {
      console.log(e);
      return resposta.render('404');
   }
};


exports.login = async (requesicao, resposta) => {
   try {
      const login = new Login(requesicao.body);
      await login.login();

      if (login.errors.length > 0) {
         requesicao.flash('errors', login.errors);
         requesicao.session.save(() => {
            return resposta.redirect('/login/index');
         });
         return;
      };

      requesicao.flash('success', 'Você entrou no site com sucesso.');
      requesicao.session.user = login.user;
      requesicao.session.save(() => {
         return resposta.redirect('/login/index');
      });

   } catch (e) {
      console.log(e);
      return resposta.render('404')
   }
};

exports.logout = (req, res) => {
   req.session.destroy();
   res.redirect('/');
}