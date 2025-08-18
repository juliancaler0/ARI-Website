import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.tsx';
import UserAcceptance from './UserAcceptance.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/useracceptance" element={<UserAcceptance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;