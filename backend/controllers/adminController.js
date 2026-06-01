const db = require("../config/db");

// Admin Login
const adminLogin = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM admins WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
          error: err,
        });
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "Admin Not Found",
        });
      }

      if (result[0].password !== password) {
        return res.status(401).json({
          message: "Invalid Password",
        });
      }

      res.status(200).json({
        message: "Login Successful",
        admin: result[0],
      });
    }
  );
};

module.exports = { adminLogin };

//login check
//add room
//update room
//delete room
//view booking
