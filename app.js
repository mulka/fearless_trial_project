const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

const server = app.listen(port, () => {
    console.log("Application started and Listening on port 3000");
});

const shutdown = () => {
    console.log('Stopping ...');
    server.close(() => {
        console.log('Stopped');
    });
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
