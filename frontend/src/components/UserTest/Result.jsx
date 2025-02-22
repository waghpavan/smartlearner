import React from 'react';

const Result = ({ score, totalQuestions, wrongAnswers, restartQuiz }) => {
  return (
    
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Your Score</h2>
      <p className="text-3xl font-bold mb-6">
        {score} / {totalQuestions} = {parseInt((score / totalQuestions) * 100)} %
      </p>
      
      {wrongAnswers.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Incorrect Answers:</h3>
          <ul className="list-disc list-inside">
            {wrongAnswers.map((index) => (
              <li key={index}>Question {index + 1}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={restartQuiz}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
      >
        Create Course
      </button>
    </div>
  );
};

export default Result;
