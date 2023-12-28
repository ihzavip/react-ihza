const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// app.use(express.json());
app.use(cors());

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ihzadb",
  port: 3307,
});

app.get("/", (req, res) => {
  return res.json("From Server");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/register", urlEncodedParser, (req, res) => {
  const { email, username, password } = req.body;

  const sql = "INSERT INTO users (email, username, password, created_at) VALUES (?, ?, ?, ?)";
  const values = [email, username, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("error inserting data to DB", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log("data inserted into the DB");
      res.json({ success: true });
    }
  });
});

app.listen(8081, () => {
  console.log("Listening");
});
