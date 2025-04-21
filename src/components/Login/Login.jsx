import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email: username,  // match backend field if needed
        password
      });

      console.log('Login success:', response.data);
      navigate('/Home');  // navigate after login
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials");
      } else {
        alert("Login failed. Try again later.");
      }
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <form className="card p-4 shadow-lg" style={{ width: '400px' }} onSubmit={handleLogin}>
        <h2 className="text-center mb-4">Welcome To the Family</h2>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-warning w-100 mb-3" type="submit">Login</button>

        <div className="text-center">
          <span>Don't have an account? </span>
          <button
            type="button"
            className="btn btn-link p-0"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
