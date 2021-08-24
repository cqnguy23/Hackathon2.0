const Item = require("../models/item.model");
const faker = require("faker");
const Ticket = require("../models/ticket.model");

const foosController = {};
const statusArray = ["not processed", "in progress", "done"];
const districtArray = [
  "Quận 1",
  "Quận 2",
  "Quận 3",
  "Quận 4",
  "Quận 5",
  "Quận 6",
  "Quận 7",
  "Quận 8",
  "Quận 9",
  "Quận 10",
];
const itemsArray = ["Gạo", "Mì Gói", "Trứng", "Sữa", "Quần Áo", "Dầu Ăn"];
const itemsType = ["send", "receive"];
const priorityType = ["low", "medium", "high"];
const dateArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
foosController.createTickets = async (req, res, next) => {
  for (let i = 0; i < 20; i++) {
    let itemsList = [1, 2, 3, 4];
    itemsList = await Promise.all(
      itemsList.map(async (item) => {
        let temp = await Item.create({
          name: itemsArray[Math.floor(Math.random() * itemsArray.length)],
          quantity: Math.ceil(Math.random() * 10),
          type: itemsType[Math.floor(Math.random() * itemsType.length)],
        });
        return temp;
      })
    );

    const fakeTicket = {
      address: faker.address.streetAddress(),
      name: faker.name.firstName(),
      priority: priorityType[Math.floor(Math.random() * priorityType.length)],
      district: districtArray[Math.floor(Math.random() * 10)],
      items: itemsList,
      phoneNumber: faker.phone.phoneNumber(),
      status: statusArray[Math.floor(Math.random() * 3)],
      date: dateArray[Math.floor(Math.random() * dateArray.length)],
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
