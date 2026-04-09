"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        
        <Hero />
        
        {/* Add id for navbar scrolling */}
        <section id="about">
          <Grid />
        </section>

        <section id="projects">
          <RecentProjects />
        </section>

        <section id="activity">
          <Experience />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;