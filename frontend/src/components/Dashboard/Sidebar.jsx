import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Content from '../Content/Content'

  
  function Sidebar({courseId}) {
    
    const[selected, setSelected] = useState(0);
    const [content, setContent] = useState({});
    const [mistake, setMistake] = useState([]);

    useEffect(() => {
      const fetchCourseContent = async () => {
          try {
              // Make a GET request to fetch only the content of the course
              const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/v2/get-course/${courseId}`);
              let temp = response.data; // Set the content data to state
              setMistake(temp['mistake']);
              setContent(temp['content']);
          } catch (err) {
              console.log(err.response ? err.response.data.message : err.message);
          }
      };
      fetchCourseContent();
  }, []);
    
    console.log(mistake);
    
    const keys = Object.keys(content);
  return (
    <div className='flex min-w-full'>
      
    <div className='flex myClass bg-[#F6F8FC] w-64 font-medium h-full'>
      
      <div className='pr-6 py-1'>
        {
          
          keys.map((item, index) => {
            return (
              <div onClick={()=>setSelected(index)} className={` ${selected === index ?  "bg-blue-200 rounded-r-full hover:bg-blue-300" : "bg-transparent"} 
              ${mistake.includes(index) ? "bg-red-200 rounded-r-full hover:bg-red-300" : "bg-transparent"} cursor-pointer justify-between px-4 py-2 h-content  flex gap-4 items-center hover:bg-blue-300 hover:rounded-r-full`}>
                <div href={`/:${index}`} className='flex gap-4 items-center '>
                {item}
                </div>
              </div>
            ) 
          })
        }
      </div>
    </div>
    <Content htmldata={content[keys[selected]]}/>
</div>
  )
}

export default Sidebar
