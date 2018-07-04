const events = require('events');

const eventEmitter = new events.EventEmitter();

const connectHandler = () => {
    console.log("Connection Success");

    eventEmitter.emit("data_received");
}

eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_received", () => {
    console.log("Data Received");
});

eventEmitter.emit("connection");

console.log("Program has ended");