import jwt from "jsonwebtoken";
import db from "../database.js";
import { stateList } from "../data/data.js";

export const getUser = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
        if (err) {
          // expired token and other sorts of token errors
          console.log(err);
          res.status(403).json(null);
        }
        console.log(user);
        db.query("SELECT * from ClientInformation WHERE ID = ?", [user.id])
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
    const { id2, fullname, address1, address2, city, state, zip } = req.body;

    db.query(
      "SELECT * FROM UserCredentials WHERE ID = ?",
      [id],
      (err, data) => {
        if (err) return res.status(500).json(err);
        console.log(data);
        // user found
        if (data.length) {
          db.query(
            "UPDATE ClientInformation SET Name = ?, Address1 = ?, Address2 = ?, City = ?, State = ?, ZipCode = ? WHERE ID = ?",
            [
              fullname,
              address1,
              address2,
              city,
              stateList[state.toLowerCase()],
              zip,
              id,
            ],
            (err, data) => {
              if (err) return res.status(500).json(err);
            }
          );
        }
        if (id2.length) {
          db.query(
            "UPDATE UserCredentials SET ID = ? WHERE ID = ?",
            [id2, id],
            (err, data) => {
              if (err) return res.status(500).json(err);
              return res.status(200).json(data[0]);
            }
          );
        } else return res.status(200).json(data[0]);
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};