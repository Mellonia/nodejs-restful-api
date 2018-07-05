const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    // URL 뒤에 있는 디렉토리/파일이름 파싱
    let pathname = url.parse(req.url).pathname;

    console.log(`Request for ${pathname} received`);

    // 파일 이름 비어있으면 http.html로 결정
    if(pathname == "/")
        pathname = "/http.html";

    // 파일 읽기
    fs.readFile(pathname.substr(1), (err, data) => {
        if(err) {
            console.log(err);

            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            // 파일 읽어서 response body에 작성
            res.write(data.toString());
        }
        // response body 전송
        res.end();
    });
}).listen(8080);

console.log('Server running at http:/127.0.0.1:8080/');