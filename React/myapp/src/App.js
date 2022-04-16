import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import About from './components/About/About';
import Team from './components/Team/Team';
import Vision from './components/Vision/Vision';

function App() {
 


  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </div>
  );
}

export default App;
