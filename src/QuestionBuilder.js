import React, { useState } from 'react';
import axios from 'axios';

const QuestionBuilder = () => {
    const [inputText, setInputText] = useState('');
    const [questions, setQuestions] = useState([]);

    const generateQuestions = async () => {
        try {
            const response = await axios.post('http://localhost:5000/generate', { text: inputText });
            setQuestions(response.data);
        } catch (error) {
            console.error('Error generating questions:', error);
        }
    };

    return (
        <div>
            <h3>Question Builder</h3>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text for question generation"
            />
            <button onClick={generateQuestions}>Generate Questions</button>
            <div>
                {questions.map((q, index) => (
                    <p key={index}>{q.question}</p>
                ))}
            </div>
        </div>
    );
};

export default QuestionBuilder;
