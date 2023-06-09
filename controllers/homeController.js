exports.index = function(req, res) {
    res.render('home', {title: 'Mi página de inicio', body: 'Contenido de mi página'});
};
