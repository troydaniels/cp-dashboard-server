require("./src/database");
const express = require("express");
const bodyParser = require("body-parser");
const chalk = require('chalk');

var practitionersRouter = require('./src/routes/practitioners');
var appointmentsRouter = require('./src/routes/appointments');

const app = express();
const connected = chalk.bold.green;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/practitioners', practitionersRouter);
app.use('/appointments', appointmentsRouter);

app.listen(3000, () => {
    console.log(connected("Listening on localhost:3000..."));
});
