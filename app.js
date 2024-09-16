const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const port = 3000;

const movieRoute = require("./routes/movie.route.js");

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/movies", movieRoute);

//  Data base connection
mongoose
  .connect(
    "mongodb+srv://anmongo:anmongo@cluster0.rgj0h.mongodb.net/cinema?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to the DB!");
    app.listen(port, () => {
      console.log("servidor a su servicio en el puerto", port);
    });
  })
  .catch((e) => console.log("ERROR", e));
