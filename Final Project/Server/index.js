
global.__basedir = __dirname;

const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

