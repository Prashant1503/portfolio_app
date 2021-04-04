const Category = require("../../models/").Category;
const SubCategory = require("../../models/").SubCategory;
const { v4: uuid } = require('uuid');
const slugify = require("slugify");
const { cloudinary } = require('../../config/cloudinaryConfig');
const shortid = require('shortid');

exports.createCategory = (categoryObj) => {
  return new Promise(async (resolve, reject) => {

    let { name, file } = categoryObj;




    // uploading image to cloudinary promise.
    let cloudinaryImageUploadPromise = async (file) => {
      return new Promise(async (resolve, reject) => {

        await cloudinary.uploader.upload(file, (err, result) => {
          try {
            if (err) reject("Product image failed to upload..");
            else resolve(result.url);
          } catch (err) {
            reject(err);
          }
        });
      });
    };

    let url = await cloudinaryImageUploadPromise(file);
    let id = uuid();


    try {

      await Category.create({

        name: name,
        "url": url,
        slug: slugify(name),
        parentId: id,

      })
        .then((category) => {

          resolve(category);

        })
        .catch((err) => {
          reject(err);
        });
    } catch (e) {
      reject(e);
    }


  });
};

exports.addSubCategory = (subCategoryObj) => {


  let { parentId, title } = subCategoryObj;


  return new Promise(async (resolve, reject) => {


    await SubCategory.create({

      "parentId": parentId,
      "subId ": JSON.stringify(shortid()),
      "title": title,
      "slug": slugify(title),


    })
      .then((item) => {

        try {
          if (!item) {
            reject("sub-category failed to save.");
          }

          resolve(item);
        } catch (err) {
          reject(err);
        }

      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getCategories = () => {
  return new Promise(async (resolve, reject) => {
    await Category.findAll({
      include: [
        {
          model: SubCategory,

        },
      ],
    })
      .then((data) => {
        // let categories = data.categories;

        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
