const { v4: uuidv4 } = require('uuid')
const slugify = require('slugify');
const { createCategory, addSubCategory } = require('../services/category');


/** @function : create category */
exports.createCategory = async (req, res) => {

    // create categories.
    let categoryObj = {};

    categoryObj.name = req.body.name;
    categoryObj.file = req.file.path;

    try {

        await createCategory(categoryObj)
            .then((category) => {
                return res.status(500).json({ category });
            })
            .catch(err => {

                let name = err.name;
                let msg = err.errors[0].message;

                return res.status(500).json({ errName: name, err: msg });
            });
    } catch (e) {
        return res.status(400).json({ e });
    }


}


/** @function : sub-category */
exports.createSubCategory = async (req, res) => {
    let subCategoryObj = {};

    subCategoryObj.parentId = req.body.parentId;
    subCategoryObj.title = req.body.title;

    try {
        await addSubCategory(subCategoryObj)
            .then((data) => {

                return res.status(200).json({ data });
            })
            .catch(err => {
                console.log("Err :" + err);
                return res.status(500).json({ err });
            });




    } catch (err) {
        console.log("Err :" + err);
        return res.status(500).json(err);
    }

}



/** @function : create categories */



exports.getCategories = (req, res) => {


    categoryService.getCategories()
        .then((categories) => {
            return res.json({ categories });
        })
        .catch(err => {
            return res.status(500).json({ err });
        })


}