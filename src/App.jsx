import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaFileUpload, FaDollarSign, FaCheckCircle, FaShieldAlt, FaHeadset, FaStar } from 'react-icons/fa';
import ChatWidget from './components/ChatWidget';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (!data.name || !data.email || !data.company || !data.message) {
      alert('Please fill all required fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      alert('Please enter a valid email.');
      return;
    }
    alert('Form submitted successfully!');
    e.target.reset();
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <img src="\logo.png" alt="SoftSell Logo" className="h-10" />
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sell Your Unused Software Licenses
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get instant valuations and fast payments with SoftSell.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sell	My	Licenses
            </motion.a>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <FaFileUpload />, text: 'Upload License', desc: 'Submit your unused software licenses securely.' },
                { icon: <FaDollarSign />, text: 'Get Valuation', desc: 'Receive a fair and transparent valuation instantly.' },
                { icon: <FaCheckCircle />, text: 'Get Paid', desc: 'Get paid quickly via your preferred payment method.' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="text-4xl text-blue-600 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.text}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-200 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <FaShieldAlt />, text: 'Secure Transactions', desc: 'Your data is protected with top-tier security.' },
                { icon: <FaDollarSign />, text: 'Fair Valuations', desc: 'Get the best price for your licenses.' },
                { icon: <FaHeadset />, text: '24/7 Support', desc: 'Our team is here to help anytime.' },
                { icon: <FaCheckCircle />, text: 'Fast Payments', desc: 'Receive your payment within 24 hours.' },
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl text-blue-600 mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{reason.text}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'John Doe', role: 'IT Manager', company: 'TechCorp', text: 'SoftSell made selling our unused licenses so easy. Fast payment and great support!' },
                { name: 'Jane Smith', role: 'Procurement Lead', company: 'Innovate Ltd', text: 'The valuation was fair, and the process was seamless. Highly recommend!' },
              ].map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {review.role}, {review.company}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-lg text-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg text-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full p-3 rounded-lg text-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="licenseType" className="block text-sm font-medium">
                  License Type
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  className="w-full p-3 rounded-lg text-gray-900"
                  required
                >
                  <option value="">Select License Type</option>
                  <option value="Microsoft">Microsoft</option>
                  <option value="Adobe">Adobe</option>
                  <option value="Autodesk">Autodesk</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 rounded-lg text-gray-900"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Submit
              </button>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-800 text-white text-center">
          <p>© 2025 SoftSell. All rights reserved.</p>
        </footer>

        {/* Chat Widget */}
        <ChatWidget />
      </div>
    </div>
  );
};

export default App;