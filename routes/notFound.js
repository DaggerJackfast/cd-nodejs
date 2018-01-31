function notFound(req, res) {
    res.render('error.html', {error: 'Not Found'});
}

module.exports = notFound;