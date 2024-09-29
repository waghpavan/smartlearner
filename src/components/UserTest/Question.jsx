import React from 'react';

const Question = ({ question, index, handleAnswerSelect, selectedAnswer }) => {
  const handleOptionChange = (e) => {
    handleAnswerSelect(index, e.target.value);
  };

  return (
    <div className="mb-6 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-3">
        {index + 1}. {question.question}
      </h2>
      <ul>
        {question.options.map((option, i) => (
          <li key={i} className="mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={selectedAnswer === option}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
