import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageStatus, setMessageStatus] = useState(''); // To show a status message after submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Map form data to match EmailJS
    const formData = {
      from_name: e.target.name.value, 
      reply_to: e.target.email.value,
      message: e.target.message.value, 
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID
        formData,                                  // Form data to be sent
        process.env.REACT_APP_EMAILJS_USER_ID      // User ID (Public Key)
      )
      .then((response) => {
        console.log('Message sent successfully!', response.status, response.text);
        setMessageStatus('Your message has been sent successfully!'); // Success message
      })
      .catch((error) => {
        console.error('Failed to send message.', error);
        setMessageStatus('Failed to send your message. Please try again.'); // Error message
      });
  };

return (
  <section id="contact" className="py-10 bg-gray-100 dark:bg-gray-900 text-center">
    <h2 className="text-3xl font-bold mb-4 dark:text-white">Contact</h2>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Send Message
      </button>
    </form>
    {messageStatus && <p className="mt-4 text-green-500">{messageStatus}</p>}
  </section>
);
};

export default Contact;