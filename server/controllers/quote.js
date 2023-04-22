import db from "../database.js";

export const addQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const { address, date, gals } = req.body;
    console.log(date);
    db.query("SELECT * FROM ClientInformation WHERE id = ?", [id])
      .then((data) => {
        if (data.length) {
          let ppG = 1.50;
          var locale = (data[0][0].State == 'TX') ? .02 : .04;
          db.query("SELECT COUNT(*) AS count FROM FuelQuotes WHERE ID = ?", [id])
          .then((data) => {
            let hist = data[0][0].count;
            let galsReq = (gals > 1000) ? .02 : .03;
            let margin = (locale - (.01 * (hist > 0)) + galsReq + .1) * ppG;
            let suggestedPrice = margin + ppG;
            var price = gals * suggestedPrice;
            db.query("INSERT INTO FuelQuotes (ID, GallonsRequested, SuggestedPrice, DeliveryAddress, DeliveryDate, Total) VALUES (?, ?, ?, ?, ?, ?)", [id, gals, suggestedPrice, address, date, price])
            .then((data) => {              
              res.status(200).json({price});
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getQuotes = async (req, res) => {
  try {
    const { id } = req.params;
    db.query("SELECT * FROM UserCredentials WHERE ID=?", [id])
      .then((data) => {
        // user found
        if (data.length) {
          db.query("SELECT * FROM FuelQuotes where ID=?", [id])
            .then((data) => {
              res.status(200).json(data[0]);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
