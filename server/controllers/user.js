import jwt from "jsonwebtoken";
import db from "../database.js";

export const getUser = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, {}, (err, userId) => {
        if (err) {
          // expired token and other sorts of token errors
          console.log(err);
          res.status(403).json(null);
        }

        db.query("SELECT * from client WHERE userID=?", [userId.id])
          .then((data) => res.status(200).json(data[0][0]))
          .catch((err) => res.status(500).json(err));
      });
    } else {
      return res.json(null);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const saveProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, address1, address2, city, state, zip } = req.body;
    db.query("SELECT * FROM UserCredentials WHERE ID = ?", [id], (err, data) => {
      if (err) return res.status(500).json(err);
      // user found
      if (data.length) {
        db.query(
          "UPDATE ClientInformation SET Name = ?, Address1 = ?, Address2 = ?, City = ?, State = ?, ZipCode = ? WHERE ID = ?",
          [fullname, address1, address2, city, state, zip, id],
          (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data[0]);
          }
        );
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};