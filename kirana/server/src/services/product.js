const Products = require("../../models").Products;
const slugify = require("slugify");
const cloudinary = require("../../config/cloudinaryConfig");

/**@function : create product */
exports.createProduct = async (productObj, files) => {
  let {
    name,
    price,
    description,
    offer,
    quantity,
    category,
    reviews,
  } = productObj;

  // cloudinary image promise
  let cloudinaryImageUploadPromise = async (file) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(file, (err, result) => {
        try {
          if (err) reject("Product image failed to upload..");
          else resolve(result.url);
        } catch (err) {
          reject(err);
        }
      });
    });
  };

  let urls = [];

  for (const file of files) {
    const { path } = file;
    const newPath = await cloudinaryImageUploadPromise(path);

    urls.push({ img: newPath });
  }

  // creating product promise
  return new Promise(async (resolve, reject) => {
    await Products.create({
      name,
      price,
      description,
      offer,
      productPictures: JSON.stringify(urls.map((url) => url)),
      reviews,
      slug: slugify(name),
      quantity,
      category,
    })
      .then((product) => {
        if (!product) {
          reject("Product not created");
        }
        resolve(product);
      })
      .catch((err) => {
        let errs = err.errors;
        let Obj = {};

        for (item in errs) {
          let message = errs[item].message;
          let path = errs[item].path;

          Obj.message = message;
          Obj.path = path;
        }

        reject(Obj);
      });
  });
};

exports.getProducts = () => {
  return new Promise(async (resolve, reject) => {
    await Product.findAll({
      include: [
        {
          model: User,
        },
      ],
    })
      .then((product) => {
        try {
          if (!product) {
            reject("Product not found");
          }

          resolve(product);
        } catch (err) {
          reject(err);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
