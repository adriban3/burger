var express = require("express");
var bp = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burger_controllers");
var mo = require("method-Override");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bp.urlencoded({extended: true}));

app.use(bp.json());

app.use(mo("_method"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("Burgers listening on http://localhost:" + PORT);
})
//define app and port and handlebars and sich