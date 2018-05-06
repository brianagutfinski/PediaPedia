const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const APIRoutes = require("./routes/API");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Add API Routes
// app.use("/api/article", APIRoutes);

// Send every request to the React app
// Define any API routes before this runs


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/PediaPediaDB");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
