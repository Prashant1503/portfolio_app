const mongoose = require('mongoose');
const config = require('./config');


/** Connection set-up */
exports.connectDb = async () => {

    await mongoose.connect(
        config.db.mongo_uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        },
        (err, result) => {

            if (err) throw new Error(err);
            else console.log(`Mongo db connection success..`);
        });
}

