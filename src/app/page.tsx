"use client"

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import { FloatingNav } from "@/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero></Hero>
        <Grid></Grid>
        <RecentProjects></RecentProjects>
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
