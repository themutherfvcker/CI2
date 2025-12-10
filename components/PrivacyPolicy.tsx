import React from 'react';
import { SEO } from './SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <SEO 
        title="Privacy Policy | Competitive Intelligence"
        description="Our commitment to protecting your data and privacy."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 font-serif">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h3>
        <p>
          Competitive Intelligence ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you 
          about your privacy rights and how the law protects you.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. The Data We Collect</h3>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Identity Data:</strong> includes first name, last name, and title.</li>
          <li><strong>Contact Data:</strong> includes email address, telephone number, and company name.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and operating system and platform.</li>
          <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Data</h3>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>To respond to your inquiries submitted via our contact forms.</li>
          <li>To provide the consulting services you have requested.</li>
          <li>To manage our relationship with you.</li>
          <li>To improve our website, services, marketing and customer relationships.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Data Security</h3>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Contact Details</h3>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
        </p>
        <p className="mt-4">
          <strong>Competitive Intelligence</strong><br />
          Sydney, Australia<br />
          +61 4 2426 4928
        </p>
      </div>
    </div>
  );
};