const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = Schema(
  {
    status: {
      type: String,
      enum: {
        values: ["Chưa gửi", "Đang gửi", "Hoàn Thành"],
      },
      default: "Chưa gửi",
    },
    name: { type: String, require: true },
    priority: {
      type: String,
      enum: {
        values: ["Thấp", "Trung Bình", "Cao"],
      },
      default: "Thấp",
    },
    address: String,
    district: String,
    phoneNumber: String,
    items: [{ type: Schema.ObjectId, ref: "Item" }],
    type: {
      type: String,
      enum: {
        values: ["Gửi", "Nhận"],
      },
    },
    date: {
      type: String,
      enum: {
        values: [
          "Thứ Hai",
          "Thứ Ba",
          "Thứ Tư",
          "Thứ Năm",
          "Thứ Sáu",
          "Thứ Bảy",
          "Chủ Nhật",
        ],
      },
      default: "Thấp",
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
