import "./OwnerDashboard.css";
import Rooms from "../Rooms";
import { useState } from "react";
import ActivityPopup from "../ActivityPopup";
import Customers from "../Customers";

import CheckInOut from "../CheckInOut";
import Housekeeping from "../Housekeeping";
import Maintenance from "../Maintenance";
import RoomStatusPopup from "../RoomStatusPopup";  
import RecentReviewsPopup from "../RecentReviewsPopup";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

import {
  FaBars,
  FaBell,
  FaCalendarAlt,
  FaHome,
  FaBed,
  FaUsers,
  FaClipboardCheck,
  FaBroom,
  FaTools,
  FaUserTie,
  FaBuilding,
  FaClock,
  FaMoneyBill,
  FaChartBar,
  FaPlus,
  FaEye,
  FaStar,
  FaCog
} from "react-icons/fa";


function OwnerDashboard() {

  

  const handleAddCustomer = () => {
  setActivePage("addCustomer");
};

 const [showAllActivities, setShowAllActivities] = useState(false);

const [showActivityPopup, setShowActivityPopup] = useState(false);

const [showRoomStatusPopup,setShowRoomStatusPopup] = useState(false);

const [showReviewsPopup, setShowReviewsPopup] = useState(false);
const [plan, setPlan] = useState("Basic");






    const [activePage,setActivePage] = useState("dashboard");
    const stats = [
  {
    title: "Today's Bookings",
    value: "18",
    growth: "+12%",
    icon: "📅",
  },
  {
    title: "Check-ins Today",
    value: "12",
    growth: "+8%",
    icon: "✅",
  },
  {
    title: "Check-outs Today",
    value: "10",
    growth: "+5%",
    icon: "🚪",
  },
  {
    title: "Occupancy Rate",
    value: "72%",
    growth: "+6%",
    icon: "📈",
  },
  {
    title: "Today's Revenue",
    value: "₹1,25,000",
    growth: "+15%",
    icon: "💰",
  },

];
 const occupancyData = [
  { name: "Occupied", value: 72 },
  { name: "Available", value: 20 },
  { name: "Maintenance", value: 8 },
];

const COLORS = ["#6C4CFF", "#2ECC71", "#FF7A45"];

const revenueData = [
  { day: "1 May", revenue: 18 },
  { day: "6 May", revenue: 15 },
  { day: "11 May", revenue: 12 },
  { day: "16 May", revenue: 10 },
  { day: "21 May", revenue: 8 },
  { day: "26 May", revenue: 6 },
  { day: "31 May", revenue: 5 },
];

const reviews = [
{
  name:"Amit Verma",
  review:"Excellent service and clean rooms.",
  rating:5
},
{
  name:"Neha Singh",
  review:"Great experience and hospitality.",
  rating:5
},
{
  name:"Rahul Patil",
  review:"Nice staff and quick service.",
  rating:4
},
{
  name:"Priya Sharma",
  review:"Very comfortable stay.",
  rating:5
},
{
  name:"Karan Mehta",
  review:"Food quality was excellent.",
  rating:4
},
{
  name:"Sneha Joshi",
  review:"Rooms were neat and spacious.",
  rating:5
},
{
  name:"Vikas Gupta",
  review:"Check-in process was smooth.",
  rating:4
},
{
  name:"Pooja Kulkarni",
  review:"Amazing hotel experience.",
  rating:5
}
];

const roomPerformance = [
  { type: "Deluxe", value: 75 },
  { type: "Executive", value: 68 },
  { type: "Suite", value: 85 },
  { type: "Standard", value: 60 },
];
 const [bookings, setBookings] = useState([
  {
    guest: "Rajesh Sharma",
    room: "101 (Deluxe)",
    checkin: "24 May 2024",
    checkout: "26 May 2024",
    amount: "₹ 8,000",
    status: "Confirmed",
  },
  {
    guest: "Amit Verma",
    room: "205 (Executive)",
    checkin: "24 May 2024",
    checkout: "25 May 2024",
    amount: "₹ 7,500",
    status: "Checked In",
  },
  {
    guest: "Neha Singh",
    room: "302 (Suite)",
    checkin: "24 May 2024",
    checkout: "27 May 2024",
    amount: "₹ 12,000",
    status: "Checked Out",
  },
  {
    guest: "Priya Patel",
    room: "105 (Deluxe)",
    checkin: "24 May 2024",
    checkout: "26 May 2024",
    amount: "₹ 6,000",
    status: "Pending",
  },
]);

const todayActivities = [
  {
    title: "New Booking",
    details: "Room 101 booked by Rajesh Sharma",
    time: "09:30 AM",
  },
  {
    title: "Check-In Completed",
    details: "Amit Verma checked into Room 205",
    time: "11:15 AM",
  },
  {
    title: "Payment Received",
    details: "₹7,500 received from Priya Patel",
    time: "01:20 PM",
  },
  {
    title: "Maintenance Request",
    details: "Room 403 AC service requested",
    time: "03:45 PM",
  },
];

  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo">
          <h2>StayHub</h2>
          <p>Hospitality Management System</p>
        </div>

        <ul>

       <li
  className={activePage === "dashboard" ? "active" : ""}
  onClick={() => setActivePage("dashboard")}
>
  <FaHome /> Dashboard
</li>

          <h4>HOTEL OPERATIONS</h4>

<li
  className={activePage === "rooms" ? "active" : ""}
  onClick={() => setActivePage("rooms")}
>
  <FaBed /> Rooms
</li>

<li
  className={activePage === "bookings" ? "active" : ""}
  onClick={() => setActivePage("bookings")}
>
  <FaCalendarAlt /> Bookings
</li>


<li
  className={activePage === "customers" ? "active" : ""}
  onClick={() => setActivePage("customers")}
>
  <FaUsers /> Customers
</li>

<li
  className={activePage === "checkinout" ? "active" : ""}
  onClick={() => setActivePage("checkinout")}
>
  <FaClipboardCheck /> Check-in / Check-out
</li>

<li
  className={activePage === "housekeeping" ? "active" : ""}
  onClick={() => setActivePage("housekeeping")}
>
  <FaBroom /> Housekeeping
</li>

<li
  className={activePage === "maintenance" ? "active" : ""}
  onClick={() => setActivePage("maintenance")}
>
  <FaTools /> Maintenance
</li>

          <h4>STAFF MANAGEMENT</h4>

          <li><FaUserTie /> Staff</li>
          <li><FaBuilding /> Departments</li>
          <li><FaClock /> Attendance</li>

          <h4>FINANCE & REPORTS</h4>

          <li><FaMoneyBill /> Billing</li>
          <li><FaChartBar /> Reports</li>
          <li><FaChartBar /> Revenue</li>

        </ul>

        <div className="upgrade-card">
          <h3>Upgrade Your Plan</h3>
          <p>Unlock more features</p>
          <button>Upgrade Now</button>
        </div>

      </aside>
<main className="main">

  {/* HEADER */}

  <header className="header">

    <div className="header-left">
            <FaBars />
            <h2>Dashboard</h2>
          </div>

          <div className="header-right">

            <div className="hotel-box">
              Sunset Grand Hotel
            </div>

            <div className="date-box">
              <FaCalendarAlt />
              24 May 2024
            </div>

            <div className="notification">
              <FaBell />
              <span>6</span>
            </div>

            <div className="profile">

              <img
                src="https://i.pravatar.cc/100?img=12"
                alt=""
              />

              <div>
                <h4>John Manager</h4>
                <p>Hotel Manager</p>
              </div>

            </div>

          </div>

     </header>

{activePage === "dashboard" && (
  <>

    {/* WELCOME */}

    <div className="welcome">

          <div className="h2">
           <h1>Hotel Management Dashboard</h1>
            <p>Manage bookings, rooms, staff and revenue from one place.</p>
          </div>
{/* <button
  className="add-booking"
  onClick={() => {
    console.log("Button Clicked");
    setShowBookingPopup(true);
  }}
>
  <FaPlus />
  Add Booking
</button> */}

        </div>

        {/* STATS */}

        <div className="stats-grid">

          {stats.map((item, index) => (
            <div className="stat-card" key={index}>

              <div className="stat-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <h2>{item.value}</h2>

              <span>{item.growth}</span>

            </div>
          ))}

        </div>

        {/* ANALYTICS */}
<div className="analytics-row">

  {/* Occupancy Card */}
  <div className="occupancy-card">

    <h3>Room Occupancy Overview</h3>

    <div className="chart-wrapper">

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={occupancyData}
            innerRadius={65}
            outerRadius={90}
            dataKey="value"
          >
            {occupancyData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="chart-center">
        <h2>72%</h2>
        <p>Occupied</p>
      </div>

    </div>

    <div className="legend">
      <p>🟣 Occupied - 72%</p>
      <p>🟢 Available - 20%</p>
      <p>🟠 Maintenance - 8%</p>
    </div>

  </div>

  {/* Revenue Card */}
  <div className="revenue-card">

  <div className="card-top-column">
    <h3>Revenue Overview</h3>
<span
  className="view-btn"
  onClick={() => {
    setShowRoomStatusPopup(true);
  }}
>
 View All
</span>


  </div>

  <h2>₹ 12,45,000</h2>

  <p className="red">
    -18% vs last month
  </p>

  <div className="revenue-chart">

    <ResponsiveContainer width="100%" height={220}>
   <LineChart data={revenueData}>
  
  <XAxis
    dataKey="day"
    axisLine={false}
    tickLine={false}
  />

  <Tooltip />

  <Line
    type="monotone"
    dataKey="revenue"
    stroke="#6C4CFF"
    strokeWidth={4}
    dot={{
      fill: "#6C4CFF",
      stroke: "#6C4CFF",
      r: 4
    }}
    activeDot={{
      r: 6,
      fill: "#6C4CFF"
    }}
  />

</LineChart>
    </ResponsiveContainer>

  </div>

</div>

  {/* Activity Card */}
<div className="activity-card">

<div className="card-top">

<h3>Today's Activity</h3>

<span
 style={{cursor:"pointer"}}
 onClick={() => setShowActivityPopup(true)}
>
 View All
</span>

</div>


{todayActivities.map((activity,index)=>(

<div className="activity-item" key={index}>

<div className="activity-left">

<strong>{activity.title}</strong>

<p>{activity.details}</p>

</div>


<span>
{activity.time}
</span>


</div>

))}
</div>
</div>
        

  
<div className="middle-row">

  {/* Recent Bookings */}
  <div className="bookings-card">

    <div className="card-top">
      <h3>Recent Bookings</h3>
      <span
 onClick={() => setActivePage("bookings")}
  style={{ cursor: "pointer" }}
>
  View All
</span>
    </div>

    <table>
      <thead>
        <tr>
          <th>Guest</th>
          <th>Room</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Amount</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {bookings.map((item,index)=>(

          <tr key={index}>
            <td>{item.guest}</td>
            <td>{item.room}</td>
            <td>{item.checkin}</td>
            <td>{item.checkout}</td>
            <td>{item.amount}</td>
            <td>{item.status}</td>
          <td>
            </td>
          </tr>

        ))}
      </tbody>

    </table>

  </div>

  {/* Room Status */}
 <div className="room-status">

<div className="card-top">

<h3>Room Status</h3>


<span
style={{cursor:"pointer"}}
onClick={() => setShowRoomStatusPopup(true)}
>
View All
</span>


</div>

    <div className="status-item">
      <span>Total Rooms</span>
      <strong>100</strong>
    </div>

    <div className="status-item">
      <span>Occupied</span>
      <strong>72</strong>
    </div>

    <div className="status-item">
      <span>Available</span>
      <strong>20</strong>
    </div>

    <div className="status-item">
      <span>Maintenance</span>
      <strong>8</strong>
    </div>

  </div>

  <div className="quick-actions">

  <div className="card-top">
    <h3>Quick Actions</h3>
  </div>

  <div className="action-grid">
  <button
 onClick={() => setShowBookingPopup(true)}
>
 Add Booking
</button>
    <button>Walk-In</button>
    <button>Add Room</button>
    <button
 onClick={() => setShowRoomStatusPopup(true)}
>
Room Status
</button>

    <button>Add Staff</button>
    <button>Reports</button>
  </div>

</div> {/* Quick Actions END */}

</div> {/* middle-row END */}

{/* Bottom Row */}

<div className="bottom-row">

  {/* Housekeeping Status */}
  <div className="housekeeping-card">

    <div className="card-top">
      <h3>Housekeeping Status</h3>
    </div>

    <div className="housekeeping-bar">
      <div className="clean"></div>
      <div className="progress"></div>
      <div className="pending"></div>
    </div>

    <div className="housekeeping-stats">

      <div>
        <h4>Cleaned</h4>
        <p>45 Rooms</p>
      </div>

      <div>
        <h4>In Progress</h4>
        <p>20 Rooms</p>
      </div>

      <div>
        <h4>Pending</h4>
        <p>35 Rooms</p>
      </div>

    </div>

  </div>

  {/* Room Performance */}
  <div className="performance-card">

    <div className="card-top">
      <h3>Top Room Types Performance</h3>
    </div>

    {roomPerformance.map((room,index)=>(

      <div className="performance-item" key={index}>

        <div className="performance-top">
          <span>{room.type}</span>
          <span>{room.value}%</span>
        </div>

        <div className="performance-bar">
          <div
            className="performance-fill"
            style={{width:`${room.value}%`}}
          ></div>
        </div>

      </div>

    ))}

  </div>

  {/* Reviews */}
  <div className="reviews-card">

    <div className="card-top">
      <h3>Recent Reviews</h3>
   <span
  onClick={() => setShowReviewsPopup(true)}
  style={{ cursor: "pointer" }}
>
  View All
</span>
    </div>

    {reviews.slice(0, 2).map((item,index)=>(

      <div className="review-item" key={index}>

        <img
          src={`https://i.pravatar.cc/100?img=${index+20}`}
          alt=""
        />

        <div>

          <h4>{item.name}</h4>

          <div className="stars">
            {[...Array(item.rating)].map((_,i)=>(
              <FaStar key={i}/>
            ))}
          </div>

          <p>{item.review}</p>

        </div>

      </div>

    ))}

  </div>

  {/* Subscription */}
 <div className="subscription-card">

  <h3>Subscription Plan</h3>

  <div className="plan-box">

    <h2>
      {plan === "Premium" ? "Premium Plan" : "Basic Plan"}
    </h2>

    <p>
      {plan === "Premium"
        ? "Valid Upto : 15 Aug 2027"
        : "Upgrade to unlock premium features"}
    </p>

    <button
      onClick={() => setPlan("Premium")}
      disabled={plan === "Premium"}
      className={
        plan === "Premium"
          ? "premium-active"
          : "upgrade-btn"
      }
    >
      {plan === "Premium"
        ? "Upgraded ✓"
        : "Upgrade Now"}
    </button>

  </div>
</div>
</div>



</>
)}

{activePage === "rooms" && <Rooms />}
{activePage === "checkinout" && <CheckInOut />}
{activePage === "customers" && <Customers />}
{activePage === "housekeeping" && <Housekeeping />}
{activePage === "maintenance" && <Maintenance />}
{showActivityPopup && (
  <ActivityPopup
    onClose={() => setShowActivityPopup(false)}
  />
)}

{/* {showBookingPopup && (
  <BookingPopup
    onClose={() => setShowBookingPopup(false)}
    onSave={(newBooking) => {
      setBookings([...bookings, newBooking]);
      setShowBookingPopup(false);
    }}
  />
)} */}


{showRoomStatusPopup && 
 <RoomStatusPopup 
   onClose={() => setShowRoomStatusPopup(false)}
 />
}

{showReviewsPopup && (
  <RecentReviewsPopup
    reviews={reviews}
    onClose={() => setShowReviewsPopup(false)}
  />
)}
</main>
</div>
);





}


export default OwnerDashboard;