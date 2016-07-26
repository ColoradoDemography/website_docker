//Adapted from: http://itblog.mobi/2015/12/29/how-to-create-a-simple-restful-api-with-node-js/

var express = require("express");
var app = express();

app.use(express.static('coloradodemography.github.io/_site'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require("./routes/routes.js")(app);

//Handle 404
app.use(function(req, res) {
    res.send(404, 'Page not found');
});

var server = app.listen(4008, function() {
    console.log("Listening on port %s...", server.address().port);
});
  