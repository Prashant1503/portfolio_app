const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const env = require('dotenv');
const User = require('../models').User;


env.config();

// config passport
passport.use(
    new googleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
        (accessToken, refreshToken, profile, cb) => {

            console.log("Profile :" + profile);
            User.findOne({
                where: {
                    "email": profile.email
                }
            })
                .then((user) => {

                    if (user) {
                        cb(null, user);
                    }
                    else {

                        console.log("Created ");
                    }

                })
                .catch(err => {
                    cb(err, null);
                })

        }
    )
);

module.exports = passport;
