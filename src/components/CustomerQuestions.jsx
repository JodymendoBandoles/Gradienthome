import React, { useState } from 'react';
import 'normalize.css';
import './Styles/CustomerQuestions.css'; 
import 'normalize.css';

function CustomerQuestions() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const addQuestion = () => {
    if (newQuestion.trim() === '') {
      return; 
    }

    setQuestions([...questions, newQuestion]);
    setNewQuestion('');
  };

  return (
    <div className="customer-questions">
      <div className="PropertyListing">
          <h2>
            <span className="darkOrrangebackground">&nbsp;Your Questions, Our Answers&nbsp;</span>
          </h2>
        </div>
      
      <input
        type="text"
        placeholder="Ask a question..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <button class="customer-questionsbtn" onClick={addQuestion}>
        Submit
      </button>

      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerQuestions;