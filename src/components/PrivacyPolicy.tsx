import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="prose max-w-none text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      
      <p className="mb-4 text-sm text-gray-600">
        <strong>Effective Date:</strong> January 2, 2025<br />
        <strong>Last Updated:</strong> January 2, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
        <p className="mb-4">
          Associated Rebar Inc. ("Associated Rebar," "we," "us," or "our") is committed to protecting 
          the privacy and security of your personal information. This Privacy Policy describes how we 
          collect, use, disclose, and safeguard your information when you use our SMS dispatch alert 
          service and other communication services.
        </p>
        <p className="mb-4">
          By providing your consent to receive SMS messages from Associated Rebar, you agree to the 
          data practices described in this Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
        
        <h3 className="text-xl font-semibold text-gray-700 mb-3">2.1 Information You Provide</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Full name</li>
          <li>Mobile phone number</li>
          <li>Employee identification number</li>
          <li>Job role and team assignment</li>
          <li>Consent records including timestamp and IP address</li>
          <li>Communication preferences</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">2.2 Information Collected Automatically</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Message delivery reports and read receipts</li>
          <li>Opt-in and opt-out records</li>
          <li>Device information (when accessing our web portal)</li>
          <li>Usage data and analytics</li>
          <li>Response data to SMS messages</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Job Dispatch Communications:</strong> To send job assignments, including date, time, 
              location, foreman information, and team member details</li>
          <li><strong>Schedule Updates:</strong> To notify you of changes to work schedules, start times, 
              or job locations</li>
          <li><strong>Worksite Notifications:</strong> To communicate important site-specific information 
              such as safety notices, weather alerts, and parking instructions</li>
          <li><strong>Employment Communications:</strong> To send essential employment-related information</li>
          <li><strong>Compliance:</strong> To comply with legal obligations and industry regulations</li>
          <li><strong>Service Improvement:</strong> To analyze and improve our communication services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. SMS Messaging Terms</h2>
        
        <h3 className="text-xl font-semibold text-gray-700 mb-3">4.1 Service Description</h3>
        <p className="mb-4">
          Associated Rebar Dispatch Alerts is an SMS service for internal employee communications. 
          Messages include job dispatch details, schedule updates, and worksite information. This is 
          not a marketing service.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">4.2 Message Frequency and Charges</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Message frequency varies based on job schedules and operational needs</li>
          <li>Standard message and data rates may apply</li>
          <li>Associated Rebar does not charge for this service</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">4.3 Opt-In and Consent</h3>
        <p className="mb-4">
          You may opt-in to our SMS service through:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Our online consent form at https://associatedrebar.com/useracceptance</li>
          <li>Written consent during employee onboarding</li>
          <li>HR-managed roster enrollment with documented consent</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">4.4 Opt-Out Instructions</h3>
        <p className="mb-4">
          You may opt-out of SMS messages at any time:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Reply STOP to any message to unsubscribe</li>
          <li>Contact dispatch@associatedrebar.com</li>
          <li>Call (831) 262-7948</li>
          <li>Contact your HR representative</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">4.5 Help and Support</h3>
        <p className="mb-4">
          For assistance with our SMS service:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Reply HELP to any message</li>
          <li>Email: dispatch@associatedrebar.com</li>
          <li>Phone: (831) 262-7948</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">4.6 Supported Carriers</h3>
        <p className="mb-4">
          Our SMS service works with all major U.S. carriers including but not limited to: 
          AT&T, Verizon, T-Mobile, Sprint, U.S. Cellular, and others. Carriers are not liable 
          for delayed or undelivered messages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Information Sharing and Disclosure</h2>
        <p className="mb-4">
          We do not sell, trade, or rent your personal information to third parties. We may share 
          your information in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Service Providers:</strong> With SMS platform providers (such as Twilio) solely 
              for message delivery</li>
          <li><strong>Legal Requirements:</strong> When required by law, subpoena, or government request</li>
          <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          <li><strong>Consent:</strong> With your explicit consent</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal 
          information against unauthorized access, alteration, disclosure, or destruction. These 
          measures include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Encryption of data in transit and at rest</li>
          <li>Access controls and authentication requirements</li>
          <li>Regular security assessments and updates</li>
          <li>Employee training on data protection</li>
          <li>Secure data storage and backup procedures</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Retention</h2>
        <p className="mb-4">
          We retain your personal information only for as long as necessary to fulfill the purposes 
          for which it was collected, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Active employee records: Duration of employment plus required retention period</li>
          <li>SMS consent records: Maintained while you are opted-in and for legal compliance thereafter</li>
          <li>Message logs: Retained for 90 days for operational purposes</li>
          <li>Opt-out records: Maintained indefinitely to ensure compliance</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Your Rights and Choices</h2>
        <p className="mb-4">You have the following rights regarding your personal information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Access:</strong> Request access to your personal information</li>
          <li><strong>Correction:</strong> Request correction of inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
          <li><strong>Opt-Out:</strong> Opt-out of SMS communications at any time</li>
          <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, contact us at dispatch@associatedrebar.com or (831) 262-7948.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. California Privacy Rights</h2>
        <p className="mb-4">
          California residents have additional rights under the California Consumer Privacy Act (CCPA), 
          including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Right to know what personal information is collected</li>
          <li>Right to know whether personal information is sold or disclosed</li>
          <li>Right to say no to the sale of personal information</li>
          <li>Right to equal service and price, even if you exercise your privacy rights</li>
        </ul>
        <p className="mb-4">
          We do not sell personal information and do not discriminate against users who exercise 
          their privacy rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Children's Privacy</h2>
        <p className="mb-4">
          Our services are not directed to individuals under the age of 18. We do not knowingly 
          collect personal information from children. All employees must be of legal working age 
          to participate in our SMS dispatch alert program.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. International Data Transfers</h2>
        <p className="mb-4">
          Your information may be transferred to and processed in the United States where our 
          servers and service providers are located. By using our services, you consent to such 
          transfers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any material 
          changes by posting the new Privacy Policy on this page and updating the "Last Updated" 
          date. Your continued use of our services after changes constitutes acceptance of the 
          updated policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Contact Information</h2>
        <p className="mb-4">
          If you have any questions, concerns, or requests regarding this Privacy Policy or our 
          data practices, please contact us:
        </p>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="mb-2"><strong>Associated Rebar Inc.</strong></p>
          <p className="mb-1">Email: dispatch@associatedrebar.com</p>
          <p className="mb-1">Phone: (831) 262-7948</p>
          <p className="mb-1">Address: 2570 Vista Verde Dr, Aptos, CA 95003</p>
          <p>Website: https://associatedrebar.com</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Dispute Resolution</h2>
        <p className="mb-4">
          Any disputes arising from this Privacy Policy will be resolved through binding arbitration 
          in accordance with the rules of the American Arbitration Association. This Privacy Policy 
          is governed by the laws of the State of California.
        </p>
      </section>

      <section className="mb-8 border-t pt-6">
        <p className="text-sm text-gray-600 italic">
          This Privacy Policy was last reviewed and updated on January 2, 2025. Associated Rebar Inc. 
          reserves the right to modify this policy at any time to reflect changes in our practices 
          or applicable laws.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;