import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ name, image, title, description, courseId }) => {
  const navigator = useNavigate();
  return (
    <div className="card m-16 cursor-pointer bg-white shadow-lg rounded-lg flex overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="w-1/3">
        <img
          src={image}
          alt="Card"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="info" className="w-2/3 p-5 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl text-gray-800 mb-3">{title}</div>
          <div className="text-gray-600 mb-4">{description}</div>
        </div>
        <div className="mb-4">
          <p><strong>Language:</strong> English</p>
          <p><strong>Validity Period:</strong> Lifetime</p>
        </div>
        <button
          onClick={() => navigator('/Dashboard/' + courseId)}
          className="mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
