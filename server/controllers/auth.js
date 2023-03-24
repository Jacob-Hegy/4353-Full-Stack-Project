import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../database.js";

// REGISTER USER
export const register = async (req, res) => {
  const { username, password } = req.body;
  if (username.length > 256) { return res.status(409).json({msg: "Username too long" }); }
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);
  try {
    db.query("SELECT * FROM UserCredentials WHERE ID = ?", [username])
      .then((data) => {
        if (data[0].length) return res.status(409).json("User already exists.");
        db.query("INSERT INTO UserCredentials VALUES (?, ?)", [
          username,
          passwordHash,
        ]).then((data) => {
          db.query("INSERT INTO ClientInformation (ID) VALUES (?)", [
            username,
            ]).then((data) => {
              db.query("SELECT * FROM ClientInformation WHERE ID = ?", [
                username,
              ]).then((data) => {
                console.log(data);
                res.status(201).json(username);
              });
            });
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (error) {
    console.log(err);
    console.log("error occured in try catch block of register func");
    res.status(500).json({ error: error.message });
  }
};

// LOGGIN IN
export const login = async (req, res) => {
  const {username, password} = req.body;
  try {
    db.query("SELECT * FROM UserCredentials WHERE ID = ?", [username]).then(
      (data) => {
        if (data[0].length === 0)
          return res.status(404).json({ msg: "User not found." });
        const isMatch = bcrypt.compareSync(password, data[0][0].Password);

        if (!isMatch)
          return res.status(400).json({ msg: "Invalid credentials." });

        const token = jwt.sign({ id: data[0][0].ID }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        db.query("SELECT * FROM ClientInformation WHERE ID = ?", [data[0][0].ID])
          .then((data) => {
            res
              .cookie("token", token, { httpOnly: true })
              .status(200)
              .json(data[0][0]);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      }
    );
  } catch (error) {
    console.log(error);
    console.log("the error happened in the find user query");
    res.status(500).json({ error: error.message });
  }
};

// LOGGIN IN
export const logout = async (req, res) => {
  res.cookie("token", "").json(true);
}