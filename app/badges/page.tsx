"use client";

import React from "react";
import { useRouter } from "next/navigation";

const badgesData = [
  {
    id: 1,
    title: "Hacktoberfest 2025",
    desc: "Super Contributor at Hacktoberfest 2025 – contributed to multiple open-source projects, fixing bugs and improving features. Received a t-shirt and had a tree planted in my name.",
    img: "/holopin.png",
  },
  {
    id: 2,
    title: "Social Winter of Code 2026",
    desc: "Selected contributor at Social Winter of Code 2026, collaborating on impactful projects and building real-world solutions.",
    img: "/swoc.png",
  },
  {
    id: 3,
    title: "Winter of Code Social Program 2025",
    desc: "Contributor at Winter of Code Social Program 2025 – worked on open-source projects with mentorship and peer collaboration.",
    img: "/wocs.png",
  },
  {
    id: 4,
    title: "DigitalOcean Super Contributor Recognition",
    desc: "I was recognized by DigitalOcean as a Super Contributor for Hacktoberfest 2025. They sent me a badge, a t-shirt, and congratulated me personally. This milestone reflects my dedication to open source and continuous learning. Proud moment as my contributions were acknowledged globally!",
    img: "/tshirt.png",
  },
  {
    id: 5,
    title: "Tree Planted in My Name 🌱",
    desc: "A tree is being planted in my name for becoming a super-contributor — absolutely loved the tree plantation concept. And grew as a developer who now truly understands the value of giving back to the community. Open source isn’t just about code — it’s about impact, community, and growth.",
    img: "/tree.png",
  },
];

const BadgeCardTop = ({ badge }: { badge: typeof badgesData[0] }) => (
  <div className="bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden shadow-lg p-6 md:p-10 flex flex-col items-center gap-6 md:gap-12 min-h-[32rem] hover:border-purple transition-all">
    <div className="w-full">
      <img
        src={badge.img}
        alt={badge.title}
        className="w-full h-80 md:h-96 object-contain rounded-lg shadow-md"
      />
    </div>
    <div className="mt-6 text-center">
      <h2 className="text-2xl font-bold text-white">{badge.title}</h2>
      <p className="text-[#BEC1DD] text-base md:text-lg leading-relaxed mt-2">
        {badge.desc}
      </p>
    </div>
  </div>
);

const BadgeCardSide = ({
  badge,
  reverse,
}: {
  badge: typeof badgesData[0];
  reverse?: boolean;
}) => (
  <div
    className={`bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden shadow-lg p-6 md:p-10 flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } items-center gap-6 md:gap-12 min-h-[24rem] hover:border-purple transition-all`}
  >
    <div className="flex-shrink-0 w-full md:w-1/3">
      <img
        src={badge.img}
        alt={badge.title}
        className="w-full h-80 md:h-96 object-contain rounded-lg shadow-md"
      />
    </div>
    <div className="flex-1 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-white">{badge.title}</h2>
      <p className="text-[#BEC1DD] text-base md:text-lg leading-relaxed">{badge.desc}</p>
    </div>
  </div>
);

const BadgesPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0B0E1A] py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Back Button */}
        <button
          onClick={() => router.push("/#activity")}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white font-semibold rounded-xl hover:scale-105 transition-transform"
        >
          ← Back to Portfolio
        </button>

        {/* First card: image top */}
        <BadgeCardTop badge={badgesData[0]} />

        {/* Other cards: side by side */}
        <BadgeCardSide badge={badgesData[1]} />
        <BadgeCardSide badge={badgesData[2]} reverse />
        <BadgeCardSide badge={badgesData[3]} />
        <BadgeCardSide badge={badgesData[4]} reverse />

        {/* LinkedIn / GitHub Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/anujsingal", "_blank")
            }
            className="px-8 py-4 bg-gradient-to-r from-[#091782] to-[#0C0E23] text-white font-semibold rounded-xl hover:scale-105 hover:bg-purple-700 transition-all"
          >
            LinkedIn Profile
          </button>

          <button
            onClick={() =>
              window.open("https://github.com/anuj-singal", "_blank")
            }
            className="px-8 py-4 bg-gradient-to-r from-[#19268d] to-[#0C0E23] text-white font-semibold rounded-xl hover:scale-105 hover:bg-purple-700 transition-all"
          >
            GitHub Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;