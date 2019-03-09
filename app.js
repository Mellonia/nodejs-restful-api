const express = require('express');
const app = express();
const UserRouter = require('./routes/user');

// app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', UserRouter);

app.listen(3000, () => {
    console.log('Example app listening on port 3000');

    require('./models/user').sequelize.sync({ force: true })
        .then(() => {
            console.log('Databases sync');
        })
});

module.exports = app;