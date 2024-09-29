import React, {useState} from 'react'
import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { BiAlarmSnooze } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { RiDraftLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

import Content from '../Content/Content'

import data from '../DataFiles/data.json'
import java from '../DataFiles/java.json'

  
  function Sidebar() {
    const[selected, setSelected] = useState(1);
    const keys = Object.keys(java);
  return (
    <div className='flex min-w-full'>
      
    <div className='flex myClass bg-[#F6F8FC] w-64 font-medium h-full'>
      <div className='pr-6 py-1'>
        {
          
          keys.map((item, index) => {
            return (
              <div onClick={()=>setSelected(index)} className={` ${selected === index ?  "bg-blue-200 rounded-r-full hover:bg-blue-300" : "bg-transparent"} ${index % 2 == 0 ? "bg-red-200 rounded-r-full hover:bg-red-300" : "bg-transparent"} cursor-pointer justify-between px-4 py-2 h-content  flex gap-4 items-center hover:bg-gray-200 hover:rounded-r-full`}>
                <div href={`/:${index}`} className='flex gap-4 items-center '>
                {item}
                </div>
              </div>
            ) 
          })
        }
      </div>
    </div>
    <Content htmldata={keys[selected]}/>
</div>
  )
}

export default Sidebar
