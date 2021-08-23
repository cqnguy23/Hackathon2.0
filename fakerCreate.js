const faker = require("faker");
const Item = require("./models/item.model");
const Ticket = require("./models/ticket.model");

const statusArray = ["not processed", "in progress", "done"];

const createTicket = async () => {
  for (let i = 0; i < 10; i++) {
    let item1 = await Item.create({
      name: faker.commerce.productName(),
      quantity: Math.floor(Math.random() * 10),
    });
    item1.save();
    let item2 = await Item.create({
      name: faker.commerce.productName(),
      quantity: Math.floor(Math.random() * 10),
    });
    item2.save();

    let item3 = await Item.create({
      name: faker.commerce.productName(),
      quantity: Math.floor(Math.random() * 10),
    });
    item1.save();

    const fakeTicket = {
      address: faker.address.streetAddress(),
      items: [item1, item2, item3],
      phoneNumber: faker.phone.phoneNumber(),
      status: statusArray[Math.floor(Math.random() * 3)],
    };
    await Ticket.create(fakeTicket);
  }
};
createTicket();
