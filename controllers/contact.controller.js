const ContactModel = require("../modals/contact.model");
const UserModel = require("../modals/user.model");

const ObjectId = require("mongoose").Types.ObjectId;


//Create message by users sending to the website for help
module.exports.createMessage = async (req, res) => {
  const { userId, email, message } = req.body;

  const verifiedUser = await UserModel.findOne({ email: email });
  if (!verifiedUser)
    return res.status(400).json({
      message:
        "Vous n'etes pas encore inscrit, inscrivez vous pour poster des messages",
    });

  try {
    const usersMessage = await ContactModel.create({ userId, email, message });

    res.status(200).json(usersMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//get all messages from contact model
module.exports.getAllMessages = async (req, res) => {
  try {
    const allMessages = await ContactModel.find();
    res.status(200).json(allMessages);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Get specific user message
module.exports.getUserMessage = async (req, res) => {
  const { userIdMessage } = req.params;

  if (!ObjectId.isValid(userIdMessage))
    return res.status(400).json({ message: "Invalid ID " + userIdMessage });

  try {
    const singleUserMessage = await ContactModel.findOne({
      userId: userIdMessage,
    });
    res.status(200).json(singleUserMessage);
  } catch (error) {
    res.status(400).json({ message: "Message introuvable" });
  }
};


//Delete user message to contact model
module.exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "Id unknown " + id });

  try {
    const messageDeleted = await ContactModel.findByIdAndDelete(id);
    res.status(200).send("Message successfully deleted !");
  } catch (error) {
    res.status(400).json({ error });
  }
};
