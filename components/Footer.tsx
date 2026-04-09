"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-16 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-1 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-center gap-10 max-w-6xl mx-auto px-5">
        {/* Left: Social Icons + Info */}
        <div className="flex flex-col items-start gap-6 md:w-1/3">
          <h2 className="text-white text-xl font-semibold">Connect with me</h2>
          <p className="text-white-200 mb-4">
            Let’s get in touch! Follow me on GitHub, LinkedIn or send me an email.
          </p>
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-70 bg-black-200 rounded-full border border-black-300 hover:bg-purple/20 transition-all">
                <img src={info.img} alt={info.name} width={24} height={24} />
              </div>
              <span className="text-white-200 font-medium">{info.name}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-white/20 h-80"></div>

        {/* Right: Contact Form */}
        <div className="md:w-2/3">
          <h1 className="heading lg:max-w-[45vw] text-left mb-5">
            Ready to take <span className="text-purple">your</span> digital presence to the next level?
          </h1>
          <p className="text-white-200 mb-6">
            Reach out to me today and let's discuss how I can help you achieve your goals.
          </p>
          <ContactForm />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-white-200">
        Copyright © 2026 Anuj Singal
      </div>
    </footer>
  );
};

export default Footer;