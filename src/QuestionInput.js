import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Container } from '@mui/material';

const QuestionInput = ({ token }) => {
    const [input, setInput] = useState("");
    const [questions, setQuestions] = useState([]);

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/generate', 
              { text: input }, 
              { headers: { Authorization: `Bearer ${token}` } }
            );
            setQuestions(response.data);
        } catch (error) {
            console.error("Error generating question", error);
            alert("Failed to generate question");
        }
    };

    return (
        <Container>
            <Typography variant="h4">Automated Question Builder</Typography>
            <TextField 
                label="Enter Text"
                multiline
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" onClick={handleSubmit}>Generate Questions</Button>
            <div>
                {questions.map((q, idx) => (
                    <Typography key={idx}>{q.question}</Typography>
                ))}
            </div>
        </Container>
    );
};

export default QuestionInput;
