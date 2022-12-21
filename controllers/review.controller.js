const ReviewModel = require("../modals/review.model");
const UserModel = require("../modals/user.model");

const ObjectId = require("mongoose").Types.ObjectId;


//Create review
module.exports.createReview = async (req, res) => {
  const { userId, title, message, reviews, firstName, email, status } =
    req.body;

  const verifiedUser = await UserModel.findOne({ email: email });
  if (!verifiedUser)
    return res.status(400).json({
      message:
        "Vous n'etes pas encore inscrit, inscrivez vous pour poster des avis",
    });

  try {
    const postReview = await ReviewModel.create({
      userId,
      title,
      message,
      reviews,
      firstName,
      email,
      status,
    });

    res.status(200).json(postReview);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};


//Get all reviews
module.exports.getAllReviews = async (req, res) => {
  try {
    const allReviews = await ReviewModel.find({ status: true });
    res.status(200).json(allReviews);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Delete review
module.exports.deleteReview = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID inconnu " + id });

  try {
    const deletedReview = await ReviewModel.findByIdAndDelete(id);
    res.status(200).json("Successfully deleted review");
  } catch (error) {
    res.status(400).json(error);
  }
};


//Update reviews
module.exports.updateReview = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID unknown " + id });

  try {
    const updatedReview = await ReviewModel.findByIdAndUpdate(
      id,
      {
        $set: {
          status: req.body.status,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getSingleUserReview = async (req, res) => {
  const { userReviewId } = req.params;

  if (!ObjectId.isValid(userReviewId))
    return res.status(400).json({ message: "Id unknown" });

  try {
    const singleUserReview = await ReviewModel.findOne({
      userId: userReviewId,
    });
    res.status(200).json(singleUserReview);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
