"use client";

import { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaDiscord, FaEnvelope } from "react-icons/fa";
import Wave from "../(components)/waves-bg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section 
      className="relative flex flex-col items-center py-10 px-6"
      initial="hidden"
      animate="visible"
    >
      {/* Background Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Wave containerId="holder1" rotation={45} />
      </motion.div>

      {/* Heading Animation */}
      <motion.div 
        className="text-center py-16 relative z-10"
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center space-y-8 min-h-[80vh] w-full max-w-4xl relative z-10"
        variants={fadeInUp}
      >
        {/* Form Animation */}
        <motion.form 
          className="shadow-md bg-gray-700 opacity-90 rounded px-8 pt-6 pb-8 w-full"
          onSubmit={handleSubmit}
          variants={fadeInUp}
        >
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Name / Company</label>
            <input id="name" type="text" placeholder="Name / Company" value={formData.name} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Email</label>
            <input id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Subject</label>
            <input id="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Message</label>
            <textarea id="message" placeholder="Your message" value={formData.message} onChange={handleChange} className="appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"></textarea>
          </div>

          {success && <p className="text-green-500 text-center">{success}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="flex justify-center">
            <Button type="submit" variant="secondary" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </Button>
          </div>
        </motion.form>

        {/* Social Media Section */}
        <motion.div 
          className="bg-gray-700 opacity-90 shadow-md rounded p-6 text-white text-center w-full"
          variants={fadeInUp}
        >
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
