const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDb } = require('./config/db');
const morgan = require('morgan');
const app = express();


const corsOption = {
    port: 'http://localhost:5000/'
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(cors(corsOption));


/** Routes  */
const studentRoute = require('./routes/student');



app.use('/api/student', studentRoute);

/** Server listen */
const port = 5000;

connectDb();

app.listen(port, () => console.log(`Server started listening at : ${port}`));