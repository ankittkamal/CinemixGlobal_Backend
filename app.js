require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { errorHandler } = require("./middlewares/error");
const cors = require("cors");

require("./db");
const userRouter = require("./routes/user");
const actorRouter = require("./routes/actor");
const movieRouter = require("./routes/movie");

const { handleNotFound } = require("./utils/helper");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use("/api/movie", movieRouter);

app.use("/*", handleNotFound);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("the port is running on port 8000");
});
