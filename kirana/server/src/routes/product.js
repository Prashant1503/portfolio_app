const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },

  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/**
 * @route : /create
 * @method : POST
 * @access : PROTECTED
 */
router.post(
  "/create",
  upload.array("productImages"),
  productController.createProduct
);

/**
 * @route : /get-products
 * @method : GET
 * @access : public
 */
router.get("/get-products", productController.getProduct);

module.exports = router;
