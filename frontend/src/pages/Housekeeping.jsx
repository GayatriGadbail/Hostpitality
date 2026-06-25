import React, { useState } from "react";
import "./Housekeeping.css";

import {
  FiHome,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiClipboard,
  FiUsers,
  FiEye,
} from "react-icons/fi";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const trendData = [
  { day: "18 May", cleaned: 72, progress: 40, pending: 20 },
  { day: "19 May", cleaned: 75, progress: 45, pending: 23 },
  { day: "20 May", cleaned: 85, progress: 50, pending: 27 },
  { day: "21 May", cleaned: 82, progress: 49, pending: 25 },
  { day: "22 May", cleaned: 83, progress: 51, pending: 26 },
  { day: "23 May", cleaned: 87, progress: 56, pending: 28 },
  { day: "24 May", cleaned: 95, progress: 60, pending: 33 },
];





const rooms = [
  {
    room: "101",
    type: "Deluxe Room",
    floor: "1",
    status: "Cleaned",
    staff: "Priya S.",
    updated: "24 May 09:15 AM",
  },
  {
    room: "102",
    type: "Deluxe Room",
    floor: "1",
    status: "In Progress",
    staff: "Amit V.",
    updated: "24 May 10:30 AM",
  },
  {
    room: "103",
    type: "Standard Room",
    floor: "1",
    status: "Pending",
    staff: "Neha S.",
    updated: "24 May 08:45 AM",
  },
  {
    room: "104",
    type: "Suite Room",
    floor: "1",
    status: "Cleaned",
    staff: "Vikram K.",
    updated: "24 May 09:00 AM",
  },
];

