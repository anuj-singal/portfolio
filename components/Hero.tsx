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
  }, []);

  return (
    <div className="pb-20 pt-36 relative">
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
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between relative my-20 z-10 max-w-7xl mx-auto px-4">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Anuj, a Next.js Developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* RIGHT SIDE → SPLINE MODEL */}
        <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[800px]">
          <spline-viewer url="https://prod.spline.design/19H4fIcp4dPX2XfY/scene.splinecode"></spline-viewer>
        </div>
      </div>
    </div>
  );
};

export default Hero;