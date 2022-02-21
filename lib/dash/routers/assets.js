const { Router } = require("express");
const router = Router();
var path = require("path");

router.get("/assets/css/main", async (req, res) => {
  res.sendFile(path.join(__dirname, "/../../src/pages/assets/css/main.min.css"));
});

router.get("/assets/imgs/github", async (req, res) => {
  res.sendFile(path.join(__dirname, "/../../src/pages/assets/imgs/github.png"));
});

router.get("/assets/imgs/logo", async (req, res) => {
  res.sendFile(path.join(__dirname, "/../../src/pages/assets/imgs/backend.png"));
});

router.get("/assets/js/jquery", async (req, res) => {
  res.sendFile(
    path.join(__dirname, "/../../src/pages/assets/js/jquery-2.1.4.min.js")
  );
});

router.get("/assets/js/main", async (req, res) => {
  res.sendFile(path.join(__dirname, "/../../src/pages/assets/js/main.min.js"));
});
router.get("/assets/imgs/bubbles-bg", async (req, res) => {
  res.sendFile(path.join(__dirname, "/../../src/pages/assets/imgs/bubbles-bg.png"));
});

module.exports = router;
