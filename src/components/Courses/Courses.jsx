// Courses.js
import React ,{useState} from 'react';
import CourseCard from './CourseCard';
import java from '../assets/java.jpg'
import python from '../assets/python.jpg'
import cplus from '../assets/cplus.jpg'
import loader from '../assets/loader.gif';
const Courses = () => {
    
    const coursesData = [
        {
          image :java,
          name : "javaTest",
          title : "Java Basics Course - Core Java, OOP Concepts, Data Structures, Algorithms, Exception Handling, Java Streams, Multithreading",
          description : "Master the fundamentals of Java programming with hands-on projects and real-world examples to build a strong foundation."
        },
        {
          image: python,
          name : "pythonTest",
          title: "Python Basics Course - Core Python, Data Types, Functions, OOP Concepts, File Handling, Exception Handling, Libraries Overview",
          description : "Learn the fundamentals of Python programming with hands-on projects and real-world examples to build a solid foundation for further learning."
        },
        {
          image: cplus,
          name : "cplusTest",
          title: "C++ Basics Course - Core C++, OOP Concepts, Pointers, Data Structures, Algorithms, Memory Management, Exception Handling",
          description: "Master the fundamentals of C++ programming with hands-on projects and practical examples to build a strong programming foundation."
        },
];


const [courses, setCourses] = useState(coursesData);
const [loading, setLoading] = useState(false);
const loaderGif = 'https://www.loading.io/spinners/double-ring/lg.double-ring-spinner.gif';


const handleFormSubmit = async(e) => {
    e.preventDefault();

    setLoading(true);


    // Simulate an async API call with setTimeout (replace this with real async code if needed)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const newCourse = {
        image: java, // Add default image
        title: formData.title,
        description: formData.description,
        courses: 1, // Default number of courses
        price: '₹999', // Default price
      originalPrice: '₹1,499', // Default original price
    };
    setCourses((prevCourses) => [...prevCourses, newCourse]);

    // Clear the form
    setFormData({
      title: '',
      description: ''
    });

    setLoading(false);
  };

  
  // State to store form input values
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
    <form onSubmit={handleFormSubmit} className="mb-12 p-6 border-2 border-gray-300 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create Your Own Course</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Course Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter course title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Course Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter course description"
            required
          />
        </div>
        <button disabled={loading} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Create Own Course
        </button>

      </form>
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
