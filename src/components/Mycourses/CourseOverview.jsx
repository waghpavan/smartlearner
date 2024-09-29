import React from 'react';
import { FaRocket, FaCheckCircle, FaBook, FaCode } from 'react-icons/fa';

const CourseOverview = ({description}) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
        {description}
    </div>
  );
};

export default CourseOverview;
