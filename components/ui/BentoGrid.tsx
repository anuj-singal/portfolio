"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5",
        "gap-4 md:gap-6 lg:gap-8",
        "w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const techStack = [
    "JavaScript",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Node.js",
    "React",
    "Express",
    "Java",
    "Typescript",
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: false, // ✅ important
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("anujsingal203@email.com");

    //  force replay every click
    setCopied(false);

    setTimeout(() => {
      setCopied(true);
    }, 50);

    // auto hide
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10",
        "bg-gradient-to-b from-[#0c0f2c] to-[#070a1a]",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10",

        // ✅ equal height mobile
        "h-[260px] sm:h-[280px] md:h-auto",

        "flex flex-col justify-between",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {img && (
          <img
            src={img}
            alt="grid"
            className={cn(
              "w-full h-full object-cover opacity-30",
              imgClassName
            )}
          />
        )}
      </div>

      {spareImg && (
        <img
          src={spareImg}
          alt="spare"
          className="absolute bottom-0 right-0 w-full opacity-20"
        />
      )}

      {/* Gradient animation */}
      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute inset-0 z-0" />
        </BackgroundGradientAnimation>
      )}

      {/* Content */}
      <div
        className={cn(
          "relative z-10 flex flex-col h-full p-4 sm:p-5 lg:p-8",
          titleClassName
        )}
      >
        <p className="text-xs sm:text-sm text-gray-400 mb-2">
          {description}
        </p>

        <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-white max-w-xs">
          {title}
        </h3>

        {/* 🌍 Globe */}
        {id === 2 && (
          <div className="mt-4 flex justify-center items-center h-full">
            <GridGlobe />
          </div>
        )}

        {/* 🧠 Tech Stack */}
        {id === 3 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs text-center px-2 py-2 rounded-lg 
                bg-white/5 border border-white/10 
                hover:bg-white/10 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* 📩 Contact */}
        {id === 6 && (
          <div className="mt-4 relative flex flex-col gap-4">
            
            {/* 🎉 Confetti */}
            {copied && (
              <div className="absolute right-0 bottom-0 pointer-events-none">
                <Lottie options={defaultOptions} height={120} width={120} />
              </div>
            )}

            <MagicButton
              title={copied ? "Copied!" : "Copy Email"}
              icon={<IoCopyOutline />}
              position="left"
              onClick={handleCopy}
              otherClasses="!bg-white/10 hover:!bg-white/20 active:scale-95 transition w-fit"
            />
          </div>
        )}
      </div>
    </div>
  );
};