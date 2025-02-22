// Courses.js
import React ,{useState} from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import java from '../assets/java.jpg'
import python from '../assets/python.jpg'
import cplus from '../assets/cplus.jpg'
import loader from '../assets/loader.gif';
const Courses = () => {
    
    const coursesData = [
        {
          image :java,
          name : "java",
          title : "Java Basics Course - Core Java, OOP Concepts, Data Structures, Algorithms, Exception Handling, Java Streams, Multithreading",
          description : "Master the fundamentals of Java programming with hands-on projects and real-world examples to build a strong foundation."
        },
        {
          image: python,
          name : "python",
          title: "Python Basics Course - Core Python, Data Types, Functions, OOP Concepts, File Handling, Exception Handling, Libraries Overview",
          description : "Learn the fundamentals of Python programming with hands-on projects and real-world examples to build a solid foundation for further learning."
        },
        {
          image: cplus,
          name : "cplus",
          title: "C++ Basics Course - Core C++, OOP Concepts, Pointers, Data Structures, Algorithms, Memory Management, Exception Handling",
          description: "Master the fundamentals of C++ programming with hands-on projects and practical examples to build a strong programming foundation."
        },
];


const [courses, setCourses] = useState(coursesData);
const [loading, setLoading] = useState(false);
const loaderGif = 'https://www.loading.io/spinners/double-ring/lg.double-ring-spinner.gif';

  
  return (
    <div>
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
           <img src={loader} alt="Loading..." className="h-48 w-48" />
          </div>
        )}

    <div className="courses-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-24 py-12">
      {courses.map((course, index) => (
          <CourseCard
          name={course.name}
          key={index}
          image={course.image}
          title={course.title}
          description={course.description}
          />
        ))}
    </div>
    </div>
  );
};

export default Courses;
