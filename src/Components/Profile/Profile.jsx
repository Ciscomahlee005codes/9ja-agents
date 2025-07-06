import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("arce_user"));
    if (storedUser?.role === "Agent") {
      setAgent(storedUser);
    }
  }, []);

  if (!agent) {
    return (
      <div className="profile-wrapper">
        <p>No agent data found.</p>
      </div>
    );
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <FaUserCircle className="profile-icon" />
        <h2>{agent.fullName}</h2>
        <p><strong>Email:</strong> {agent.email}</p>
        <p><strong>Role:</strong> {agent.role}</p>
        <p><strong>Agency Name:</strong> {agent.agencyName || "N/A"}</p>
        <p><strong>License Number:</strong> {agent.licenseNumber || "N/A"}</p>
        <p><strong>Phone:</strong> {agent.phone || "N/A"}</p>
        <p><strong>Joined On:</strong> {new Date(agent.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Profile;
