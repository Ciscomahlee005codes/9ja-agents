import React from 'react'
import DashboardTop from '../../Components/DashboardTop/DashboardTop'
import './Dashboard.css'
import Requests from '../../Components/Requests/Requests'
import Tenants from '../../Components/Chats/Tenants'
import Properties from '../../Components/Properties/Properties'
import Sidebar from '../../Components/Sidebar/Sidebar'


const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <Sidebar />
     <div className="dashboard-content">
       <DashboardTop />    
        <Properties />
       <div className="middle-level">
        <Requests />
        <Tenants />
       </div>
     </div>
    </div>
  )
}

export default Dashboard
