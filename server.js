require("dotenv").config();

/**
 * Requirements
 */
const mongoose = require("mongoose");
const express = require("express");
const app = express();

/**
 * Configuration
 */
const PORT = 3000;

/**
 * Controllers
 */
// const humanController = require("./controllers/humanController");
// const userController = require("./controllers/userController");

//... and then farther down the file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
// //* Middleware
// //*/
// const setupMiddleware = require("./middleware/setupMiddleware");

// setupMiddleware(app);
// // /**
//  * View engine
//  */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

/**
 * Controllers
 */

//

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
