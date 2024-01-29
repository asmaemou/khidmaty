import React, { useState } from 'react';
import background from '../assets/background.jpg';

interface SignInPageProps {
  // Add any props you might need
}

const SignInPage: React.FC<SignInPageProps> = () => {
  // State to manage user input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cinNumber, setCINNumber] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState(''); // Using a select dropdown
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState(''); // Using a select dropdown
  const [typeOfWork, setTypeOfWork] = useState('');
  const [googleEmail, setGoogleEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  // Event handler for form submission
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic for authenticating the user with the provided data
    console.log('Signing in with:', firstName, lastName, email, cinNumber, age, location, phoneNumber, gender, typeOfWork, googleEmail, password, confirmPassword, username);
    // You can add authentication logic here (e.g., API calls, Firebase, etc.)
  };

  return (
    <div className="sign-in-page min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="bg-orange-500 rounded-lg shadow-lg p-8 m-4">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {/* Sign In Form */}
        <form onSubmit={handleSignIn}>
          {/* Personal Information Section */}
          <div className="mb-6">
            <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
              Personal Information
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* First Name Input */}
              <div>
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
              <div>
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
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Contact Information
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Email Input */}
              <div>
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
              {/* Phone Number Input */}
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mb-6">
            <label htmlFor="cinNumber" className="block text-gray-700 font-semibold mb-2">
              Additional Information
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* CIN Number Input */}
              <div>
                <label htmlFor="cinNumber" className="block text-gray-700">
                  CIN Number:
                </label>
                <input
                  type="text"
                  id="cinNumber"
                  value={cinNumber}
                  onChange={(e) => setCINNumber(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              {/* Age Input */}
              <div>
                <label htmlFor="age" className="block text-gray-700">
                  Age:
                </label>
                <input
                  type="text"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
            </div>
          </div>

          {/* Location and Gender Section */}
          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
              Location and Gender
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Location Dropdown */}
              <div>
                <label htmlFor="location" className="block text-gray-700">
                  Location:
                </label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              {/* Gender Dropdown */}
              <div>
                <label htmlFor="gender" className="block text-gray-700">
                  Gender:
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Work Information Section */}
          <div className="mb-6">
            <label htmlFor="typeOfWork" className="block text-gray-700 font-semibold mb-2">
              Work Information
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Type of Work Input */}
              <div>
                <label htmlFor="typeOfWork" className="block text-gray-700">
                  Type of Work:
                </label>
                <input
                  type="text"
                  id="typeOfWork"
                  value={typeOfWork}
                  onChange={(e) => setTypeOfWork(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              {/* Google Email Input */}
              <div>
                <label htmlFor="googleEmail" className="block text-gray-700">
                  Google Email Account:
                </label>
                <input
                  type="email"
                  id="googleEmail"
                  value={googleEmail}
                  onChange={(e) => setGoogleEmail(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
            </div>
          </div>

          {/* Password Section */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
            </div>
          </div>

          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-blue-700 font-semibold mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
