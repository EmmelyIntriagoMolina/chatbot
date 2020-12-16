const { createContainer, asClass, asFunction, asValue } = require('awilix');

// config
const config = require('../config');
//startup

//services

//controllers

//routes

const container = createContainer();

container.register(
    {
        config: asValue(config)
    }
)



module.exports = container;
