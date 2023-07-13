exports.middlewaresGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req, res, next) => {
    if(!req.session.user){
        req.flash('errors', 'Você não esta logado, faça o login.');
        req.session.save(() => res.redirect('/'));//redireciona para a home, se não tiver logado
        return; //return serve para a função parar aqui e não fazer um loop
    }
    next();//se tiver logado e passa para próximo middleware
};