const express = require('express');
const app = express();
const UserRouter = require('./routes/user');

// app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', UserRouter);
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000');
});

module.exports = app;