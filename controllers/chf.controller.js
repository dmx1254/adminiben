const chfModel = require("../modals/chfModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.createChf = async (req, res) => {
  const { chf } = req.body;

  try {
    const allChf = await chfModel.create({ chf });
    res.status(200).json(allChf);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateChf = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconu" });

  try {
    const updatedChf = await chfModel.findByIdAndUpdate(
      id,
      {
        $set: {
          chf: req.body.chf,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedChf);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getAllChf = async (req, res) => {
  try {
    const allChfs = await chfModel.find();
    res.status(200).json(allChfs);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getSingleChf = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const getOneChf = await chfModel.findById(id);
    res.status(200).json(getOneChf);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteChf = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const deletedChf = await chfModel.findByIdAndDelete(id);
    res.status(200).json(deletedChf);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
