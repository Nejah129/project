
const Product = require("../model/Product");

//add product

exports.addProduct = async (req, res) => {
  const { name, description, category, price, quantity } = req.body;
  try {
    const newProduct =  new Product({
      name,
      description,
      category,
      price,
      quantity,
    });
    newProduct.save();
    res.send(newProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ errors: error.message });
  }
};

//delat product

exports.deletProduct = async (req, res) => {
  try {
    const deletedPrudect = await Product.findByIdAndDelete(req.params.id);
    res.send({ msg: `${deletedPrudect.name} was successfuly deleted` });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

//get all product
exports.getAllProducts = async (req, res) => {
  try {
    const findAllProducts = await Product.find().sort({ date: -1 });
    res.send(findAllProducts);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
//get one product by Id
exports.getOneProduct = async (req, res) => {
  try {
    const findeOneProdcut = await Product.findById(req.params.id);
    res.send(findeOneProdcut);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
