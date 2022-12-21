// users model creating with mongoose

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      validate: [isEmail],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      max: 1024,
    },
    code: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    moderator: {
      type: Boolean,
      default: false,
    },

    profil: {
      type: String,
    },
    lastname: {
      type: String,
    },
    firstname: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    } else {
      res.status(200).json({ message: "Mot de passe inconnu" });
    }
  } else {
    res.status(200).json({ message: "Utilisateur inconnu" });
  }
};

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
