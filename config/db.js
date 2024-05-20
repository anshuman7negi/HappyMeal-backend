const Pool = require('pg').Pool

const pool = new Pool({
    users: "postgres",
    host: "localhost",
    database: "happy-meal",
    password: "Anshuman@108",
    port: 5432,
})

module.exports = pool;