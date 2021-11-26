import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'

// Components
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
