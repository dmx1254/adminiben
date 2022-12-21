const mongoose = require("mongoose");

cadeTransfertSchema = new mongoose.Schema(
  {
    cad: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const cadModel = mongoose.model("cadStore", cadeTransfertSchema);
module.exports = cadModel;
