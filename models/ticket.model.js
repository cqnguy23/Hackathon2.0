const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = Schema(
  {
    status: {
      type: String,
      enum: {
        values: ["not processed", "in progress", "done"],
      },
    },
    name: String,
    priority: Number,
    address: String,
    phoneNumber: String,
    items: [{ type: Schema.ObjectId, ref: "Item" }],
    type: {
      type: String,
      enum: {
        values: ["send", "receive"],
      },
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
