import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../database.js";

// REGISTER USER
export const register = async (req, res) => {
  // try {
  //   console.log("yep this is the register");
  const { username, password } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);

  try {
    db.query("SELECT * FROM user WHERE id = ?", [username])
      .then((data) => {
        if (data[0].length) return res.status(409).json("User already exists.");

        db.query("INSERT INTO user VALUES (?, ?)", [username, passwordHash])
          .then((data) => {
            return res.status(201).json(data[0][0]);
          })
          .catch((err) => {
            res.status(500).json(err);
          });
      })
      .catch((err) => res.status(500).json(err));
  } catch (error) {
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

        const token = jwt.sign(
          { id: data[0].username },
          process.env.JWT_SECRET,
          {
            expiresIn: "1hr",
          }
        );

        console.log(data[0][0]);
        res.cookie("token", token).status(200).json(data[0][0]);
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
