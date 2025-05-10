import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaComment } from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const mockResponses = {
    'How do I sell my license?': 'To sell your license, upload the license details in the "Upload License" section, receive a valuation, and get paid once approved!',
    'What types of licenses do you accept?': 'We accept licenses from major software providers like Microsoft, Adobe, Autodesk, and more. Contact us for specifics!',
    'How long does payment take?': 'Payments are processed within 24 hours after license verification.',
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const response = mockResponses[input] || 'Sorry, I don’t have an answer for that. Please contact support!';
    setMessages([...messages, { user: input, bot: response }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-20">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.1 }}
      >
        <FaComment size={24} />
      </motion.button>
      {isOpen && (
        <motion.div
          className="bg-white dark:bg-gray-800 w-80 h-96 rounded-lg shadow-xl mt-2 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">SoftSell Support</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index}>
                <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-2">
                  <strong>You:</strong> {msg.user}
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mb-2">
                  <strong>Bot:</strong> {msg.bot}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t dark:border-gray-700">
            <select
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 rounded-lg text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 mb-2"
            >
              <option value="">Select a question</option>
              {Object.keys(mockResponses).map((question, index) => (
                <option key={index} value={question}>
                  {question}
                </option>
              ))}
            </select>
            <button
              onClick={handleSend}
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatWidget;