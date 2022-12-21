const mongoose = require("mongoose");

const madTransfertSchema = new mongoose.Schema(
  {
    mad: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const madModel = mongoose.model("madStore", madTransfertSchema);

module.exports = madModel;
