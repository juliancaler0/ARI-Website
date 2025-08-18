import React, { useState } from 'react';
import { Button } from './components/ui/button.tsx';
import { Input } from './components/ui/input.tsx';

const UserAcceptance: React.FC = () => {
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAccept = () => {
    if (name.trim() && isChecked) {
      setShowSuccess(true);
      setTimeout(() => {
        window.location.href = 'https://associatedrebar.com/';
      }, 2500);
    } else {
      alert('Please enter your name and check the consent box to continue.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full mx-4 transform scale-100 animate-pulse">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Success!</h3>
              <p className="text-sm text-gray-600">Your consent has been received.</p>
              <p className="text-xs text-gray-500 mt-2">Redirecting...</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Consent Required</h1>
          <p className="text-gray-600">Please read and accept the following terms</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Proof of Consent</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You must provide proof of consent to receive messaging collected from the consumer, 
            which can be a link to a website where the consumer gave consent, a hosted page file 
            that demonstrates a screenshot, or a link to a document that tells the story of the opt-in.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Multiple URLs are allowed. Any attestations must be reachable and accessible to the public.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-sm text-blue-800">
            <strong>Important:</strong> By clicking "I Accept" below, you acknowledge that you have read, 
            understood, and agree to provide proper proof of consent for all messaging activities.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <label className="flex items-start space-x-3 cursor-pointer">
            <input 
              type="checkbox" 
              id="consent-checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700 text-sm">
              I understand and agree to provide proof of consent for messaging collected from consumers. 
              I acknowledge that all attestations must be publicly accessible.
            </span>
          </label>
        </div>

        <div className="mt-8 flex justify-center">
          <Button 
            onClick={handleAccept}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!name.trim() || !isChecked}
          >
            I Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserAcceptance;