const jwt = require("jsonwebtoken");
const UserModel = require("../modals/user.model");


//This middleware check if user is admin or not
//If user is admin he can do a lot of actions
module.exports.checkAdmin = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log("admin token not find");
        return res.status(400).send("token for admin not find");
      } else {
        const findAdmin = decodedToken.admin;
        if (findAdmin === true) {
          const userAdmin = await UserModel.findOne({ isAdmin: findAdmin });
          next();
        } else {
            return res.status(400).json({"Message": "You are not a admin"})
        }
      }
    });
  } else {
    return res.status(200).json({ Message: "Token not found" });
  }
};
