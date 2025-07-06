import React from 'react'
import Settings from '../../Components/Settings/Settings'
import Sidebar from '../../Components/Sidebar/Sidebar'

const SettingPage = () => {
  return (
    <div className='setting-layout'>
        <Sidebar />
        <div className="setting-content">
            <Settings />
        </div>
    </div>
  )
}

export default SettingPage