/**
 * Run Integration Tests
 *
 * Uses the waterline-adapter-tests module to
 * run mocha tests against the currently implemented
 * waterline API.
 */

var tests = require('waterline-adapter-tests'),
    adapter = require('../../lib/adapter'),
    mocha = require('mocha');

console.log('testing');

/**
 * Build a Redis Config File
 */

var config = {
  host: 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: 'sailsRd',
  port: 5432
};

/**
 * Run Tests
 */

var suite = new tests({ adapter: adapter, config: config });
