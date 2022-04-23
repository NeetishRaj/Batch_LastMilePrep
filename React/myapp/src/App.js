import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home/Home';
import CreateShapes from './components/CreateShapes/CreateShapes';

function App() {
 


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home/:tabType" element={<Home />} />
        <Route path="/createshapes" element={<CreateShapes />} />
      </Routes>
    </div>
  );
}

export default App;
