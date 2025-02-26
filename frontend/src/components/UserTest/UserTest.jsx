import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import loader from '../assets/loader.gif';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'
import data from '../DataFiles/data.json';

const UserTest = () => {
  const navigator = useNavigate();

  let userId = sessionStorage.getItem("Id"); 

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mistake, setMistake] = useState([]);  // Array of indices for mistakes
  const [content, setContent] = useState({});


  const { test } = useParams();
  const questions = require('./' + test + '.json');

  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]); // State to store wrong answers

  const [loading, setLoading] = useState(false);


  const handleSubmit = (userScore, wrongAnswerIndexes) => {
    setScore(userScore);
    setWrongAnswers(wrongAnswerIndexes); // Save wrong answers from Quiz
    setShowResult(true);
  };

  const createCourse = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log(wrongAnswers);
    console.log(test);

    // set data :
    setName(data[test].name);
    setTitle(data[test].title);
    setDescription(data[test].description);
    setMistake(wrongAnswers);
    setContent(data[test].content);

    try {
      const response = await axios.post(`${process.env.BACKEND}/api/v2/create-course`, {
        name,
        title,
        description,
        mistake,
        content,
        userId
      });

      console.log('Course added successfully:', response.data);

      navigator('/mycourses/' + userId);
    } catch (error) {
      console.error('Error adding course:', error.response ? error.response.data : error.message);
    }
    // end loader
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6">{test.replace("Test", "").toUpperCase()} Quiz</h1>
        {showResult ? (
          <Result
            score={score}
            totalQuestions={questions.length}
            wrongAnswers={wrongAnswers} // Pass wrong answers to Result component
            restartQuiz={createCourse}
          />
        ) : (
          <Quiz questions={questions} onSubmit={handleSubmit} />
        )}
      </div>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <img src={loader} alt="Loading..." className="h-48 w-48" />
        </div>
      )}
    </div>

  );
};

export default UserTest;
