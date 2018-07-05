const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server =  app.listen(3000, () => {
    console.log('express server start on port 3000');
})

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: '@#@!$*$^!!@#&^', // 쿠키 변조 방지를 위한 sign 값
    resave: false,  // 세션을 언제나 저장할지 정하는 값
    saveUninitialized: true // 변경되지 않은 세션
}));

const router = require('./router/main.js')(app, fs); // router module을 로드하여 app에 전달
