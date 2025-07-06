import React, { useState } from "react";
import "./Request2.css";

const requestData = [
  {
    address: "15 Banana Island Road, Ikoyi",
    date: "June 30, 2025",
    status: "Completed",
    requestType: "Lease Document",
    file: "LeaseAgreement.pdf",
  },
  {
    address: "22 Admiralty Way, Lekki Phase 1",
    date: "July 1, 2025",
    status: "Pending",
    requestType: "Payment Receipt",
    file: "PaymentReceipt.png",
  },
  {
    address: "10 GRA Phase 2, Port Harcourt",
    date: "June 25, 2025",
    status: "Completed",
    requestType: "Inspection Report",
    file: "InspectionReport.docx",
  },
  {
    address: "5 Independence Layout, Enugu",
    date: "July 3, 2025",
    status: "Pending",
    requestType: "Renovation Plan",
    file: "RenovationPlan.pdf",
  },
  {
    address: "11 Hamilton Layout, Awka",
    date: "May 3, 2025",
    status: "Completed",
    requestType: "Renovation Plan",
    file: "RenovationPlan.pdf",
  },
  {
    address: "No. 8 Amaechi Street Abakpa Nike",
    date: "May 3, 2025",
    status: "Completed",
    requestType: "Renovation Approval",
    file: "Renovation.pdf",
  },
];


const Request2 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRequests = requestData.filter(
    (req) =>
      req.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.file.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="request2">
      <div className="request-container2">
        <h2>Requests</h2><br />
        <input
          type="text"
          placeholder="Search by address or file..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <br /><br />
        {/* Desktop View */}
        <table className="request-table desktop-view">
  <thead>
    <tr>
      <th>Address</th>
      <th>Type</th>
      <th>Date</th>
      <th>Status</th>
      <th>File</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {filteredRequests.length > 0 ? (
      filteredRequests.map((req, index) => (
        <tr key={index} className="request-row">
          <td>{req.address}</td>
          <td>{req.requestType}</td>
          <td>{req.date}</td>
          <td>
            <span className={`status ${req.status === "Completed" ? "completed" : "pending"}`}>
              {req.status}
            </span>
          </td>
          <td>{req.file}</td>
          <td className="action-buttons">
            <button className="approve-btn">Approve</button>
            <button className="reject-btn">Reject</button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" className="no-results">No requests match your search.</td>
      </tr>
    )}
  </tbody>
</table>

{/* Mobile View */}
        <div className="mobile-view">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((req, index) => (
              <div key={index} className="mobile-request-card">
                <p><strong>Address:</strong> {req.address}</p>
                <p><strong>Date:</strong> {req.date}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className={`status ${req.status === "Completed" ? "completed" : "pending"}`}>
                    {req.status}
                  </span>
                </p>
                <p><strong>File:</strong> {req.file}</p>
              </div>
            ))
          ) : (
            <p className="no-results">No requests match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Request2;
