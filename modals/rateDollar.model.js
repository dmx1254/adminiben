const mongoose = require("mongoose");

const dollarSchema = new mongoose.Schema(
  {
    dollar: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const RateDollarModel = mongoose.model("dollar", dollarSchema);

module.exports = RateDollarModel;
