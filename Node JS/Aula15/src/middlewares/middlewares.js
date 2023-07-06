exports.middlewaresGlobal = (req, res, next) => {
    res.locals.umaVariavelQualquer = 'Este é o valor de uma variável local';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};