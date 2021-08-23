const faker = require("faker");
const Ticket = require("./models/ticket.model");

const statusArray = ["not processed", "in progress", "done"];

const deleteTicket = async () => {
  await Ticket.remove({}, () => {
    console.log("Delete Tickets");
  });
};
deleteTicket();
