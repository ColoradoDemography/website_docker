var exec = require('child_process').exec;

var appRouter = function(app) {

    app.get("/jekyll-build", function(req, res) {

    var command = "cd coloradodemography.github.io && git pull && jekyll build";
    exec(command, {}, function(error, stdout, stderr) {
        console.log('-- jekyll: building _site folder --');
        console.log('error: ' + error);
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        return res.send("complete");
    });


    });


}

module.exports = appRouter;