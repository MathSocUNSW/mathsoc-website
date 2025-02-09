"use client";

import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaDiscord, FaEnvelope } from 'react-icons/fa';
import Wave from "../(components)/waves-bg";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactUs: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center py-10 px-6">
      {/* Waves Background */}
      {/* First Wave */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Wave containerId="holder1" rotation={45} />
      </motion.div>
      
      {/* Section Title */}
      <div className="text-center py-16 relative z-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>

      {/* Contact Form and Stay Connected Section */}
      <div className="flex flex-col items-center space-y-8 min-h-[80vh] w-full max-w-4xl relative z-10">
        {/* Form */}
        <form className="shadow-md bg-gray-700 opacity-90 rounded px-8 pt-6 pb-8 w-full">
          {/* Name Section */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Name / Company</label>
            <input 
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              type="text"
              placeholder="Name / Company"
            />
          </div>

          {/* Email Section */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Email</label>
            <input 
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
              placeholder="Email"
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Subject</label>
            <input 
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Subject" 
            />
          </div>

          {/* Message Box */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Message</label>
            <textarea 
              className="appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" 
              id="message" 
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="flex justify-center">
            <Button variant="secondary">
              Submit
            </Button>
          </div>
        </form>

        {/* Stay Connected Section */}
        <div className="bg-gray-700 opacity-90 shadow-md rounded p-6 text-white text-center w-full">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-4">Follow us on social media to stay updated with upcoming events and opportunities!</p>
          
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="https://www.facebook.com/unswmathsoc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
            <a href="https://au.linkedin.com/company/unsw-mathematics-society" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
            <a href="https://www.instagram.com/unswmathsoc" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800"><FaInstagram /></a>
            <a href="https://www.youtube.com/UNSWMathSocStreams" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800"><FaYoutube /></a>
            <a href="https://discord.gg/9Cx2JHwY" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><FaDiscord /></a>
            <a href="mailto:hello@unswmathsoc.org" className="text-white hover:text-gray-800"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
