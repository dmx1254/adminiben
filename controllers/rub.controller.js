const rubModel = require("../modals/rubModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.createRub = async (req, res) => {
  const { rub } = req.body;

  try {
    const allRub = await rubModel.create({ rub });
    res.status(200).json(allRub);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateRub = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconu" });

  try {
    const updatedRub = await rubModel.findByIdAndUpdate(
      id,
      {
        $set: {
          rub: req.body.rub,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedRub);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getAllRub = async (req, res) => {
  try {
    const allRubs = await rubModel.find();
    res.status(200).json(allRubs);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getSingleRub = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const getOneRub = await rubModel.findById(id);
    res.status(200).json(getOneRub);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteRub = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const deletedRub = await rubModel.findByIdAndDelete(id);
    res.status(200).json(deletedRub);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
