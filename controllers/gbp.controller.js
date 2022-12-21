const RateGbpModel = require("../modals/rateGbp.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.createGbp = async (req, res) => {
  const { gbp } = req.body;

  try {
    const gbpCreated = await RateGbpModel.create({ gbp });
    res.status(200).json(gbpCreated);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateGbp = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconu" });

  try {
    const updatedGbp = await RateGbpModel.findByIdAndUpdate(
      id,
      {
        $set: {
          gbp: req.body.gbp,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedGbp);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getAllGbp = async (req, res) => {
  try {
    const allGbps = await RateGbpModel.find();
    res.status(200).json(allGbps);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
module.exports.getSingleGbp = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const getOneGbp = await RateGbpModel.findById(id);
    res.status(200).json(getOneGbp);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteGbp = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const deletedGbp = await RateGbpModel.findByIdAndDelete(id);
    res.status(200).json(deletedGbp);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
