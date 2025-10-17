const pg = require('pg');
Require('dotenv').config();
const db = new pg.Pool({
  connectionString:
    process.env.DATABASE_URI,
});

module.exports = db;