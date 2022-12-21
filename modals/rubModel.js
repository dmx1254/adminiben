const mongoose = require("mongoose");

const rubTransfertSchema = new mongoose.Schema(
  {
    rub: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const rubModel = mongoose.model("rubStore", rubTransfertSchema);
module.exports = rubModel;
