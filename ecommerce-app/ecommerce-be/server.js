const express = require('express');
const config = require('./constants/constant');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();



// app.use()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("token"));
app.use(bodyParser.json());
app.use(morgan("dev"));



// routes
const authRoute = require('./src/routes/auth/auth');


app.use('/api/v1/public/auth', authRoute);



// server listening
app.listen(config.PORT, () => console.log(`Server listening at port : ${config.PORT}`));