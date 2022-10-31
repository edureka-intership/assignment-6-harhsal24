const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes/routes");

const app = express();
const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/myDATABASE";

mongoose.connect(
  MONGO_URI,
  () => {
    console.log("mongodb connected");
  },
  (e) => console.log(e)
);
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
