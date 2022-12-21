const UserModel = require("../modals/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

//Get all users
module.exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find().select("-password");
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json(err);
  }
};

//Update single user
module.exports.getOneUser = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu " + id });

  try {
    const userInfo = await UserModel.findById(id).select("-password");
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Get user info by this e-mail
module.exports.getMail = async (req, res) => {
  const { mail } = req.params;

  try {
    const userInfo = await UserModel.findOne({ email: mail }).select(
      "-password"
    );
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update a specific user
module.exports.updateUser = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu " + id });

  const userFind = await UserModel.findById(id);
  const profi = userFind.profil;
  const lastnam = userFind.lastname;
  const firstnam = userFind.firstname;
  const phon = userFind.phone;
  const addres = userFind.address;
  const countr = userFind.country;
  const cit = userFind.city;

  try {
    const userUpdating = await UserModel.findByIdAndUpdate(
      id,
      {
        $set: {
          // profil: req.body.profil ? req.body.profil : profi,
          // lastname: req.body.lastname ? req.body.lastname : lastnam,
          // firstname: req.body.firstname ? req.body.firstname : firstnam,
          // phone: req.body.phone ? req.body.phone : phon,
          // address: req.body.address ? req.body.address : addres,
          // country: req.body.country ? req.body.country : countr,
          // city: req.body.city ? req.body.city : cit,
          moderator: req.body.moderator,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json(userUpdating);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Delete a specific user
module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu " + id });

  try {
    const userDeleted = await UserModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "User with ID: " + userDeleted._id + " is successfully deleted",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

//Get all users stats
module.exports.getStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const data = await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
