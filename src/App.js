import React, { useState } from 'react';
import axios from 'axios';
import ChoiceSelector from './ChoiceSelector';
import LevelSelector from './LevelSelector';
import SubjectSelector from './SubjectSelector';
import TopicSelector from './TopicSelector';
import QuestionBuilder from './QuestionBuilder';
import Login from './Login';

function App() {
    const [token, setToken] = useState('');
    const [selectedChoice, setSelectedChoice] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleLogin = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            setToken(response.data.access_token);
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid credentials');
        }
    };

    if (!token) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div>
            <h1>AI-Based Question Builder</h1>
            <SubjectSelector subjects={['Math', 'Science']} onSelect={setSelectedSubject} />
            <TopicSelector topics={['Algebra', 'Physics']} onSelect={setSelectedTopic} />
            <LevelSelector levels={['Easy', 'Medium', 'Hard']} onSelect={setSelectedLevel} />
            <ChoiceSelector choices={['Multiple Choice', 'Short Answer']} onSelect={setSelectedChoice} />
            <QuestionBuilder 
                choice={selectedChoice} 
                level={selectedLevel} 
                subject={selectedSubject} 
                topic={selectedTopic} 
                token={token} 
            />
        </div>
    );
}

export default App;
