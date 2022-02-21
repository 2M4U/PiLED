var express = require("express");
var app = express();
var authParser = require("express-auth-parser");
const { queryParser } = require("express-query-parser");
var cors = require("cors");
const Routers = require("./lib/src/routes");
let routes = new Routers(app);
var port = require("./settings/config.json").dashboard[0].port;
var path = require("path");

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(
  queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: true,
  })
);
app.use(authParser);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
routes.loadEndpoints();
app.listen(port);
