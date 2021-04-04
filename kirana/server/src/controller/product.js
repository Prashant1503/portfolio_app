const {createProduct} = require("../services/product");
const { v4: uuidv4 } = require("uuid");
const shortid = require("shortid");

exports.createProduct = async(req, res) => {
  let productObj = { 
    name,
    price,
    description,
    offer,
    reviews,
    quantity,
    category,
  } = req.body;

  let file = req.files;

  const product = await createProduct(productObj,file);

  if(!product) {
    return res.status(400).json({msg : "Something went wrong"});
  }

  return res.status(200).json({product});
};

exports.getProduct = (req, res) => {
  productServices
    .getProducts()
    .then((product) => {
      return res.json({ product });
    })
    .catch((err) => {
      return res.json({ err });
    });
};
