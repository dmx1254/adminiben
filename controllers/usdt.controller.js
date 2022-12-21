const RateUsdtModel = require("../modals/rateUsdt.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.createUsdt = async (req, res) => {
  const { usdt } = req.body;

  try {
    const allUsdt = await RateUsdtModel.create({ usdt });
    res.status(200).json(allUsdt);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateUsdt = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconu" });

  try {
    const updatedUsdt = await RateUsdtModel.findByIdAndUpdate(
      id,
      {
        $set: {
          usdt: req.body.usdt,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedUsdt);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getAllUsdt = async (req, res) => {
  try {
    const allUsdts = await RateUsdtModel.find();
    res.status(200).json(allUsdts);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
module.exports.getSingleUsdt = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const getOneUsdt = await RateUsdtModel.findById(id);
    res.status(200).json(getOneUsdt);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteUsdt = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const deletedUsdt = await RateUsdtModel.findByIdAndDelete(id);
    res.status(200).json(deletedUsdt);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
