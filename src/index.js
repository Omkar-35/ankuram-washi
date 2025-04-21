import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Home from './components/Home/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);