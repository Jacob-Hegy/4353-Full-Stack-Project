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

        db.query("SELECT * from ClientInformation WHERE ID = ?", [userId.id])
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
    const stateList = {"Alabama": "AL", "Alaska": "AK", "American Samoa": "AS", "Arizona": "AZ", "Arkansas": "AR", "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE", "District Of Columbia": "DC", "Federated States Of Micronesia": "FM", "Florida": "FL", "Georgia": "GA", "Guam": "GU", "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA", "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Marshall Islands": "MH", "Maryland": "MD", "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", "Northern Mariana Islands": "MP", "Ohio": "OH", "Oklahoma": "OK", "Oregon": "OR", "Palau": "PW", "Pennsylvania": "PA", "Puerto Rico": "PR", "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT", "Virgin Islands": "VI", "Virginia": "VA", "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY"};
    db.query("SELECT * FROM UserCredentials WHERE ID = ?", [id], (err, data) => {
      if (err) return res.status(500).json(err);
      // user found
      if (data.length) {
        db.query(
          "UPDATE ClientInformation SET Name = ?, Address1 = ?, Address2 = ?, City = ?, State = ?, ZipCode = ? WHERE ID = ?",
          [fullname, address1, address2, city, stateList[state], zip, id],
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