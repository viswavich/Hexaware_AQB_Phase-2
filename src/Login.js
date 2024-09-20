import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            setToken(response.data.access_token);
        } catch (error) {
            console.error('Login failed', error);
            alert('Invalid credentials');
        }
    };

    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </Container>
    );
};

export default Login;
