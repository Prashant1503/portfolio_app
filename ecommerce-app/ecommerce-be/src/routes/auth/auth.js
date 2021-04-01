const route = require('express').Router();

// Controllers
const authController = require('../../controllers/auth/auth');

/**
 * @route : /signup
 * @params : {username,email,password}
 * @description : create new user
 */

route.post('/signup', authController.signUp);

/**
 * @route : /signin
 * @params : {email,password}
 * @description : sign in  user
 */
route.post('/signin', authController.signIn);

module.exports = route;