const express = require('express');
const router = express.Router();

const { addToCart, removeCartItem } = require('../controller/cart');
const authMiddleware = require('../middleware/authMiddleware');
const { isUser } = require('../middleware/roleBasedMiddleware');


router.post('/add-item', authMiddleware, isUser, addToCart);

router.delete('/cart/delete-item', authMiddleware, isUser, removeCartItem);

module.exports = router;

