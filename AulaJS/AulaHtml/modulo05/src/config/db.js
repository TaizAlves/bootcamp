const { Pool } = require("pg")

module.exports = new Pool ({
    user: 'postgres',
    password: 'taiz4316',
    host: "localhost",
    port: 5432,
    database: "gymmanager"

})