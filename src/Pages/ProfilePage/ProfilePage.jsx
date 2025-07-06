import React from 'react'
import Profile from '../../Components/Profile/Profile'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './ProfilePage.css'

const ProfilePage = () => {
  return (
    <div className='profile-layout'>
        <Sidebar />
       <div className="profile-content">
        <Profile />
       </div>
    </div>
  )
}

export default ProfilePage