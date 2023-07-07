exports.middlewaresGlobal = (req, res, next) => {
    res.locals.umaVariavelQualquer = 'Este é o valor de uma variável local';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next)=> {
    res.locals.csrfToken = req.csrfToken();
    next();
};