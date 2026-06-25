import "./Maintenance.css";
import {
  FaTools,
  FaExclamationTriangle,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaUserCog,
  FaBolt,
  FaTint,
  FaSnowflake,
  FaCouch,
} from "react-icons/fa";

function Maintenance() {
  const criticalIssues = [
    {
      room: "Room 205",
      issue: "AC Not Working",
      priority: "High",
      reportedBy: "Rajesh Sharma",
    },
    {
      room: "Room 408",
      issue: "Water Leakage",
      priority: "High",
      reportedBy: "Priya Patel",
    },
    {
      room: "Room 301",
      issue: "Door Lock Fault",
      priority: "Medium",
      reportedBy: "Amit Verma",
    },
    {
      room: "Room 503",
      issue: "Power Failure",
      priority: "High",
      reportedBy: "Neha Singh",
    },
  ];

  const requests = [
    {
      room: "Room 101",
      issue: "TV Not Working",
      status: "Pending",
    },
    {
      room: "Room 302",
      issue: "Toilet Flush Issue",
      status: "In Progress",
    },
    {
      room: "Room 204",
      issue: "Hot Water Not Available",
      status: "In Progress",
    },
    {
      room: "Room 207",
      issue: "Light Flickering",
      status: "Completed",
    },
  ];

  const technicians = [
    {
      name: "Ramesh Kumar",
      assigned: 12,
      completed: 10,
      efficiency: "88%",
    },
    {
      name: "Suresh Yadav",
      assigned: 8,
      completed: 7,
      efficiency: "86%",
    },
    {
      name: "Amit Singh",
      assigned: 15,
      completed: 14,
      efficiency: "93%",
    },
  ];

  return (
    <div className="maintenance-page">

      <div className="maintenance-header">
        <div>
          <h2>Maintenance</h2>
          <p>
            Monitor, manage and resolve all maintenance requests
          </p>
        </div>

        <div className="header-actions">
          <button className="outline-btn">
            Export Report
          </button>

          <button
            className="primary-btn"
            onClick={() =>
              alert("New Request Opened")
            }
          >
            + New Request
          </button>
        </div>
      </div>

      {/* TOP CARDS */}

      <div className="stats-grid">

        <div className="stat-card">
          <FaExclamationTriangle />
          <h3>4</h3>
          <p>Critical Issues</p>
        </div>

        <div className="stat-card">
          <FaClipboardList />
          <h3>12</h3>
          <p>Pending Requests</p>
        </div>

        <div className="stat-card">
          <FaTools />
          <h3>18</h3>
          <p>In Progress</p>
        </div>

        <div className="stat-card">
          <FaCheckCircle />
          <h3>15</h3>
          <p>Completed Today</p>
        </div>

        <div className="stat-card">
          <FaClock />
          <h3>3.2 hrs</h3>
          <p>Avg Resolution Time</p>
        </div>

      </div>

      {/* ROW 2 */}

      <div className="maintenance-row">

        <div className="panel">
          <div className="panel-title">
            Critical Issues
          </div>

          {criticalIssues.map((item, index) => (
            <div
              key={index}
              className="issue-card"
            >
              <div>
                <h4>{item.room}</h4>
                <p>{item.issue}</p>
                <span>{item.priority}</span>
              </div>

              <button
                onClick={() =>
                  alert(
                    `Assigned ${item.room}`
                  )
                }
              >
                Assign Now
              </button>
            </div>
          ))}
        </div>

        <div className="panel">
          <div className="panel-title">
            Maintenance Requests
          </div>

          {requests.map((item, index) => (
            <div
              key={index}
              className="request-row"
            >
              <div>
                <h4>{item.room}</h4>
                <p>{item.issue}</p>
              </div>

              <span
                className={`badge ${item.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <div className="panel chart-panel">
          <div className="circle-chart">
            <h1>49</h1>
            <span>Total</span>
          </div>

          <ul>
            <li>Pending (12)</li>
            <li>In Progress (18)</li>
            <li>Completed (15)</li>
            <li>Cancelled (4)</li>
          </ul>
        </div>

      </div>

      {/* ROW 3 */}

      <div className="maintenance-row">

        <div className="panel">
          <div className="panel-title">
            Technician Performance
          </div>

          <table className="tech-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Assigned</th>
                <th>Completed</th>
                <th>Efficiency</th>
              </tr>
            </thead>

            <tbody>
              {technicians.map((tech, i) => (
                <tr key={i}>
                  <td>{tech.name}</td>
                  <td>{tech.assigned}</td>
                  <td>{tech.completed}</td>
                  <td>{tech.efficiency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel">
          <div className="panel-title">
            Department Workload
          </div>

          <div className="workload-item">
            <FaBolt />
            Electrical
            <div className="bar">
              <div
                className="fill"
                style={{ width: "70%" }}
              />
            </div>
          </div>

          <div className="workload-item">
            <FaTint />
            Plumbing
            <div className="bar">
              <div
                className="fill"
                style={{ width: "45%" }}
              />
            </div>
          </div>

          <div className="workload-item">
            <FaSnowflake />
            HVAC
            <div
              className="bar"
            >
              <div
                className="fill"
                style={{ width: "85%" }}
              />
            </div>
          </div>

          <div className="workload-item">
            <FaCouch />
            Furniture
            <div className="bar">
              <div
                className="fill"
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* CALENDAR */}

      <div className="panel calendar-panel">
        <div className="panel-title">
          Maintenance Calendar
        </div>

        <div className="calendar-grid">

          <div className="calendar-card">
            <h3>24 May</h3>
            <p>AC Service</p>
          </div>

          <div className="calendar-card">
            <h3>25 May</h3>
            <p>Lift Inspection</p>
          </div>

          <div className="calendar-card">
            <h3>26 May</h3>
            <p>Generator Check</p>
          </div>

          <div className="calendar-card">
            <h3>28 May</h3>
            <p>Fire System Check</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Maintenance;