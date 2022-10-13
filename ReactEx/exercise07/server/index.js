const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo");
const app = express();
app.use(cors());
// read data posted from front end
app.use(express.json());
// read data from url
app.use(express.urlencoded({ extended: false }));
app.use("/", todoRouter);

const port = 3012;

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ error: err.message });

  return;
});

app.listen(port, function (err) {
  console.log("listening......." + port);
});
