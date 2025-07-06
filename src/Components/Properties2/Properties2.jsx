import React from 'react'
import { house_List } from '../../../house_List'
import './Properties2.css'
import { Swiper as ListingSwiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FiSearch} from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaSliders } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Properties2 = () => {
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
      <div className="property-top">
              <div className="property-search-bar">
                <FiSearch className="property-icon" />
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
      <div className="property-container2">
        <h2>Properties</h2>
        <ListingSwiper
          className="home-swiper-wrapper"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {house_List.map((house) => (
            <SwiperSlide key={house.id}>
              <div className="house-card">
                <img src={house.image} alt={house.name} className="house-image" />
                <div className="house-info">
                  <h3 className="house-name">{house.name}</h3>
                  <p className="house-category">State: {house.state}</p>
                  <p className="house-category">Location: {house.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </ListingSwiper>
        <div className="button-container">
        <button>+ Add Property</button>
        </div>
      </div>
    </div>
  )
}

export default Properties2
