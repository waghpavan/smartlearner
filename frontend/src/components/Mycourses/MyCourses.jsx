import React, { useState, useEffect } from 'react';
import MyCard from '../Mycourses/MyCard';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function MyCourses() {
  // Extract userId from URL parameters
  const navigator = useNavigate();
  let userId = sessionStorage.getItem("Id"); 

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if(userId) {
      const fetchCourses = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/v2/get-courses/${userId}`);
          setCourses(response.data);
        } catch (err) {
          if (err.response && err.response.status === 404) {
            setError("No courses found for this user");
          } else {
            setError("Error fetching courses");
          }
        }
      };
      fetchCourses();
    }
    else {
      navigator("/Login");
    }

  }, [userId]);

  return (
    <div className='bg-gray-100 px-20 flex flex-col items-center'>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className='w-full items-center'>
        {courses.map((course) => (
          
          <MyCard
            key={course._id} // Add a unique key for each card
            image={require("../assets/"+course.name+".jpg")}
            name={course.name}
            title={course.title}
            description={course.description}
            courseId={course._id}
            className="mb-4" // Add margin to separate cards
          />
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
