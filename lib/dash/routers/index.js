const { Router } = require("express");
var version = require("./../../../package.json").version;
const router = Router();
var path = require("path");
var execute = require("./../../src/cli");

router.get("/", async (req, res) => {
  res.render(path.join(__dirname, "/../../src/pages/home"), {
    version: version,
  });
});

router.get("/led-status", async (req, res) => {
  let id = req.query.id;
  if(!id) return res.status(403).json({result: "Please provide a LED ID to find the status of the LED."})
  execute(`gpio read ${id}`, function (result) {
    res.status(200).json({
      result: result
    });
  });
});

router.put("/led/:id", async (req, res) => {
  let id = req.params.id;
  let mode = req.query.state;
  
  if(!id) return res.status(403).json({result: "Please provide a LED ID."});
  if(!mode) return res.status(403).json({result: "Please provide a Mode (1/0 [True/False]).\nE.G: 1?state=1"});
  
  execute(`gpio mode ${id} output`);

	execute(`gpio write ${id} ${mode}`, function(result) {
		res.status(200).send({
			"result": result
		});
	});
});

module.exports = router;
