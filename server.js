const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
// const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
// DBConnect();

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("DB connected".blue.bold);
});

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`http://localhost:${port}`.yellow.bold);
});
