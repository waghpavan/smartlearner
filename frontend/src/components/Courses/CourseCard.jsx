import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
const CourseCard = ({name, image, title, description}) => {
  const navigator = useNavigate();
  let userId = sessionStorage.getItem("Id"); 

  const changePath = () => {
    if(!userId) {
      navigator("/Login");
    }
    else {
      navigator('/UserTest/'+name)
    }
  }

  return (
    <div onClick={changePath} className="card cursor-pointer">
      <div>
        <img src={image} alt="Card" className="my-10 h-64" />
      </div>
      <div id="info" className="p-5">
        <div className="font-semibold mb-5">{title}</div>
        <div className="my-5">{description}</div>
      </div>
      <hr className='h-3 text-black-200'/>
    </div>
  );
};

export default CourseCard;
