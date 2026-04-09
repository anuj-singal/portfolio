"use client";

import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.12.74/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    const handleResize = () => {
      const viewer = document.querySelector("spline-viewer");
      if (viewer) {
        const parent = viewer.parentElement;
        if (parent) {
          parent.innerHTML = parent.innerHTML;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center min-h-[100svh] pt-28 md:pt-32 pb-10">
      
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-5">

          <p className="uppercase tracking-widest text-[10px] sm:text-xs text-blue-400">
            Full Stack Developer • MERN • Next.js • Building Startup-Ready Products
          </p>

          <TextGenerateEffect
            words="Building scalable, high-performance web apps with modern technologies"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight"
          />

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">
            Hi, I&apos;m <span className="text-blue-400 font-semibold">Anuj</span>. A
            full-stack developer focused on performance, scalability, and clean design. I
            turn ideas into fast, production-ready web applications.
          </p>

          {/* Buttons + Social */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5 mt-2">

            {/* Resume Button */}
            <a 
              href="/anuj_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/anujsingal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-600 rounded-lg hover:scale-110 transition-transform"
              >
                <Image src="/link.svg" alt="LinkedIn" width={22} height={22} />
              </a>

              <a
                href="https://github.com/anuj-singal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-600 rounded-lg hover:scale-110 transition-transform"
              >
                <Image src="/git.svg" alt="GitHub" width={22} height={22} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE → SPLINE (UNCHANGED) */}
        <div className="hidden md:block w-full lg:w-1/2 h-[500px] lg:h-[700px] overflow-hidden relative">
          <div className="absolute inset-0 scale-[1.1] translate-y-10">
            <spline-viewer url="https://prod.spline.design/19H4fIcp4dPX2XfY/scene.splinecode" />
          </div>
        </div>

        {/* MOBILE FALLBACK */}
        <div className="md:hidden text-center mt-6 pb-4">
          <p className="text-sm sm:text-base text-gray-400">
            🚀 Interactive 3D experience available on desktop
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;