import React, { useState } from 'react';
import background from '../assets/background.jpg';
import logo from '../assets/logo.png';

interface SignUpPage2Props {
  // Add any props you might need
}

const SignUpPage2: React.FC<SignUpPage2Props> = () => {
  const [userType, setUserType] = useState<'recruiter' | 'company'>('recruiter');


  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  // State to manage user input
  const [firstName, setFirstName] = useState('');
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

    // State for the checkbox
    const [agreed, setAgreed] = useState(false);

    // Array of cities in Morocco
    const moroccanCities = [
      'Casablanca',
      'Rabat',
      'Marrakech',
      'Fes',
      'Tangier',
      "Agadir",
    ];
  // Event handler for form submission
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic for authenticating the user with the provided data
    console.log(
      'Signing in with:',
      userType === 'recruiter'
        ? { firstName, companyName, email, cinNumber, age, location, phoneNumber, gender, typeOfWork, googleEmail, password, confirmPassword, username, agreed }
        : { companyName, companyEmail, companyLocation, password, confirmPassword, agreed }
    );    // You can add authentication logic here (e.g., API calls, Firebase, etc.)


  };

  return (
    <div className="sign-in-page min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute top-0 right-0 p-7">
        <img src={logo} alt="Logo" className="w-28 h-19" /> 
      </div>
      <div className="bg-orange-500 rounded-lg shadow-lg p-8 m-4">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
 {/* User Type Selection */}
 <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">User Type:</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="recruiter"
            checked={userType === 'recruiter'}
            onChange={() => setUserType('recruiter')}
            className="mr-2"
          />
          <label htmlFor="recruiter" className="text-gray-700 mr-4">Normal Recruiter</label>

          <input
            type="checkbox"
            id="company"
            checked={userType === 'company'}
            onChange={() => setUserType('company')}
            className="mr-2"
          />
          <label htmlFor="company" className="text-gray-700">Company</label>
        </div>
      </div>



        {/* Sign In Form */}
        <form onSubmit={handleSignUp}>
            {/* Display recruiter fields if userType is 'recruiter' */}
            {userType === 'recruiter' && (
          <div>
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
                <label htmlFor="companyName" className="block text-gray-700">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
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
          </div>
        )}
          
          {/* Display company fields if userType is 'company' */}
        {userType === 'company' && (
          <div>
           {/* Personal Information Section */}
          <div className="mb-6">
            <label htmlFor="CompnayName" className="block text-gray-700 font-semibold mb-2">
              Personal Information
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Compnay name */}
              <div>
                <label htmlFor="companyName" className="block text-gray-700">
                  Company Name:
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
            </div>
          </div>
      
          </div>
        )}

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
            </div>
          </div>

          {/* Location and Section */}
          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
              Location
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
                  {moroccanCities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
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
          {/* Checkbox Section */}
          <div className="mb-4">
            <input
              type="checkbox"
              id="agreement"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mr-2"
            />
            <label htmlFor="agreement" className="text-gray-700">
            I acknowledge and agree that worker information is treated with utmost confidentiality by Khidmaty            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage2;
