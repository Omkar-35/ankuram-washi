import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleId, setRoleId] = useState('');
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch roles from backend
    axios.get('http://localhost:8000/roles')
      .then((response) => {
        setRoles(response.data); // assume [{ id: 1, name: 'Principal' }, { id: 2, name: 'Teacher' }]
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
      });
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users', {
        name,
        email,
        password,
        role_id: parseInt(roleId)
      });

      alert("User created successful!");
      navigate('/');
    } catch (error) {
        if (error.response && error.response.status === 401) {
            alert("Invalid credentials");
          } else if (error.response.status === 409) {
            alert("Email Already Exists.");
          }else
            alert("Login failed. Try again later.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form alert alert-info alert-dismissible" onSubmit={handleSignup}>
        <h2 className="bi bi-person-plus-fill">Create Account</h2>
        <dl>
          <dt>Name</dt>
          <dd><input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required /></dd>

          <dt>Email</dt>
          <dd><input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required /></dd>

          <dt>Password</dt>
          <dd><input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required /></dd>

          <dt>Role</dt>
          <dd>
            <select className="form-control" value={roleId} onChange={(e) => setRoleId(e.target.value)} required>
              <option value="">-- Select Role --</option>
              {roles.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
          </dd>
        </dl>
        <button className="btn btn-info w-100" type="submit">Sign Up</button>

        <p className="mt-3 text-center">
          Already have an account? <button type="button" className="btn btn-link" onClick={() => navigate('/')}>Login</button>
        </p>
      </form>
    </div>
  );
}

export default Signup;
