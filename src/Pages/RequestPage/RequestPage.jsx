import React from 'react'
import Request2 from '../../Components/Request2/Request2'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './RequestPage.css'

const RequestPage = () => {
  return (
    <div className='request-layout'>
      <Sidebar />
      <div className="request-content">
        <Request2 />
      </div>
    </div>
  )
}

export default RequestPage