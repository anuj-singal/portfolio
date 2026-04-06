"use client";

import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";

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

    // ✅ Fix Spline resize bug
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
    <div className="pb-20 pt-16 relative">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Background grid */}
      <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center
        dark:bg-black-100 bg-white 
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center
          dark:bg-black-100 bg-white
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between 
        relative my-20 z-10 max-w-7xl mx-auto px-4 gap-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start 
          text-center lg:text-left px-2">

          <p className="uppercase tracking-widest text-xs text-blue-400 mb-2">
            Full Stack Developer • MERN • Next.js
          </p>

          <TextGenerateEffect
            words="Building scalable, high-performance web apps with modern technologies"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          />

          <p className="mt-4 text-sm md:text-lg lg:text-xl text-gray-300 max-w-xl">
            Hi, I&apos;m <span className="text-blue-400 font-semibold">Anuj</span>.
            I craft fast, responsive, and visually engaging digital experiences.
          </p>

          <div className="mt-6">
            <a href="#about">
              <MagicButton
                title="View My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE → SPLINE MODEL (Desktop Only) */}
        <div className="hidden md:block w-full lg:w-1/2 h-[500px] lg:h-[700px] overflow-hidden relative">
  
  <div className="absolute inset-0 scale-[1.1] translate-y-10">
    <spline-viewer url="https://prod.spline.design/19H4fIcp4dPX2XfY/scene.splinecode"></spline-viewer>
  </div>

</div>

        {/* MOBILE FALLBACK */}
        <div className="block md:hidden text-center px-4">
          <p className="text-base sm:text-lg text-gray-400">
            🚀 Interactive 3D experience available on desktop
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;