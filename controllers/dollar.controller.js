const RateDollarModel = require("../modals/rateDollar.model");
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.createDollar = async (req, res) => {
  const { dollar } = req.body;

  try {
    const allDollar = await RateDollarModel.create({ dollar });
    res.status(200).json(allDollar);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateDollar = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconu" });

  try {
    const updatedDollar = await RateDollarModel.findByIdAndUpdate(
      id,
      {
        $set: {
          dollar: req.body.dollar,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedDollar);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getAllDollar = async (req, res) => {
  try {
    const allDollars = await RateDollarModel.find();
    res.status(200).json(allDollars);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
module.exports.getSingleDollar = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const getOneDollar = await RateDollarModel.findById(id);
    res.status(200).json(getOneDollar);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteDollar = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const deletedDollar = await RateDollarModel.findByIdAndDelete(id);
    res.status(200).json(deletedDollar);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
