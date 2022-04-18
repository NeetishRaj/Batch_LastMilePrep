import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home/Home';
// import About from './components/About/About';
// import Team from './components/Team/Team';
// import Vision from './components/Vision/Vision';

function App() {
 


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home/:tabType" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
