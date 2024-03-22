import React from 'react';
import background from '../assets/background.jpg';



const SignInPage: React.FC = () => {
  return ( 
  <div className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${background})` }}>
    <div className="h-screen flex items-center justify-center relative">
      {/* Orange Rectangle */}
      <div className="bg-orange-500 p-8 rounded-md shadow-md relative z-10 max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Sign In</h2>

        <form className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-md"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md"
              placeholder="Your Password"
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-700 text-sm font-semibold">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignInPage;