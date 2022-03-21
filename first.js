const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

let app = express();

app.use([morgan(),cors(),helmet()])


app.listen(8888);
console.log("8888서버 스타트");
