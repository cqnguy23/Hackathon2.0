const Item = require("../models/item.model");
const Ticket = require("../models/ticket.model")
const ticketController = {};

// ticketController.getTickets((req, res, next) => {});

ticketController.createTicket=async(req, res, next) => {
    try {
        let {name, address, phoneNumber, items, type} = req.body;
        
        
        let request = await Ticket.create({
         name,
         address,
         phoneNumber,
         items,
         type
        }
        );

    res.send({
        "data": request,
    })
    } catch (error) {
        next(error)
    }
}



module.exports = ticketController;
