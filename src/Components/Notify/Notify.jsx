import React, { useState } from "react";
import "./Notify.css";

// Notification data
const notifications = [
  {
    id: 1,
    title: "New Tour Request",
    message: "John Doe requested a tour at Ikoyi Duplex",
    date: "July 4, 2025 - 09:30 AM",
    status: "Unread",
    type: "Tour",
  },
  {
    id: 2,
    title: "Payment Received",
    message: "Payment of ₦500,000 received from Oluoma",
    date: "July 3, 2025 - 06:12 PM",
    status: "Read",
    type: "Payment",
  },
  {
    id: 3,
    title: "Lease Agreement Uploaded",
    message: "Francis Okafor uploaded a new lease document",
    date: "July 2, 2025 - 03:05 PM",
    status: "Unread",
    type: "Document",
  },
   {
    id: 4,
    title: "Tenancy Agreement Uploaded",
    message: "Musa Abdulaziz sent the Tenancy Agreement",
    date: "Feburary 22, 2025 - 11:05 AM",
    status: "Unread",
    type: "Document",
  },
   {
    id: 5,
    title: "New Tour Payment",
    message: "Chukwuebuka Fechi paid for a House Tour",
    date: "March 12, 2025 - 1:05 PM",
    status: "Unread",
    type: "Payment",
  },
];

const Notify = () => {
  const [data, setData] = useState(notifications);

  const markAsRead = (id) => {
    const updated = data.map((n) =>
      n.id === id ? { ...n, status: "Read" } : n
    );
    setData(updated);
  };

  return (
    <div className="notification-container">
      <h2>Notifications</h2><br />
      {data.length === 0 ? (
        <p className="empty-msg">No notifications yet.</p>
      ) : (
        <ul className="notification-list">
          {data.map((notif) => (
            <li
              key={notif.id}
              className={`notification ${notif.status === "Unread" ? "unread" : ""}`}
            >
              <div className="notification-header">
                <h4>{notif.title}</h4>
                <span className={`type ${notif.type.toLowerCase()}`}>{notif.type}</span>
              </div>
              <p>{notif.message}</p>
              <div className="notification-footer">
                <span className="date">{notif.date}</span>
                {notif.status === "Unread" && (
                  <button className="mark-btn" onClick={() => markAsRead(notif.id)}>
                    Mark as Read
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notify;
