const express = require('express');
const app = express();
const router = require('./router/main.js')(app); // router module을 로드하여 app에 전달

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server =  app.listen(3000, () => {
    console.log('express server start on port 3000');
})

app.use(express.static('public'));
