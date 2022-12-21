const mongoose = require("mongoose");

const gbpSchema = new mongoose.Schema(
  {
    gbp: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const RateGbpModel = mongoose.model("gbp", gbpSchema);

module.exports = RateGbpModel;
