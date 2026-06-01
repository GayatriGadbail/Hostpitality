const db = require("../config/db");

// View All Rooms
const getRooms = (req, res) => {
  db.query("SELECT * FROM rooms", (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
        error: err,
      });
    }

    res.status(200).json(result);
  });
};

// Add Room
const addRoom = (req, res) => {
  const { room_number, room_type, price, status } = req.body;

  const sql =
    "INSERT INTO rooms (room_number, room_type, price, status) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [room_number, room_type, price, status],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to Add Room",
          error: err,
        });
      }

      res.status(201).json({
        message: "Room Added Successfully",
      });
    }
  );
};

module.exports = {
  getRooms,
  addRoom,
};