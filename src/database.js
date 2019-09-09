require('dotenv').config();
const mongoose = require('mongoose');
const chalk = require('chalk');

const {DB_USER, DB_USER_PW} = process.env;
const server = 'cluster0-wmkaj.mongodb.net';
const database = 'coreplus';

const connected = chalk.bold.green;
const error = chalk.bold.red;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_USER_PW}@${server}/${database}`,  { useNewUrlParser: true })
    .then(() => {
        console.log(connected('Database connection successful'));
    })
    .catch(err => {
        console.error(error('Database connection error:', err));
    });
