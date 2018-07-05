const http = require('http');

// http request option 설정
const options = {
    host: 'localhost',
    port: '8080',
    path: '/http.html'
};

// response 받아오는 콜백
const callback = (res) => {
    let body = '';
    // data 감지되면 body에 받아옴
    res.on('data', (data) => {
        body += data;
    });
    // data 수신 끝났으면 body 출력
    res.on('end', () => {
        console.log(body);
    });
}

// 서버에 http request를 날림
const req = http.request(options, callback);
req.end();