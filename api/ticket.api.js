const express = require("express");
const ticketController = require("../controlllers/ticket.controller");
const router = express.Router();

/**
 * @route POST
 * @description create ticket
 * @access login required
 */
router.get("/", ticketController.getTickets);
router.post("/", ticketController.createTicket);

module.exports = router;
