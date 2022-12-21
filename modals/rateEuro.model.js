const mongoose = require("mongoose");

const euroSchema = new mongoose.Schema(
  {
    euro: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const RateEuroModel = mongoose.model("euro", euroSchema);

module.exports = RateEuroModel;
