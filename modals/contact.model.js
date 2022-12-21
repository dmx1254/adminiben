// contact model creating with mongoose
// users ask questions
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ContactModel = mongoose.model("contact", contactSchema);

module.exports = ContactModel;
