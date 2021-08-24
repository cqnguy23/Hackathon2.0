const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = Schema(
  {
    owner: { type: Schema.ObjectId, ref: "Ticket" },
    name: { type: String, require: true },
    quantity: { type: Number, require: true },
    processType: String,
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
