const Item = require("../models/item.model");
const faker = require("faker");
const Ticket = require("../models/ticket.model");

const foosController = {};
const statusArray = ["not processed", "in progress", "done"];
const itemsArray = ["Gạo", "Mì Gói", "Trứng", "Sữa", "Quần Áo", "Dầu Ăn"];

foosController.createTickets = async (req, res, next) => {
  for (let i = 0; i < 10; i++) {
    let item1 = await Item.create({
      name: itemsArray[Math.floor(Math.random() * itemsArray.length)],
      quantity: Math.floor(Math.random() * 10),
    });
    let item2 = await Item.create({
      name: itemsArray[Math.floor(Math.random() * itemsArray.length)],
      quantity: Math.floor(Math.random() * 10),
    });

    let item3 = await Item.create({
      name: itemsArray[Math.floor(Math.random() * itemsArray.length)],
      quantity: Math.floor(Math.random() * 10),
    });

    const fakeTicket = {
      address: faker.address.streetAddress(),
      items: [item1, item2, item3],
      phoneNumber: faker.phone.phoneNumber(),
      status: statusArray[Math.floor(Math.random() * 3)],
    };
    await Ticket.create(fakeTicket);
  }
  res.send({ data: "Tickets Created" });
};
foosController.deleteTickets = async (req, res, next) => {
  Ticket.remove({}, () => {
    console.log("Tickets deleted");
  });
  Item.remove({}, () => {
    console.log("Items deleted");
  });
  res.send({ data: "Tickets deleted" });
};
module.exports = foosController;
