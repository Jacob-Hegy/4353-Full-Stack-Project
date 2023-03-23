import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../database.js";

// REGISTER USER
export const register = async (req, res) => {
  const { username, password } = req.body;
  if (username.length > 256) { return res.status(409).json({msg: "Username too long" }); }
  const salt = bcrypt.genSaltSync(1000);
  const passwordHash = bcrypt.hashSync(password, salt);

  try {
    db.query("SELECT * FROM user WHERE id = ?", [username])
      .then((data) => {
        if (data[0].length) return res.status(409).json("User already exists.");

        db.query("INSERT INTO user VALUES (?, ?)", [
          username,
          passwordHash,
        ]).then((data) => {
          db.query("SELECT * FROM user WHERE id=?", [username]).then((data) => {
            const newUserData = data[0][0];
            db.query("INSERT INTO client (userID) VALUES (?)", [
              newUserData.id,
            ]).then((data) => {
              console.log(newUserData);
              db.query("SELECT * FROM client WHERE userID=?", [
                newUserData.id,
              ]).then((data) => {
                console.log(data);
                const userData = data[0];
                res.status(201).json(userData);
              });
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
  try {
    db.query("SELECT * FROM user WHERE id = ?", [req.body.username]).then(
      (data) => {
        if (data[0].length === 0)
          return res.status(404).json({ msg: "User not found." });

        const isMatch = bcrypt.compareSync(
          req.body.password,
          data[0][0].password
        );

        if (!isMatch)
          return res.status(400).json({ msg: "Invalid credentials." });

        const token = jwt.sign({ id: data[0][0].id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        db.query("SELECT * FROM client WHERE userID=?", [data[0][0].id])
          .then((data) => {
            res
              .cookie("token", token, { httpOnly: true })
              .status(200)
              .json(data[0][0]);
          })
          .catch((err) => {
            console.log(err);
            console.log("the error happened in the find client query");
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