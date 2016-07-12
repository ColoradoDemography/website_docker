var exec = require('child_process').exec;

var appRouter = function(app) {

    app.get("/update/jekyll-build", function(req, res) {
        var command = "cd coloradodemography.github.io && git pull && jekyll build";
        exec(command, {}, function(error, stdout, stderr) {
            console.log('-- jekyll: building _site folder --');
            console.log('error: ' + error);
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            return res.send("_site folder has been built.  COMPLETE.");
        });
    });

    app.get("/update/co-grants_load", function(req, res) {
        var command = "cd coloradodemography.github.io/_site && git clone https://github.com/ColoradoDemography/CO_Grants.git";
        exec(command, {}, function(error, stdout, stderr) {
            console.log('-- updating or adding co_grants repo --');
            console.log('error: ' + error);
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            return res.send(stdout + "\n" + stderr + "\nDONE.");
        });
    });
  
    app.get("/update/co-grants_update", function(req, res) {
        var command = "cd coloradodemography.github.io/_site/CO_Grants && git pull";
        exec(command, {}, function(error, stdout, stderr) {
            console.log('-- updating or adding co_grants repo --');
            console.log('error: ' + error);
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            return res.send(stdout + "\n" + stderr + "\nDONE.");
        });
    });
  
}

module.exports = appRouter;