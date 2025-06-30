import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log('Success:', result.text);
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
      }, (error) => {
          console.log('Error:', error.text);
      });

    e.target.reset();
  };

  return (
    <div className="bg-gradient-to-r from-[#005C97] to-[#363795] py-20" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information Card */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-100">Email</h4>
                  <a href="mailto:vishnuvsh44@gmail.com" className="text-gray-100 hover:text-blue-600 transition-colors">
                    vishnuvsh44@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-100">Phone</h4>
                  <p className="text-gray-100">+91 6282195381</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-100">Location</h4>
                  <p className="text-gray-100">Vadakara, Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-medium text-gray-100 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="http://www.linkedin.com/in/vishnu-v-b5256b341" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors">
                  <FaLinkedin className="text-blue-600 text-xl" />
                </a>
                <a href="https://github.com/Vishnuvsh" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <FaGithub className="text-gray-800 text-xl"/>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Send Me a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-100 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-100 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-100 rounded"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-100">
                    I consent to having my data processed for this inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
                >
                  <FaPaperPlane className="mr-2" />
                  {isSubmitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;