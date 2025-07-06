// Settings.jsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Settings.css";

const Settings = () => {
  const [user, setUser] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("arce_user"));
    setUser(storedUser);
    setEditedUser(storedUser);

    const darkPref = JSON.parse(localStorage.getItem("arce_dark_mode"));
    setDarkMode(darkPref || false);
    document.body.className = darkPref ? "dark-mode" : "";
  }, []);

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("arce_user", JSON.stringify(editedUser));

    const allUsers = JSON.parse(localStorage.getItem("arce_users")) || [];
    const updatedUsers = allUsers.map((u) =>
      u.email === user.email ? editedUser : u
    );
    localStorage.setItem("arce_users", JSON.stringify(updatedUsers));

    toast.success("Profile updated successfully!");
    setUser(editedUser);
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const updated = { ...editedUser, password: newPassword };
    localStorage.setItem("arce_user", JSON.stringify(updated));

    const allUsers = JSON.parse(localStorage.getItem("arce_users")) || [];
    const updatedUsers = allUsers.map((u) =>
      u.email === user.email ? updated : u
    );
    localStorage.setItem("arce_users", JSON.stringify(updatedUsers));

    toast.success("Password updated!");
    setEditedUser(updated);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      const allUsers = JSON.parse(localStorage.getItem("arce_users")) || [];
      const filteredUsers = allUsers.filter((u) => u.email !== user.email);
      localStorage.setItem("arce_users", JSON.stringify(filteredUsers));
      localStorage.removeItem("arce_user");
      toast.success("Account deleted!");
      window.location.href = "/";
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("arce_dark_mode", JSON.stringify(newMode));
    document.body.className = newMode ? "dark-mode" : "";
  };

  if (!user) {
    return <p style={{ padding: "2rem" }}>Loading settings...</p>;
  }

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>

      <div className="settings-form">
        <label>Full Name</label>
        <input type="text" name="fullName" value={editedUser.fullName || ""} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={editedUser.email || ""} onChange={handleChange} />

        <label>Phone</label>
        <input type="text" name="phone" value={editedUser.phone || ""} onChange={handleChange} />

        {user.role === "Agent" && (
          <>
            <label>Agency Name</label>
            <input type="text" name="agencyName" value={editedUser.agencyName || ""} onChange={handleChange} />

            <label>License Number</label>
            <input type="text" name="licenseNumber" value={editedUser.licenseNumber || ""} onChange={handleChange} />
          </>
        )}

        <button onClick={handleSave} className="save-btn">Save Changes</button>
      </div>

      <div className="settings-form">
        <h3>Change Password</h3>
        <input type="password" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button onClick={handlePasswordChange} className="save-btn">Update Password</button>
      </div>

      <div className="settings-form">
        <h3>Preferences</h3>
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Enable Dark Mode
        </label>
        <label>
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
          Enable Notifications
        </label>
      </div>

      <div className="danger-zone">
        <h3>Danger Zone</h3>
        <button className="delete-btn" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
