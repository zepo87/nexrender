'use strict';

const result = require('dotenv').config();
 
module.exports = {
    api:        require('./api'),
    Project:    require('./api/models/project'),
    server:     require('./server'),
    renderer:   require('./renderer'),
    version:    require('./package.json').version
};
