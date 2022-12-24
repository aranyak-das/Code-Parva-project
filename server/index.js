const express = require("express");
const bodyParser = require("body-parser");
const mysql2 = require("mysql2");
const cors = require("cors");
// const urlencoded = require("body-parser/lib/types/urlencoded");

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "adopt-form",
});

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
  const query =
    "INSERT INTO `adopt-form`.`adopt_table` (`petType`, `breed`, `fullName`, `email`, `phone`) VALUES (?,?,?,?,?)";
  const values = [
    req.body.petType,
    req.body.breed,
    req.body.fullName,
    req.body.email,
    req.body.phone,
  ];

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
