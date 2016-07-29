var exec = require('child_process').exec;

        //initialize
//         exec("cd coloradodemography.github.io && git pull && jekyll build", {}, function(error, stdout, stderr) {
          
//             console.log('-- jekyll: building _site folder --');
//             console.log('error: ' + error);
//             console.log('stdout: ' + stdout);
//             console.log('stderr: ' + stderr);
          
//             // now load control panel
//             exec("cd coloradodemography.github.io/_site && git clone https://github.com/ColoradoDemography/Control-Panel.git", {}, function(error, stdout, stderr) {
//               console.log('-- adding Control Panel repo --');
//               console.log('error: ' + error);
//               console.log('stdout: ' + stdout);
//               console.log('stderr: ' + stderr);
//             });
          
//         });

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

    app.get("/update/load_repo", function(req, res) {
        var repo = req.query.repo;
        var command = "cd coloradodemography.github.io/_site && git clone https://github.com/ColoradoDemography/" + repo + ".git";
        exec(command, {}, function(error, stdout, stderr) {
            console.log('-- updating or adding ' + repo + ' repo --');
            console.log('error: ' + error);
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            return res.send(stdout + "\n" + stderr + "\nDONE.");
        });
    });
  
    app.get("/update/update_repo", function(req, res) {
        var repo = req.query.repo;
        var command = "cd coloradodemography.github.io/_site/" + repo + " && git pull";
        exec(command, {}, function(error, stdout, stderr) {
            console.log('-- updating or adding ' + repo + ' repo --');
            console.log('error: ' + error);
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            return res.send(stdout + "\n" + stderr + "\nDONE.");
        });
    });
   
    app.get("/update/update_repo", function(req, res) {
        var repo = req.query.repo;
        var command = "cd coloradodemography.github.io/_site/" + repo + " && git pull";
        exec(command, {}, function(error, stdout, stderr) {
            console.log('-- updating or adding ' + repo + ' repo --');
            console.log('error: ' + error);
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            return res.send(stdout + "\n" + stderr + "\nDONE.");
        });
    });
  
}

module.exports = appRouter;