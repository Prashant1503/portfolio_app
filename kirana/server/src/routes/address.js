const express = require("express");
const route = express.Router();

const addressController = require("../controller/address");
const { isUser } = require("../middleware/roleBasedMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

route.post("/new", authMiddleware, isUser, addressController.addNewAddress);

route.delete('/delete/:id',authMiddleware,isUser,addressController.deleteAddress);

module.exports = route;
