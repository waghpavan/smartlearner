import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import { useParams } from 'react-router-dom';

const UserTest = () => {
  const {test} = useParams();
  const questions = require('./'+test+'.json');
  
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]); // State to store wrong answers

  const handleSubmit = (userScore, wrongAnswerIndexes) => {
    setScore(userScore);
    setWrongAnswers(wrongAnswerIndexes); // Save wrong answers from Quiz
    setShowResult(true);
  };

  const restartQuiz = () => {
    setScore(0);
    setWrongAnswers([]);
    setShowResult(false);
  };

  console.log(wrongAnswers);
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6">{test.replace("Test","").toUpperCase()} Quiz</h1>
        {showResult ? (
          <Result
            score={score}
            totalQuestions={questions.length}
            wrongAnswers={wrongAnswers} // Pass wrong answers to Result component
            restartQuiz={restartQuiz}
          />
        ) : (
          <Quiz questions={questions} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default UserTest;
