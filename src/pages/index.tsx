import Head from "next/head";

// Components
import About from "components/About";
import Header from "components/Header";
import Hero from "components/Hero";
import Projects from "components/Projects";
import Skills from "components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0">
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
        <Projects />
      </section>

      <section className="snap-center" id="skills">
        <Skills />
      </section>
      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
