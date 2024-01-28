// SignInPage.tsx

import React, { useState } from 'react';

interface SignInPageProps {
  // Add any props you might need
}

const SignInPage: React.FC<SignInPageProps> = () => {
  // State to manage user input (first name, last name, and email)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Event handler for form submission
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic for authenticating the user with the provided data
    console.log('Signing in with:', firstName, lastName, email);
    // You can add authentication logic here (e.g., API calls, Firebase, etc.)
  };

  return (
    <div className="sign-in-page min-h-screen flex items-center justify-center bg-orange-500">
      <div className="bg-white p-8 rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {/* Sign In Form */}
        <form onSubmit={handleSignIn}>
          {/* First Name Input */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          {/* Last Name Input */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
