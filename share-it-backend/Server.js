const path = require("path");
const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
const router = require("./Router.js");
const dotenv = require("dotenv").config();

//Setting up Environment

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../share-it-app/build")));

  app.get("*", (req, res, next) =>
    res.sendFile(path.join(__dirname, "share-it-app", "build", "index.html"))
  );
} else {
  app.get("/", (req, res, next) => {
    res.send("App is Running....");
  });
}
connectDB();

//Setting port
const port = process.env.PORT || 4000;

//Listening to port
app.listen(port, () => console.log(`Server Running at port ${port}`));
