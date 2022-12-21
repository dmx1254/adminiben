// Review  model creating with mongoose

//All users reviews are stocked in this model

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
    },

    message: {
      type: String,
      required: true,
    },

    reviews: {
      type: Number,
      required: true,
    },
    firstName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ReviewModel = mongoose.model("review", reviewSchema);

module.exports = ReviewModel;
