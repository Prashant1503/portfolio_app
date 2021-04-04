const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");
const passport = require('../../config/googleAuth');

/**
 * @route : /signin
 * @method : POST
 * @access : public
 */
router.post("/signin", authController.signIn);

/**
 * @route : /signup
 * @method : POST
 * @access : public
 */
router.post("/signup", authController.signUp);


/**
 * @route : /google
 * @method : POST
 */

router.post('/google', passport.authenticate("google", {
    scope: ["profile", "email"]
}));



module.exports = router;
