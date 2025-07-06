import React from "react";
import Properties2 from "../../Components/Properties2/Properties2";
import './PropertyPage.css'
import Sidebar from "../../Components/Sidebar/Sidebar";

const PropertyPage = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <Properties2 />
      </div>
    </div>
  );
};

export default PropertyPage;
