const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "happy_meal",
    password: "Anshuman@108",
    port: 5432,
})

module.exports = pool;