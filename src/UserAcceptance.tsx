import React, { useState } from 'react';
import { Button } from './components/ui/button.tsx';
import { Input } from './components/ui/input.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import SmsTerms from './components/SmsTerms.tsx';

const UserAcceptance: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSmsTerms, setShowSmsTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleAccept = () => {
    if (name.trim() && phoneNumber.trim() && isChecked) {
      const consentData = {
        name: name.trim(),
        phoneNumber: phoneNumber.trim(),
        timestamp: new Date().toISOString(),
        consentGiven: true
      };
      
      // Store consent data (you'll need to implement actual storage/API call)
      console.log('Consent recorded:', consentData);
      localStorage.setItem('smsConsent', JSON.stringify(consentData));
      
      setShowSuccess(true);
      setTimeout(() => {
        window.location.href = 'https://associatedrebar.com/';
      }, 2500);
    } else {
      alert('Please fill in all required fields and check the consent box to continue.');
    }
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
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
      
      <div className="max-w-4xl mx-auto">
        {/* Main Opt-in/CTA Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">SMS Dispatch Alerts Enrollment</h1>
            <p className="text-gray-600">Opt-in to receive job dispatch notifications</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Program Information</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Program:</strong> Associated Rebar Dispatch Alerts</p>
              <p><strong>Purpose:</strong> Send job dispatch details, schedule updates, and worksite communications to employees.</p>
              <p><strong>Message Frequency:</strong> Varies by schedule.</p>
              <p><strong>Cost:</strong> Msg & data rates may apply.</p>
              <p><strong>Opt-Out:</strong> Reply STOP to cancel at any time.</p>
              <p><strong>Help:</strong> Reply HELP or contact dispatch@associatedrebar.com / (831) 262-7948.</p>
              <p>
                <strong>Privacy & Terms:</strong> See our{' '}
                <button 
                  onClick={() => setShowPrivacy(!showPrivacy)}
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </button>{' '}
                and{' '}
                <button 
                  onClick={() => setShowSmsTerms(!showSmsTerms)}
                  className="text-blue-600 hover:underline"
                >
                  SMS Terms
                </button>
                .
              </p>
            </div>
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

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <Input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="(XXX) XXX-XXXX"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={14}
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
                I agree to receive text messages for job dispatches and worksite communications from 
                Associated Rebar at the number I provide. I have read and agree to the SMS Terms and 
                Privacy Policy.
              </span>
            </label>
          </div>

          <div className="mt-8 flex justify-center">
            <Button 
              onClick={handleAccept}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!name.trim() || !phoneNumber.trim() || !isChecked}
            >
              I Accept
            </Button>
          </div>
        </div>

        {/* SMS Terms Section */}
        {showSmsTerms && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6 sticky top-0 bg-white pb-4 border-b">
              <h2 className="text-2xl font-bold text-gray-900">SMS Terms and Conditions</h2>
              <button 
                onClick={() => setShowSmsTerms(false)}
                className="text-gray-500 hover:text-gray-700 ml-4"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <SmsTerms />
          </div>
        )}

        {/* Privacy Policy Section */}
        {showPrivacy && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6 sticky top-0 bg-white pb-4 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
              <button 
                onClick={() => setShowPrivacy(false)}
                className="text-gray-500 hover:text-gray-700 ml-4"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <PrivacyPolicy />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAcceptance;