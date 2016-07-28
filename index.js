/**
 * Created by Simachew on 27-Jul-16.
 */

/**
 * Collect necessary modules.
 */
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var path = require("path");

var config = require("./config");
var validatorRoute = require("./validateSSN");

var app = express();
var port = config.port;

/**
 * Some configurations for the app.
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/**
 * Handle CORS. But not really necessary here.
 */
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers',
        'X-Requested-With,content-type, Authorization');
    next();
});

/**
 * configure to log all requests to console.
 */
app.use(morgan("dev"));

/**
 * respond to root access.
 */
app.get("/", function (req, res) {
    res.send("Welcome to Social Scurity Number validator. " +
        "Go to /validateSSN to validate SSN");
});

app.use("/validateSSN", validatorRoute);
app.listen(port);
require("util").log("welcome to SSN Validator at port", port);