const express = require("express");

const PORT = 4776;

const gently_server = express();

gently_server.listen(PORT, () => {
  console.log(`Server is Listening on 4776`);
});

gently_server.get("/", (request, response) => {
  response.send("ok");
});
