const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/revivew_app")
  .then(() => {
    console.log("db is connected");
  })
  .catch((ex) => {
    console.log("db connection failed: ", ex);
  });
