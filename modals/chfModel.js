const mongoose = require("mongoose");

const chfTransfertSchema = new mongoose.Schema(
  {
    chf: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const chfModel = mongoose.model("chfStore", chfTransfertSchema);

module.exports = chfModel;
