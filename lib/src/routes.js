const { readdirSync } = require("fs");

function finder(directory) {
  const file = readdirSync(`${__dirname}${directory}`);
  const filtered = file.filter((file) => file.split(".").pop() === "js");
  return filtered;
}

class Routers {
  constructor(app) {
    this.app = app;
  }
  loadEndpoints() {
    let files = finder('/../dash/routers/');
    for (let i = 0; i < files.length; i++) {
      if (!files.length) throw Error("No Endpoints Found.");
      this.app.use("", require(`${__dirname}/../dash/routers/${files[i]}`));
    }
  }
}
module.exports = Routers;
