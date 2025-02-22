import React, { useState } from 'react';
import Question from './Question';

const Quiz = ({ questions, onSubmit }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState([]); // To store incorrect answers
  const [step, setStep] = useState(0);

  const handleAnswerSelect = (questionIndex, answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    let wrongAnswerIndexes = [];

    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      } else {
        wrongAnswerIndexes.push(index); // Track the index of wrong answers
      }
    });

    setWrongAnswers(wrongAnswerIndexes); // Save wrong answers

    onSubmit(score, wrongAnswerIndexes); // Pass wrong answer indexes to parent
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          index={index}
          question={question}
          handleAnswerSelect={handleAnswerSelect}
          selectedAnswer={userAnswers[index]}
        />
      ))}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
