import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
