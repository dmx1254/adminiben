// Cart model creating with mongoose

const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
          required: true,
        },

        qty: {
          type: Number,
          default: 1,
        },
        productPrice: {
          type: Number,
          required: true,
        },
        productTitle: {
          type: String,
          required: true,
        },
        productCategory: {
          type: String,
          required: true,
        }
      },
    ],

    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

const CartModel = mongoose.model("cart", cartSchema);
module.exports = CartModel;
