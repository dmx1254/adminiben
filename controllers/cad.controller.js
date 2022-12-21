const CadModel = require("../modals/cadeModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.createCad = async (req, res) => {
  const { cad } = req.body;

  try {
    const allCad = await CadModel.create({ cad });
    res.status(200).json(allCad);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateCad = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconu" });

  try {
    const updatedCad = await CadModel.findByIdAndUpdate(
      id,
      {
        $set: {
          cad: req.body.cad,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedCad);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getAllCad = async (req, res) => {
  try {
    const allCads = await CadModel.find();
    res.status(200).json(allCads);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getSingleCad = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const getOneCad = await CadModel.findById(id);
    res.status(200).json(getOneCad);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteCad = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu" });

  try {
    const deletedCad = await CadModel.findByIdAndDelete(id);
    res.status(200).json(deletedCad);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
