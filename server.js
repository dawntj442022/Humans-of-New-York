require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const methodOverride = require("method-override");

const PORT = process.env.PORT || 3000;

const humanController = require("./controllers/humanController");
const userController = require("./controllers/user/userController");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const setupMiddleware = require("./middleware/setupMiddleware");

setupMiddleware(app);
app.use(methodOverride("_method"));

// function logger(req, res, next) {
//   console.info(req.path);
//   next();
// }
// app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use("/humans", humanController);
app.use("/user", userController);

app.get("/", (req, res) => {
  res.redirect("/humans/");
});

app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
