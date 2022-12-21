// Code model creating with mongoose it stock code sending users for registration
const mongoose = require("mongoose");
const codeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const CodeModel = mongoose.model("code", codeSchema);
module.exports = CodeModel;