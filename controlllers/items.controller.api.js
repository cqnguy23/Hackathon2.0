const Ticket = require("../models/ticket.model");

const itemsController = {};
itemsController.getAllItems = async (req, res, next) => {
  try {
    let tickets = await Ticket.find({}).populate("items");

    res.status(200).send({
      success: true,
      data: tickets,
      message: "GET ALL TICKETS",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = itemsController;
