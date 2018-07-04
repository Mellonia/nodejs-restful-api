const http = require("http");

http.createServer((req, res) => {
    // http header 전송
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // response body를 Hello nodejs로 설정
    res.end("Hello nodejs");
}).listen(8080);

console.log("Server running at http://127.0.0.1:8080");