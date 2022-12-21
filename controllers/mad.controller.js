const madModel = require("../modals/madModel")
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.createMad = async (req, res) => {
  const { mad } = req.body;

  try {
    const allmad = await madModel.create({ mad });
    res.status(200).json(allmad);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateMad = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconu" });

  try {
    const updatedMad = await madModel.findByIdAndUpdate(
      id,
      {
        $set: {
          mad: req.body.mad,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedMad);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getAllMad = async (req, res) => {
  try {
    const allMads = await madModel.find();
    res.status(200).json(allMads);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
module.exports.getSingleMad = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const getOneMad = await madModel.findById(id);
    res.status(200).json(getOneMad);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteMad = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const deletedMad = await madModel.findByIdAndDelete(id);
    res.status(200).json(deletedMad);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
