import React from 'react'
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div>
      <div className="text-gray-700 h-screen bg-[#F6F8FC]">
        <div className='flex'>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
