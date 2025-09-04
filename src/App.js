import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.tsx';
import UserAcceptance from './UserAcceptance.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import TermsPage from './pages/TermsPage.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/useracceptance" element={<UserAcceptance />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;