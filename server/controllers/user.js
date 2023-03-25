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

    db.query("SELECT * FROM ClientInformation WHERE ID = ?", [id])
      .then((data) => {
        console.log(data);
        // user found
        if(id2.length > 256) { res.status(403).json({msg: "ID too long" }); }
        if(fullname.length > 50) { res.status(403).json({msg: "Name too long" }); }
        if(address1.length > 100) { res.status(403).json({msg: "Address 1 too long" }); }
        if(address2.length > 100) { res.status(403).json({msg: "Address 2 too long" }); }
        if(city.length > 100) { res.status(403).json({msg: "City name too long" }); }
        if(!(state.toLowerCase() in stateList)) { res.status(403).json({msg: "Input a valid state" }); }
        // if(zip.length > 10) { res.status(403).json({msg: "Zipcode too long" }); } <-- Fuck this one in particular
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
            ]
          ).catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
        }
        if (id2.length && id2 != id) {
          db.query("UPDATE UserCredentials SET ID = ? WHERE ID = ?", [
            id2,
            id,
          ]).catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
          db.query("SELECT * FROM ClientInformation WHERE ID = ?", [id2])
            .then((data) => {
              console.log(data[0]);
              res.status(200).json(data[0]);
            })
            .catch((err) => {
              console.log(res.status(500).json(err));
            });
        } else return res.status(200).json(data[0]);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
