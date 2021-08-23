const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = Schema(
  {
    status: {
      type: String,
      enum: {
        values: ["not processed", "in progress", "done"],
      },
      default: "not processed",
    },
    name: String,
    priority: {
      type: String,
      enum: {
        values: ["low", "medium", "high"],
      },
      default: "low",
    },
    address: String,
    district: String,
    phoneNumber: String,
    items: [{ type: Schema.ObjectId, ref: "Item" }],
    type: {
      type: String,
      enum: {
        values: ["send", "receive"],
      },
    },
    date: {
      type: String,
      enum: {
        values: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      default: "low",
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
