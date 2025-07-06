import React from 'react'
import { house_List } from '../../../house_List'
import './Properties.css'
import { Swiper as ListingSwiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Properties = () => {
  return (
    <div>
      <div className="property-container">
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

export default Properties
