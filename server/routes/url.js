const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/short", authMiddleware && urlController.short);
router.get("/:shortUrl", authMiddleware && urlController.redirect);

module.exports = router;
