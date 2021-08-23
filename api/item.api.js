const express = require("express");
const itemsController = require("../controlllers/items.controller.api");
const router = express.Router();

router.get("/", itemsController.getAllItems);

module.exports = router;
