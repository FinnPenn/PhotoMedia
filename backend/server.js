// backend/server.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 5000;


app.get("/", (req, res) => {
    res.send("Hello, your backend server is running!");
  });

app.get("/upload", (req, res) => {
res.send("This is the /upload route for testing GET requests.");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the directory where files will be saved
    cb(null, path.join(__dirname, "public/imgs"));
  },
  filename: function (req, file, cb) {
    // Define the filename for the uploaded file
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
    // File has been uploaded and saved to the specified directory
    res.sendStatus(200); // Respond with a 200 status code
    console.log("guckma hier!");
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});