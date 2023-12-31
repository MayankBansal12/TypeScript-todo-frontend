import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token)
            navigate("/todos");
        } else {
            alert("invalid credentials");
        }
    };

    return (
        <div className="auth-page">
            <div className="container">
                <h2>Login</h2>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <span>New here? <Link to="/signup">Signup</Link></span>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;