import React from 'react';

const SmsTerms: React.FC = () => {
  return (
    <div className="prose max-w-none text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SMS Terms and Conditions</h1>
      
      <p className="mb-4 text-sm text-gray-600">
        <strong>Effective Date:</strong> January 2, 2025<br />
        <strong>Program Name:</strong> Associated Rebar Dispatch Alerts
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Program Description</h2>
        <p className="mb-4">
          Associated Rebar Dispatch Alerts is an SMS messaging program designed exclusively for 
          internal employee communications. This program is used to send job dispatch notifications, 
          schedule updates, and essential worksite information to Associated Rebar employees who 
          have opted in to receive these communications.
        </p>
        <p className="mb-4">
          <strong>This is not a marketing program.</strong> Messages are strictly limited to 
          employment-related communications necessary for job performance and workplace safety.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Message Content</h2>
        <p className="mb-4">Messages you may receive include but are not limited to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Job dispatch details (job name, date, time, location)</li>
          <li>Foreman and team member assignments</li>
          <li>Schedule changes or updates</li>
          <li>Worksite-specific information (parking, safety notices, weather alerts)</li>
          <li>Map links or location pins for job sites</li>
          <li>Time-sensitive operational updates</li>
        </ul>
        <p className="mb-4">
          Messages may contain embedded links to maps or other job-related resources. Messages may 
          include phone numbers for contact purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Consent and Opt-In</h2>
        <p className="mb-4">
          By providing your mobile phone number and checking the consent box, you expressly consent 
          to receive SMS text messages from Associated Rebar Inc. at the mobile number provided.
        </p>
        <p className="mb-4">
          Consent is obtained through one of the following methods:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Online opt-in form at https://associatedrebar.com/useracceptance</li>
          <li>Written consent during employee onboarding process</li>
          <li>HR-managed enrollment with documented written consent</li>
        </ul>
        <p className="mb-4">
          You understand that consent is not a condition of employment and you may opt-out at any time 
          without affecting your employment status.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Message Frequency</h2>
        <p className="mb-4">
          Message frequency varies based on job schedules and operational needs. You may receive:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Daily dispatch notifications when assigned to jobs</li>
          <li>Occasional schedule updates as needed</li>
          <li>Time-sensitive notifications for changes or emergencies</li>
        </ul>
        <p className="mb-4">
          Typical employees receive 1-5 messages per week, though frequency may be higher during 
          busy periods or lower during slow periods.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cost and Charges</h2>
        <p className="mb-4">
          <strong>Message and data rates may apply.</strong> Associated Rebar does not charge for 
          this service, but your mobile carrier's standard messaging rates will apply. Check with 
          your wireless carrier for details on your messaging plan and any applicable charges.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Opt-Out Instructions</h2>
        <p className="mb-4">
          You may opt-out of receiving SMS messages at any time using any of the following methods:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Text STOP:</strong> Reply STOP to any message to immediately unsubscribe</li>
          <li><strong>Email:</strong> Send request to dispatch@associatedrebar.com</li>
          <li><strong>Phone:</strong> Call (831) 262-7948</li>
          <li><strong>In Person:</strong> Contact your HR representative or supervisor</li>
        </ul>
        <p className="mb-4">
          Upon opting out, you will receive a final confirmation message confirming your removal 
          from the program. No further messages will be sent unless you opt-in again.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Help and Support</h2>
        <p className="mb-4">
          For help with the SMS program or if you're experiencing issues:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Text HELP:</strong> Reply HELP to any message for assistance</li>
          <li><strong>Email:</strong> dispatch@associatedrebar.com</li>
          <li><strong>Phone:</strong> (831) 262-7948</li>
          <li><strong>Office Hours:</strong> Monday-Friday, 7:00 AM - 5:00 PM PST</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Privacy and Data Use</h2>
        <p className="mb-4">
          Your privacy is important to us. We collect and use your information solely for the 
          purpose of providing job dispatch and worksite communications. We do not:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Sell or rent your phone number to third parties</li>
          <li>Share your information for marketing purposes</li>
          <li>Use your information for any purpose other than employment communications</li>
        </ul>
        <p className="mb-4">
          Your phone number and related data are shared only with our SMS service provider (Twilio) 
          for the sole purpose of message delivery. For complete details, please review our 
          Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Supported Carriers</h2>
        <p className="mb-4">
          Compatible with all major U.S. wireless carriers including but not limited to:
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <ul className="list-disc pl-6">
            <li>AT&T</li>
            <li>Verizon Wireless</li>
            <li>T-Mobile</li>
            <li>Sprint</li>
            <li>U.S. Cellular</li>
          </ul>
          <ul className="list-disc pl-6">
            <li>Metro PCS</li>
            <li>Cricket Wireless</li>
            <li>Boost Mobile</li>
            <li>Virgin Mobile</li>
            <li>And others</li>
          </ul>
        </div>
        <p className="mb-4">
          T-Mobile is not liable for delayed or undelivered messages. Carriers are not responsible 
          for delayed or undelivered messages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Technical Requirements</h2>
        <p className="mb-4">
          To receive SMS messages, you must have:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>A mobile phone capable of receiving SMS text messages</li>
          <li>An active mobile phone service plan with SMS capabilities</li>
          <li>A U.S. mobile phone number</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Updating Your Information</h2>
        <p className="mb-4">
          To update your phone number or other contact information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact HR to update your employee records</li>
          <li>Email dispatch@associatedrebar.com with your update request</li>
          <li>Re-enroll with your new number at https://associatedrebar.com/useracceptance</li>
        </ul>
        <p className="mb-4">
          Please ensure your phone number is kept current to avoid missing important job dispatches.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Disclaimer and Limitations</h2>
        <p className="mb-4">
          Associated Rebar Inc. and its SMS service providers will not be liable for:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Delayed or undelivered messages</li>
          <li>Messages blocked by carriers or spam filters</li>
          <li>Network outages or technical difficulties</li>
          <li>Incorrect phone numbers provided by users</li>
          <li>Changes in carrier services or policies</li>
        </ul>
        <p className="mb-4">
          SMS messages should not be relied upon as the sole method of receiving critical 
          employment information. Employees are responsible for staying informed through 
          alternative channels if SMS messages are not received.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Terms Modifications</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Material changes will be 
          communicated through SMS notification or other appropriate channels. Continued 
          participation in the program after changes constitutes acceptance of the modified terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Age Restrictions</h2>
        <p className="mb-4">
          This SMS program is available only to individuals 18 years of age or older who are 
          current employees of Associated Rebar Inc. By opting in, you confirm that you meet 
          these requirements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">15. Contact Information</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="mb-2"><strong>Associated Rebar Inc.</strong></p>
          <p className="mb-1">SMS Program Administrator</p>
          <p className="mb-1">Email: dispatch@associatedrebar.com</p>
          <p className="mb-1">Phone: (831) 262-7948</p>
          <p className="mb-1">Address: 2570 Vista Verde Dr, Aptos, CA 95003</p>
          <p>Website: https://associatedrebar.com</p>
        </div>
      </section>

      <section className="mb-8 border-t pt-6">
        <p className="text-sm text-gray-600 italic">
          By opting in to Associated Rebar Dispatch Alerts, you acknowledge that you have read, 
          understood, and agree to these SMS Terms and Conditions. These terms are supplemental 
          to and do not replace any employment agreements or company policies.
        </p>
      </section>
    </div>
  );
};

export default SmsTerms;