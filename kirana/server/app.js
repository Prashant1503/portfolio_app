const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require('passport');
const app = express();

// config
env.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

// routes
const auth = require("./src/routes/auth");
const admin = require("./src/routes/admin");
const category = require("./src/routes/category");
const product = require("./src/routes/product");
const cart = require("./src/routes/cart");
const address = require("./src/routes/address");

/** Api for admin */

app.use("/api/v1/auth", auth);
app.use("/api/v1/admin", admin);
app.use("/api/v1/category", category);
app.use("/api/v1/product", product);

/** Api for users */
app.use("/api/v1/address", address);
app.use("/api/v1/cart", cart);

const port = process.env.PORT || 4001;

// server
app.listen(port, () => console.log(`Server listening at port : ${port}`));
