const express = require("express");
const app = express();
const cors = require("cors");
const port = 3006;
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Node server is responding" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
