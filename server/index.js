const express = require("express");
const bodyParser = require("body-parser");
const mysql2 = require("mysql2");
const cors = require("cors");
// const urlencoded = require("body-parser/lib/types/urlencoded");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "adopt-form",
});

app.use(bodyParser.urlencoded({ extended: true }));

db.connect((error) => {
  if (error) {
    console.error("Error connecting...", error);
  } else {
    console.error("Connected");
  }
});

app.get("/api/get", (req, res) => {
  const query = "SELECT * FROM adopt_table";
  db.query(query, (error, result) => {
    res.send(result);
  });
});

// app.get("/", (req, res) => {
//   const sql =
//     "INSERT INTO `adopt-form`.`adopt_table` (`petType`, `breed`, `fullName`, `email`, `phone`) VALUES ('Cat', 'Persian', 'Lionel Messi', 'messi@gmail.com', '101010')";
//   db.query(sql, (err, res) => {
//     console.log("error", err);
//     console.log("result", res);
//     res.send("NodeJS Express");
//   });
// });

app.post("/adopt_users", (req, res) => {
  // const { petType, breed, name, email, phone } = req.body;

  // const sql = `INSERT INTO adopt_table (Pet Type, breed, Full Name, Email, Phone No.) VALUES (?, ?, ?, ?, ?)`;
  const petType = req.body.petType;
  const breed = req.body.breed;
  const fullName = req.body.fullName;
  const email = req.body.email;
  const phone = req.body.phone;
  const query =
    "INSERT INTO `adopt-form`.`adopt_table` (`petType`, `breed`, `fullName`, `email`, `phone`) VALUES (?,?,?,?,?)";
  const values = [petType, breed, fullName, email, phone];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error("Error inserting...", error);
      res.send({ error });
    } else {
      console.log("Successfully inserted!");
      res.send({ success: true });
    }
  });
});

app.post("/give_away_users", (req, res) => {
  const petType = req.body.petType;
  const breed = req.body.breed;
  const fullName = req.body.fullName;
  const email = req.body.email;
  const phone = req.body.phone;
  const query =
    "INSERT INTO `adopt-form`.`give_away_table` (`petType`, `breed`, `fullName`, `email`, `phone`) VALUES (?,?,?,?,?)";
  const values = [petType, breed, fullName, email, phone];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error("Error inserting...", error);
      res.send({ error });
    } else {
      console.log("Successfully inserted!");
      res.send({ success: true });
    }
  });
});

// app.post("/adopt_users", (req, res) => {
//   let data = { name: req.body.name };
//   let sql = "INSERT INTO adopt_table SET ?";
//   let query = db.query(sql, data, (err, results) => {
//     if (err) throw err;
//     res.send(JSON.stringify({ status: 200, error: null, response: results }));
//   });
// });

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
