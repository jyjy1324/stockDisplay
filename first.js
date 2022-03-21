const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const tweetsRoute = require('./router/tweets.js');

let app = express();
console.log(tweetsRoute.jin);
app.use([express.json(),morgan("tiny"),cors(),helmet()])
app.use('/tweets',tweetsRoute.router);
app.use((req, res, next) => {
    res.sendStatus(404);
});
app.use((error, req, res, next) => {
    console.error(error);
    console.log("에러");
    res.sendStatus(500);
});

app.listen(8080);
console.log("8080서버 스타트");


