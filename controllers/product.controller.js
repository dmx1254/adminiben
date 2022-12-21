const ProductModel = require("../modals/product.model");
const ObjectId = require("mongoose").Types.ObjectId;

//Create dofus product
module.exports.createProduct = async (req, res) => {
  const {
    title,
    description,
    image,
    category,
    headerDescription,
    serverPrice,
    inStock,
    servers,
  } = req.body;

  try {
    const productCreated = await ProductModel.create({
      title,
      description,
      image,
      category,
      headerDescription,
    });

    res.status(200).json(productCreated);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Get all dofus products
module.exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json({ Message: "Not products found" });
  }
};

//Get single dofus product
module.exports.getSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ message: "ID unknown" });

  try {
    const SingleProduct = await ProductModel.findById(id);
    res.status(200).json(SingleProduct);
  } catch (error) {
    res.status(400).json({ errors: "Cannot find product" });
  }
};

//Update dofus product
module.exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const productFind = await ProductModel.findById(id);
  const titl = productFind.title;
  const headerD = productFind.headerDescription;
  const descr = productFind.description;
  const imag = productFind.image;
  const catego = productFind.category;
  if (!ObjectId.isValid(id))
    return res.status(200).json({ Message: "Product unknown " + id });

  try {
    const productUpdated = await ProductModel.findByIdAndUpdate(
      id,
      {
        $set: {
          title: req.body.title ? req.body.title : titl,
          description: req.body.description ? req.body.description : descr,
          image: req.body.image ? req.body.image : imag,
          category: req.body.category ? req.body.category : catego,
          headerDescription: req.body.headerDescription
            ? req.body.headerDescription
            : headerD,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(productUpdated);
  } catch (error) {
    res
      .status(400)
      .json({ Message: "You are not permitted to update this products" });
  }
};

//Delete single product
module.exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(200).json({ Message: "Product unknown " + id });

  try {
    const productDeleted = await ProductModel.findByIdAndDelete(id);
    res.status(200).json(productDeleted);
  } catch (error) {
    res
      .status(400)
      .json({ Message: "You are not permitted to delete this product" });
  }
};

//Searching dofus product by category
module.exports.searchByCat = async (req, res) => {
  const { type: cat } = req.query;
  try {
    const catFind = await ProductModel.find({ category: cat });
    res.status(200).json(catFind);
  } catch (error) {
    res.status(400).json({ Message: " category not find" });
  }
};
