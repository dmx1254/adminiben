const CodeModel = require("../modals/code.models");

//Model who stock all my codes sending users for checking ater
module.exports.getAllCodes = async (req, res) => {
  try {
    const codes = await CodeModel.find();
    res.status(200).send(codes);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.findSingleCode = async (req, res) => {
  const { code } = req.params;
  console.log(code);
};


module.exports.createCode = async (req, res) => {
  const { code } = req.body;

  try {
    const codeCreated = await CodeModel.create({ code });
    res.status(200).json(codeCreated);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};


