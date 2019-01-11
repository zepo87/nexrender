'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const router        = require('./routers/');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('common'));

app.use('/api', router);

module.exports = {
    start: function(port) {
        app.listen(port, function () {
            console.log('nexrender.server is listening on port:', port);
        });
    }
};
