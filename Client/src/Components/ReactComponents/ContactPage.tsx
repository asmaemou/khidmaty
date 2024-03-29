import React, { useState } from 'react';

interface ContactFormState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission logic here, e.g., sending data to a server
    console.log(formState);
  };

  return (
    <div className="flex justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-orange-600 p-5 rounded">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
            style={{ width: '95%' }} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
            style={{ width: '95%' }} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formState.phoneNumber}
            onChange={handleInputChange}
            style={{ width: '95%' }} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            style={{ width: '95%' }} 
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter a message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            style={{ width: '95%' }} 
          />
        </div>
        <div className="flex items-center justify-between">
        <button
  className="bg-f6d186 hover:bg-orange-500 text-black border-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  type="submit"
>

            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
