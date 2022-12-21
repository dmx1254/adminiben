const CartModel = require('../modals/cart.model');


//CREATE CART
module.exports.createCart =  async (req, res) => {
    const newCart = new CartModel(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //UPDATE CART
  module.exports.updatedCart = async (req, res) => {
    try {
      const updatedCart = await CartModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //DELETE CART
  module.exports.deletedCart =  async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //GET USER CART
  module.exports.getUserCart = async (req, res) => {
    try {
      const cart = await CartModel.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //GET ALL
  
  module.exports.getAllCart = async (req, res) => {
    try {
      const carts = await CartModel.find().sort({ createdAt: -1 });
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  