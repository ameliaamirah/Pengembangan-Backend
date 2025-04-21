const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cros");
const userRoutes = require("./userRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});