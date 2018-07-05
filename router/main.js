module.exports = (app, fs) => {
    // router
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Index Page',
            length: 5
        })
    });

    app.get('/about', (req, res) => {
        res.render('about.html');
    })
}