const express = require("express");
const pg = require("pg");

const PORT = 4776;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is Listening on 4776`);
});

app.get("/", (request, response) => {
  response.send("ok");
});
