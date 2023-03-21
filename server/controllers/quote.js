export const addQuote = async (req, res) => {
    try {
        const { id } = req.params;
        const { address, city, state, zip, phone, productType, gals} = req.body;
        db.query("SELECT * FROM user WHERE id = ?", [id], (err, data) => {
          if (err) return res.status(500).json(err);

          // user found
          let price = gals * 3.98;
          if (data.length) {
            db.query(
              "INSERT INTO fuelquote (userID, productType, gals, price, street_address, phone, city, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
              [id, productType, gals, price, address, phone, city, state, zip],
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

export const getQuotes = async (req, res) => {
    try {
      const { id } = req.params;
      db.query("SELECT * FROM user WHERE id = ?", [id], (err, data) => {
        if (err) return res.status(500).json(err);

        // user found
        if (data.length) {
          db.query(
            "SELECT * FROM fuelquote where userID=?",
            [id],
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
