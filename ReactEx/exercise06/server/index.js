const express = require("express");
const cors = require("cors");

const connection = require("./database");

const app = express();
app.use(cors());
// read data posted from front end
app.use(express.json());
// read data from url
app.use(express.urlencoded({ extended: false }));

const port = 3012;

/*app.get("/", async function (req, res) {
  config.connect(function (err) {
    if (err) throw err;
    res.send("finally connected");
  });
});*/

app.get("/", async function (req, res) {
  let sql = "SELECT * FROM task";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, function (err) {
  console.log("listening......." + port);
});
