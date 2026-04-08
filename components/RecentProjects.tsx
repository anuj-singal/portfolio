"use client";

import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data/project";

const RecentProjects = () => {
  return (
    <div className="py-14">
      <h1 className="heading text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* ✅ GRID FIX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 mt-12 px-4 max-w-5xl mx-auto">
        {projects.map((item) => (
          <div
            key={item.id}
            className="group relative lg:min-h-[33rem] h-[28rem] w-full max-w-md"
          >
            {/* GLOW BORDER */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple/20 via-transparent to-purple/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

            {/* CARD */}
            <div className="relative w-full h-full rounded-2xl bg-[#13162D] p-5 flex flex-col justify-between border border-white/10 transition-all duration-300 group-hover:border-purple group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple/30">

              {/* IMAGE */}
              <div className="relative w-full h-[22vh] lg:h-[28vh] mb-2 rounded-xl overflow-hidden bg-[#0F172A]">
                <Image
                  src={item.img}
                  alt="cover"
                  fill
                  className="object-cover"
                />

                {/* STATUS BADGE */}
                 {/* STATUS */}
                {item.status && (
                  <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-md border text-green-400 border-green-400 bg-black/40 backdrop-blur-sm">
                    ● Completed
                  </span>
                )}
              </div>

              {/* TITLE + ACTIONS */}
              <div className="flex items-start justify-between gap-4">
                <h1 className="font-semibold lg:text-xl md:text-lg text-base leading-snug">
                  {item.title}
                </h1>

                {/* ACTION BAR */}
                <div className="flex gap-2 bg-white/5 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-purple/10 hover:scale-110 transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-purple/10 hover:scale-110 transition-all duration-300"
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-[#BEC1DD] mt-3 line-clamp-2">
                {item.des}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between mt-6">
                
                {/* TECH STACK */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black w-8 h-8 flex justify-center items-center -ml-2 first:ml-0"
                    >
                      <Image src={icon} alt="icon" width={18} height={18} />
                    </div>
                  ))}
                </div>

                {/* CASE STUDY CTA */}
                <Link
                  href={`/projects/${item.id}`}
                  className="flex items-center text-purple text-sm group-hover:text-white transition"
                >
                  View Details
                  <FaLocationArrow className="ml-2 text-s" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;  