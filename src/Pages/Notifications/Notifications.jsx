import React from 'react'
import Notify from '../../Components/Notify/Notify'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Notifications.css'

const Notifications = () => {
  return (
    <div className='notification-layout'>
        <Sidebar />
       <div className='notification-content'>
         <Notify />
       </div>
    </div>
  )
}

export default Notifications