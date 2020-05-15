const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const exjwt = require('express-jwt');
const { startDatabase } = require("./database/mysql");

//routes
var categoryRouter = require("./routes/categoryRouter");
var userRouter = require("./routes/userRouter");

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

//register routes
app.use("/category", categoryRouter);
app.use("/auth", userRouter);

// starting the server
startDatabase().then(async () => {
  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
});
