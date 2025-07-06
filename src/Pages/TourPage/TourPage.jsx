import React from 'react'
import Tour from '../../Components/Tour/Tour'
import './TourPage.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

const TourPage = () => {
  return (
    <div className='tour-layout'>
        <Sidebar />
       <div className="tour-content">
        <Tour /> 
       </div>
    </div>
  )
}

export default TourPage