const express = require("express");
const cors = require("cors");
const app = express();

const GITHUB_TOKEN = "php_1234567890vd12345678vd"
app.use(cors());


app.get("/api/message", (req, res) => {
  res.json({
    status: "success",
    message: "Hello from Dockerized Backend 🚀"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
