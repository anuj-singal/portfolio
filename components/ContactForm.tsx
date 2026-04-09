"use client";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(""); // Notification text
  const [toastColor, setToastColor] = useState("bg-green-800/95"); // green/red toast
  const [emailError, setEmailError] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Live email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(value !== "" && !emailRegex.test(value)); // remove red border if empty
    }

    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email invalid
    if (emailError || form.email === "") {
      setToast("Please enter a valid email!");
      setToastColor("bg-red-600/95");
      setTimeout(() => setToast(""), 3000);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          time: new Date().toLocaleString(),
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setForm({ name: "", email: "", message: "" });
      setEmailError(false); // Reset email border
      setToast("Message sent successfully!");
      setToastColor("bg-green-800/95"); // green toast
      setTimeout(() => setToast(""), 3000);
    } catch (err) {
      console.error("Failed to send email:", err);
      setToast("Failed to send message. Try again!");
      setToastColor("bg-red-600/95"); // red toast
      setTimeout(() => setToast(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Toast notification */}
      {toast && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 text-white px-4 py-3 rounded-lg shadow-lg animate-fadeInOut max-w-[90%] sm:max-w-sm md:max-w-md text-center ${toastColor}`}
        >
          {toast}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder:text-white-400 focus:outline-none focus:ring-2 focus:ring-purple"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className={`p-3 rounded-lg bg-black-200 border ${
            emailError ? "border-red-500" : "border-black-300"
          } text-white placeholder:text-white-400 focus:outline-none focus:ring-2 focus:ring-purple`}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder:text-white-400 focus:outline-none focus:ring-2 focus:ring-purple resize-none h-32"
        />

        <button type="submit">
          <MagicButton
            title={loading ? "Sending..." : "Send Message"}
            icon={<FaLocationArrow />}
            position="right"
          />
        </button>
      </form>

      {/* Animation for toast */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          90% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
        }
        .animate-fadeInOut {
          animation: fadeInOut 3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;