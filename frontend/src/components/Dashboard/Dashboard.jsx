import React, {useEffect} from 'react'
import Sidebar from './Sidebar';
import { useParams, useNavigate } from 'react-router-dom';
function Dashboard() {
  const navigator = useNavigate();
  const {courseId} = useParams();
  useEffect(()=>{
    if(!courseId) {
      navigator("/mycourses");
      console.log("Pavan");
      
    }
  },[courseId]);
    
  
  return (
    <div>
      <div className="text-gray-700 h-screen bg-[#F6F8FC]">
        <div className='flex'>
          <Sidebar courseId={courseId}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
