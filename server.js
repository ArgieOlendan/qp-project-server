const express = require("express");
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middlewares
app.use(body_parser.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan());
}

const db = require("./config/db/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

const routes = require("./api/routes");
routes(app);

app.listen(port, function () {
  console.log("Server started on port: " + port);
});
