import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../database.js";

// REGISTER USER
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    db.query("SELECT * FROM user WHERE id = ?", [username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists.");

      db.query(
        "INSERT INTO user VALUES (?, ?)",
        [username, passwordHash],
        (err, data) => {
          if (err) return res.status(500).json(err);

          console.log(data);

          return res.status(201).json(data);
        }
      );

      db.query(
        "INSERT INTO client (userID) VALUES (?)",
        [username],
        (err, data) => {
          if (err) return res.status(500).json(err);
        }
      );

    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// LOGGIN IN
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    db.query(
      "SELECT * FROM user WHERE id = ?",
      [username],
      (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0)
          return res.status(404).json({ msg: "User not found." });
        
        const isMatch = bcrypt.compare(req.body.password, data[0].password);

        if (!isMatch)
          return res.status(400).json({ msg: "Invalid credentials." });

        const token = jwt.sign(
          { id: data[0].username },
          process.env.JWT_SECRET,
          {
            expiresIn: "1hr",
          }
        );

        res
          .cookie("access_token", token, { httpOnly: true })
          .status(200)
          .json(data[0].id);
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
