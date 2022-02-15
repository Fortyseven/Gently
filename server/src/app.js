const express = require("express");
const discover = require("express-route-discovery");

const cases = require("./api/cases");
const case_ = require("./api/case");

require("dotenv").config();

const PORT = process.env.GENTLY_PORT;

/* ---------------------------------- */

if (!PORT) {
    throw "GENTLY_PORT not defined";
}

const app = express();

app.listen(PORT, () => {
    console.log(`Server is Listening on 4776`);
});

const logger = function (req, res, next) {
    console.log(">", req.method, req.originalUrl);
    next();
};

app.use(logger);

// dump our routes
app.get("/", (req, res) => {
    res.send(app.locals.routes);
});

app.use("/cases", cases);
app.use("/case", case_);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something borked!");
});

app.locals.routes = discover(app);
