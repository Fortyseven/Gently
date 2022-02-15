/* CASE */

const { Router } = require("express");
const { getPool } = require("../db");

var router = Router();

router.get("/:id", async function (req, response) {
    const pool = getPool();

    await pool.query(
        "SELECT * FROM cases WHERE id=$1",
        [req.params.id],
        (err, { rows, rowCount }) => {
            if (err || !rowCount) {
                return response.sendStatus(404);
            }
            response.json(rows[0]);
        }
    );
});

module.exports = router;
