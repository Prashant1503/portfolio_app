const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const shortid = require('shortid');

const categoryController = require('../controller/category');
const authMiddleware = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleBasedMiddleware');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "uploads"));
    },

    filename: function (req, file, cb) {
        cb(null, shortid.generate() + "-" + file.originalname);
    },
});

const upload = multer({ storage });


router.post('/create-category',
    authMiddleware,
    isAdmin,
    upload.single('categoryImage'),
    categoryController.createCategory
);


router.post('/subcategory-create', authMiddleware, isAdmin, categoryController.createSubCategory);

router.get('/all', categoryController.getCategories);


module.exports = router;