const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { startDatabase } = require("./database/mysql");


// defining the Express app
const app = express();
const http = require('http').createServer(app);
global.io = require('socket.io')(http);

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

//register Root-Route
const apiRouter = require('./routes/indexRouter');
app.use('/api', apiRouter);

//Serve static pictures
app.use('/media-upload', express.static('media-upload'));

// starting the server
startDatabase().then(async () => {
  http.listen(3001, () => {
    console.log("listening on port 3001");
  });
});
