const UserModel = require("../modals/user.model");
const CodeModel = require("../modals/code.models");
const jwt = require("jsonwebtoken");

//All my errors functions displaying when sign in or sign up errors
const { signUpErrors, signInErrors } = require("../utils/errors.utils");

//Define duration of the valid token
const maxAge = 3 * 24 * 60 * 60 * 1000;

//Function creating token with json web token
const createToken = (id, admin) => {
  return jwt.sign({ id, admin }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

//Users creating and saving in my database function
module.exports.signUp = async (req, res) => {
  const {
    email,
    password,
    code,
    isAdmin,
    moderator,
    profil,
    lastname,
    firstname,
    phone,
    address,
    country,
    city,
  } = req.body;
  const codeFinder = await CodeModel.findOne({ code: code });
  if (!codeFinder)
    return res.status(400).json({
      messageError: "Code introuvable, veuiller verifier votre addresse e-mail",
    });
  else {
    try {
      const userCreated = await UserModel.create({
        email,
        password,
        code,
        isAdmin,
        moderator,
        profil,
        lastname,
        firstname,
        phone,
        address,
        country,
        city,
      });
      res.status(200).json(userCreated);
    } catch (err) {
      const errors = signUpErrors(err);
      res.status(200).send({ errors });
    }
  }
};

//Users login function
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id, user.isAdmin);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id, person: user });
  } catch (error) {
    //const errors = signInErrors(err);
    res.status(200).json({ message: "Email ou mot de passe incorrect" });
  }
};

//Function to logout
module.exports.logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
  } catch (error) {
    res.status(400).json(error);
  }
};
