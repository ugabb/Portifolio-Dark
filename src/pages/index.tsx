import Head from "next/head";

// Components
import About from "components/About";
import Header from "components/Header";
import Hero from "components/Hero";
import Experiencie from "components/Experience";
import Skills from "components/Skills";
import Projects from "components/Projects";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
      <Head>
        <title>uGab Portifolio 😁</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section className="snap-center" id="about">
        <About />
      </section>

      <section className="snap-center" id="experience">
        <Experiencie />
      </section>

      <section className="snap-center" id="skills">
        <Skills />
      </section>

      <section className="snap-center" id="projects">
        <Projects />
      </section>
      {/* Contact Me */}
    </div>
  );
}
