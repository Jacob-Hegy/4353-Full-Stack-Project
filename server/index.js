import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import db from "./database.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// WELCOME
app.get("/", (req, res) => {
  res.send("Welcome to the Server");
});

/* TESTING DB CONNECTION */

db.query(`select * from fuel_quoting.Clients`, (err, res) => {
  return console.log(res);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
