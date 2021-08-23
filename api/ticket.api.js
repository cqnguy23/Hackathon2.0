const express = require("express");
const ticketController = require("../controlllers/ticket.controller.api");
const router = express.Router();

/**
 * @route POST
 * @description create ticket
 * @access login required
 */
router.post("/", ticketController.createTicket);

/**
 * @route GET
 * @description get all the tickets
 * @access public
 */
 router.get("/", ticketController.getTickets);

module.exports = router;
