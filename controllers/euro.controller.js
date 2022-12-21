const RateEuroModel = require("../modals/rateEuro.model");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports.createEuro = async (req, res) => {
  const { euro } = req.body;

  try {
    const allEuro = await RateEuroModel.create({ euro });
    res.status(200).json(allEuro);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateEuro = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconu" });

  try {
    const updatedEuro = await RateEuroModel.findByIdAndUpdate(
      id,
      {
        $set: {
          euro: req.body.euro,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedEuro);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getAllEuro = async (req, res) => {
  try {
    const allEuros = await RateEuroModel.find();
    res.status(200).json(allEuros);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
module.exports.getSingleEuro = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const getOneEuro = await RateEuroModel.findById(id);
    res.status(200).json(getOneEuro);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteEuro = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const deletedEuro = await RateEuroModel.findByIdAndDelete(id);
    res.status(200).json(deletedEuro);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.testIp = async (req, res) => {
  // const clientIpAddress = String(
  //   req.headers["x-forwarded-for"] || req.connection.remoteAddress
  // );
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  console.log(ip);
};
