const User = require("../../models").User;
const bcrypt = require("bcryptjs");
const Product = require("../../models").Product;
const jwt = require("jsonwebtoken");
const { sequelize, Op, fn } = require("sequelize");
const passport = require('passport');


require("dotenv").config();

exports.register = (userObj) => {

  let { firstName, lastName, userName, email, password } = userObj;

  return new Promise(async (resolve, reject) => {

    let bcryptPassword = bcrypt.hashSync(password, 10);

    await User.findOrCreate({
      where: {
        firstName,
        lastName,
        userName,
        email,
        password: bcryptPassword,
      },
    })

      .then((data) => {

        resolve(data);

      })
      .catch((err) => {

        let e = err.errors[0].message;
        reject(e);
      });
  });
};

/** @function : sign-in user */
exports.signInUser = (userName, password) => {
  return new Promise(async (resolve, reject) => {

    await User.findOne({
      where: { userName },
    })
      .then(async (user) => {
        if (!user) {
          reject("User doesn\t exists..");
        }

        // retreiving stored password from db
        let storedPassword = user.password;

        try {

          let isValid = await bcrypt.compare(password, storedPassword);

          if (!isValid) {
            reject("Invalid password");
          }

          // generate token
          await jwt.sign({ id: user.id }, process.env.jwt_secret_key, { expiresIn: "1h" },
            (err, token) => {
              if (err) {
                reject(err);
              }

              resolve(token);
            }
          );
        } catch (e) {
          reject(e);
        }

      })
      .catch((err) => {
        reject(err);
      });
  });
};


