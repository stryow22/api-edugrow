'use strict';

/**
 * grow-program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grow-program.grow-program');
