/* CASES */

const { Router } = require("express");
const { getPool } = require("../db");

var router = Router();

router.get("/", async function (req, response) {
    const pool = getPool();

    await pool.query(
        "SELECT id, name, description FROM cases ORDER BY created",
        (err, { rows, rowCount }) => {
            if (err || !rowCount) {
                return response.sendStatus(404);
            }
            return response.json(rows);
        }
    );
});

module.exports = router;
