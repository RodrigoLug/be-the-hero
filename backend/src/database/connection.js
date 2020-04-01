const Knex = require('knex');
const configuration = require('../../Knexfile');

const connection = Knex(configuration.development);

module.exports = connection;
