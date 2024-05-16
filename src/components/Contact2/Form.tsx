import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement the email sending action here
    console.log({ name, email, message });
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-700 rounded bg-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-700 rounded bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="What are you say ?"
            className="w-full p-2 border border-gray-700 rounded bg-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-purple hover:bg-purple-700 rounded font-semibold text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
