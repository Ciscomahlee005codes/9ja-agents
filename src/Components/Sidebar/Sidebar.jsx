import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  MdDashboard,
  MdHome,
  MdTour,
  MdNotificationsNone,
  MdSettings,
} from "react-icons/md";
import { FiClipboard } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("arce_user"));
  setUserData(user); // don't navigate away from Sidebar
  if (window.innerWidth <= 768) {
    setIsOpen(false);
  }
}, []);


  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      toast.info("Logging out...");
      setIsLoading(true);
      setTimeout(() => {
        localStorage.removeItem("arce_user");
        setIsLoading(false);
        navigate("/");
      }, 3000);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (!userData || isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          {isLoading ? "Logging out..." : "Loading..."}
        </p>
        <div className="spinner" />
      </div>
    );
  }

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <RxCross1 /> : <HiOutlineMenuAlt3 />}
      </div>

      <div className={`sideBar-container ${isOpen ? "open" : "closed"}`}>
        <h2>9ja Agents</h2><br />

           <h4>
             {
    (() => {
      const names = userData.fullName.trim().split(" ");
      if (names.length === 1) return names[0]; // Only one name
      return `${names[0]} ${names[names.length - 1]}`; // First + Last
    })()
  }
            </h4> 
        <p>Role: {userData.role}</p>

        <ul className="side-links">
          <NavLink to="/dashboard">
            <li onClick={() => setIsOpen(false)}>
              <MdDashboard /> Dashboard
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li onClick={() => setIsOpen(false)}>
              <FaUserCircle /> Profile
            </li>
          </NavLink>
          <NavLink to="/property">
            <li onClick={() => setIsOpen(false)}>
              <MdHome /> Properties
            </li>
          </NavLink>
          <NavLink to="/tour">
            <li onClick={() => setIsOpen(false)}>
              <MdTour /> Tours
            </li>
          </NavLink>
          <NavLink to="/request">
            <li onClick={() => setIsOpen(false)}>
              <FiClipboard /> Request
            </li>
          </NavLink>
          <NavLink to="/notification">
            <li onClick={() => setIsOpen(false)}>
              <MdNotificationsNone /> Notification
            </li>
          </NavLink>
          <NavLink to="/settings">
            <li onClick={() => setIsOpen(false)}>
              <MdSettings /> Settings
            </li>
          </NavLink>
        </ul>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Sidebar;
