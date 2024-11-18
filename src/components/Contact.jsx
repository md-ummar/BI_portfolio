import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_2c6l96j"; // Replace with your EmailJS service ID
    const templateId = "template_ws7jj6c"; // Replace with your EmailJS template ID
    const publicKey = "tNzVekd8ps7zn895j"; // Replace with your EmailJS public key

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Md Ummar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Failed to send the message. Please try again later.");
      });
  };

  return (
    <div id="contact" className="max-w-md mx-auto my-10">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.div>
      <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-900 p-10 shadow-md rounded-2xl"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-400"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-400"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-400"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-block w-full px-4 py-2 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700 focus:outline-none"
          >
            Send Mail
          </button>
        </div>
        {status && (
          <p className="mt-4 text-center text-sm text-teal-400">{status}</p>
        )}
      </motion.form>
    </div>
  );
}

export default ContactForm;
