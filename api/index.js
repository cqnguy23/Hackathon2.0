const express = require("express");
const router = express.Router();

/* GET home page. */

//Ticket endpoint
const ticketApi = require("./ticket.api");
router.use("/ticket", ticketApi);

//Item endpoint
// const itemApi = require('./item.api');
// router.use("/item", itemApi);

module.exports = router;
