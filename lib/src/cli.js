var { exec } = require("child_process");

function execute(cmd, cb) {
  let cleanCmd = cmd.replace(/(["\s'$`\\])/g, "\\$1"); //Clean Out Unwanted Lethal Injections.
  exec(cleanCmd, function (error, stdout, stderr) {
    cb(stdout);
  });
}

module.exports = execute;
