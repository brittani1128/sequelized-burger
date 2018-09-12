// EXPRESS ===================================================================

var express = require("express");



var PORT = process.env.PORT || 8080;

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

var db = require("./models");

//BODY PARSER =================================================================

var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// HANDLEBARS =================================================================

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES =====================================================================

// import routes and give the server access to them.
require("./routes/api-routes.js")(app);

// START SERVER ===============================================================

db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
})

