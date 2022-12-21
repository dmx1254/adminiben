const mongoose = require("mongoose");

const usdtSchema = new mongoose.Schema(
  {
    usdt: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const RateUsdtModel = mongoose.model("usdt", usdtSchema);

module.exports = RateUsdtModel;
