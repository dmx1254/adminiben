const jwt = require("jsonwebtoken");
const UserModel = require("../modals/user.model");

//It's my middleware checking if token exist or not
//if token exist after login it's ok else the funcion middleware return an error in this case you won't to log

module.exports.checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    return res.status(200).send("No token find");
  }
};

module.exports.requireAuth = async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(400).json({ message: "No Token" });
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    return res.status(400).send("No token find");
  }
};
