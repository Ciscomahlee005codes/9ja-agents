import React from "react";
import { tenants_list } from "../../../tenants_list";
import { FiSearch} from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaSliders } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Tour.css";

const Tour = () => {
  const getStatusClass = (status) => {
    if (status.toLowerCase().includes("active"))
      return "status-pill status-active";
    if (status.toLowerCase().includes("pending"))
      return "status-pill status-renewal";
    if (status.toLowerCase().includes("overdue"))
      return "status-pill status-overdue";
    if (status.toLowerCase().includes("grace"))
      return "status-pill status-pending";
    return "status-pill";
  };

   const navigate = useNavigate();
   const [userData, setUserData] = useState(null);
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
    <div>
         <div className="tour-top">
                      <div className="tour-search-bar">
                        <FiSearch className="tour-icon" />
                        <input type="text" placeholder="Search listings, tenants..." />
                        <button className="filter-btn">
                          < FaSliders />
                        </button>
                      </div>
                
                      <div className="top-actions">
                        <MdMessage className="top-icon" />
                        <IoMdNotifications className="top-icon" />
                        <div className="user-data">
                           <FaUser className="user-icon" /> 
                            <h3>Welcome, {userData.fullName.split(" ")[0]}</h3>     
                        </div>
                      </div>
         </div>
        <div className="tour-container">
      <h2 className="tour-title">Tenant Tour Records</h2>
      <div className="tour-table-wrapper">
        <table className="tour-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tenant</th>
              <th>Tour Date</th>
              <th>Tour Status</th>
              <th>Rental Status</th>
              <th>Property</th>
              <th>Location</th>
              <th>Flat Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tenants_list.map((tenant, index) => (
              <tr key={tenant.id}>
                <td>{index + 1}</td>
                <td className="tenant-info">
                  <img
                    src={tenant.image}
                    alt={tenant.name}
                    className="tenant-img"
                  />
                  <div>
                    <strong>{tenant.name}</strong>
                    <p>{tenant.email}</p>
                  </div>
                </td>
                <td>{tenant.tourDate || "-"}</td>
                <td>{tenant.tourStatus || "-"}</td>
                <td>{tenant.rentalStatus || "-"}</td>
                <td>{tenant.propertyName || "-"}</td>
                <td>{tenant.location || "-"}</td>
                <td>{tenant.flatType || "-"}</td>
                <td>
                  <span className={getStatusClass(tenant.status)}>
                    {tenant.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tour-table-responsive">
            {tenants_list.map((tenant, index) => (
              <div className="tour-card" key={tenant.id}>
                <div className="tour-card-row">
                  <strong>#{index + 1}</strong>
                </div>
                <div className="tour-card-row tenant-info">
                  <img src={tenant.image} alt={tenant.name} className="tenant-img" />
                  <div>
                    <strong>{tenant.name}</strong>
                    <p>{tenant.email}</p>
                  </div>
                </div>
                <div className="tour-card-row"><strong>Tour Date:</strong> {tenant.tourDate || "-"}</div>
                <div className="tour-card-row"><strong>Tour Status:</strong> {tenant.tourStatus || "-"}</div>
                <div className="tour-card-row"><strong>Rental Status:</strong> {tenant.rentalStatus || "-"}</div>
                <div className="tour-card-row"><strong>Property:</strong> {tenant.propertyName || "-"}</div>
                <div className="tour-card-row"><strong>Location:</strong> {tenant.location || "-"}</div>
                <div className="tour-card-row"><strong>Flat Type:</strong> {tenant.flatType || "-"}</div>
                <div className="tour-card-row">
                  <strong>Status:</strong>
                  <span className={getStatusClass(tenant.status)}>{tenant.status}</span>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
    </div>
  );
};

export default Tour;
