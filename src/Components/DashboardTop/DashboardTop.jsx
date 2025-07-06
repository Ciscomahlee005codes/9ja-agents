import React from "react";
import { FiSearch} from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaSliders } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardTop.css";
import Barchart from "../Barchart/Barchart";

const DashboardTop = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
  const user = JSON.parse(localStorage.getItem("arce_user"));
  if (!user) {
    navigate("/");
  } else {
    setUserData(user);
  }
}, [navigate]);

    
     if (!userData) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
        </p>
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className="main-top">
      <div className="dashboard-top">
      <div className="search-bar">
        <FiSearch className="icon" />
        <input type="text" placeholder="Search listings, tenants..." />
        <button className="filter-btn">
          < FaSliders />
        </button>
      </div>

      <div className="top-actions">
       <div className="t-icons">
         <MdMessage className="top-icon" />
        <IoMdNotifications className="top-icon" />
       </div>
        <div className="user-data">
           <FaUser className="user-icon" /> 
           <h3>Welcome, {userData.fullName.split(" ")[0]}</h3>      
        </div>
      </div>
    </div>
    <Barchart />
    </div>
  );
};

export default DashboardTop;
