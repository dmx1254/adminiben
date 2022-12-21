// order model creating with mongoose
//It stock all my orders

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    orderNum: {
      type: String,
      required: true,
    },

    products: [
      {
        productId: { type: String, required: true },
        category: {
          type: String,
          required: true,
        },
        server: {
          type: String,
          required: true,
        },
        qty: { type: Number, required: true },
        amount: {
          type: Number,
          required: true,
        },
        price: { type: Number, required: true },
        character: {
          type: String,
          required: true,
        },
      },
    ],

    address: {
      type: String,
    },

    status: {
      type: String,
      default: "En attente...",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("order", orderSchema);

module.exports = OrderModel;