function Housekeeping() {

   const [activeStatus, setActiveStatus] = useState("Cleaned");
  return (


    <div className="housekeeping-page">

      {/* HEADER */}

      <div className="hk-header">
        <div>
          <h1>Housekeeping Status Overview</h1>
          <p>
            Complete overview of housekeeping activities and room status
          </p>
        </div>

        <div className="hk-top-actions">
          <button>🏨 Sunset Grand Hotel</button>
          <button>📅 24 May 2024</button>
        </div>
      </div>

      {/* TOP CARDS */}

      <div className="stats-grid">

        <div className="stat-card">
          <div className="icon purple">
            <FiHome />
          </div>
          <div>
            <h5>Total Rooms</h5>
            <h2>100</h2>
            <span>All Rooms</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon green">
            <FiCheckCircle />
          </div>
          <div>
            <h5>Cleaned</h5>
            <h2>45</h2>
            <span>45% of total</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon orange">
            <FiClock />
          </div>
          <div>
            <h5>In Progress</h5>
            <h2>20</h2>
            <span>20% of total</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon red">
            <FiAlertCircle />
          </div>
          <div>
            <h5>Pending</h5>
            <h2>35</h2>
            <span>35% of total</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon blue">
            <FiClipboard />
          </div>
          <div>
            <h5>Tasks Today</h5>
            <h2>18</h2>
            <span>Scheduled tasks</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon cyan">
            <FiUsers />
          </div>
          <div>
            <h5>Assigned Staff</h5>
            <h2>08</h2>
            <span>Active staff</span>
          </div>
        </div>

      </div>

      {/* CHART AREA */}

      <div className="chart-layout">

        <div className="donut-card">
          <h3>Status Distribution</h3>

          <div className="donut-wrap">
          <div className="donut">

  <div
    className={`slice cleaned ${
      activeStatus === "Cleaned" ? "active-slice" : ""
    }`}
    onClick={() => setActiveStatus("Cleaned")}
  ></div>

  <div
    className={`slice progress ${
      activeStatus === "In Progress" ? "active-slice" : ""
    }`}
    onClick={() => setActiveStatus("In Progress")}
  ></div>

  <div
    className={`slice pending ${
      activeStatus === "Pending" ? "active-slice" : ""
    }`}
    onClick={() => setActiveStatus("Pending")}
  ></div>

  <div className="donut-center">
    <h2>100</h2>
    <span>{activeStatus}</span>
  </div>

</div>

           <div className="legend">

  <div
    className={`legend-item ${
      activeStatus === "Cleaned" ? "active-legend" : ""
    }`}
    onClick={() => setActiveStatus("Cleaned")}
  >
    <span className="dot green"></span>
    Cleaned 45 (45%)
  </div>

  <div
    className={`legend-item ${
      activeStatus === "In Progress" ? "active-legend" : ""
    }`}
    onClick={() => setActiveStatus("In Progress")}
  >
    <span className="dot orange"></span>
    In Progress 20 (20%)
  </div>

  <div
    className={`legend-item ${
      activeStatus === "Pending" ? "active-legend" : ""
    }`}
    onClick={() => setActiveStatus("Pending")}
  >
    <span className="dot red"></span>
    Pending 35 (35%)
  </div>

</div>
        </div>
        </div>


        <div className="trend-card">
          <h3>Room Status Trend (Last 7 Days)</h3>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="cleaned"
                stroke="#22c55e"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="progress"
                stroke="#f59e0b"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="pending"
                stroke="#ef4444"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="summary-card">
          <h3>Status Summary</h3>

          <table>
            <tbody>
              <tr>
                <td>Cleaned</td>
                <td>45</td>
                <td>45%</td>
              </tr>

              <tr>
                <td>In Progress</td>
                <td>20</td>
                <td>20%</td>
              </tr>

              <tr>
                <td>Pending</td>
                <td>35</td>
                <td>35%</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      

      {/* ROOM TABLE */}

   {/* BOTTOM SECTION */}

<div className="bottom-section">

  {/* ROOM TABLE */}

  <div className="room-table-card">

    <div className="table-header">
      <h3>Room Status List</h3>

      <div className="table-filters">
        <select>
          <option>All Floor</option>
        </select>

        <select>
          <option>All Status</option>
        </select>

        <input
          type="text"
          placeholder="Search room..."
        />
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Room No.</th>
          <th>Room Type</th>
          <th>Floor</th>
          <th>Status</th>
          <th>Assigned Staff</th>
          <th>Last Updated</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {rooms.map((item,index)=>(
          <tr key={index}>
            <td>{item.room}</td>
            <td>{item.type}</td>
            <td>{item.floor}</td>

            <td>
              <span
                className={
                  item.status === "Cleaned"
                    ? "status-cleaned"
                    : item.status === "In Progress"
                    ? "status-progress"
                    : "status-pending"
                }
              >
                {item.status}
              </span>
            </td>

            <td>{item.staff}</td>
            <td>{item.updated}</td>

            <td>
              <FiEye />
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>

  {/* STAFF PERFORMANCE */}

 <div className="staff-card">
  <h3>Staff Performance (Tasks Today)</h3>

  <div className="staff-item">
    <span className="staff-name">Priya Sharma</span>

    <div className="progress-track">
      <div
        className="progress-fill"
        style={{ width: "80%" }}
      ></div>
    </div>

    <span className="staff-score">12</span>
  </div>

  <div className="staff-item">
    <span className="staff-name">Amit Verma</span>

    <div className="progress-track">
      <div
        className="progress-fill"
        style={{ width: "65%" }}
      ></div>
    </div>

    <span className="staff-score">10</span>
  </div>

  <div className="staff-item">
    <span className="staff-name">Neha Singh</span>

    <div className="progress-track">
      <div
        className="progress-fill"
        style={{ width: "50%" }}
      ></div>
    </div>

    <span className="staff-score">8</span>
  </div>

  <div className="staff-item">
    <span className="staff-name">Vikram</span>

    <div className="progress-track">
      <div
        className="progress-fill"
        style={{ width: "35%" }}
      ></div>
    </div>

    <span className="staff-score">6</span>
  </div>
</div>

  {/* TODAY TASKS */}

  <div className="tasks-card">
    <h3>Today's Tasks</h3>

    <div className="task-item">
      <span>09:00 AM</span>
      <span>Room 101</span>
      <span className="status-cleaned">Cleaned</span>
    </div>

    <div className="task-item">
      <span>10:30 AM</span>
      <span>Room 205</span>
      <span className="status-progress">In Progress</span>
    </div>

    <div className="task-item">
      <span>11:00 AM</span>
      <span>Room 103</span>
      <span className="status-pending">Pending</span>
    </div>

    <div className="task-item">
      <span>01:30 PM</span>
      <span>Room 202</span>
      <span className="status-progress">In Progress</span>
    </div>

    <div className="task-item">
      <span>03:00 PM</span>
      <span>Room 104</span>
      <span className="status-cleaned">Cleaned</span>
    </div>

  </div>

</div>

    </div>
  );
}

export default Housekeeping;