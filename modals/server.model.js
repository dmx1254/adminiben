// Server model creating with mongoose

//This model stock all server dofus

const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema(
  {
    serverName: {
      type: String,
      required: true,
      unique: true,
    },

    serverCategory: {
      type: String,
      required: true,
    },

    serverStatus: {
      type: String,
      required: true,
    },

    serverPrice: {
      type: Number,
      required: true,
    },
    serverMinQty: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ServerModel = mongoose.model("server", serverSchema);
module.exports = ServerModel;
