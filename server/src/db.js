const { Pool, Client } = require("pg");

// const PG_HOST = "localhost";
// const PG_PORT = 5447;
// const PG_USER = "gently";
// const PG_PASS = "gently";
// const PG_DATABASE = "gently";

let pool;

function getPool() {
    if (pool) return pool;

    pool = new Pool({
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        database: process.env.PGDATABASE,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
    });
    return pool;
}

module.exports = {
    getPool,
};
