
// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

