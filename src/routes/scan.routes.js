const router = require("express").Router();
const scan = require("../controllers/scan.controller");

router.post("/", scan.scan);

module.exports = router;
