const express = require("express");
const ticketController = require("../controlllers/ticket.controller.api");
const router = express.Router();


/**
 * @route POST 
 * @description create ticket
 * @access login required
 */
router.post("/", ticketController.createTicket);

module.exports = router;