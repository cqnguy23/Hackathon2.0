const express = require("express");
const foosController = require("../controlllers/foos.controller.api");
const router = express.Router();

router.get("/seed", foosController.createTickets);
router.get("/delete", foosController.deleteTickets);

module.exports = router;
