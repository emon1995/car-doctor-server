const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Doctor car server`);
});

app.listen(port, () => {
  console.log(`Doctor Server is running port ${port}`);
});
