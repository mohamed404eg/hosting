'use strict';

/**
 * pending-requests-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pending-requests-order.pending-requests-order');
