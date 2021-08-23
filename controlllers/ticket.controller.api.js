const Item = require("../models/item.model");
const Ticket = require("../models/ticket.model");
const ticketController = {};

// ticketController.getTickets((req, res, next) => {});

ticketController.createTicket = async (req, res, next) => {
  try {
    let { name, address, phoneNumber, items, type } = req.body;

    let itemsObject = await Promise.all(
      items.map((item) => {
        let itemDB = Item.create({
          name: item.name,
          quantity: item.quantity,
        });
        return itemDB;
      })
    );

    let request = await Ticket.create({
      name,
      address,
      phoneNumber,
      items: itemsObject,
      type,
    });

    res.send({
      data: request,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = ticketController;
