require("./src/database");
const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const chalk = require('chalk');

const practitionersRouter = require('./src/routes/practitioners');
const appointmentsRouter = require('./src/routes/appointments');

const app = express();
const connected = chalk.bold.green;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/practitioners', practitionersRouter);
app.use('/appointments', appointmentsRouter);

app.listen(8080, () => {
    console.log(connected("Listening on localhost:8080..."));
});
