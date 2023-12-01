
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, your backend server is running!");
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

app.get("/upload", (req, res) => {
  res.send("This is the /upload route for testing GET requests.");
});

app.post("/upload", upload.single("file"), (req, res) => {
  // File has been uploaded and saved to the specified directory
  const originalFileName = req.file.originalname;
  res.json({ originalFileName });
  // res.sendStatus(200); // Respond with a 200 status code
  console.log("File uploaded successfully");
});

app.post("/saveData", (req, res) => {
  const data = req.body;
  const jsonFilePath = path.join(__dirname, "data", "data.json");

  try {
    // Read the existing JSON data (if any)
    let jsonData = [];
    if (fs.existsSync(jsonFilePath)) {
      jsonData = JSON.parse(fs.readFileSync(jsonFilePath));
    }

    // Add the new data to the JSON array
    jsonData.push(data);

    // Write the updated JSON data back to the file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData));

    res.sendStatus(200); // Respond with a 200 status code
    console.log("Data saved successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
    console.error("Error saving data:", error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});