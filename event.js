const events = require('events');

// eventEmitter 객체 생성
const eventEmitter = new events.EventEmitter();

// connection 이벤트 발생 시 호출될 함수(이벤트핸들러, 이벤트리스너))
const connectHandler = () => {
    console.log("Connection Success");
    // data_received 이벤트 발생
    eventEmitter.emit("data_received");
}

// connection 이벤트와 이벤트핸들러 연동
eventEmitter.on("connection", connectHandler);

// data_received 이벤트와 이벤트핸들러 연동
eventEmitter.on("data_received", () => {
    console.log("Data Received");
});

// connection 이벤트 발생
eventEmitter.emit("connection");

console.log("Program has ended");

// emit : 이벤트 발생
// on : 이벤트와 이벤트 발생시 실행될 함수 연동