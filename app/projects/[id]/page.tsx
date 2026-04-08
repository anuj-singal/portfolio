"use client";

import Link from "next/link";
import { projects } from "@/data/project";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-[#0B0E1A] py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* 🔙 BACK */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-[#BEC1DD] hover:text-white transition mb-8"
        >
          <FaArrowLeft className="mr-2 text-xs" />
          Back to portfolio
        </Link>

        {/* 🧠 TITLE + STATUS */}
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {project.title}
          </h1>

          <span className="text-xs px-3 py-1 rounded-md border text-green-400 border-green-400 bg-black/40 backdrop-blur-sm whitespace-nowrap">
            ● {project.status}
          </span>
        </div>

        {/* 🔗 BUTTONS */}
        <div className="flex gap-4 mt-6 flex-wrap">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple text-white text-sm md:text-base hover:opacity-90 transition"
            >
              <FaExternalLinkAlt size={14} />
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm md:text-base hover:bg-white/10 transition"
            >
              <FaGithub size={16} />
              View Code
            </a>
          )}
        </div>

        {/* 🖼 IMAGE (FIXED) */}
<div className="relative w-full mt-10 rounded-2xl overflow-hidden border border-white/10 bg-[#0F172A] aspect-video">

  <img
    src={project.img}
    alt={project.title}
    className="w-full h-full object-cover"
  />

</div>

        {/* 📄 ABOUT */}
        <div className="mt-12">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
            About the project
          </h2>
          <p className="text-[#BEC1DD] text-base md:text-lg leading-relaxed">
            {project.des}
          </p>
        </div>

        {/* 📖 STORY */}
        <div className="mt-10 space-y-6">
          {["problem", "solution", "impact"].map((key) => (
            <div
              key={key}
              className="p-6 md:p-7 rounded-xl bg-[#13162D] border border-white/10 hover:border-purple/40 transition"
            >
              <h3 className="text-base font-semibold text-purple mb-3 capitalize">
                {key}
              </h3>
              <p className="text-[#BEC1DD] text-[15px] md:text-base leading-relaxed">
                {project.story[key as "problem" | "solution" | "impact"]}
              </p>
            </div>
          ))}
        </div>

        {/* 🧰 TECH */}
        <div className="mt-10">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs md:text-sm rounded-full bg-[#13162D] border border-white/10 text-[#BEC1DD]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ✨ FEATURES */}
        <div className="mt-10">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
            Features
          </h2>

          <ul className="space-y-3 text-[15px] md:text-base text-[#BEC1DD]">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-purple">•</span>
                {f}
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>
  );
};

export default ProjectPage;