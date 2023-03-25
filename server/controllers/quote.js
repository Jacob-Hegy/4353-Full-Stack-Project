export const addQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const { address, date, gals } = req.body;
    db.query("SELECT * FROM UserCredentials WHERE id = ?", [id])
      .then((data) => {
        if (data.length) {
          let price = gals * 3.98;
          let total = 5000;
          db.query(
            "INSERT INTO FuelQuotes (ID, GallonsRequested, SuggestedPrice, DeliveryAddress, DeliveryDate, Total) VALUES (?, ?, ?, ?, ?, ?)", // DeliveryDate is currently set as data type "Date"; check functionality
            [id, gals, price, address, date, total]
          )
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
