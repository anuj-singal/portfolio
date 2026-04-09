"use client";

import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      {/* Heading */}
      <h1 className="heading text-center  ">
        My activities <span className="text-purple"> and achievements</span>
      </h1>

      {/* View Badges Button */}
      <div className="mt-10 flex justify-center">
        <Button
          duration={12000}
          borderRadius="1.75rem"
          style={{
            background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: "1.75rem",
          }}
          className="px-8 py-4 text-white text-lg font-semibold hover:scale-105 transition-transform cursor-pointer"
          onClick={() => (window.location.href = "/badges")} // open in same tab
        >
          View Badges & Contributions
        </Button>
      </div>

      {/* Experience Cards */}
      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem*0.96)",
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:border-purple transition-all"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-24 w-20 rounded-md"
              />
              <div className="lg:ms-5 mt-2 lg:mt-0">
                <h2 className="text-start text-xl md:text-2xl font-bold text-white">
                  {card.title}
                </h2>
                <p className="text-start text-[#BEC1DD] mt-2 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;