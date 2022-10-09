const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const config = require("./config");

const app = express();
app.use(cors());
// read data posted from front end
app.use(express.json());
// read data from url
app.use(express.urlencoded({ extended: false }));

const port = 3001;

app.get("/", async function (req, res) {
  try {
    const connection = await mysql.createConnection(config.db);
    console.log(connection);
    res.status(200).send("Database connection was made successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port);
