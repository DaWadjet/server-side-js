const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static("static"));

// Load routing
require("./routes/routes")(app);

const server = app.listen(port, function () {
  console.log(`Express listening on http://localhost:${port}/`);
});
