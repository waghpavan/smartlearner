import React,{useState} from 'react';
import card1 from '../assets/card1.jpg'
import '../global.css'
import CourseOverview from './CourseOverview';


const FullViewCard = ({title, description, content}) => {
    const [activeTab, setActiveTab] = useState('description');
  return (
    <div className='h-screen bg-gray-100 overflow-y-scroll scrollbar-hide'>

    <div className="m-10 mx-auto bg-gray-50 flex w-[70%] border rounded-lg shadow-lg overflow-hidden font-sans ">
      <div className="m-4">
        <img 
          src={card1} 
          alt="MERN Fullstack Web" 
          className="w-full object-cover" 
          />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
        {title}
        </h2>
        <p className="text-gray-600 mb-4">
        </p>

        <div className="mb-4">
          <p><strong>Language:</strong> English</p>
          <p><strong>Validity Period:</strong> Lifetime</p>
        </div>

        {/* Continue Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Continue
        </button>
      </div>
    </div>
    <div className="ml-44 w-[70%] border-b">
      <ul className="flex justify-center space-x-8 text-sm font-medium text-gray-500">
        <li className='w-[100%] text-center'>
          <button
            onClick={() => setActiveTab('description')}
            className={`w-[100%] pb-2 ${activeTab === 'description' ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-blue-600'}`}
          >Description
          </button>
        </li>
      </ul>
    </div>
            {
                activeTab == "description" && <CourseOverview description={description}/>
            }
    </div>
  );
};

export default FullViewCard;
